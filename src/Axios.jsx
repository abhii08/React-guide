import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios = () => {
    const [data, setData] = useState([]);

useEffect(()=> {
    

    axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => setData(response.data))
            .catch(error => {
                console.log("Error while fetching data", error);
            })
},[])

  return (
    <div>
        <h1>Axios</h1>
        {
            data.map(items => (
                <div key={items.id}>{items.title}</div>
            ))
        }
    </div>
  )
}

export default Axios