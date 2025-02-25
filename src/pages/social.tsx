import React from 'react'
import Layout from "@/components/layout/Layout";
import Socio from '@/components/layout/banner/Socio';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function social() {
  return (
    <Layout header={2} footer={5} video={false}>
  <Socio/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  )
}

export default social
