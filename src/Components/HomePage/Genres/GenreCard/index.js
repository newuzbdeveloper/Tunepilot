import PropTypes from "prop-types";
import { Wrapper } from "../styled";

function GenreCard({ backgroundImage, name }) {
  return <Wrapper backgroundImage={backgroundImage}>{name}</Wrapper>;
}

GenreCard.propTypes = {
  backgroundImage: PropTypes.string,
  name: PropTypes.string,
};

export default GenreCard;
