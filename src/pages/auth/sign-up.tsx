import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

import { registerRestaurant } from "@/api/register-restaurant";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const signupForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type SignUpFormType = z.infer<typeof signupForm>;

export function SignUp() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormType>({
    resolver: zodResolver(signupForm),
  });

  const navigate = useNavigate();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  async function onSubmit(data: SignUpFormType) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        email: data.email,
        managerName: data.managerName,
        phone: data.phone,
      });

      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => {
            navigate(`/sign-in?email=${data.email}`);
          },
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante");
    }

    console.log(data);
    reset();
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button asChild variant={"ghost"}>
          <Link to={"/sign-in"} className="absolute right-8 top-8">
            Fazer Login
          </Link>
        </Button>
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Finalizar Cadastro"
              )}
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{" "}
              <a href="" className="underline underline-offset-4">
                termos de serviço
              </a>{" "}
              e{" "}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade.
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
