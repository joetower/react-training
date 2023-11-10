import PropTypes from 'prop-types';

function Header({ heading, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    padding: '1rem 2rem',
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1>{heading}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  heading: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  heading: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
