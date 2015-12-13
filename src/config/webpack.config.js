

'use strict'

import { resolve } from 'path'
import config from './index'

function assembleExcludeRules(){
  var list = config().linkPackages.map((p) => p.alias).join('|')
  return new RegExp('node_modules\\\/(?:[^((?:'+list+'))]).*')
}

const rootDir = resolve(__dirname, '..', '..')

export default {
  
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      express: resolve(rootDir, 'src', 'client', 'express')
    }
  },
  
  context: resolve(rootDir, 'src'),
  
  entry: './client',
  
  output: {
    path: resolve(rootDir, '.srv', 'bundles'),
    filename: 'client.js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: assembleExcludeRules(),
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.json$/, 
        loader: 'json-loader'
      }
    ]
  },

  stats: {
    colors: true
  },

  devtool: 'source-map'

}