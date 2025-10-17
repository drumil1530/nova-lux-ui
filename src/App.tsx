import { Route, Routes } from 'react-router';
import './App.css';
import ButtonPG from './playground/ButtonPG';
import Navbar from './app/components/Navbar';

function App() {
  const links = ['Home', 'Buttons'];
  const linkPath = ['/', '/buttons'];
  return (
    <>
      <Navbar linkTexts={links} linksPaths={linkPath} />

      <div className='p-3'>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/buttons" element={<ButtonPG />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
