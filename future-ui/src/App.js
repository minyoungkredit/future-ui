import React, { Component } from 'react';
import { TagBox } from './components';

const FUTURE_UI_CATEGORY = [
  {
    path: "/tag-box",
    keyword: "TAG BOX",
  },
];

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">FUTURE UI</h1>
    </header>
    <nav>
      <ul>
        {FUTURE_UI_CATEGORY.map((item, index) => (
          <li key={index}>
            {item.keyword}
          </li>
        ))}
      </ul>
    </nav>
    <TagBox />
  </div>
);

export default App;
