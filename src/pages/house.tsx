import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Hous from "@/components/containers/project/Hous";
import UxProcess from "@/components/containers/service-details/UxProcess";

function house() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="House of celebs"
            navigation="House of celebs"
            parent="Projects"
            parentLink="our-projects"
          />
         <Hous/>
          <UxProcess />
        </Layout>
      );
    };

export default house
