import React, { useState } from "react";

const UxProcessTwo = () => {
  const [imgTab, setImgTab] = useState(0);

  return (
    <section className="section ux-process fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                Explore
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Our Skills</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-f-wrapper">
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 0 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>15+
                    Industries</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We cater to various sectors, including Education, Government, and Corporate.
Our industry-specific solutions ensure growth and brand recognition.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 0 ? -1 : 0)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 1 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>40+
                    Active Clients</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  From Branding to Web Development, we serve businesses with innovative strategies.
                  Our tailored solutions help clients achieve their goals efficiently.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 1 ? -1 : 1)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 2 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>100+
                    Projects Done</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  We have successfully executed Marketing, Social Media, and Lead Generation campaigns.
                  Our expertise ensures impactful results and business growth.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 2 ? -1 : 2)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 3 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>99%
                    Success Rate</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  With strong Branding & Identity, Performance Marketing, and SEO, we drive success.
                  Our proven strategies maximize brand visibility and conversions..
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 3 ? -1 : 3)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 4 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>500+ Satisfied Customers</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  Customer trust is our priority, ensuring retention, referrals, and positive feedback.
We build long-term relationships through quality services and innovation.


                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 4 ? -1 : 4)}
                ></button>
              </div>
              <div
                className={
                  "service-f-single fade-top " +
                  (imgTab == 5 ? " service-f-single-active" : " ")
                }
              >
                <div className="single-item">
                  <div className="intro-btn">
                    <h4>24/7 Support Availability</h4>
                  </div>
                </div>
                <div className="single-item p-single p-sm body-cn">
                  <p>
                  Our dedicated team provides round-the-clock technical support and maintenance.
We ensure smooth operations with prompt query resolution and assistance.
                  </p>
                </div>
                <button
                  className="toggle-service-f"
                  onClick={() => setImgTab(imgTab === 5 ? -1 : 5)}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UxProcessTwo;
