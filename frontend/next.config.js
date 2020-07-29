const path = require('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env.development')
})

module.exports = (phase, { defaultConfig }) => {
    return defaultConfig
}
