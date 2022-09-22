import useForm from '../../shared/api/hooks/UseForm';
import css from './LoginForm.module.css';
import { initialState } from './InitialState';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';

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
          Email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={css.input}
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className={css.container}>
        <label className={css.label} htmlFor="">
          Password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={css.input}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className={css.container}>
        <Button type="submit" variant="contained" startIcon={<HowToRegIcon />}>
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
