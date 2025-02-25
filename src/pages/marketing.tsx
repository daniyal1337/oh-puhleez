import React from 'react'
import Layout from "@/components/layout/Layout";
import Mark from '@/components/layout/banner/Mark';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function marketing() {
  return (
    <Layout header={2} footer={5} video={false}>
      <Mark/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default marketing;
