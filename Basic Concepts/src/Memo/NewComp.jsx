import React,{memo} from 'react'

const NewComp = (props) => {
     {console.log("Comp render")}

  return (
    <div>
       New-Comp.{props.newCount}
    </div>
  )
}

export default memo(NewComp)