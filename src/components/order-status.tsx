import React from "react";

export type OrderStatus =
  | "pending"
  | "canceled"
  | "processing"
  | "delivering"
  | "delivered";

interface OrderStatusProps {
  status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: "Pendente",
  canceled: "Cancelado",
  processing: "Em preparo",
  delivering: "Em entrega",
  delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === "pending" && (
        <span
          data-testid="badge-pending"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}

      {status === "canceled" && (
        <span
          data-testid="badge-canceled"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}

      {status === "processing" && (
        <span
          data-testid="badge-processing"
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}

      {status === "delivering" && (
        <span
          data-testid="badge-delivering"
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}

      {status === "delivered" && (
        <span
          data-testid="badge-delivered"
          className="h-2 w-2 rounded-full bg-green-500"
        />
      )}

      <span
        data-testid="status-text"
        className="font-medium text-muted-foreground "
      >
        {orderStatusMap[status]}
      </span>
    </div>
  );
}
