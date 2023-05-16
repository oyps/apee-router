const { execSync } = require('child_process')
const fs = require('fs')

const jsCodeStr = fs.readFileSync('js/main.js').toString()
const newCodeStr = jsCodeStr.replace(/^exports[.\[].*/gm, '').replace(/^Object.defineProperty\(exports.*/gm, '')
if (!fs.existsSync('dist')) fs.mkdirSync('dist')
fs.writeFileSync('dist/apee-router.js', newCodeStr)