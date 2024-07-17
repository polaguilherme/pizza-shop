import { DollarSign } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getMonthReceipt } from "@/api/get-month-receipt";

export function MonthRevenueCard() {
  const { data: monthReceipt } = useQuery({
    queryFn: getMonthReceipt,
    queryKey: ["metrics", "month-revenue"],
  });

  if (!monthReceipt) {
    return;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita Total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthReceipt?.diffFromLastMonth > 0 ? (
          <span className="text-2xl font-bold tracking-tight">
            {monthReceipt.receipt.toLocaleString("pt-BR")}
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 dark:text-emerald-400">
                {monthReceipt.diffFromLastMonth}%
              </span>{" "}
              em relação ao mês passado
            </p>
          </span>
        ) : (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthReceipt.receipt / 100).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 dark:text-rose-400">
                  {monthReceipt.diffFromLastMonth}%
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

{
}
