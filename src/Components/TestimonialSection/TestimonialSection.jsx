import React from "react";
import Cards from "./Cards";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TestimonialSection = () => {
  return (
    <>
      <div className="ml-32 mt-20 mr-10 mb-10 max-md:m-5">
        <div className="container px-4 py-16 max-md:py-5">
          <div className="flex justify-between ">
            <h2 className="text-6xl   mb-8 font-poppins max-md:text-3xl">
              Testimonial
            </h2>
          </div>
          <div className="mb-10 font-poppins text-xl max-md:text-sm ">
            <p>Don't just take our word for it. </p>
            <p>
              See what actual users of our service have to say about their
              experience.
            </p>
          </div>
          <div className="flex justify-center items-center p-5 gap-8 max-md:flex-col h-auto">
          
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <Cards
                  para="  1  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ultricies orci. Nullam ultricies dui id odio egestas feugiat. Donec facilisis neque sed sapien fringilla varius vel vel orci. Quisque a volutpat mi. Nulla eleifend vehicula efficitur. Sed bibendum id eros nec aliquam. Aenean ut risus ac libero tempus molestie. "
                  img="/"
                  name="Jane Smith"
                  work="Web-DEV"
                />
              </SwiperSlide>

              <SwiperSlide >
                <Cards
                  para="  2  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ultricies orci. Nullam ultricies dui id odio egestas feugiat. Donec facilisis neque sed sapien fringilla varius vel vel orci. Quisque a volutpat mi. Nulla eleifend vehicula efficitur. Sed bibendum id eros nec aliquam. Aenean ut risus ac libero tempus molestie. "
                  img="/"
                  name="Jane Smith"
                  work="Web-DEV"
                />
              </SwiperSlide>

              <SwiperSlide>
                <Cards
                  para="  3  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ultricies orci. Nullam ultricies dui id odio egestas feugiat. Donec facilisis neque sed sapien fringilla varius vel vel orci. Quisque a volutpat mi. Nulla eleifend vehicula efficitur. Sed bibendum id eros nec aliquam. Aenean ut risus ac libero tempus molestie. "
                  img="/"
                  name="Jane Smith"
                  work="Web-DEV"
                />
              </SwiperSlide>

              <SwiperSlide >
                <Cards
                  para="  4  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non ultricies orci. Nullam ultricies dui id odio egestas feugiat. Donec facilisis neque sed sapien fringilla varius vel vel orci. Quisque a volutpat mi. Nulla eleifend vehicula efficitur. Sed bibendum id eros nec aliquam. Aenean ut risus ac libero tempus molestie. "
                  img="/"
                  name="Jane Smith"
                  work="Web-DEV"
                />
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
