import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { H3, P } from "styles";
const Container = styled.div`
  max-width: 335px;
  background-color: ${({ highlighted, theme }) =>
    highlighted ? theme.colors.darkred : theme.colors.lightred};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
  &::hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  }
  &:last-of-type {
    margin-bottom: 30px;
  }
  svg {
    display: block;
  }
  .plan-details {
    margin-left: 25px;
  }
`;
const PlanImage = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
`;
const ShortPreview = styled(P)`
  font-size: 12px;
  opacity: 0.6;
`;
const CaloriesAmout = styled(P)`
  font-size: 12px;
  opacity: 0.4;
`;

const PlanSummary = ({
  highlighted = false,
  plan: { calories = "1800", order, meals = [] },
}) => {
  return (
    <Link href={"/" + order}>
      <Container highlighted={highlighted}>
        <PlanImage>
          <img src={"/food-illustrations/" + order + ".svg"} alt="" />
        </PlanImage>
        <div className="plan-details">
          <H3>{`نظام ${order}#`}</H3>
          <ShortPreview>
            {meals
              .map(({ ingredients }) =>
                ingredients
                  .map(({ ingredientFullinfos }) => ingredientFullinfos)
                  .join()
              )
              .join()
              .slice(0, 36) + "..."}
          </ShortPreview>
          <CaloriesAmout>{calories + " كالوري"}</CaloriesAmout>
        </div>
        <svg
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
      </Container>
    </Link>
  );
};

export default PlanSummary;
