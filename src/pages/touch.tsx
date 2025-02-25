import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Touc from "@/components/containers/project/Touc";
import UxProcess from "@/components/containers/service-details/UxProcess";

function touch() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="The Ele Touch"
            navigation="The EleTouch"
            parent="Projects"
            parentLink="our-projects"
          />
        <Touc/>
          <UxProcess />
        </Layout>
      );
    };
export default touch
