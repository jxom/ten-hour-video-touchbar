import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
      </div>
    );
  }
}

export default Loading;
