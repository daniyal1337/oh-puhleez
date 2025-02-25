import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Thesixsc from "@/components/containers/project/Thesixsc";
import UxProcess from "@/components/containers/service-details/UxProcess";

function thesix() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="The Six scents"
            navigation="The Six scents"
            parent="Projects"
            parentLink="our-projects"
          />
           <Thesixsc/>
          <UxProcess />
        </Layout>
      );
    };

export default thesix
