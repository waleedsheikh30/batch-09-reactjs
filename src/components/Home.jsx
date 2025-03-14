import React from 'react'
import './home.css'
import { useEffect, useState } from 'react'

function Home() {

    // count -> initial state variable
    // setCount -> updated state variable
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [users, setUsers] = useState([]);

    const [value, setValue] = useState({
        name: "",
        password: "",
        email: ""
    })

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount1(count1 - 1);
    }

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then((data) => {
                setUsers(data);
                console.log(data);

            })
            .catch((err) => console.log("error fetching data", err));
            

    }, []);
    // [] -> calls only one time when the compnent renders
    // [dependency] -> calls every time when the component renders


    return (
        <div className='title'>
            home

            <input type="text" name="name" id="name" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />

            <button type="submit" onClick={increment}>{count}</button>
            <button type="submit" onClick={decrement}>{count1}</button>

            <ul>
                {users.map((user) => {
                    <li key={user.id}>{user.name} {user.quantity}</li>
})}
            </ul>
        </div>


    )
}

export default Home