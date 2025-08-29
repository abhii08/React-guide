import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosPost = () => {
    const [data, setData] = useState([]);
    const [name, setName] = useState('');

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => setData(response.data))
                .catch(error => {
                    console.log("Error while fetching data", error);
                })
    },[])

    const handleInput = (e) => {
        setName(e.target.value);
    };

    const newItem = {id:Date.now(), title:name, body:name}
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://jsonplaceholder.typicode.com/posts', newItem)
                .then(res => setData([...data,res.data]))
                .catch((error) => {
                    console.log("Error adding item:",error)
                });
                setName(" ");
    }

  return (
    <div>
        <h1>Axios</h1>
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={handleInput}/>
            <button type='submit'>Submit</button>
        </form>
        {
            data.map((items,index) => (
                <div key={`${items.id}-${index}`}>{items.title}</div>
            ))
        }
    </div>
  )
}

export default AxiosPost