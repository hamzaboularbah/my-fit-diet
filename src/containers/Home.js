import React, { useEffect, useContext } from "react";
import PlanSummary from "components/PlanSummary";
import { H2 } from "styles";
import { addDays } from "date-fns";
import { isEmpty } from "lodash";
import { getPlanByDate } from "helpers";
import styled from "styled-components";
import AppContext from "contexts/App/AppContext";

const Container = styled.div`
  .upcoming-plans {
    margin-top: 30px;
  }
`;

const Home = () => {
  const {
    clientData: { plans, name, startDate },
    getClientData,
  } = useContext(AppContext);
  useEffect(() => {
    isEmpty(plans) && getClientData();
    console.log(name);
  }, [name]);
  return (
    <Container>
      <H2>نظام اليوم !</H2>
      {!isEmpty(plans) && (
        <PlanSummary
          highlighted
          plan={getPlanByDate(plans, new Date(), startDate)}
        />
      )}
      <div className="upcoming-plans">
        <H2>الأنظمة القادمة...</H2>
        {!isEmpty(plans) &&
          Array.from({ length: plans.length - 1 }).map((_, i) => (
            <PlanSummary
              key={i}
              plan={getPlanByDate(plans, addDays(new Date(), i + 1), startDate)}
            />
          ))}
      </div>
    </Container>
  );
};

export default Home;
