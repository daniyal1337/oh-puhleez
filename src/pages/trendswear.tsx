import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Trends from "@/components/containers/project/Trends";
import UxProcess from "@/components/containers/service-details/UxProcess";

function trendswear() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="TrendsWear"
            navigation="TrendsWear"
            parent="Projects"
            parentLink="our-projects"
          />
          <Trends/>
          <UxProcess />
        </Layout>
      );
    };

export default trendswear
