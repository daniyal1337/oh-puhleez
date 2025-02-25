import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
 import Lecher from "@/components/containers/project/Lecher";
import UxProcess from "@/components/containers/service-details/UxProcess";

function lechery() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Lechery"
            navigation="Lechery"
            parent="Projects"
            parentLink="our-projects"
          />
         <Lecher/>
          <UxProcess />
        </Layout>
      );
    };

export default lechery;
