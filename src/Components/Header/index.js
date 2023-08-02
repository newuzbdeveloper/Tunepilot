import { LogoIcon, Search } from "Components/UI/Icon";
import { LogoWrapper, Wrapper } from "./styled";
import { SectionSubTitle } from "Components/UI/Typography";
import IconButton from "Components/UI/IconButton";
export function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoIcon />
        <SectionSubTitle>Tunepilot</SectionSubTitle>
      </LogoWrapper>
      <IconButton withBackground width={58} height={58}>
        <Search />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
