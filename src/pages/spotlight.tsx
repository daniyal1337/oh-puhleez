import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Spotl from "@/components/containers/project/Spotl";
import UxProcess from "@/components/containers/service-details/UxProcess";

function spotlight() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="The Spotlight"
            navigation="The Spotlight"
            parent="Projects"
            parentLink="our-projects"
          />
          <Spotl/>
          <UxProcess />
        </Layout>
      );
    };

export default spotlight
