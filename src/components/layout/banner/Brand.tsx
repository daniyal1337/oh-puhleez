import React from "react";
import Link from "next/link";
import Image from "next/image";
import thumbone from "public/images/service/thumb-one.png";
import thumbtwo from "public/images/service/thumb-two.png";
import strategy from "public/images/service/strategy.jpg";
import strategy1 from "public/images/service/strategy1.jpg";
import strategy2 from "public/images/service/strategy2.jpg";
import strategy3 from "public/images/service/strategy3.jpg";
const Brand = () => {
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
                <h2 className="title title-anim">Brand Strategy</h2>
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
                      Brand Strategy
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
                    <Image src={strategy} alt="Image" />
                  </div>
                  <div className="details-group section__cta text-start">
                    <h3 className="title-anim">Why do we use it?</h3>
                    <p>
                    Brand Counselling is a talking therapy that involves a trained therapist listening to you and helping you find ways to deal with branding issues. Sometimes the term "Brand counselling" is used to refer to taking the advice of the Counsellor, gaining the ideas, maintain the budget strategies, but Brand counselling is also a type of Brand therapy in its own right way.
                    </p>
                    <p>
                    It does not matter if you are a small practice, large hospital, or solo provider, building your brand is essential if you are looking for capturing market share or at least recognition in the market.
                    </p>
                  </div>
                  <div className="section__content-cta">
                    <div className="row gaper">
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim">WHY BRAND COUNSELLING AT OH PUHLEEEZ?</h3>
                          <p>
                            1. We focus on the Clients & their business goals <br />
                            2. We are specific with what we provide <br />
                            3. We focus mainly SEO Value and other factors <br />
                            4. We maintain Consistency <br />
                            5. We aim at creating a perfect website to cater your business needs <br />
                           6. We get on Socials; engagement is crucial step of all. <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={strategy1} alt="Image" />
                        </div>
                      </div>
                    </div>
                  </div>
<br /><br />

                  <div className="section__content-cta">
                    <div className="row gaper">

                    <div className="col-12 col-lg-5">
                        <div className="poster-small">
                          <Image src={strategy2} alt="Image" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-7">
                        <div className="details-group">
                          <h3 className="title-anim"> Why Choose Us?</h3>
                          <p>
                        

✅ Customized Strategies – Tailored to fit your business objectives. <br />
✅ Expert Insights – Industry expertise to position your brand effectively. <br />
✅ Data-Driven Approach – Using insights to drive impactful branding. <br />
✅ Holistic Branding – Seamless integration across all brand channels. <br />
✅ Audience Research – Understanding your target market for precise engagement. <br />
✅ Competitive Analysis – Identifying opportunities to differentiate your brand. <br />
✅ Brand Storytelling – Creating a narrative that resonates with your audience. <br />
✅ Visual Identity Alignment – Ensuring consistency across all brand touchpoints.  <br />
✅ Marketing Strategy Integration – Aligning branding efforts with marketing <br />

Let’s Build Your Brand’s Future Together!

Ready to create a brand strategy that sets you apart? Contact us today and let’s craft a powerful brand presence for your business!
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

export default Brand;