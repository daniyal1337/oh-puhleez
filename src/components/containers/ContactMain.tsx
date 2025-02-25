import React from "react";
import Image from "next/image";
import Link from "next/link";
import phone from "public/images/phone.png";
import mail from "public/images/mail.png";
import location from "public/images/location.png";
import time from "public/images/time.png";

const ContactMain = () => {
  return (
    <section className="section contact-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={phone} alt="Image" />
              </div>
              <div className="content">
                <h4>Phone </h4>
                <p>
                  <Link href="tel:+91 9999 848 160">Mobile : 9999 848 160</Link>
                </p>
                
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={mail} alt="Image" />
              </div>
              <div className="content">
                <h4>Mail Address</h4>
                <p>
                  <Link href="mailto: mail@ohpuhleeez.com">
                  mail@ohpuhleeez.com 
               
                  </Link>
                </p>
                <p>
                  <Link href="mailto:info.ohpuhleeez@gmail.com">
                  info.ohpuhleeez@gmail.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={location} alt="Image" />
              </div>
              <div className="content">
                <h4>Our Location</h4>
                <p>
                  <Link
                    href="https://www.google.com/maps/place/Oh!+Puhleeez+Advertising+%26+Branding+Agency/@28.6234341,77.1326013,17z/data=!3m1!4b1!4m6!3m5!1s0x390d018e057a490d:0x835540ba0bf6839c!8m2!3d28.6234341!4d77.1351762!16s%2Fg%2F11fns9hxgy?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                  >
CB - 165, First Floor, Ring Road,
Naraina, New Delhi-110028
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div className="contact-m__single topy-tilt fade-top">
              <div className="thumb">
                <Image src={time} alt="Image" />
              </div>
              <div className="content">
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06pm</p>
                <p>Fri - Sat 4 pm - 10pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="map-wrapper">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="contact__map fade-top">
                    <iframe
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.619895822423!2d77.1326013!3d28.6234341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d018e057a490d%3A0x835540ba0bf6839c!2sOh!%20Puhleeez%20Advertising%20%26%20Branding%20Agency!5e0!3m2!1sen!2sin!4v1707573420000!5m2!1sen!2sin"
                      width="100"
                      height="800"
                      style={{ border: "0px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="contact-main__form  fade-top">
                    <h3>Leave A Message</h3>
                    <form
                      action="https://api.web3forms.com/submit"
                      method="post"
                      className="section__content-cta"
                    >
                      <input type="hidden" 
                      name="access_key"
                      value="3361d997-820d-4a63-8ad5-736d6c4928b0"
                      />
                      <div className="group-wrapper">
                        <div className="group-input ">
                          <input
                            type="text"
                            name="contact-name"
                            id="contactName"
                            placeholder="Name"
                          />
                        </div>
                        <div className="group-input ">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      
                      <div className="group-input ">
                          <input
                            type="number"
                            name="contact-number"
                            id="contactnumber"
                            placeholder="Contact Number"
                          />
                        </div>
                     
                      <div className="group-input ">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="form-cta justify-content-start">
                        <button type="submit" className="btn btn--primary">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
