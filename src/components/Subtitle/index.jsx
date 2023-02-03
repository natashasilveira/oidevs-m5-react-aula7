import PropTypes from 'prop-types';

const Subtitle = ({loggedUser}) => {

  return (
    <>
      <h2>Bem-vindo(a)</h2>
      <p>{loggedUser}</p>
    </>
  );
}

Subtitle.propTypes = {
  text: PropTypes.string
}

export default Subtitle;