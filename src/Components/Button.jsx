import PropTypes from 'prop-types'

const Button = ({text, leftIcon, rightIcon}) => {
  return (
    <button>
        {leftIcon}
        <p>{text}</p>
        {rightIcon}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
}

export default Button