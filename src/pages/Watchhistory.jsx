import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { getHistory } from '../service/allapi';



function Watchhistory() {

  const [history,sethistory]=useState([])

  useEffect(() => {
    getwatchhistory()
  }, [])
  

  const getwatchhistory=async()=>{
   const{data} = await  getHistory()
  //  console.log(response);
  sethistory(data)
  }
  console.log(history);


  return (
    <>

    <div>
        <h5>WATCH HISTORY</h5>

    </div>
    

    <Table className='table-shadow m-3 rounded border'>

      <thead className='p-5'>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Url</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>

        {
          history?.map((item,index)=>(
            <tr>
             <td>{index+1}</td>
             <td>{item?.CategoryName}</td>
             <td>{item?.url}</td>
             <td>{item?.date}</td>
            </tr>
          ))
        }
        
      </tbody>

    </Table>



    </>
  )
}

export default Watchhistory