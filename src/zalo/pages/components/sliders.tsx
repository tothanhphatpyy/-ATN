import Avatar from '@shared/Avatar';
import Text from '@shared/text/Text';
import React from 'react'
import { Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductGridSlide from '@zalo/components/product/ProductGridSlide';

function Sliders() {
  const { sliderLayout } = useParams();

  const listSlider = [
    {
        name: 'Momo',
        image_url: 'https://i.imgur.com/TIM5KjW.jpg'
      },
  
      {
        name: 'Zalo',
        image_url: 'https://i.imgur.com/YmDUI99.png'
      },
  
      {
        name: 'VNPay',
        image_url: 'https://i.imgur.com/rdlcqoI.jpg'
      },
]
  const listSliderScroll = (
    <div>
      <Text className="text-4-medium text-black ms-n1 mb-3">Product Grid Slide</Text>
      <Swiper spaceBetween={16} slidesPerView={1.2}>
        {listSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div key={index} style={{height: 150}} className='w-100'>
            <Image
                src={item.image_url}
                alt=""
                className="w-100 h-100 fit-cover rounded-3"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <div className="px-4 mt-2">
      {sliderLayout == 'slider-scroll' && listSliderScroll}
    </div>
  )
}

export default Sliders