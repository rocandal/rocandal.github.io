import { Routes, Route } from 'react-router-dom';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import TotalCount from './components/TotalCount';

const App = ({ countItems }) => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        {/* <Route path="/경로명" elemnet={<컴포넌트 />} /> */}
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/total'
          element={<TotalCount countItems={countItems} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
