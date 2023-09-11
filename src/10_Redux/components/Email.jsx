import text from '../../translations/es/global.json';
import { useDispatch, useSelector } from 'react-redux';
import { changeEmail } from '../store/userSlice';

export default function Email() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  return (
    <div>
      {text['redux-page-globalstate-email-component']}
      <input type='email' value={email} placeholder='e-mail' onChange={handleChange} />
    </div>
  );
}
