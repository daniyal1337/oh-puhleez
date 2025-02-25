import React from "react";
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import Visual from "@/components/layout/banner/Visual";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const visual_id = () => {
  return (
    <Layout header={2} footer={5} video={false}>
      <Visual/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default visual_id ;
