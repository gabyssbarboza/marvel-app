import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlideSection, SlideWrapper, SlideSubtitle, SlideTitle, SlideImg, SlideInfos, SlideLink, SlideArrowLeft, SlideArrowRight  } from './SlidesStyle';
import Modal from '../Modal';


const Slide = ({slides}) => {


    const [modal, setModal] = React.useState(null);
    
    const [size, setSize] = useState(true);

    const settings = {
        dots: true,
        infinite: false,
        speed: 3000,
        slidesToShow: size ?  3 : 1,
        slidesToScroll: size ?  3 : 1,
        nextArrow: <SlideArrowRight /> ,
        prevArrow: <SlideArrowLeft />
      };
   
    if (!Array.isArray(slides) || slides.length <= 0) {
      return null
    }
  
    return (
        <>
        <SlideSection>
        <Slider {...settings}>
          {slides.map((slide, index) => (
              <SlideWrapper key={index}>
                  <SlideImg src={slide.thumbnail.path && slide.thumbnail.path + '/portrait_uncanny.' + slide.thumbnail.extension} />
                  <SlideInfos>
                  <SlideTitle>{slide.title || slide.name}</SlideTitle>
                  <SlideSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam minus sequi corporis similique qui consectetur veniam voluptates autem sed. Repudiandae laboriosam quia veniam ipsum fuga labore odio amet ab ipsam?</SlideSubtitle>
                  <SlideLink onClick={() => setModal(slide.id)}>ver detalhes</SlideLink>
                  </SlideInfos>
              </SlideWrapper>
          ))}
        </Slider>
      </SlideSection>
     {modal && <Modal  setModal={setModal} modal={modal} />}
      </>
    )
   


}

export default Slide
