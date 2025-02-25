import React from 'react'
import Layout from "@/components/layout/Layout";
import Sear from '@/components/layout/banner/Sear';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function search() {
  return (
    <Layout header={2} footer={5} video={false}>
      <Sear/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default search;
