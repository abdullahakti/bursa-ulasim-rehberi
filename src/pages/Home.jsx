/* eslint-disable no-unused-vars */
import React from "react";
import JumbotronAkti from "../components/JumbotronAkti";
import ContentArea from "../components/ContentArea";
import "./Home.css";

function Home() {
  return (
    <>
      <JumbotronAkti />
      <div className="gap"></div>
      <ContentArea />
    </>
  );
}

export default Home;
