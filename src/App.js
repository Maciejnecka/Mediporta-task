import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import NotFound from './components/common/NotFound';
import TagList from './components/TagList/TagList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/page/1" />} />
        <Route path="/page/:pageNumber" element={<TagList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
