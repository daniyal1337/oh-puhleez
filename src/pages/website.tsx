import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import Web from '@/components/layout/banner/Web';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function website() {
  return (
    <Layout header={2} footer={5} video={false}>
      <Web/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default website
