import React from "react";
import { P } from "styles";
import styled from "styled-components";

const Container = styled.div``;
const Ingredient = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const IngredientQuantity = styled(P)`
  min-width: 30px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.lightred};
`;

const Ingredients = ({ ingredients }) => {
  return (
    <Container>
      {ingredients.map(({ ingredientName, quantity }, i) => (
        <Ingredient key={i}>
          <P>{ingredientName}</P>
          <IngredientQuantity>{quantity}</IngredientQuantity>
        </Ingredient>
      ))}
    </Container>
  );
};

export default Ingredients;
