import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function (){
    const [Friends, setFriends]= useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div className='box'>
            <h3>Friends : {Friends.length}</h3>
            {
                Friends.map(friend =><Friend friend={friend}></Friend>)
            }
        </div>
    )
}
/**
 * 1. state to hold data.
 * 2. use effect with depenedency array
 * 3. use fetch load data  
 * 4. set loaded data to the state
 */
