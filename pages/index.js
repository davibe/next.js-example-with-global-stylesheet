import React from 'react'
import fetch from 'isomorphic-fetch'

import style from './style.css'
console.log('style', style)

export default () =>
  <div>
    <style>{ style }</style>
    <p>ciao</p>
  </div>
