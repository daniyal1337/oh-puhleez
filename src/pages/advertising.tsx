import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import Advert from '@/components/layout/banner/Advert';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";


function advertising() {
  return (
    <Layout header={2} footer={5} video={false}>
      <Advert/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default advertising






