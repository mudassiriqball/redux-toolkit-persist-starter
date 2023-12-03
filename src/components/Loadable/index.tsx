import { Suspense } from 'react';
// 
import { ComponentTypeT } from './types';
// 
import styles from './styles.module.scss';

const Loadable = <P extends {}>(Component: ComponentTypeT<P>) => (props: P) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

const Loader = (): JSX.Element => (
  <div className={styles.loader}>
    <div className={styles.loader_spinner}></div>
  </div>
);

export default Loadable;
