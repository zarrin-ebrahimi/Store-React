
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchWishlist, addToWishlist, removeFromWishlist } from "../Services/wishlistServices";
export function useWishlist() {
  const queryClient = useQueryClient();

  const { data: wishlist = [], isLoading, error } = useQuery({
    queryKey: ["wishlist"],
    queryFn:fetchWishlist,
  });

  const addMutation = useMutation({
    mutationFn:addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  const removeMutation = useMutation({
    mutationFn:removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });

  return {
    wishlist,
    isLoading,
    error,
    addToWishlist: addMutation.mutate,
    removeFromWishlist: removeMutation.mutate,
  };
}