import React from "react";
import styled from "styled-components";
import { H2, H3 } from "styles";
import Collapsible from "react-collapsible";
import Ingredients from "components/Ingrediants";
import { isEmpty } from "lodash";
import * as api from "api";

const Container = styled.div`
  .meal {
    margin: 16px 0px;
    cursor: pointer;
    max-width: 335px;
    &.open {
      .arrow {
        transform: rotate(-90deg);
      }
    }
    * {
      transition: all 0.2s ease;
    }
  }
  .ingredients {
    padding: 20px 40px;
    max-width: 335px;
  }
`;

const MealHeader = styled.div`
  max-width: 335px;
  background-color: ${({ theme }) => theme.colors.lightred};
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BackButton = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  display: flex;
  margin: 16px 0px 30px;
  align-items: center;
  cursor: pointer;
  span,
  svg {
    margin-left: 5px;
  }
`;

const Plan = ({ plan }) => {
  return (
    <Container>
      <BackButton href={"/"}>
        <svg
          width="16"
          height="12"
          viewBox="0 0 16 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.17 7L8.59 10.59L10 12L16 6L10 0L8.59 1.41L12.17 5H0V7H12.17Z"
            fill="black"
          />
        </svg>
        <span>رجوع</span>
      </BackButton>
      <H2>{`وجبات النظام ${plan.order}#`}</H2>

      {!isEmpty(plan) &&
        plan.meals.map(({ mealName, ingredients }, i) => (
          <Collapsible
            easing="ease"
            transitionTime={100}
            openedClassName="meal open"
            className="meal"
            key={i}
            contentInnerClassName="ingredients"
            trigger={
              <MealHeader>
                <H3>{mealName}</H3>
                <svg
                  className="arrow"
                  width="7"
                  height="14"
                  viewBox="0 0 7 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.43989 0.59511C6.11966 0.268417 5.59355 0.268511 5.27344 0.595318L2.35792 3.57183C0.492254 5.47653 0.492252 8.52347 2.35792 10.4282L5.27344 13.4047C5.59355 13.7315 6.11966 13.7316 6.43989 13.4049C6.75105 13.0874 6.75112 12.5794 6.44005 12.2619L4.14222 9.91632C2.55495 8.29607 2.55495 5.70393 4.14222 4.08368L6.44005 1.73811C6.75112 1.42058 6.75105 0.912553 6.43989 0.59511Z"
                    fill="black"
                    fillOpacity="0.6"
                  />
                </svg>
              </MealHeader>
            }
          >
            <Ingredients ingredients={ingredients} />
          </Collapsible>
        ))}
    </Container>
  );
};

export async function getServerSideProps(ctx) {
  const { plans } = await api.getClient(process.env.CLIENT_CODE);
  const plan = plans.filter(
    ({ order }) => order === parseInt(ctx.params.planId)
  )[0];
  return {
    props: {
      plan: plan ? plan : {},
    },
  };
}

export default Plan;
