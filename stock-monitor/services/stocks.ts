import { createSupabaseClientSide } from "@/lib/supabase-client-side";

export const getStocks = async () => {
  const supabase = createSupabaseClientSide();

  const { data, error } = await supabase
    .from("stocks")
    .select("*")
    .order("timestamp", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
