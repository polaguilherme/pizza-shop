import { LoaderCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInForm = z.object({
  email: z
    .string()
    .min(1, "Preencha este campo para continuar.")
    .email("E-mail inválido"),
});

type SignInFormType = z.infer<typeof signInForm>;

export function SignIn() {

  const [ searchParams ] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInFormType>({
    defaultValues: {
      email: searchParams.get("email") ?? ""
    }

  });


  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn
  })

  async function onSubmit(data: SignInFormType) {
 
    
    try {
      await authenticate({ email: data.email })



      toast.success("Enviamos um link de autentição para seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => {},
        },
      }); 
    } catch (error) {
      
    }

    
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button asChild variant={"ghost"}>
          <Link to={"/sign-up"} className="absolute right-8 top-8">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
              <p className="text-red-500 font-normal">
                {errors.email?.message}
              </p>
            </div>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Acessar painel"
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
