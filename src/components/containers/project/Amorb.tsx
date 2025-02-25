import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/amor1.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/amor2.png";
import dtwo from "public/images/projects/amor3.png";
import dthree from "public/images/projects/amor4.png";
import dfour from "public/images/projects/amor5.png";
import dfive from "public/images/projects/amor6.png";


import package1 from "public/images/projects/amor7.png";
import package2 from "public/images/projects/amor8.png";
import package3 from "public/images/projects/amor9.png";

const  Amorb = () => {
  return (

    <>
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Brand Overview</h3>
              <p>
              Amor Blue is a fragrance brand founded with the belief that scent is more than just a smell; it is a powerful form of expression, an emotional experience, and a memory waiting to be created. Driven by a passion for fine perfumery, Amor Blue crafts high-quality fragrances that evoke elegance, allure, and sophistication. Each fragrance is carefully curated, blending the artistry of perfumery with the science behind fragrance composition.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                
              The mission of Amor Blue is to transform the fragrance industry by creating scents that don’t just smell good but also tell a story. By offering a variety of perfumes for every personality, occasion, and mood, the brand aims to make fragrance an integral part of everyday life, evoking powerful emotions and memories.
              </p>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="poster__slider-wrapper">
              <div className="poster__slider-w">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  speed={800}
                  loop={true}
                  centeredSlides={false}
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  navigation={{
                    nextEl: ".next-project-d",
                    prevEl: ".prev-project-d",
                  }}
                  className="poster__slider"
                >
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="poster__slider-single">
                      <Image src={poster} alt="Image" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="slide-group">
                <button
                  aria-label="previous item"
                  className="slide-btn prev-project-d"
                >
                  <i className="fa-light fa-angle-left"></i>
                </button>
                <button
                  aria-label="next item"
                  className="slide-btn next-project-d"
                >
                  <i className="fa-light fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row gaper fade-wrapper">
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Driven by Excellence </h5>
               
              </div>
              <div className="thumb">
                <Image src={iconone} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Delivering   Solutions</h5>
              
              </div>
              <div className="thumb">
                <Image src={icontwo} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-4">
            <div className="project-d-o__single fade-top">
              <div className="content">
                <h5>Ensuring Safety </h5>
                 
              </div>
              <div className="thumb">
                <Image src={iconthree} alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">The Challenge</h3>
               
              <p>
              Brand Recognition in a Competitive Market
              The fragrance market is highly competitive, with many established players offering a wide range of products. For a new brand like Amor Blue, gaining brand recognition and trust was a major challenge. The brand needed to establish itself as a premium fragrance choice and differentiate itself from mass-market offerings.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="details-group text-start section__content-cta">
              <h3 className="light-title-lg">Solution Approach</h3>
              <p>
                 
              </p>
              <p>
              To address these challenges, we crafted a comprehensive strategy that focused on key elements:

Brand Storytelling & Emotional Appeal
We created compelling narratives around each fragrance, emphasizing the artistry and craftsmanship behind the brand. By focusing on how each scent encapsulates a specific emotion or memory, we invited customers to connect on a deeper level.
SEO-Optimized Content & Blogs
A content strategy was implemented to educate customers about perfume layering, scent notes, and fragrance care. The blogs were optimized for search engines to help the brand appear in relevant searches and drive organic traffic.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="quote-pj">
              <div className="cont">
                <div className="quote">
                  <i className="fa-solid fa-quote-right"></i>
                </div>
                <blockquote className="secondary-text">
                "Working with this agency has been a game-changer for Amor Blue. They truly understood our vision of creating fragrances that evoke emotion. The storytelling, social media campaigns, and website redesign have significantly elevated our brand. Our sales and online presence have grown tremendously, and we’re excited about the future!
                </blockquote>
              </div>
              <div className="author">
                <h4>- The Amor Blue Team</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-d__slider-w section__content-cta">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1400: {
              slidesPerView: 5,
              centeredSlides: true,
            },
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className="project-d__slider"
        >
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={done} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dtwo} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dthree} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfour} alt="Image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-d__slider-single">
              <Image src={dfive} alt="Image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
    


 {/* Service Details Section */}
    
      <section className="section service-details fade-wrapper" style={{ paddingTop: "0px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="service-details__slider">
                <div className="service-details__slider-single">
                  
                <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image src={package1} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">SOCIAL MEDIA</h3>
                          
                            <p>
                            Behind-the-scenes content showcasing the perfume-making process and the inspirations behind each scent.
Customer testimonials featured in stories and posts to create authenticity.
Scent challenges and interactive posts where followers shared their favorite Amor Blue fragrances using the brand’s hashtags.


                            </p>
                            </div>
                        </div>
                     
                    </div>
                 
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">WEBSITE DESIGNING AND DEVELOPMENT</h3>
                          <p>
                          The website revamp was focused on creating a luxurious, user-friendly experience:

Elegant & Minimalist UI
Designed to reflect the sophistication of the brand, the website features muted tones, clean lines, and high-quality visuals that convey luxury.
Fragrance Discovery Tools
Introduced interactive quizzes that helped customers find their perfect scent based on personality, occasion, and scent preferences.
                          </p>
                           
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={package2} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image src={package3} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">INFLUENCER COLLABORATION</h3>
                          
                         
                            <p>To reach a wider, yet targeted, audience, we collaborated with influencers and perfume experts:

Luxury & Lifestyle Influencers
We partnered with top-tier influencers in the luxury and lifestyle space, who aligned with the brand’s values of sophistication and elegance.
Authentic Scent Reviews & Unboxings
Influencers shared their first impressions through unboxing videos and detailed reviews, educating their followers about the quality and emotional depth of each fragrance.</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="details-group section__cta text-start">
                    <h3 className="title-anim">The Result</h3>
                    <p>
                    The future of Amor Blue looks bright as it continues to captivate fragrance enthusiasts and luxury consumers with its exquisite, emotion-driven scent.
 


                    </p>
                    <p> Amor Blue has successfully positioned itself as a luxury fragrance brand, connecting with consumers through compelling storytelling and a seamless digital experience. Moving forward, the brand plans to:

Expand its fragrance collection with new, unique scents.
Deepen influencer partnerships to reach new audiences and continue brand advocacy.
Introduce immersive digital and in-store experiences to allow consumers to experience the brand in more engaging ways.
                    </p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        </div>


        
      </section>
      </>

  );
};

export default Amorb;


 











 

 


 

 


 
