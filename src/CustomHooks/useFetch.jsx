import React, { useState, useEffect } from 'react'

const useFetch = () => {
    const [users, setUsers] =useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    },[])

  return [users];
}

export default useFetch