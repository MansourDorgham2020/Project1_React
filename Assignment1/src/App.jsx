import { useState } from 'react';
import './App.css';
import LayOut from './components/LayOut/LayOut';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portofolio from './components/Portofolio/Portofolio';
import StartFrameWork from './components/startFrameWork/startFrameWork';
function App() {
  const [count, setCount] = useState(0);

  let router = createBrowserRouter([
    {
      path: '/',
      element: <LayOut />,
      children: [
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
        { path: 'portofolio', element: <Portofolio /> },
        { index: true, element: <StartFrameWork /> } // Ensure the path matches the Link in NavBar
      ]
    }
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
