import React, { useEffect, useState } from 'react'
import {fetchData} from "../../Api/Index";


export default function FetchMyData() {
   const[Data, setData] = useState([]);

  useEffect(() => {
    const fetch =async() => {
      setData(await fetchData())
    }
    fetch();
  }, [])

  return (
  <div>
      {Data.map((Data, id)=><div key={id}>{Data.body}</div>)}
      
  </div>
  )
}
