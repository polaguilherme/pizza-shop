import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getDayOrdersAmount } from "@/api/get-month-canceled-orders-amount";

export function MonthCanceledOrderAmount() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryKey: ["metrics", "month-canceled-orders-amount"],
    queryFn: getDayOrdersAmount,
  });

  if (!monthCanceledOrdersAmount) {
    return;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount?.diffFromLastMonth >= 0 ? (
          <span className="text-2xl font-bold tracking-tight">
            {monthCanceledOrdersAmount.amount}
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500 dark:text-rose-400">
                {monthCanceledOrdersAmount.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </span>
        ) : (
          <span className="text-2xl font-bold tracking-tight">
            {monthCanceledOrdersAmount.amount}
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 dark:text-emerald-400">
                {monthCanceledOrdersAmount.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </span>
        )}
      </CardContent>
    </Card>
  );
}
