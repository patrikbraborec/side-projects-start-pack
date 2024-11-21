"use client";

import { useQuery } from "@tanstack/react-query";
import { getStocks } from "./stocks";
import { getNews } from "./news";

export const stocksQueryKeys = {
  all: ["stocks"] as const,
};

export const newsQueryKeys = {
  all: ["news"] as const,
};

export const useStocksQuery = () => {
  return useQuery({
    queryKey: [stocksQueryKeys.all],
    queryFn: () => getStocks(),
  });
};

export const useNewsQuery = () => {
  return useQuery({
    queryKey: [newsQueryKeys.all],
    queryFn: () => getNews(),
  });
};
