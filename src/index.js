import React from 'react'
import { render } from 'react-dom'

import './scss/main.scss'

import Routes from './routes'

render(
  <Routes />,
  document.getElementById('app-content')
);