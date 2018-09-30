import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from "antd";
import "antd/dist/antd.css";

const App = () => (
  <div>
    <p>This works</p>
    <Button type="primary">Here is a button</Button>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'));