import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import FaqMain from "@/components/containers/FaqMain";

const FaqPage = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner title="Career  Opportunities" navigation="Career" />
      <FaqMain />
    </Layout>
  );
};

export default FaqPage;
