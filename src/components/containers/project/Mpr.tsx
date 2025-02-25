import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import poster from "public/images/projects/mpro2.png";
import iconone from "public/images/projects/icon-one.png";
import icontwo from "public/images/projects/icon-two.png";
import iconthree from "public/images/projects/icon-three.png";
import done from "public/images/projects/mpro1.png";
import dtwo from "public/images/projects/mpro3.png";
import dthree from "public/images/projects/mpro4.png";
import dfour from "public/images/projects/mpro5.png";
import dfive from "public/images/projects/mpro6.png";


import package1 from "public/images/projects/mpro11.png";
import package2 from "public/images/projects/mpro12.png";
import package3 from "public/images/projects/mpro13.png";

const Mpr = () => {
  return (

    <>
    <section className="section project-d">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Brand Overview</h3>
              <p>
              Mpro is India’s leading manufacturer and distributor of professional audio equipment, offering innovative and top-quality solutions for the sound industry. With a legacy of excellent performance spanning generations, Mpro has built a reputation for superior quality and trust within the Indian market. The brand is committed to delivering cutting-edge audio technology tailored to the needs of professionals and businesses alike.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="project-d-group">
              <h3 className="light-title-lg">Project Description</h3>
              <p>
                
              Mpro approached our digital marketing agency with the goal of amplifying its digital presence, increasing brand awareness, and generating higher sales through online channels. The objective was to position Mpro as a premium and reliable brand within the professional audio equipment industry while targeting musicians, sound engineers, event organizers, and commercial buyers.
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
              We devised a comprehensive digital marketing strategy to establish Mpro’s authority in the professional audio equipment industry. Our plan included high-quality content creation, engaging social media campaigns, influencer collaborations, website optimization, and paid advertising. By producing immersive product showcases, behind-the-scenes factory tours, and expert reviews, we enhanced Mpro’s credibility. Our influencer collaborations with sound engineers, musicians, and event organizers further solidified the brand’s trust. The website underwent a complete overhaul to improve user experience, integrate an intuitive e-commerce platform, and optimize for search engines. Our paid advertising strategy included targeted Google Ads and social media campaigns, ensuring Mpro reached the right audience. Through these combined efforts, we successfully increased brand visibility, engagement, and sales.
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
                “The transformation our brand has undergone with this digital marketing strategy has been phenomenal. Our online presence has strengthened, engagement has skyrocketed, and we’ve seen a significant increase in sales."
                </blockquote>
              </div>
              <div className="author">
                <h4>- Mpro Team</h4>
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
                            Developed a structured content calendar featuring product spotlights, expert insights, and user testimonials.

Created high-quality videos showcasing product performance in real-world settings.

Launched interactive campaigns such as sound mixing contests and live Q&A sessions with industry professionals.

Utilized trending industry hashtags and SEO-optimized captions for greater organic reach.

Implemented paid campaigns on Facebook, Instagram, and LinkedIn to target relevant audience segments.


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
                          Revamped the website with an intuitive UI/UX for seamless navigation and purchasing.

Implemented SEO strategies to improve search engine rankings and product discoverability.

 
 
                          </p>
                          <p> Integrated an advanced e-commerce system for easy product browsing and checkout.

Added a blog section featuring expert guides, product comparisons, and technical insights.  
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
                          <Image style={{maxHeight:"60vh"}} src={package3} alt="Image" />
                         </div>
                            </div>
                            <div className="col-12 col-lg-5">
                              <div className="details-group">
                          <h3 className="title-anim">INFLUENCER COLLABORATION</h3>
                          
                         
                            <p>Partnered with professional sound engineers, musicians, and DJs for product endorsements.

Conducted live demonstrations, product reviews, and unboxing videos.

Hosted online workshops and webinars featuring industry experts.

Leveraged micro and macro influencers to generate authentic brand advocacy.

Paid Advertising & Performance Marketing

Launched high-converting Google Ads campaigns targeting audio professionals and event organizers.

Ran retargeting ads to re-engage visitors who had previously explored Mpro’s website..</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className="details-group section__cta text-start">
                    <h3 className="title-anim">The Result</h3>
                    <p>
                   
 
                    Boosted Social Media Engagement – Followers grew by 300% in six months, with an engagement rate of 40%.

Higher Website Traffic – Organic traffic increased by 200%, with a 30% boost in conversion rates.

Enhanced Brand Awareness – Influencer campaigns led to a 50% increase in brand recognition and credibility.

Increase in Sales – Online sales surged by 80% within the first quarter of implementation.

                    </p>
                    <p>  By implementing a dynamic and data-driven digital marketing strategy, we successfully positioned Mpro as a leader in the professional audio equipment industry. Through engaging social media content, influencer partnerships, website optimization, and targeted advertising, we enhanced brand visibility, trust, and sales. Moving forward, we aim to sustain this growth by expanding into new markets and leveraging innovative digital trends.
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

export default Mpr;

 