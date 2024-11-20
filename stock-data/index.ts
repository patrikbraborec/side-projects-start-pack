import { restClient } from "@polygon.io/client-js";
import { createClient } from "@supabase/supabase-js";
import { format, subDays, parse } from "date-fns";

const TICKER = "AAPL";

const polygonClient = restClient(process.env.POLY_API_KEY);
const supabaseClient = createClient(
  process.env.SUPABASE_URL!!,
  process.env.SUPABASE_KEY!!
);

(async function () {
  const yesterday = format(subDays(new Date(), 1), "yyyy-MM-dd");

  try {
    const stockData = await polygonClient.stocks.dailyOpenClose(
      TICKER,
      yesterday
    );
    const stockNews = await polygonClient.reference.tickerNews({
      ticker: TICKER,
      date: yesterday,
    });

    const from = format(new Date(), "yyyy-MM-dd");
    const stockDataToInsert = {
      ticker: TICKER,
      timestamp: parse(
        stockData.from ?? from,
        "yyyy-MM-dd",
        new Date()
      ).toISOString(),
      open: stockData.open,
      close: stockData.close,
      high: stockData.high,
      low: stockData.low,
    };

    const stockNewsToInesrt = stockNews?.results?.map((result) => {
      return {
        ticker: TICKER,
        title: result.title,
        publisher_name: result.publisher.name,
        author: result.author,
        article_url: result.article_url,
        image_url: result.image_url,
        description: result.description,
      };
    });

    const { error: stockDataError } = await supabaseClient
      .from("stocks")
      .insert(stockDataToInsert);

    if (stockDataError) {
      throw stockDataError;
    }

    const { error: stockNewsError } = await supabaseClient
      .from("news")
      .insert(stockNewsToInesrt);

    if (stockNewsError) {
      throw stockNewsError;
    }
  } catch (error) {
    console.error(error);
  }
})();
