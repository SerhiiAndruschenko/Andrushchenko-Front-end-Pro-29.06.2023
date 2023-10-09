import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import UserList from './components/UserList/UserList';
import Album from './components/Album/Album';
import Photos from './components/Photos/Photos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<UserList />} />
            <Route path="albums/:userId" element={<Album />} />
            <Route path="photos/:albumId" element={<Photos />} />
          </ Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
