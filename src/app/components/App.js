'use strict'

import React from 'react'
import Header from './includes/Header'
import Footer from './includes/Footer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}