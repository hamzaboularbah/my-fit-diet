import React, { useEffect } from "react";
import { H2 } from "styles";
import PlanSummary from "components/PlanSummary";
import * as api from "api";

const Home = () => {
  useEffect(() => {
    api.getClient("hamz1123hamz").then((data) => console.log(data));
  });
  return (
    <React.Fragment>
      <H2>نظام اليوم !</H2>
      <PlanSummary></PlanSummary>
      <H2>أنظمتي الغدائية</H2>
      ...
    </React.Fragment>
  );
};

export default Home;
