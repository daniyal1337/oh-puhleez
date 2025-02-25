import React from 'react'
import Layout from "@/components/layout/Layout";
import Startu from '@/components/layout/banner/Startu';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

function startup() {
  return (
    <Layout header={2} footer={5} video={false}>
      <Startu/>
      <UxProcess />
      <CtaTwo />
    </Layout>
  )
}

export default startup
