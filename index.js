import express  from 'express'
import * as dotenv from 'dotenv'
dotenv.config();
import initApp from './src/app.router.js'
const app = express()
initApp(app,express);
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))