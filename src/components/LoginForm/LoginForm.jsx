import useForm from '../../shared/api/hooks/UseForm';
import css from './LoginForm.module.css';
import { initialState } from './InitialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.container}>
        <label className={css.label} htmlFor="">
          Email пользователя:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div className={css.container}>
        <label className={css.label} htmlFor="">
          Пароль пользователя:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div className={css.container}>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
};

export default LoginForm;
