import React, { useEffect, useState } from "react";
import PlanSummary from "components/PlanSummary";
import { H2 } from "styles";
import { addDays } from "date-fns";
import { isEmpty } from "lodash";
import { getPlanByDate } from "helpers";
import * as api from "api";
import styled from "styled-components";

const Container = styled.div`
  .upcoming-plans {
    margin-top: 30px;
  }
`;

const Home = () => {
  const [clientData, setClientData] = useState(null);
  useEffect(() => {
    api
      .getClient(process.env.REACT_APP_CLIENT_CODE)
      .then((data) => setClientData(data));
  }, []);
  return (
    <Container>
      <H2>نظام اليوم !</H2>
      {!isEmpty(clientData) && (
        <PlanSummary
          highlighted
          plan={getPlanByDate(
            clientData.plans,
            new Date(),
            clientData.startDate
          )}
        />
      )}
      <div className="upcoming-plans">
        <H2>الأنظمة القادمة...</H2>
        {!isEmpty(clientData) &&
          Array.from({ length: clientData.plans.length - 1 }).map((_, i) => (
            <PlanSummary
              key={i}
              plan={getPlanByDate(
                clientData.plans,
                addDays(new Date(), i + 1),
                clientData.startDate
              )}
            />
          ))}
      </div>
    </Container>
  );
};

export default Home;
