import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;

  }
  `;

export const GlobalContainer = styled.div`
  padding: 0px 20px;
  margin: 0 auto;
  width: calc(100% - 40px);

  @media (min-width: 560px) {
    max-width: 50%;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
`;
export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;
