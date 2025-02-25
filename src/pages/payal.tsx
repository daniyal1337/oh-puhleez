import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
 import Paya from "@/components/containers/project/Paya";
import UxProcess from "@/components/containers/service-details/UxProcess";

function payal() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Payal Clothing"
            navigation="Payal Clothing"
            parent="Projects"
            parentLink="our-projects"
          />
         <Paya/>
          <UxProcess />
        </Layout>
      );
    };

export default payal
