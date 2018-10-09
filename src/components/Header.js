import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (

  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tool">Tool</Link>
      </li>
    </ul>
  </div>

);

export {Header};