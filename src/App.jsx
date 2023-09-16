
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


import Books from '../components/Books';
import Main from '../components/home';
import Symptom from '../components/symptom';
import Herb from '../components/herb'
import Formulation from '../components/formulation'
import Instruction from '../components/instruction';




function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Instruction' element={<Instruction />} />
        <Route path='/Formulation' element={<Formulation />} />
        <Route path='/Herb' element={<Herb />} />
        <Route path='/Symptom' element={<Symptom />} />
        <Route path='/Books' element={<Books />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
