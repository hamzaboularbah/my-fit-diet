import React from "react";
import { useParams } from "react-router-dom";

const Plan = () => {
  const { planId } = useParams();
  return <div>plan : {planId} </div>;
};

export default Plan;
