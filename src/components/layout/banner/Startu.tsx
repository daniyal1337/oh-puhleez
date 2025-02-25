import React from "react";
import Link from "next/link";
import Image from "next/image";

import start from "public/images/service/start.png";
import start2 from "public/images/service/start1.jpg";
import start3 from "public/images/service/start2.jpg";



const  Startu= () => {
  return (
    <>
    {/* Banner Section */}
    <section
      className="cmn-banner service-single-banner bg-img"
      style={{ backgroundImage: "url('/images/banner/cmn-banner-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper align-items-center">
          <div className="col-12 col-lg-5 col-xl-7">
            <div className="text-center text-lg-start">
              <h2 className="title title-anim">Start up Assistance</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="fa-solid fa-house"></i>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="our-services">our-services</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Start up Assistance
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-xl-5">
            <div className="slide-group justify-content-center justify-content-lg-end">
              <Link href="service-single" aria-label="previous item" className="slide-btn">
                <i className="fa-light fa-angle-left"></i>
              </Link>
              <Link href="service-single" aria-label="next item" className="slide-btn">
                <i className="fa-light fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Service Details Section */}
    <section className="section service-details fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-10">
            <div className="service-details__slider">
              <div className="service-details__slider-single"> 
                <div className="poster fade-top">
                  <Image src={start} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                  As a star-up we know how difficult it to survive in this dynamic market. It takes a lot of efforts, time, and courage to invest in your dreams. Keeping all these factors in mind we pledge to support & assist star-ups all along with their online branding services.




                  </p>
                  <p>
                  We turn names into BRANDS. With years of experience & hardwork of team at Oh Puhleeez, we are capable enough to support all the start-up with Branding.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">The need for professional branding services</h3>
                        <p>
                        Our services are designed to help businesses grow and establish a strong online presence. From social media engagement to lead generation and performance marketing, we ensure your brand reaches the right audience effectively. Website development plays a crucial role in enhancing customer interaction, while SEO ensures your business stays visible in search engines. Additionally, online PR and strategic press releases help create awareness and boost credibility, making your brand stand out.
                        </p>
                        
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={start2} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={start3} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">Our Services:</h3>
                        <h5>1. Social Media</h5>
                        <p>
                      Helps in building connections, engaging with key influencers, and improving customer service by gathering feedback and answering queries.

                   <br /> <br />   <h5>2. Lead Generation</h5>    Captures and nurtures potential customers, ensuring they are engaged until they are ready to make a purchase. Ideal for both B2B and B2C businesses.

                   <br />  <br />  <h5>3. Website Development </h5>  Establishes a strong online presence, enhances brand credibility, and plays a key role in lead nurturing for startups and established businesses.

               <br />  <br />  <h5>4. Performance Marketing </h5>     A results-driven marketing approach where advertisers pay only for specific actions, such as clicks, leads, or sales, ensuring better ROI.

                <br />   <br />  <h5>  5. Online PR </h5>    Creates brand awareness through press releases and media distribution, effectively reaching a larger audience and boosting business visibility.

                   <br />    <br />  <h5>6. Search Engine Optimization (SEO)</h5>  – Enhances website ranking on search engines, increases organic traffic, and ensures long-term online success for businesses.


                        </p>
                      </div>
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

export default Startu;
















 
