import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'
import { useEffect,useState } from 'react'

function Home() {

    // count -> initial state variable
    // setCount -> updated state variable
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [showPassword, setShowPassword] = useState(false);

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
        console.log(`count updated ${count}`);
        
    }, []); 
    // [] -> calls only one time when the compnent renders
    // [dependency] -> calls every time when the component renders

    return (
        <div className='title'>
            home

            <input type="text" name="name" id="name" value={value.name} onChange={(e) => setValue({...value, name: e.target.value})}/>

        <button type="submit" onClick={increment}>{count}</button>
        <button type="submit" onClick={decrement}>{count1}</button>

        </div>
    )
}

export default Home