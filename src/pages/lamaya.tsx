import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Lama from "@/components/containers/project/Lama";
import UxProcess from "@/components/containers/service-details/UxProcess";

function lamaya() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Lamaya Organics"
            navigation="Lamaya Organics"
            parent="Projects"
            parentLink="our-projects"
          />
          <Lama/>
          <UxProcess />
        </Layout>
      );
    };

export default lamaya
