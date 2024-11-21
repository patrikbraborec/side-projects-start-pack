import { createSupabaseClientSide } from "@/lib/supabase-client-side";

export const getNews = async () => {
  const supabase = createSupabaseClientSide();

  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
