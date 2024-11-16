import { Routes, Route, useNavigate } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import TotalCount from './components/TotalCount';
import { useEffect } from 'react';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) navigate(redirectPath, { replace: true });
  }, [navigate]);

  return null;
}

const App = () => {
  return (
    <>
      <RedirectHandler />
      <div className="App">
        <Header />
        <Routes>
          {/* <Route path="/경로명" elemnet={<컴포넌트 />} /> */}
          <Route path="/" element={<Main />} />
          <Route path="/total" element={<TotalCount />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
