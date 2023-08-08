import { Text } from "Components/UI/Typography";
import { styled } from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
`;

export const ArtistName = styled(Text)`
  max-width: 140px;
  text-align: center;
`;
