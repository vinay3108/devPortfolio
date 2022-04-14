import React from 'react'
import { useEffect } from 'react'

const FilteredButton = ({proData,setFiltered,currField,setCurrField}) => {
    useEffect(()=>{
        console.log(currField);
        if(currField==='All')
        {
            setFiltered(proData);
            return;
        }
        const data=proData.filter((item)=>item.category===currField);
        console.log(data);
        setFiltered(data);
    },[currField])
  return (
    <>
    <button onClick={()=>setCurrField('All')}>All</button>
    <button onClick={()=>setCurrField('full-stack')}>Full Stack</button>
    <button onClick={()=>setCurrField('frontend')}>Frontend</button>
    <button onClick={()=>setCurrField('backend')}>Backend</button>
    </>
  )
}

export default FilteredButton