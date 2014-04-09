var fs = require('fs');
module.exports = JSON.parse(fs.readFileSync('../secrets/config.json', 'utf8'));
