import React, { Component } from 'react'

import Akeoplotly from 'akeoplotly'

export default class App extends Component {
  render () {
    return (
      <div>
        <Akeoplotly url= 'http://18.185.101.57:3000/?dbname=custom_moule&limit=10000&skip=0'/>
      </div>
    )
  }
}
