'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'
import Hero from './includes/Hero'

export default class Home extends React.Component {
  render () {
    return (
      <DocumentTitle title='Home'>
        <Hero />
      </DocumentTitle>
    )
  }
}
