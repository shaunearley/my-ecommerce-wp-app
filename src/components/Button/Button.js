import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, styleName, ...rest }) => {
  let buttonClassName = styles.button;

  if (styleName) {
    buttonClassName = `${buttonClassName} ${styleName}`;
  }
  return (
    <button type="button" className={buttonClassName} {...rest}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  styleName: PropTypes.string,
};
