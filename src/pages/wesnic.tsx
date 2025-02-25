import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Wesni from "@/components/containers/project/Wesni";
import UxProcess from "@/components/containers/service-details/UxProcess";

function wesnic() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Wesnic Clothing"
            navigation="Wesnic Clothing"
            parent="Projects"
            parentLink="our-projects"
          />
          <Wesni/>
          <UxProcess />
        </Layout>
      );
    };

export default wesnic
