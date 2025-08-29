import React, { useState } from 'react'
import datas from "./datas.json";

const App = () => {
    const [nData, setnData] = useState(datas);

    const handleRemove = (itemId) => {
        setnData(nData.filter((items)=> {
            return items.id!==itemId;
        }))
    }

    const handleUpdate = (itemId) => {
        setnData(nData.map((items)=> {
            if(items.id === itemId){
                return {name:"Updated Name"}
            }
            else {
                return items
            };
        }))
    }

  return (
    <div>
        <ul>
            {
                nData.map((items)=> {
                    return(
                        <li key={items.id}>
                            {items.name}
                            <br />
                            <button onClick={()=> handleUpdate(items.id)}>Update</button>
                            <button onClick={()=> handleRemove(items.id)}>Remove</button> 
                        </li>
                    )
                })
            }
        </ul>
        <button onClick={()=> {
            setnData([])
        }}>Clear</button>
    </div>
  )
}

export default App