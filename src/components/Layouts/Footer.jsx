import React,{useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  //Scroll State
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  };

  const listenToScroll = () =>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }
  useEffect(() =>{
    window.addEventListener("scroll", listenToScroll);
    return () => (
      window.removeEventListener("scroll", listenToScroll)
  )
  },[])
  return (
    <>
     <footer>
       <Container>
          <Row>
          <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                  <div className='text-center'>
                      <h5>Location</h5>
                      <p>
                        5205 Waterford Distict
                      </p>
                      <p>
                        5205 Waterford Distict
                      </p>
                      <p>
                        5205 Waterford Distict
                      </p>
                  </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                  <div className='text-center'>
                      <h5>working Hours</h5>
                      <p>Mon_Fri: 9.00AM - 10.00PM</p>
                      <p>Mon_Fri: 9.00AM - 10.00PM</p>
                      <p>Mon_Fri: 9.00AM - 10.00PM</p>
                  </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                  <div className='text-center'>
                      <h5>Order Now</h5>
                      <p>Quaeratr neque purus ipsum</p>
                       <p>
                          <Link to="tel:999888777" className='calling'>
                            999-888-777
                          </Link>
                       </p>
                  </div>
              </Col>
              <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
                  <div className='text-center'>
                      <h5>Follow Us</h5>
                      <p>Quaeratr neque purus ipsum</p>
                        <ul className='list-unstyled text-center mt-2'>
                            <li>
                              <Link to="/">
                              <i className='bi bi-facebook'></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                              <i className='bi bi-instagram'></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                              <i className='bi bi-twitter'></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                              <i className='bi bi-linkedin'></i>
                              </Link>
                            </li>
                        </ul>
                  </div>
              </Col>
          </Row>

          <Row className='copy_right mt-4'>
               <Col>
                  <div>
                      <ul className='list-unstyled text-center mb-0'>
                      <li>
                              <Link to="/">
                                     @ 2024 <span>new webdesigner</span>. All Rights Reserved.
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                     About Us
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                    Terms Of Use
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                    Privacy Policy
                              </Link>
                            </li>
                      </ul>
                  </div>
               </Col>
          </Row>
       </Container>
    </footer>

    {/* scroll top */}
      {isVisible && ( <div className='scroll_top' onClick={scrollTop}>
          <i className='bi bi-arrow-up'></i>
     </div>)}
    
    </>
   

   )
}

export default Footer;
