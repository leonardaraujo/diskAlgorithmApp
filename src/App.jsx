import GlobalStyle from './components/styled/GlobalStyle';
import Navbar from './components/molecules/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AlgorithmApp from './pages/AlgorithmApp';
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/app" element={<AlgorithmApp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
