import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import photoshoot2  from "public/images/service/photoshoot.jpg";
import photoshoot from "public/images/service/photoshoot2.png";


const Photo = () => {
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
                <h2 className="title title-anim">Photoshoots and Video Production</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">
                        <i className="fa-solid fa-house"></i>
                        Home
                      </Link> 
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="our-services">Our Services</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                    Photoshoots and Video Production
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
                    <Image src={photoshoot} alt="Image" />
                  </div>
                  <div className="details-group section__cta text-start">
                    <h3 className="title-anim">Why do we use it?</h3>
                    <p>
                    High-quality visual content is crucial for making a lasting impact in today’s digital landscape. At Oh Puhleeez, we specialize in professional photoshoots and video production, helping businesses create compelling visual narratives. Whether you need stunning product photography, corporate event coverage, or engaging promotional videos, we ensure that every frame reflects your brand’s essence and story.
                    </p>
                    <p>
                    With a team of creative professionals, we handle every aspect of production—from conceptualization to post-production editing. Our goal is to deliver visually captivating content that enhances brand identity, boosts engagement, and leaves a lasting impression on your audience.
                    </p>
                  </div>
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">Why Choose Us?</h3>
                          <p>
                          ✅ Creative & Professional Team – Skilled photographers and videographers.<br/> ✅ High-Quality Production – Delivering visually compelling content.<br/> ✅ Tailored Visual Solutions – Customized to fit your brand’s needs.<br/> ✅ End-to-End Services – From concept to final production, we handle it all.<br/> ✅ Cutting-Edge Equipment – Using the latest technology for top-tier production quality.<br/> ✅ Fast Turnaround – Ensuring timely delivery without compromising quality.<br/> ✅ Strategic Storytelling – Creating visuals that align with your brand at every point.<br/>
                          </p>
                          
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={photoshoot2} alt="Image" />
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

export default Photo;