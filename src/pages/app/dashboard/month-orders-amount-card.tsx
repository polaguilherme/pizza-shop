import { Utensils } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthOrderAmount } from "@/api/get-month-order-amount";

export function MonthOrdersAmountCard() {
  const { data: monthOrderAmount } = useQuery({
    queryKey: ["metrics", "month-order-amount"],
    queryFn: getMonthOrderAmount,
  });

  if (!monthOrderAmount) {
    return;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthOrderAmount?.diffFromLastMonth >= 0 ? (
          <span className="text-2xl font-bold tracking-tight">
            {monthOrderAmount.amount}
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 dark:text-emerald-400">
                {monthOrderAmount.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </span>
        ) : (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrderAmount.amount}
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">
                  {monthOrderAmount.diffFromLastMonth}%
                </span>{" "}
                em relação ao mês passado
              </p>
            </span>
          </>
        )}
      </CardContent>
    </Card>
  );
}
