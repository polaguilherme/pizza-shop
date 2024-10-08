import { zodResolver } from "@hookform/resolvers/zod";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orderFilterSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
});

type OrderFilterSchemaType = z.infer<typeof orderFilterSchema>;

export function OrderTableFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("orderId");
  const customerName = searchParams.get("customerName");
  const status = searchParams.get("status");

  const { register, handleSubmit, control, reset } =
    useForm<OrderFilterSchemaType>({
      resolver: zodResolver(orderFilterSchema),
      defaultValues: {
        orderId: orderId ?? "",
        customerName: customerName ?? "",
        status: status ?? "all",
      },
    });

  function handleFilter({
    orderId,
    customerName,
    status,
  }: OrderFilterSchemaType) {
    setSearchParams((state) => {
      if (orderId) {
        state.set("orderId", orderId);
      } else {
        state.delete("orderId");
      }

      if (customerName) {
        state.set("customerName", customerName);
      } else {
        state.delete("customerName");
      }

      if (status) {
        state.set("status", status);
      } else {
        state.delete("status");
      }

      state.set("page", "1");

      return state;
    });
  }

  function handleClearFilters() {
    reset({
      orderId: "",
      customerName: "",
      status: "all",
    });

    setSearchParams({});
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold ">Filtros:</span>
      <Input
        className="h-8 w-auto"
        placeholder="ID do pedido"
        {...register("orderId")}
      />
      <Input
        className="h-8 w-[320px]"
        placeholder="Nome do cliente"
        {...register("customerName")}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="pending">Pendente</SelectItem>
                  <SelectItem value="canceled">Cancleado</SelectItem>
                  <SelectItem value="processing">Em Preparo</SelectItem>
                  <SelectItem value="delivery">Em Entrega</SelectItem>
                  <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
              </SelectTrigger>
            </Select>
          );
        }}
      ></Controller>

      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button
        onClick={handleClearFilters}
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="h-4 w-4 mr-2" />
        Remover Filtros
      </Button>
    </form>
  );
}
