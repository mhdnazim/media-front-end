import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'


function Home() {

  const[serverRes,setserverRes]=useState({})

    const handleresponse=(res)=>{
      setserverRes(res)
    }

  return (
    <>
      <h1 className='text-info ms-5 mb-5'>All Video Cards</h1>
      <Link to={'/Watchhistory'} style={{textDecoration:"none",fontSize:"25px",color:"blue"}} className='MS-auto'>Watch History</Link>
      <div className='Container-fluid'>
        <Row>
          {/* Add component selector */}
          <Col lg={1}>
            <Add handleresponse={handleresponse}/>
          </Col>
          {/* View component Selector  */}
          <Col lg={7}>
            <View serverRes={serverRes}/>
          </Col>
          {/* Category component selector  */}
          <Col lg={4}>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home