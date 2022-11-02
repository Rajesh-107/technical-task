const express = require('express');
const app = express()

app.listen(process.env.PORT, () => {
    console.log("The API is running...")
    })
    // A piece of cake, isn't it?
    // Alright! At this point, the file should be looking like this:
    // const express = require('express')
    // const app = express()
    // app.listen(process.env.PORT, () => {
    // console.log("The API is running...")
    // })