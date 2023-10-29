import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page" pageDescription="This is the home page" />
    </div>
  );
};

export const Head = () => <title>Home Page</title>;
export default IndexPage;
