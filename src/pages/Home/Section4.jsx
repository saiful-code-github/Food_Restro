import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import PromotionImage from '../../assets/images/pro.png';
function Section4() {
  return (
    <>
     <section className='promotion_section'>
           <Container>
               <Row className='align-items-center'>
                  <Col lg={6} className="text-center mb-5 mb-lg-0">
                     <img src={PromotionImage} className="img-fluid" alt="Promotion" />
                  </Col>
                  <Col lg={6} className='px-5'>
                     <h2>Noting brings people together like a good burger</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, vitae atque totam possimus ex. Ut est magni molestias. Velit asperiores repellat nihil. Fugit quas, autem alias ipsam blanditiis necessitatibus.
                      </p>
                      <ul>
                          <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci molestiae illum esse delectus minima.</p>
                          </li>
                          <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quia.</p>
                          </li>
                          <li>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci molestiae illum esse delectus minima.</p>
                          </li>
                      </ul>
                  </Col>
               </Row>
           </Container>
       </section>

     {/* BG Parallax Scroll */}
     <section className='bg_parallax-scroll'>

     </section>
    </>
      

  )
}

export default Section4;
