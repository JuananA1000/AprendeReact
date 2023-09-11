import text from '../../translations/es/global.json';

import { useSelector } from 'react-redux';
export default function Header() {
  // Este user es la propiedad 'name' de nuestro userSlice
  const user = useSelector((state) => state.user);

  return (
    <header>
      <ul>
        <li>
          {text['redux-page-globalstate-header-component-name']}
          {user.name}
        </li>
        <li>
          {text['redux-page-globalstate-header-component-user']}
          {user.username}
        </li>
        <li>
          {text['redux-page-globalstate-header-component-email']}
          {user.email}
        </li>
      </ul>
    </header>
  );
}
