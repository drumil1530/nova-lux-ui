import { Route, Routes } from 'react-router';
import './App.css';
import ButtonPG from './playground/ButtonPG';
import Navbar from './app/components/Navbar';
import TextPG from './playground/TextPG';
import InputPG from './playground/InputPG';

function App() {
  const links = ['Home', 'Buttons', 'Text', 'Input'];
  const linkPath = ['/', '/buttons', '/text', '/input'];
  return (
    <>
      <Navbar linkTexts={links} linksPaths={linkPath} />

      <div className="p-3">
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/buttons" element={<ButtonPG />}></Route>
          <Route path="/text" element={<TextPG />}></Route>
          <Route path="/input" element={<InputPG />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
