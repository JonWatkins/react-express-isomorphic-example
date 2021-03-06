'use strict'

import React from 'react'
import DocumentTitle from 'react-document-title'

export default class About extends React.Component {
  render () {
    return (
      <DocumentTitle title='About'>
        <div className="starter-template">
          <h1>Bootstrap starter template</h1>
          <p className="lead">Use this document as a way to quickly start any new project.<br /> All you get is this text and a mostly barebones HTML document.</p>
        </div>
      </DocumentTitle>
    )
  }
}
