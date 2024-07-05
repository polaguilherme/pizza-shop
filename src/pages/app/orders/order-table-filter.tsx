import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function OrderTableFilter() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold ">Filtros:</span>
      <Input className="h-8 w-auto" placeholder="ID do pedido" />
      <Input className="h-8 w-[320px]" placeholder="Nome do cliente" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="peding">Pendente</SelectItem>
            <SelectItem value="canceled">Cancleado</SelectItem>
            <SelectItem value="processing">Em Preparo</SelectItem>
            <SelectItem value="delivery">Em Entrega</SelectItem>
            <SelectItem value="delivered">Entregue</SelectItem>
          </SelectContent>
        </SelectTrigger>
      </Select>
      <Button type="submit" variant="secondary" size="xs">
        <Search className="h-4 w-4 mr-2" />
        Filtrar resultados
      </Button>
      <Button type="button" variant="outline" size="xs">
        <X className="h-4 w-4 mr-2" />
        Remover Filtros
      </Button>
    </form>
  );
}
