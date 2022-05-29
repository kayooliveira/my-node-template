import express from 'express'

import 'dotenv/config'

const app = express()

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.APP_PORT}`)
})
