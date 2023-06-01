import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main'; 
import New from './components/New';
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/new' element={<New />} />
          <Route path='/new/:id' element={<Main />} />
          <Route path='/edititem/:id' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
