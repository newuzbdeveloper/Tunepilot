import Header from "Components/Header";
import Player from "Components/Player";
import { device } from "Styles/BreakPoints";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1920px;
  padding: 0 120px;
  width: 100%;
  margin: 0 auto;
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.items || "flex-start"};
  justify-content: ${(props) => props.content || "start"};

  ${device.md} {
    padding: 0 15px;
  }

  ${device.xl} {
    padding: 0 62px;
  }
`;

function Layout() {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <Player />
    </>
  );
}

export default Layout;
