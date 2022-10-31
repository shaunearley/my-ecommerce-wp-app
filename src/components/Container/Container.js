import PropTypes from 'prop-types';
import styles from './Container.module.scss';

const Container = ({ children, styleName, ...rest }) => {
  let containerClassName = styles.container;

  if (styleName) {
    containerClassName = `${containerClassName} ${styleName}`;
  }
  return (
    <div className={containerClassName} {...rest}>
      {children}
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
  styleName: PropTypes.string,
};
