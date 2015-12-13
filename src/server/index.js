'use strict'

import express from 'express'
import config from '../config'
import favicon from 'serve-favicon'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import session from 'express-session'
import { json, urlencoded } from  'body-parser'
import { join } from 'path'
import iso from './middleware/iso'

const app = express()

app.set('trust proxy', 1)
app.use(compression())
app.use(favicon(join(__dirname, '../assets/favicon.ico')))
app.use('/public', express.static(join(__dirname, '../assets')))
app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieParser())
app.use(session({
  secret: config().secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(iso)

export default app
