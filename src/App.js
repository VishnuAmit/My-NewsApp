
import './App.css';

import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
} from "react-router-dom";

const App=()=>{
  const pageSize=15;
  // apiKey=process.env.REACT_APP_NEWS_API;
  const apiKey="9f3a77c9493146c08cffd8d600b39089"

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <BrowserRouter>
          <Navbar></Navbar>
          <LoadingBar
        color='#f11946'
        progress={progress}

      />
          <Routes>
              <Route exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey} key="general"pageSize={pageSize} country="in" category="general" />} />
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
              <Route exact path="/genral" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
              <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey} key="health"pageSize={pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )

}

export default App;