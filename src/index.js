import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Loading from './Loading';
import 'font-awesome/css/font-awesome.css';
import './index.css';

// Define the app routes
const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/loading" component={Loading} />
    </div>
  </Router>
);

// RENDER EVERYTHIN!
ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
