import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import SearchBar from './components/SearchBar.jsx'
import Signup from './views/Signup'; 
import Profile from './views/Profile';


function App() {
  const [data,setData]=useState([]);
  const[searchResults, setSearchResults]=useState([]);
  useEffect(()=>{
  fetch("https://api.itbook.store/1.0/")
    .then(response => {
      return response.json();
    }).then(response=>{
      setData(response);
    }).catch(err=>{
      console.log(err);
    });
  },[]);

  const onSearch=(query)=>{
    console.log(query);
    fetch(`https://swapi.dev/api/${query}/`)
      .then(response=>{
        return response.json();
      }).then(response=>{
        setSearchResults(response);
      }).catch(err=>{
        console.log(err);
      });
  }
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<user_login />} 
          <Route path='/Home' element={<Home data={data} onSearch={onSearch}/>}/>
          <Route path='/view/profile/:user_id' element={<Profile />}
          <Route path='/library' element={<ViewAllBooks data={data} onSearch={onSearch}/>}/>
          <Route path='/book/:book_id' element={<ViewOneBook data={data} onSearch={onSearch}/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
