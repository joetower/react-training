import PropTypes from 'prop-types';

function Card({ children, darkMode}) {
  return (
    <div className={`card ${darkMode && 'dark-mode'}`}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  darkMode: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  darkMode: PropTypes.bool,
}

export default Card
