import { ArrowLeft, ArrowRight } from "Components/UI/Icon";
import { SectionSubTitle } from "Components/UI/Typography";
import { Button, ButtonWrapper, TitleRow, Wrapper } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";

function Genres() {
  const [genres, setGenres] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await axios.get("/genre");
      setGenres(data.data.data);
    };
    loadData();
  }, []);

  console.log(genres);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubTitle>Genres</SectionSubTitle>
        <ButtonWrapper>
          <Button withbackground width={24} height={24}>
            <ArrowRight />
          </Button>
          <Button withbackground width={24} height={24}>
            <ArrowLeft />
          </Button>
        </ButtonWrapper>
      </TitleRow>
    </Wrapper>
  );
}

export default Genres;
