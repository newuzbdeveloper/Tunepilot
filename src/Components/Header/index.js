import { Link } from "react-router-dom";
import { LogoIcon, Search } from "Components/UI/Icon";
import { LogoWrapper, Wrapper } from "./styled";
import { SectionSubTitle } from "Components/UI/Typography";
import IconButton from "Components/UI/IconButton";
import { ContentWrapper } from "Components/Layout";
import { useWindowSize } from "Hooks/useWindowSize";
import { breakPoints } from "Styles/BreakPoints";

export function Header() {
  const { width } = useWindowSize();
  const isMobileLayout = width < breakPoints.md;
  return (
    <Wrapper>
      <ContentWrapper display="flex" content="space-between" items="center">
        <Link to="/">
          <LogoWrapper>
            <LogoIcon />
            <SectionSubTitle>Tunepilot</SectionSubTitle>
          </LogoWrapper>
        </Link>
        <Link to="/Search">
          <IconButton
            withbackground
            width={isMobileLayout ? 45 : 58}
            height={isMobileLayout ? 45 : 58}
          >
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
