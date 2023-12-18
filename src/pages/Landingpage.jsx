import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ArrowRight } from 'react-feather'
import { useNavigate } from 'react-router-dom'


function Landingpage() {

  // function definition
  // redirect from one page to another page we can use hook. ie useNavigate()
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/home')
  }

  return (
    <>
      <Row>
        <Col></Col>
        <Col lg={6}>
          <h1><i>WELCOME</i> <ArrowRight /> <b>VIDEOS.COM</b></h1>
          <p style={{ textAlign: 'justify' }}>Where user can use their favourite video. User can Upload any youtube video by copy and paste their url in to <b>VIDEOS.COM</b> will allow to add and remove their uploaded videos and also arrange them in diffrent categories by drag and drop it is free. <b>Try it NOW!!!</b></p>
          <button onClick={handleNavigate} className='btn btn-success'>Click Here to Know More...</button>
        </Col>
        <Col lg={5}>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31a97258737059.5a07705b4b565.gif" alt="NO IMAGE" className='img-fluid' width={410} />
        </Col>
      </Row>
    </>
  )
}

export default Landingpage