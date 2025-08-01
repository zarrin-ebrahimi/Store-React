import {useEffect, useState, useCallback} from 'react'

export default function useBestSellers() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(null)

    const getData = useCallback(()=>{
        setLoading(true)
        setError(null)

        fetch('http://localhost:4000/bestSellers') 
        .then((res) =>{
            if(!res.ok) throw new Error('Failed to fetch products')
            return res.json()
        })
        .then((json)=>{
            setData(json)
        })
        .catch((e) =>{
            setError(e.message || 'Somthing went wrong')
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    useEffect(()=>{
        getData()
    }, [getData])

  return {data, loading, error, retry:getData}
}
