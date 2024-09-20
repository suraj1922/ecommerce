import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Listing from './Components/Pages/Listing';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyContext = createContext();
function App() {

  // const values = {
  //   countryList,
  //   setselectedContry
  // }
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider >
          <Routes>
            <Route path="/cat/:id" exact={true} element={<Listing />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
