const fs = require("fs")

const data = fs.readFileSync('./path.txt', 'utf-8')

const lines = data.split(/\n/)

