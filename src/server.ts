import app from './app'
import mongoose from 'mongoose'
import { config } from './config'

mongoose.connect(config.MONGO_URL,() => {
    app.listen(config.PORT, () => {
    console.log(`Running On Port ${config.PORT}`)
})
})






