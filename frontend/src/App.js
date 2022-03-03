import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {Route, Routes, Navigate} from "react-router-dom"
import List from './components/ListComponent';
import Mainpage from './components/MainpageComponent';
import axios from 'axios';




function App(){

  const [items, setItems] = useState([])

  const addItem = (item) => {
    axios.post('http://127.0.0.1:8080/items/add', { item: {
      name: item.name,
      description: item.description,
      cost: item.cost,
      email: item.email
    }})
        .then(res =>{
            setItems(items.concat(res.data))
        })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/items')
    .then(res => setItems(res.data))
  }, [])

    return (
      <div>
        <Header addItem={addItem}/>
        <Routes>
          <Route exact path='/home' element={<Mainpage/>}/>
          <Route exact path='/list' element={<List items={items}/>}/>
          <Route path='*' element={<Navigate to='/home' replace={true}/>}/>
        </Routes>
        <Footer/>
      </div>
    );
}

export default App;
