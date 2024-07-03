import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import User1 from '../../assets/images/testamonial3.jpg';
import User2 from '../../assets/images/testamonial1.jpg';
import User3 from '../../assets/images/testamonial3.jpg';
import User4 from '../../assets/images/testamonial2.jpg';
function Section6() {
    return (
        <section className='blog_section'>
            <Container>
                <Row>
                    <Carousel fade>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='user_img'>
                                <img src={User1} className="img-fluid" alt="user-1" />
                             </div>
                             <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!"
                             </p>
                             <div className='item_rating mb-2'>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                             </div>
                             <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='user_img'>
                                <img src={User2} className="img-fluid" alt="user-2" />
                             </div>
                             <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!"
                             </p>
                             <div className='item_rating mb-2'>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                             </div>
                             <h5>BY AMELIE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='user_img'>
                                <img src={User3} className="img-fluid" alt="user-3" />
                             </div>
                             <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!"
                             </p>
                             <div className='item_rating mb-2'>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                             </div>
                             <h5>BY MEILE NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Carousel.Caption>
                            <div className='user_img'>
                                <img src={User4} className="img-fluid" alt="user-4" />
                             </div>
                             <p>
                               " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!"
                             </p>
                             <div className='item_rating mb-2'>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                             </div>
                             <h5>BY JHON NEWLOVE</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Row>
            </Container>
        </section>
    )
}

export default Section6
