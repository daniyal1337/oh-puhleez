import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Samar from "@/components/containers/project/Samar";
import UxProcess from "@/components/containers/service-details/UxProcess";

function samarya() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Samarya Naturals"
            navigation="Samarya Naturals"
            parent="Projects"
            parentLink="our-projects"
          />
          <Samar/>
          <UxProcess />
        </Layout>
      );
    };

export default samarya
