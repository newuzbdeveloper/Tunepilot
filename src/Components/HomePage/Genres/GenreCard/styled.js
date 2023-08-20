import { SectionSubTitle } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 220px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border-radius: 25px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    content: "";
    background-image: ${(props) => `url(${props.image})`};
    background-position: center center;
    background-size: cover;
    border-radius: 25px;
  }

  ${device.md} {
    width: 137px;
    height: 95px;
  }
`;

export const GenreName = styled(SectionSubTitle)`
  z-index: ${({ theme }) => theme.zIndex["10"]};
`;
