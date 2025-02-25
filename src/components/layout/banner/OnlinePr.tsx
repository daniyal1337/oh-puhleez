import React from "react";
import Link from "next/link";
import Image from "next/image";

import pr from "public/images/service/pr.png";
import pr1 from "public/images/service/pr1.jpg";
import pr2 from "public/images/service/pr2.jpg";


const  OnlinePr= () => {
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
              <h2 className="title title-anim">Online Press Release</h2>
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
                  Online PR
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
                  <Image src={pr} alt="Image" />
                </div>
                <div className="details-group section__cta text-start">
                  <h3 className="title-anim">Why do we use it?</h3>
                  <p>
                  When you think about starting a new business or launching a product, you reach the market with lots of creative ideas. But are these ideas enough to take your achievement on the right track? Do your ideas include any of the best press release distribution services? Yes, this old but the most effective marketing tool of promoting your services.



                  </p>
                  <p>
                  From creating awareness about your brand to reaching the wider audience, a press release can never prove you wrong.
                  </p>
                </div>
                <div className="section__content-cta">
                  <div className="row gaper">
                    <div className="col-12 col-lg-7">
                      <div className="details-group">
                        <h3 className="title-anim">The need for PR</h3>
                        <p>
                        After learning its importance, now, you might be thinking about selecting the press release distribution, considering all the services are the same. Your story needs to distribute effectively, only then your business will get a boost.
                        </p>
                        <p>Oh Puhleeez offers the most comprehensive PR submission service. We are globally recognised online branding company that sends your press-release and content to Indian and international reporters including Newspaper, TV, Radio and others. Reporters can directly contact sources. Your article will reach portals, Indian & International reporters, and bloggers.</p>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="poster-small">
                        <Image src={pr1} alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>


                <div className="section__content-cta">
                  <div className="row gaper">

                  <div className=" col-12 col-lg-7">
                      <div className="poster-small">
                        <Image src={pr2} alt="Image" />
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="details-group">
                        <h3 className="title-anim">WHY WORK WITH OH PUHLEEEZ?</h3>
                        
                        <p>
                        Our experienced team gives their best to plan and make a press release interesting for journalists, having received the maximum number of publications. Our main advantage compared to other newswires for sending a press release is an attentive approach to the client and solid communication. Get in touch with us, we are always open and promptly solve any questions.


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

export default OnlinePr;













