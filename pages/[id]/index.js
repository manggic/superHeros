

import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;

const EachHero = ({hero}) => {
  return (
    <div className='container' style={{ height :'84vh' }}>
        <MDBCard className='border border-2 my-2' style={{ maxWidth: '22rem' }}>
            <MDBCardBody>
              <MDBCardTitle>{hero.superHero}</MDBCardTitle>
              <MDBCardText>
                Real Name : <strong>{ hero.realName }</strong> 
              </MDBCardText>
                {/* <Link  href='/' ><MDBBtn >View Hero</MDBBtn></Link>   */}
                {/* <Link  href='/' ><MDBBtn className='mx-3'>Edit Hero</MDBBtn></Link>   */}
            </MDBCardBody>
          </MDBCard>
    </div>
  )
}


export async function getServerSideProps(context) {

   console.log('context', context.query)

  const {id} = context.query

    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    console.log('res', res.data.data)
  
    const hero =  res.data.data
    return {
      props: {hero}, // will be passed to the page component as props
    }
  }


export default EachHero