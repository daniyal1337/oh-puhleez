import React from 'react'
import Layout from "@/components/layout/Layout";
import OnlinePr from '@/components/layout/banner/OnlinePr';
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";


function OnlinePrPage() {  // Change function name to avoid conflicts
    return (
      <Layout header={2} footer={5} video={false}>
        <OnlinePr />
        <UxProcess />
        <CtaTwo />
      </Layout>
    );
  };
  
  export default OnlinePrPage;
  