import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

import Generation from './components/Generation'
import Dragon from './components/Dragon'

const App = styled.div`
  width: 100%;
  min-width: 500px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  color: #444;
`

render(
  <App>
    <div>
      <h1>Dragon Stack</h1>
      <h2>There be dragons</h2>
      <Generation />
      <Dragon />
    </div>
  </App>,
  document.getElementById('root')
)
