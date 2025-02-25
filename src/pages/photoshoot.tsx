import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import Photo from '@/components/layout/banner/Photo';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function photoshoot() {
  return (
    <Layout header={2} footer={5} video={false}>
   <Photo/>
    <UxProcess />
    <CtaTwo />
  </Layout>
  );
};

export default photoshoot
