// TODO: Move single components to separate files (e.g. card.tsx, and do not use use client here)
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

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

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Stock XYZ Surges 10% on Positive Earnings",
    date: "2023-06-15",
  },
  {
    id: 2,
    title: "Market Volatility Increases Amid Global Tensions",
    date: "2023-06-14",
  },
  {
    id: 3,
    title: "New Tech IPO Sees Strong First Day Trading",
    date: "2023-06-13",
  },
  {
    id: 4,
    title: "Central Bank Announces Interest Rate Decision",
    date: "2023-06-12",
  },
  {
    id: 5,
    title: "Major Merger in the Finance Sector Announced",
    date: "2023-06-11",
  },
];

export default function StockMonitor() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Stock Monitor</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>AAPL - Apple Inc.</CardTitle>
            <CardDescription>NASDAQ: AAPL</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart">
              <TabsList>
                <TabsTrigger value="chart">Chart</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="chart">
                <ChartContainer
                  config={chartConfig}
                  className="min-h-[200px] w-full"
                >
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
              </TabsContent>
              <TabsContent value="details">
                <div className="space-y-2">
                  <p>
                    <strong>Current Price:</strong> $150.25
                  </p>
                  <p>
                    <strong>Change:</strong> +2.5 (+1.69%)
                  </p>
                  <p>
                    <strong>Volume:</strong> 52.3M
                  </p>
                  <p>
                    <strong>Market Cap:</strong> $2.35T
                  </p>
                  <p>
                    <strong>P/E Ratio:</strong> 28.5
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>News Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] w-full rounded-md border p-4">
              {newsItems.map((item, index) => (
                <div key={item.id}>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                  {index < newsItems.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
