import {createContext, useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";
import {TestR} from "./TestR";


export const FL = () => {
    const {data, loading, err} = useFetch('https://jsonplaceholder.typicode.com/users')
    const [searchValue, setSearchValue] = useState('')
    const [users, setUsers] = useState([])

    useEffect(()=>{
        setUsers(data)
    }, [data])

    const handleSearch = (e) => {
        const {value} = e.target
        setSearchValue(value)
        if (data) {
            const res = data.filter(el => el.name.toLowerCase().startsWith(value.toLowerCase()))
            setUsers(res)
        }

    }

    return (
        <div>
            {/*<TestR/>*/}

            <input type="text" value={searchValue} onChange={handleSearch}/>
            {
                loading ?
                    <div>LOADING</div> :
                    users?.map(el => <div key={el.id}>{el.name}</div>)
            }

        </div>

    )
}

