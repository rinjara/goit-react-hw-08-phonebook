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

// import ContactsAppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <>
      {/* <ContactsAppBar />
      <RegistrationForm />
      <LoginForm /> */}

      {/* <Wrapper> */}
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<ContactsAppBar />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
      {/* </Suspense> */}

      {/* <ToastContainer />
        <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        <Title>Contacts</Title>
        <Filter />
        <ContactList />
      </Wrapper> */}
    </>
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
