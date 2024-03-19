import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from "./AllRoutes";
import { useEffect, useState } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])


  const [sharedData, setSharedData] = useState('');
  const handleDataChange = (data) => {
    setSharedData(data);
  };

  return (
    <>
      <Router>
        <Navbar onDataChange={handleDataChange} />
        <AllRoutes sharedData={sharedData} setSharedData={setSharedData} />
      </Router>
    </>
  );
}

export default App
