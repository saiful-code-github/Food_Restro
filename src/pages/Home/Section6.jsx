import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from '../../assets/images/testamonial3.jpg';
import User2 from '../../assets/images/testamonial1.jpg';
import User3 from '../../assets/images/testamonial3.jpg';
import User4 from '../../assets/images/testamonial2.jpg';

function Section6() {
    const Client = [
        {
            image: User1,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
            rating: "4.5",
            Name: 'BY AMELIE NEWLOVE'
        },
        {
            image: User2,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
            rating: "3.2",
            Name: 'BY AMELIE NEWLOVE'
        },
        {
            image: User3,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
            rating: "5",
            Name: 'BY MEILE NEWLOVE'
        },
        {
            image: User4,
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos cupiditate quia ipsa vero temporibus esse provident eum rerum? Laboriosam esse obcaecati rerum cum cumque enim totam consequuntur accusantium facilis magni!",
            rating: "3",
            Name: 'BY JHON NEWLOVE'
        }
    ];

    // Function to render star ratings
    const renderRatingIcon = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (rating > 0.5) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>);
                rating--;
            } else if (rating > 0) {
                stars.push(<i key={i} className="bi bi-star-half"></i>);
                rating--;
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>);
            }
        }
        return stars;
    };
    return (
        <section className="blog_section">
            <Container>
                <Row>
                    <Carousel fade indicators={true}>
                        {Client.map((cli, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex flex-column align-items-center">
                                    <div className="user_img mb-4">
                                        <img
                                            src={cli.image}
                                            className="img-fluid rounded-circle"
                                            alt={`user-${index + 1}`}
                                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <p className="text-center px-3 text-white mb-3" style={{width: '65%',display: "block",margin: "0 auto"}}>{cli.para}</p>
                                    <div className="item_rating mb-2" style={{color: "yellow"}}>
                                        {renderRatingIcon(cli.rating)}
                                    </div>
                                    <h5 className="text-center text-white" >{cli.Name}</h5>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Row> 
            </Container>
        </section>
    );
}
export default Section6;
