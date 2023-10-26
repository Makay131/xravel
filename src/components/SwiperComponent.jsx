import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
import BaseButton from '../interface/BaseButton';

function SwiperComponent({slideList, onShowSlides}) {
    useEffect(() => {
        const handleKeyPress = event => {
            if (event.key === 'Escape') {
              event.preventDefault();
              onShowSlides(false);
            }
          };
      
          document.addEventListener('keydown', handleKeyPress);
      
          return () => {
            document.removeEventListener('keydown', handleKeyPress);
          };
    }, [onShowSlides])

    return (
        <>
           <BaseButton style='absolute bottom-5 left-1/2 -translate-x-1/2' onButtonClicked={() => onShowSlides(false)}>Exit</BaseButton>
           <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                {slideList.map(slide => <SwiperSlide key={slide}>
                <img src={slide} />
                </SwiperSlide>)}
            </Swiper> 
        </>
    )
}

export default SwiperComponent
