import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>
      <span>404 - </span>
      <Link to="/"> Go Home </Link>
    </p>
  </div>
);

export default NotFoundPage;
