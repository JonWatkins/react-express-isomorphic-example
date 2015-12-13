'use strict'

import React from 'react'
import config from '../../config'

export default class Html extends React.Component {
  
  static propTypes = {
    markup: React.PropTypes.string,
    title: React.PropTypes.string
  }

  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link href={config().staticHost + '/components/bootstrap/dist/css/bootstrap.min.css'} rel="stylesheet" />
          <link href={config().staticHost + '/css/client.css'} rel="stylesheet" />
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script src={config().staticHost + '/components/jquery/dist/jquery.min.js'}></script>
          <script src={config().staticHost + '/components/bootstrap/dist/js/bootstrap.min.js'}></script>
          <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
          <script src={config().assetHost + '/client.js'}></script>
        </body>
      </html>
    )
  }
}