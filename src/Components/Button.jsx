import PropTypes from 'prop-types'

const Button = ({text, leftIcon, rightIcon, classList}) => {
  return (
    <button className={`${classList}`}>
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
  classList: PropTypes.string,
}

export default Button