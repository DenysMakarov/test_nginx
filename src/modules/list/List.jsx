import {useEffect, useState} from "react";

const fetchData = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        return data
    }catch (err) {
        console.log(err)
    }
}
 const List = ({data=[]}) => {
     const [users, setUsers] = useState()


     useEffect(() => {
         fetchData().then(data => setUsers(data))
     }, [])
    return (
        <div>
            { users &&
                users.map((el, idx) => <h2 key={el.id}>{el.id}</h2>)
            }
        </div>
    )

}

export default List