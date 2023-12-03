import { Outlet } from 'react-router-dom';
// 
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// 
import styles from './styles.module.scss';

const AuthLayout = (): JSX.Element => (
  <div className={styles.wrapper}>
    <Header />
    <div className={styles.outlet}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default AuthLayout;