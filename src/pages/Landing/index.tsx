import { Link } from 'react-router-dom';
// 
import styles from './styles.module.scss';

const Landing = (): JSX.Element => {
  const reduxToolkitLink = 'https://github.com/reduxjs/redux-toolkit';
  const reduxPersistLink = 'https://github.com/rt2zz/redux-persist';
  const scssLink = 'https://sass-lang.com/';
  const reactDomRoutingLink = 'https://reactrouter.com/en/6.15.0/hooks/use-routes';

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Welcome to the Redux Toolkit Persist Starter</h1>
        <p>A project that combines essential tools for efficient React development.</p>
      </header>

      <section className={styles.featureSection}>
        <div className={styles.feature}>
          <h2>Redux Toolkit with Thunk</h2>
          <p>Manage your app's state with Redux Toolkit, featuring simplified state management and async action handling with Thunk middleware.</p>
          <Link target='_blank' to={reduxToolkitLink}>Learn More</Link>
        </div>

        <div className={styles.feature}>
          <h2>Redux Persist</h2>
          <p>Keep your Redux store data persistent across sessions using Redux Persist. Your app's state is securely stored in local storage.</p>
          <Link target='_blank' to={reduxPersistLink}>Learn More</Link>
        </div>

        <div className={styles.feature}>
          <h2>SCSS Styling</h2>
          <p>Create beautiful, maintainable styles with SCSS. Use SCSS modules to encapsulate styles for your components.</p>
          <Link target='_blank' to={scssLink}>Learn More</Link>
        </div>

        <div className={styles.feature}>
          <h2>React DOM Routing</h2>
          <p>Implement client-side routing with React Router DOM. Easily navigate between views without page reloads.</p>
          <Link target='_blank' to={reactDomRoutingLink}>Learn More</Link>
        </div>
      </section>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/about">Code on Github</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Landing;
