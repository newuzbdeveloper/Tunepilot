import { StyledButton } from "./styled";
import PropTypes from "prop-types";

function IconButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

IconButton.propTypes = {
  children: PropTypes.element,
  withbackground: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  backgoundColor: PropTypes.string,
};

export default IconButton;
