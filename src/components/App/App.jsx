import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import Skeleton from '../Skeleton/Skeleton';
import RestrictedRoute from '../Routes/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../Routes/PrivateRoute/PrivateRoute';

const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const ContactsAppBar = lazy(() => import('../AppBar/AppBar/AppBar'));
const RegistrationForm = lazy(() =>
  import('../../pages/Registration/RegistrationForm')
);
const LoginForm = lazy(() => import('../../pages/Login/LoginForm'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Skeleton />
  ) : (
    <div>
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<ContactsAppBar />}>
            <Route
              path="contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={RegistrationForm}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={LoginForm} redirectTo="/contacts" />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
