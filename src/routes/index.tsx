// 
import { useAppSelector } from '../store/hooks';
import GeneralRoutes from './general';
import UserRoutes from './user';

const Routes = () => {
  // hooks
  const { user } = useAppSelector(state => state.user);

  // return
  if (user?.token) {
    return <UserRoutes />;
  } else {
    return <GeneralRoutes />;
  };
};

export default Routes;