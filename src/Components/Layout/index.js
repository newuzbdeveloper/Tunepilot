import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0 120px;
  margin: 0 auto;

  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.content || "flex-start"};
  align-items: ${(props) => props.items || "start"};
`;
