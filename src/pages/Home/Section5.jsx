import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from '../../assets/images/IOS.png';
import Android from '../../assets/images/Android.png';
import DownloadApp from '../../assets/images/burgerShop.png';
import Brand1 from '../../assets/images/12.png';
import Brand2 from '../../assets/images/13.png';
import Brand3 from '../../assets/images/14.png';
import Brand4 from '../../assets/images/15.png';
import Brand5 from '../../assets/images/16.png';
import Brand6 from '../../assets/images/17.png';
import Brand7 from '../../assets/images/18.png';
import Brand8 from '../../assets/images/19.png';
function Section5() {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4 className='text-[2.3rem]'>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam possimus non minima quaerat animi accusamus voluptates ea asperiores perspiciatis.
                            </p>
                            <div className='flex justify-start'>
                            <Link to="/">
                                <img src={StoreIOS} alt="IOS" className=' me-3 w-[80%]'/>
                            </Link>
                            <Link to="/">
                                <img src={Android} alt="Andriod" className=' me-3 w-[80%]' />
                            </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <img src={DownloadApp} alt="e-shop" className='img-fluid e_shop' />
                        </Col>
                    </Row>
                </Container>

            </section>

            {/* New Section */}
            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                              
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-between'>
                                          <div className='brand_img'>
                                              <img src={Brand1} className="img-fluid" alt="brand-1" />
                                          </div>
                                          <div className='brand_img'>
                                              <img src={Brand2} className="img-fluid" alt="brand-2" />
                                          </div>
                                          <div className='brand_img'>
                                              <img src={Brand3} className="img-fluid" alt="brand-3" />
                                          </div>
                                          <div className='brand_img'>
                                              <img src={Brand4} className="img-fluid" alt="brand-4" />
                                          </div>
                                          <div className='brand_img'>
                                              <img src={Brand5} className="img-fluid" alt="brand-5" />
                                          </div>
                                          <div className='brand_img'>
                                              <img src={Brand6} className="img-fluid" alt="brand-6" />
                                          </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                              
                              <Carousel.Caption>
                                  <div className='d-flex align-items-center justify-content-between'>
                                       <div className='brand_img'>
                                            <img src={Brand3} className="img-fluid w-full" alt="brand-3" />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand4} className="img-fluid w-full" alt="brand-4" />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand5} className="img-fluid w-full" alt="brand-5" />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand6} className="img-fluid w-full" alt="brand-6" />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand7} className="img-fluid w-full" alt="brand-7" />
                                        </div>
                                        <div className='brand_img'>
                                            <img src={Brand8} className="img-fluid w-full" alt="brand-8" />
                                        </div>
                                  </div>
                              </Carousel.Caption>
                          </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5
