import useForm from '../../shared/api/hooks/UseForm';
import css from './RegisterForm.module.css';
import { initialState } from './InitialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={css.container}>
        <label className={css.label} htmlFor="">
          Имя пользователя:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={css.input}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div>
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
        <button type="submit">Регистрация</button>
      </div>
    </form>
  );
};

export default RegisterForm;