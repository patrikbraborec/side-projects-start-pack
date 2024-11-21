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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export const LeftMonitor = () => {
  const stock = useStocksQuery();
  const lastStockData = stock.data?.[0];
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
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <YAxis />
                  <CartesianGrid vertical={false} />
                  <Line
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={4}
                  />
                  <Line
                    dataKey="mobile"
                    fill="var(--color-mobile)"
                    radius={4}
                  />
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
