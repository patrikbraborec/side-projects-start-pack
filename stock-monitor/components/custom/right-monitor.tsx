"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNewsQuery } from "@/services/queries";
import { Skeleton } from "../ui/skeleton";

export const RightMonitor = () => {
  const news = useNewsQuery();
  const hasNewsData = news.data && news.data.length > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>News Feed</CardTitle>
      </CardHeader>
      <CardContent>
        {news.isPending ? (
          <Skeleton className="h-[500px] w-full" />
        ) : (
          <ScrollArea className="h-[500px] w-full rounded-md border p-4 space-y-2 first:space-y-0">
            {hasNewsData &&
              news.data.map((item) => (
                <div key={item.id}>
                  <a
                    className="block underline"
                    href={item.article_url}
                    target="_blank"
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                  </a>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <Separator className="my-2" />
                </div>
              ))}
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};
