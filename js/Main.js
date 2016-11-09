import React from 'react';
import ReactDOM from 'react-dom';

import Bus from './Bus';
import data from './data.json';

ReactDOM.render(
  <Bus data={data} />,
  document.getElementById('content')
);