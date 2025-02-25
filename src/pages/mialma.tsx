import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
 import Mialm from "@/components/containers/project/Mialm";
import UxProcess from "@/components/containers/service-details/UxProcess";

function mialma() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Mi Alma"
            navigation="Mi Alma"
            parent="Projects"
            parentLink="our-projects"
          />
            <Mialm/>
          <UxProcess />
        </Layout>
      );
    };

export default mialma;
