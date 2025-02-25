import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Bellaa from "@/components/containers/project/Bellaa";
import UxProcess from "@/components/containers/service-details/UxProcess";

function bella() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Bella Forte"
            navigation="Bella Forte"
            parent="Projects"
            parentLink="our-projects"
          />
         <Bellaa/>
          <UxProcess />
        </Layout>
      );
    };

export default bella
