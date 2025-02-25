import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Mpr from "@/components/containers/project/Mpr";
import UxProcess from "@/components/containers/service-details/UxProcess";

function mpro() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Mpro Audio"
            navigation="Mpro Audio"
            parent="Projects"
            parentLink="our-projects"
          />
        <Mpr/>
          <UxProcess />
        </Layout>
      );
    };

export default mpro
