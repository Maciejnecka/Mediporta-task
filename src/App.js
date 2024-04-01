import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/common/NotFound';
import TagList from './components/TagList/TagList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TagList />} />
        <Route path="/page/:pageNumber" element={<TagList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
