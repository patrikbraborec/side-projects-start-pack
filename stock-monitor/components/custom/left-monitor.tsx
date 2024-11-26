"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useStocksQuery } from "@/services/queries";
import { Skeleton } from "../ui/skeleton";

const chartConfig = {
  close: {
    label: "Close",
    color: "#2563eb",
  },
} satisfies ChartConfig;

const toChartData = (
  data: Array<{ timestamp: string; close: number }> | undefined
) => {
  if (!data) {
    return [];
  }

  return data.map((item) => {
    return {
      day: new Date(item.timestamp).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      close: item.close,
    };
  });
};

export const LeftMonitor = () => {
  const stock = useStocksQuery();
  const stockData = stock.data;
  const lastStockData = stockData?.[0];
  const chartData = toChartData(stockData);
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        {stock.isPending ? (
          <Skeleton className="h-5 w-3/4" />
        ) : (
          <CardTitle className="h-5">AAPL - Apple Inc.</CardTitle>
        )}
        {stock.isPending ? (
          <Skeleton className="h-5 w-1/2" />
        ) : (
          <CardDescription className="h-5">NASDAQ: AAPL</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="chart">
          <TabsList>
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>
          <TabsContent value="chart">
            {stock.isPending ? (
              <Skeleton className="h-[500px] w-full" />
            ) : (
              <ChartContainer config={chartConfig} className="h-[500px] w-full">
                <LineChart accessibilityLayer data={chartData}>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <XAxis dataKey="day" />
                  <YAxis
                    tickCount={10}
                  />
                  <CartesianGrid vertical={false} />
                  <Line dataKey="close" fill="var(--color-close)" radius={2} />
                </LineChart>
              </ChartContainer>
            )}
          </TabsContent>
          <TabsContent value="details">
            {stock.isPending ? (
              <Skeleton className="h-[500px] w-full" />
            ) : (
              <div className="space-y-2 h-[500px]">
                <p>
                  <strong>Data from</strong>:{" "}
                  {lastStockData?.timestamp
                    ? new Date(lastStockData.timestamp).toLocaleString()
                    : "Unknown"}
                </p>
                <p>
                  <strong>Close:</strong>{" "}
                  {lastStockData?.close
                    ? USDollar.format(lastStockData.close)
                    : "Unknown"}
                </p>
                <p>
                  <strong>Open:</strong>{" "}
                  {lastStockData?.open
                    ? USDollar.format(lastStockData.open)
                    : "Unknown"}
                </p>
                <p>
                  <strong>High:</strong>
                  {lastStockData?.high
                    ? USDollar.format(lastStockData.high)
                    : "Unknown"}
                </p>
                <p>
                  <strong>Low:</strong>{" "}
                  {lastStockData?.low
                    ? USDollar.format(lastStockData?.low)
                    : "Unknown"}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
