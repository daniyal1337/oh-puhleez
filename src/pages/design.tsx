import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import PackDesign from '@/components/layout/banner/PackDesign';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function design() {
  return (
    <Layout header={2} footer={5} video={false}>
    <PackDesign/>
    <UxProcess />
    <CtaTwo />
  </Layout>
  );
};

export default design
