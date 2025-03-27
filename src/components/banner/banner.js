import "./banner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Banner() {
  // Array of slide data
  const slides = [
    {
      title: "Best Shipping Partner",
      description:
        "Transmax is the world's driving worldwide coordinations provider — we uphold industry and exchange the worldwide trade of merchandise through land transport.",
      imgSrc:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Best Shipping Partner",
      description:
        "Transmax is the world's driving worldwide coordinations provider — we uphold industry and exchange the worldwide trade of merchandise through land transport.",
      imgSrc:
        "https://images.unsplash.com/photo-1595263026408-d502567353ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="banner">
      <div className="container">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="banner-container">
                <div className="banner-content">
                  <div className="banner-sug">LOGISTIC</div>
                  <h1 className="banner-title">
                    {slide.title.split(" ")[0]}{" "}
                    <span>{slide.title.split(" ")[1]}</span>
                  </h1>
                  <p className="banner-description">{slide.description}</p>
                  <a href="#" className="btn banner-btn yellow-bg">
                    Discover Move
                  </a>
                </div>
                <div className="banner-img">
                  <img src={slide.imgSrc} alt="banner-image" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;
