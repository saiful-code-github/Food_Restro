import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Image1 from '../../assets/images/burger1.jpg';
import Image2 from '../../assets/images/burger2.jpg';
import Image3 from '../../assets/images/burger3.jpg';
import Image4 from '../../assets/images/burger4.jpg';
import Image5 from '../../assets/images/burger5.jpg';
import Image6 from '../../assets/images/burger6.jpg';
import Image7 from '../../assets/images/burger7.jpg';
import Image8 from '../../assets/images/burger8.jpg';
import Cards from '../../components/Cards';
import { Link } from 'react-router-dom';

//MOck Data Cards
const mockData =[
    {
        id:"0001",
        image: Image1,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:5,
        price:99.15
    },
    {
        id:"0002",
        image: Image2,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:4,
        price:99.15
    },
    {
        id:"3",
        image: Image3,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:3,
        price:99.15
    },
    {
        id:"4",
        image: Image4,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:4,
        price:99.15
    },
    {
        id:"5",
        image: Image5,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:3,
        price:99.15
    },
    {
        id:"6",
        image: Image6,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:5,
        price:99.15
    },
    {
        id:"7",
        image: Image7,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:4.2,
        price:99.15
    },
    {
        id:"8",
        image: Image8,
        title: "Crispy Chicken",
        paragraph: "Chicken breast, chilli sauce, tomatoes, coleslaw",
        rating:3.5,
        price:99.15
    },

]

//Rating Logical Data
const renderRatingIcons = (rating) =>{
   const stars = [];

   for (let i=0; i < 5; i++){
     if(rating > 0.5) {
        stars.push(<i key={i} className='bi bi-star-fill'></i>);
        rating--;
     }else if (rating > 0 && rating < 1){
           stars.push(<i key={"half"} className='bi bi-star-half'></i>);
           rating--;
     }else{
          stars.push(<i key={`empty${i}`} className='bi bi-star'></i>)
     }
   }
   return stars;
}
function Section3() {
  return (
     <section className='menu_section' id="menusection">
        <Container>
             <Row>
                <Col lg={{span:8, offset:2}} className='text-center mb-5'>
                    <h2>OUR CRAZY BURGERS</h2>
                     <p className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci cumque perspiciatis ad, non culpa quaerat ullam, odit mollitia, nostrum itaque? Maiores.
                     </p>
                </Col>
             </Row>

             {/* next row */}
             <Row>
                {mockData.map((cardData, index)=>(
                   <Cards
                      key={index}
                      image={cardData.image}
                      rating={cardData.rating}
                      title={cardData.title}
                      paragraph={cardData.paragraph}
                      price= {cardData.price}
                      renderRatingIcons={renderRatingIcons}
                   />
                ))}
             </Row>

             {/* next row */}
             <Row className='pt-5'>
                <Col sm={6} lg={5}>
                    <div className='ads_box ads_img1 mb-5 mb-md-0'>
                         <h4 className='mb-0'>GET YOUR FREE</h4>
                          <h5>CHEESE FRIES</h5>
                          <Link to="/" className='btn btn_red px-4 rounded-0'> 
                               Learn More
                          </Link>
                    </div>
                </Col>
                <Col sm={6} lg={7}>
                    <div className='ads_box ads_img2'>
                         <h4 className='mb-0'>GET YOUR FREE</h4>
                          <h5>CHEESE FRIES</h5>
                          <Link to="/" className='btn btn_red px-4 rounded-0'> 
                               Learn More
                          </Link>
                    </div>
                </Col>
             </Row>
        </Container>
     </section> 
  )
}

export default Section3
