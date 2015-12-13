'use strict'

import p from '../../package.json'

export default () => {
  return {
    name: p.name,
    description: p.description,
    port: process.env.PORT || 1337,
    env: process.env.ENV || 'development',
    assetHost: process.env.ASSET_HOST || 'http://localhost:8080',
    staticHost: process.env.STATIC_HOST || 'http://localhost:1337/public',
    secret: '8e678e623bb1ecf8ef5815e65c8ed725',
    linkPackages: [
      {
        path:'app', 
        alias:'app'
      }
    ]
  }
}