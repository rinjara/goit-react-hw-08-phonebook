// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { MainTitle, Wrapper, Title } from './App.styled';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from '../pages/LoginForm';
import RegistrationForm from '../pages/RegistrationForm';
// import { ContactForm } from './ContactForm/ContactForm';
import ContactsAppBar from './AppBar/AppBar';
import Contacts from 'pages/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import Skeleton from './Skeleton/Skeleton';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

// import ContactsAppBar from './AppBar/AppBar';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Skeleton />
  ) : (
    <Routes>
      <Route path="/" element={<ContactsAppBar />}>
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
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
    </Routes>
  );
  // <>
  //   <ContactsAppBar />
  //   <RegistrationForm />
  //   <LoginForm />

  //   <Wrapper>
  //   <Suspense fallback={<div>Loading...</div>}>

  //   </Suspense>

  //   <ToastContainer />
  //     <MainTitle>Phonebook</MainTitle>
  //     <ContactForm />
  //     <Title>Contacts</Title>
  //     <Filter />
  //     <ContactList />
  //   </Wrapper>
  // </>
};

// const Home = lazy(() => import('pages/Home/Home'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

// export const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<Home />} />
//             <Route path="movies" element={<Movies />} />
//             <Route path="movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>
//             <Route path="*" element={<Navigate to="/" />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };
