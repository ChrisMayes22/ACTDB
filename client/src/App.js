import './App.css';
import Home from './pages/home/home';
import Crud from './pages/crud/crud';
import Navbar from './components/navbar/navbar.js';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {React, useState, useEffect} from 'react';
import Question from './classes/questions';
import axios from 'axios';

function App() {

  const [currQuestion, setCurrQuestion] = useState(
    new Question(
      'Which choice provides information that is relevant to the passage?',
      'http://localhost:5000/images/act_72F_E_prompt1.jpg', 
      ['NO CHANGE', 'woodcarvers', 'farmers', 'duo'],
      '1',
      '72F1',
      1,
      'easy',
      'Inference'
    )
  )

  const getData = async (e, filter) => {
      if(e){
        e.preventDefault();
      }
      const filters = ['testId', 'rules', 'difficulty']
      const url = filters.reduce((baseUrl, param) => {
        return baseUrl + param + "=" + filter[param] + "&";
      }, 'http://localhost:5000/questions/?');
      const res = await axios.get(url);
      const data = res.data.map(el => {
          return new Question().deserializeQuestion(el);
      });
      setQuestions(data);
  }

  useEffect(() => {
      getData(null, {testId: "Any", rules: "Any", difficulty: "Any"});
  }, []);

  const [questions, setQuestions] = useState([]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path={'/'} element={
            <Home
              questions={questions} 
              currQuestion={currQuestion}
              setCurrQuestion={setCurrQuestion}
            />
          }/>
          <Route path={'/crud'} element={
            <Crud
              questions={questions}
              getData={getData}
            />
          }/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
