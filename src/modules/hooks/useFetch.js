import {useEffect, useState} from "react";


const useFetch =  (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setError] = useState(null)

    const fetchData = async () => {
        try{
            const res = await fetch(url)
            if (!res.ok) throw new Error('smt wrong network')
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (e) {
            console.log(err)
            setError(e)
            setLoading(false)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchData()
        }, 1000)
    }, [url])

    return {data, loading, err}
}

export default useFetch