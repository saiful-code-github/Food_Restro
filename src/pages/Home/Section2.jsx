import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../../assets/images/pizaa.png';
import Salad from '../../assets/images/salad.png';
import Delivery from '../../assets/images/delivery_boy.png';
//Mock Data Cards

const mocData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?' 
  },
  {
    image: Salad,
    title: "Quality Foods",
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?' 
  },
  {
    image: Delivery,
    title: " Faster Delivery",
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam delectus iure, repudiandae dicta et?' 
  }
]

function Section2() {
  return (
    <>
    <section className='about_section'>
          <Container>
                <Row>
                   <Col lg={{span:8, offset:2}} className='text-center'>
                        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo.</h2> 
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam suscipit officiis beatae iure, necessitatibus quas officia reiciendis ut nostrum debitis architecto aliquam facere, quae laboriosam nihil sunt? Officiis, distinctio!
                        </p>
                        <Link to="/" className='btn order_now btn_red'>
                             Explore Full Menu
                        </Link>
                   </Col>
                </Row>
          </Container>
      </section>
      {/* next section */}
      <section className='about_wrapper'>
         <Container>
             <Row className='justify-content-center-md-center'> 
                  {mocData.map((cardData, index)=>(
                    <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
                      <div className='about_box text-center'> 
                       <div className="about_icon"> 
                           <img src={cardData.image}  className="img-fluid" alt="icon" />
                       </div>
                       <h4>{cardData.title}</h4>
                       <p>{cardData.paragraph}</p>
                      </div>
                    </Col>
                  ))}
              </Row>  
         </Container>
         </section>
    </>
      

  )
}

export default Section2
