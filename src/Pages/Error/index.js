import PropTypes from "prop-types";
import { ButtonText, SectionTitle } from "Components/UI/Typography";
import { Wrapper } from "./styled";
import Button from "Components/UI/Button";
import { useNavigate } from "react-router-dom";

function Error({ isErrorPage }) {
  const navigate = useNavigate();
  if (isErrorPage) {
    return (
      <Wrapper>
        <SectionTitle>Something went wrong :(</SectionTitle>
        <Button onClick={() => navigate(0)}>
          <ButtonText>Go Back</ButtonText>
        </Button>
      </Wrapper>
    );
  }
}

Error.propTypes = {
  isErrorPage: PropTypes.bool,
};

export default Error;
