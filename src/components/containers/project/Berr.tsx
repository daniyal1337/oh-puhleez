import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/berr1.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/berr2.png";
import dtwo from "public/images/projects/berr3.jpg";
import dthree from "public/images/projects/berr4.jpg";
import dfour from "public/images/projects/berr5.jpg";
import dfive from "public/images/projects/berr6.jpg";


import package1 from "public/images/projects/berry11.jpg";
import package2 from "public/images/projects/berry12.jpg";
import package3 from "public/images/projects/berry13.jpg";

const  Berr = () => {
  return (

    <>
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Brand Overview</h3>
              <p>
              Berry Essentials emerged from a collective struggle with skin issues that many of us can relate to—constant irritation, breakouts, and frustration from ineffective products filled with harsh chemicals. Our mission is simple: to offer clean, natural skincare solutions that nourish, protect, and heal your skin without the unwanted side effects. Born out of the frustration with conventional skincare, Berry Essentials is dedicated to bringing you pure, potent products that give your skin the love and care it truly deserves.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                
              In the quest for a solution to the skin problems many face, Berry Essentials aimed to transform the skincare market by offering products free of toxic chemicals. Our project’s goal was to redefine skincare by creating natural products that are as kind to your skin as they are effective. Through this venture, we sought to educate consumers about the dangers of harmful ingredients and the benefits of using clean, plant-based solutions.
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
              The journey wasn't without its hurdles. We encountered several challenges along the way:

Skepticism in the Market: With so many skincare brands claiming to be "natural," it was difficult to stand out and build trust with consumers.
Skin Sensitivities: Our target audience struggled with sensitive skin and was looking for products that wouldn’t trigger allergic reactions or irritations.
Educational Gap: Many customers didn’t understand the importance of clean skincare or how harmful chemicals could impact their skin over time.
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
              To address these challenges, we took a multi-pronged approach:

Clean Ingredients
We meticulously selected ingredients known for their healing, calming, and hydrating properties, focusing on natural oils, botanicals, and plant-based elements. Each product was designed to be free from parabens, sulfates, artificial fragrances, and harsh chemicals.

Educational Content
We prioritized educating our audience through blogs, videos, and social media posts. These explained the harmful effects of synthetic chemicals, highlighted the benefits of natural skincare, and provided practical tips for a healthier skincare routine.
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
                "I’ve been using Samarya’s hair care range for a month, and my hair has never felt better. It’s the perfect blend of nature and science!"
                </blockquote>
              </div>
              <div className="author">
                <h4>- Ramesh T., Customer</h4>
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
                          <Image style={{maxHeight:"60vh"}} src={package1} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">SOCIAL MEDIA</h3>
                          
                            <p>
                            We turned to social media as a tool to connect directly with our audience, share our message, and promote natural skincare. Our strategy included:

Instagram Reels & Stories: We created engaging content to showcase the effectiveness of our products and demonstrate real customer results.
Skin Education Posts: Weekly posts focused on skincare tips, ingredient breakdowns, and myths about chemicals.
User-Generated Content: Encouraged customers to share their skin stories and product experiences using the hashtag #BerryEssentialsGlow, building a community of individuals seeking natural solutions.


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
                          To make shopping for clean skincare a seamless experience, we revamped our website with the following features:

Clean & Minimalist Design: A modern, simple layout that mirrored the purity of our products, focusing on ease of navigation.
 
                          </p>
                          <p>Product Finder Quiz: A skin-type quiz that helps customers identify which products best suit their needs.
                          Ingredient Transparency: Detailed product pages with ingredient lists, their benefits, and how they work together for optimal skin health..  
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image style={{maxHeight:"50vh"}} src={package2} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="section__content-cta">
                        <div className="row gaper">

                            <div className=" col-12 col-lg-7">
                            <div className="poster-small">
                          <Image style={{maxHeight:"40vh"}} src={package3} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">INFLUENCER COLLABORATION</h3>
                          
                         
                            <p>We reached out to trusted influencers within the skincare community to spread the message about Berry Essentials:

Micro-Influencers: Collaborated with influencers who had a strong connection with their audience and were passionate about natural skincare. Their authentic reviews resonated with our target market.</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="details-group section__cta text-start">
                    <h3 className="title-anim">The Result</h3>
                    <p>
                   
 
                    Continue to focus on eco-friendly packaging and sustainable sourcing to maintain our commitment to both skin and planet health.

                    </p>
                    <p> Berry Essentials has carved out a niche in the skincare market by staying true to its core values of purity, transparency, and effectiveness. Moving forward, we plan to:

Expand Product Line: Introduce more products to cater to different skin concerns like acne, aging, and pigmentation.
In-Store Launches: Bring Berry Essentials to select retail stores and pop-up events to reach a wider audience.
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

export default Berr;


 
  
 











 

 


 

 


 


 


     

 
