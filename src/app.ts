import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

import {errorHandler} from './untils'

import postRoute from './routes/Post'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/posts',postRoute)


app.use(errorHandler)

export default app