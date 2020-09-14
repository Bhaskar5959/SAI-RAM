_ = require('lodash')
alwaystrue = () => true
legitString = (o) =>_.isString(o) && o.length> 0

module.exports ={
    alwaysTrue,
    legitString
}
