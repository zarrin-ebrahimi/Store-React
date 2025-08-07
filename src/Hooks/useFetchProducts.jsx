import { useQuery } from "@tanstack/react-query";

export function useFetchProducts(url) {
  return useQuery({
    queryKey: ["products", url],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
      return res.json();
    },
    staleTime: 1000 * 60, // 1 دقیقه داده تازه فرض بشه
    retry: 1,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
}