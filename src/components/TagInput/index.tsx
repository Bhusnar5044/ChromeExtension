import { faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Input, InutWrapper } from './styled'

const TagInput:React.FC = () =>{

    const [val,setVal]= useState<any>('')

    const handleChange = (e)=>{
        setVal(e.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setVal(event.target.value)
          console.log(val)
        }
    }

    return(
        <InutWrapper>
            <Input type="text" placeholder="Add Tag" value={val} onKeyDown={handleKeyDown} onChange={handleChange}/><FontAwesomeIcon icon={faTag} />
        </InutWrapper>
    )
}

export default TagInput