'use strict'

import React from 'react'
import RouterWrapper from '../app/router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

React.render(
  <RouterWrapper history={createBrowserHistory()}/>,
  document.getElementById('app')
)