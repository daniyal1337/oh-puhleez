import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import Brand from '@/components/layout/banner/Brand';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";
function strategy() {
  return (
    <Layout header={2} footer={5} video={false}>
   <Brand/>
    <UxProcess />
    <CtaTwo />
  </Layout>
  );
};

export default strategy
