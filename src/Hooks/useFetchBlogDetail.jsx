import { useQuery } from "@tanstack/react-query"; 


export default function useFetchBlogDetail(id) {
return useQuery({
    queryKey: ['blogDetail', id], 
    queryFn : async () =>{
        const res = await fetch(`http://localhost:4000/blogPosts/${id}`) 
        if(!res.ok) throw new Error ('خطا در بارگذاری وبلاگ')
        return res.json()
    }
})
}
