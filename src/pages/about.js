import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  return (
    <div>
      <div>
        <Layout
          pageTitle="About Page"
          pageDescription="This is the about page"
        />
      </div>
    </div>
  );
};

export const Head = () => <title>About Me</title>;
export default About;
