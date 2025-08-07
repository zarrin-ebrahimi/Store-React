import { useQuery } from "@tanstack/react-query"; 

const FetchBlogs = async() =>{
    const res = await fetch('http://localhost:4000/blogPosts') 

    if(!res.ok) throw new Error('خطا در بارگذاری وبلاگ ها')  
    const data = await res.json() 
    return data

}

export const useBlog = () =>{
   return useQuery({
    queryKey: ['blogs', 3] ,
    queryFn: FetchBlogs 
   })
}