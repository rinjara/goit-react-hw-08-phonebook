import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectToken,
  selectUser,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    user: useSelector(selectUser),
    token: useSelector(selectToken),
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
