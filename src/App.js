import { Components } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './assets2/css/bootstrap.min.css';
import './assets2/css/animate.min.css';
import './assets2/css/font-awesome.min.css';
import './assets2/css/nice-select.css';
import './assets2/css/slick.min.css';
import './assets2/css/slick.min.css';
import './assets2/css/style.css';
import './assets2/css/main-color04.css';

import './index.css'
import './index-responsive.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.document.head.insertBefore(
      window.document.createComment("by samueladewale | adewalesamuel.github.io"),
      window.document.head.firstChild);
  }, [])

  return (
  //   <BrowserRouter basename="/consomer-ivoirien/public/" >
  //     <Routes>
  //       <Route path='*' element={<Components.MainLayout />} />
  //     </Routes>
  //   </BrowserRouter>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Components.MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
