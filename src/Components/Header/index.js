import { Link } from "react-router-dom";
import { LogoIcon, Search } from "Components/UI/Icon";
import { LogoWrapper, Wrapper } from "./styled";
import { SectionSubTitle } from "Components/UI/Typography";
import IconButton from "Components/UI/IconButton";
import { ContentWrapper } from "Components/Layout";

export function Header() {
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
          <IconButton withbackground width={58} height={58}>
            <Search />
          </IconButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Header;
