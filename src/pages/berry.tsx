import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Berr from "@/components/containers/project/Berr";
import UxProcess from "@/components/containers/service-details/UxProcess";

function berry() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Berry Essentials"
            navigation="Berry Essentials"
            parent="Projects"
            parentLink="our-projects"
          />
          <Berr/>
          <UxProcess />
        </Layout>
      );
    };

export default berry
