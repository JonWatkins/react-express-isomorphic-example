'use strict'

import React from 'react'
import Html from '../components/Html'
import { createLocation } from 'history'
import DocumentTitle from 'react-document-title'
import routes from '../../app/router/routes'
import { RoutingContext, match } from 'react-router'

/**
 *  Export the middleware for routing our React app
 *  @param {Object} req
 *  @param {Object} res
 */
export default (req, res) => {
  let location = createLocation(req.url)

  // Try to match a React route from our application
  match({routes, location}, (err, redirect, props) => {

    // redirect if the argument is not undefined or null
    if (redirect) {
      res.redirect(301, redirect.pathname + redirect.search)
      return
    }

    // Opps looks like we got an error throw a fit!
    if (err) {
      res.send(500, err.message)
      return 
    }

    // Looks like we don't have a route to render so we will
    // just send back a 404
    if (props == null) {
      res.send(404, 'Not found')
      return
    }

    // Whoo we can finally send our response back to the
    // client
    res.send(
      React.renderToStaticMarkup(
        React.createFactory(Html)({
          markup: React.renderToString(
            <RoutingContext {...props} />
          ),
          title: DocumentTitle.rewind()
        })
      )
    )
  })
}