import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import Amorb from "@/components/containers/project/Amorb";
import UxProcess from "@/components/containers/service-details/UxProcess";

function amor() {
    return (
        <Layout header={2} footer={5} video={0}>
          <CmnBanner
            title="Amor Blue"
            navigation="Amor Blue"
            parent="Projects"
            parentLink="our-projects"
          />
    ``````<Amorb/>
          <UxProcess />
        </Layout>
      );
    };
export default amor
