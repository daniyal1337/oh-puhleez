import React from 'react'
import Layout from "@/components/layout/Layout";
// import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import CorpBrand from '@/components/layout/banner/CorpBrand';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function corporate() {
  return (
    <Layout header={2} footer={5} video={false}>
  <CorpBrand />
    <UxProcess />
    <CtaTwo />
  </Layout>
  );
};

export default corporate
