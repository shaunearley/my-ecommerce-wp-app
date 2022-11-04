import { FaShoppingCart as IconCart } from 'react-icons/fa';
import Container from '../Container/Container';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Container styleName={styles.headerContainer}>
      <p className={styles.headerTitle}>Hyper Bros. Trading Cards</p>
      <p className={styles.headerCart}>
        <button type="button" className="snipcart-checkout">
          <IconCart />
          <span className="snipcart-total-price">$0.00</span>
        </button>
      </p>
    </Container>
  </header>
);

export default Header;
