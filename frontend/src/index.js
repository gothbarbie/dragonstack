import React from 'react'
import { render } from 'react-dom'

import Generation from './components/Generation'

render(
  <div>
    <h2>Dragon Stack React Application</h2>
    <Generation generationId="123" expiration="2020-01-01" />
  </div>,
  document.getElementById('root')
)
