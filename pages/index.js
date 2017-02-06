import React from 'react'

import normalize from '../node_modules/normalize.css/normalize.css'
import style from './style.scss'



// or, if you work with plain css
// import style from './style.css'

export default () =>
  <div>
    <style>
      { normalize }
      { style }
    </style>
    <p>ciao</p>
  </div>
