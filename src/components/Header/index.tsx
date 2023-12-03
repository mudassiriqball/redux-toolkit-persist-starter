/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
// 
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import routeNames from '../../routes/routeNames';
import { logout } from '../../store/slices/user';
import { DrawerSvg } from '../Svgs';
// 
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.user);

  // functions
  const handleLogout = () => {
    dispatch(logout());
  };

  // return
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <img src='/logo192.png' alt="logo" className='cursor-pointer' onClick={() => navigate(routeNames?.landing)} />
          <h5 className={styles.logo_text}>React Redux Starter</h5>
        </div>
        <div className="d-flex d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <DrawerSvg width="35px" />
        </div>
        {user?.token ?
          <div className="dropdown">
            <button className="btn dropdown-toggle btn-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {`${user?.email}`}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a className="dropdown-item" href={routeNames.landing} onClick={() => handleLogout()}>Logout</a></li>
            </ul>
          </div>
          :
          <button onClick={() => navigate(routeNames.login)}>Login</button>
        }
      </div>

      <div className={`offcanvas offcanvas-start ${styles.offcanvas}`} tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <p className={styles.logo_text}>React Redux Starter</p>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className={`${styles.offcanvas_body} offcanvas-body`}>
          <DrawerSvg width="20px" />
        </div>
      </div>
    </header>
  );
};

export default Header;