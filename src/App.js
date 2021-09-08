import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants/index';
import './App.css';

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

  return (
    <div className="App">
      <Image data={data} component={Image} />
      <p>
        <span>🚀</span>
      </p>
    </div>
  );
}

export default App;
