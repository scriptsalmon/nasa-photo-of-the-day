import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import './App.css';

import Nav from './components/Nav';
import Image from './components/Image';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => {
        console.error(err);
      })
  }, [])


  const Card = () => {
    return (
    <div>
      <p>{data.explanation}</p>
    </div>
    )
  }

  const changeDate = () => {
    
  }

  return (
    <div className="App">
      <Nav data={data} component={Nav} />
      <Image data={data} component={Image} />
      {/* <button onClick={Card}>Info?</button> */}
      <p>
        <span role="img" aria-label='click-for-info'>🚀</span>
      </p>
    </div>
  );
}

export default App;
