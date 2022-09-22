import useForm from '../../shared/api/hooks/UseForm';
import css from './RegisterForm.module.css';
import { initialState } from './InitialState';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';

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
          User name:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={css.input}
          type="text"
          placeholder="Enter name"
          required
        />
      </div>
      <div className={css.container}>
        <label className={css.label} htmlFor="">
          User email:
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
          User password:
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

export default RegisterForm;
