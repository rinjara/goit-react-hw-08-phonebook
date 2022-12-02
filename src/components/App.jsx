import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainTitle, Wrapper, Title } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Suspense } from 'react';
// import { Route, Routes } from 'react-router-dom';

import LoginForm from '../pages/LoginForm';
import RegistrationForm from '../pages/RegistrationForm';

export const App = () => {
  return (
    <Wrapper>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" />
          <Route path="/login" />
          <Route path="/contacts" />
        </Routes>
      </Suspense> */}
      <RegistrationForm />
      <LoginForm />

      <ToastContainer />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Wrapper>
  );
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
