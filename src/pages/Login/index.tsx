import { useState, ChangeEvent, FormEvent } from 'react';
// 
import { setUserState } from '../../store/slices/user';
import { USER_STATUS_E } from '../../helpers/enums';
import { useAppDispatch } from '../../store/hooks';
import { FormDataI } from './types';
// 
import styles from './styles.module.scss';

const LoginForm = (): JSX.Element => {
  // hooks
  const dispatch = useAppDispatch();

  // local state
  const [formData, setFormData] = useState<FormDataI>({
    email: '',
    password: '',
  });

  // functions
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your login logic here, including sending data to a server.
    dispatch(setUserState({
      ...formData,
      token: 'token',
      id: '1',
      status: USER_STATUS_E.ACTIVE,
      firstName: 'Mr.',
      lastName: 'X'
    }));
  };

  // return
  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.form_group}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
