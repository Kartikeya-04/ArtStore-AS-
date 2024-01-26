import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Painting from './Components/Painting';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/Paint" element={<Painting />} />
      <Route path="/Contact" element={<Contact />} />
      {/* <Route path="/About" element={<About />} /> */}
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));           One way
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App/>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
