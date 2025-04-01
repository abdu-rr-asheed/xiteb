import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./service.css";

const slidesData = [
  {
    img: "https://images.unsplash.com/photo-1604137538367-3486afb2425f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/1350/1350120.png",
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we fully appreciate how difficult it is for people to find.",
  },
  {
    img: "https://images.unsplash.com/photo-1604137538367-3486afb2425f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/1350/1350120.png",
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we fully appreciate how difficult it is for people to find.",
  },
  {
    img: "https://images.unsplash.com/photo-1604137538367-3486afb2425f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/1350/1350120.png",
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we fully appreciate how difficult it is for people to find.",
  },
  {
    img: "https://images.unsplash.com/photo-1604137538367-3486afb2425f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: "https://cdn-icons-png.flaticon.com/512/1350/1350120.png",
    title: "Air Freight Services",
    description:
      "At our Auto Service garage, we fully appreciate how difficult it is for people to find.",
  },
  // Add more slides as needed
];

function Service() {
  return (
    <section className="services-section">
      <div className="container">
        <h6 className="service-slug">Real Solution, Real Fast!</h6>
        <h1 className="service-heading">Best Global Logistics Solutions.</h1>

        <div className="services-slider-container">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="services-slider"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="service-card">
                  <div className="service-img">
                    <img src={slide.img} alt="service-image" />
                    <div className="service-icon">
                      <img src={slide.icon} alt="truck-icon" />
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{slide.title}</h3>
                    <p>{slide.description}</p>
                    <a href="/" className="btn service-btn">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/318/318476.png"
                        alt="icon"
                        width="15"
                      />
                      <span className="ps-2">Learn More</span>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Service;
