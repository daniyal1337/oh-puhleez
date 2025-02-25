import React from "react";
import Image from "next/image";
import Link from "next/link";
import one from "public/images/blog/one.jpg";
import two from "public/images/blog/two.jpg";
import three from "public/images/blog/three.jpg";
import four from "public/images/blog/four.jpg";

const HomeBlog = () => {
  return (
    <section className="section blog fade-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="section__header text-center">
              <span className="sub-title">
                How we do!
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">Work Process</h2>
            </div>
          </div>
        </div>

        {/* Blog Sections */}
        <div className="row gaper">
          {/* Brainstorming */}
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={one} alt="Image" style={{ width: "1250px", height: "auto" , maxWidth:"100%" }} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">Brainstorming</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    01 <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>We Brainstorm creative ideas with a common approach method for finding new ideas, which is based on spontaneity and unfiltered creativity. We abide by No criticism, arguing, or negative comments in our Approach.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Approaching */}
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={two} alt="Image" style={{  width: "1250px", height: "auto" , maxWidth:"100%"  }} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">Approaching</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    02 <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>We identify the key processes and define the standards. We measure and evaluate the feasibility of the plan to bring maximum RoI. The approach is documented to achieve the desired quality with continuous room for improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="row gaper" style={{ marginTop: "30px" }}>
          {/* Adjusting */}
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={three} alt="Image" style={{  width: "1550px", height: "auto" , maxWidth:"100%"  }} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">Adjusting</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    03 <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>With a swim lane diagram, we assess the problems within the strategy and find the gap in the Branding technique. Every bottleneck, cost restraint is closely picked and knocked out to avoid any delay in the Branding process.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="col-12 col-md-6">
            <div className="blog__single fade-top" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <div className="blog__single-thumb topy-tilt">
                <Link href="blog-single">
                  <Image src={four} alt="Image" style={{  width: "1250px", height: "auto" , maxWidth:"100%"  }} />
                </Link>
              </div>
              <div className="blog__single-content">
                <h4>
                  <Link href="blog-single">Result and Outcome</Link>
                </h4>
                <div className="blog__single-meta">
                  <Link href="blog" className="sub-title">
                    04 <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <p>With a Process-Driven approach, the Branding restrictions are overcome and unfiltered creative ideas are put into action. The measuring of the plan is continuously carried out to yield the best results for the investments our Partners make.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBlog;
