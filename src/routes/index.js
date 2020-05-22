const router = require('express').Router()

//const dao = require('.').dao
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
//app.use(bodyParser.json())
//app.use(express.static('dist'))

const PORT = 8080
const HTTP_OK = 200
const CONTENT_TYPE_JSON = 'application/json'
const CONTENT_TYPE_HTML = 'text/html'




//Page 2 route

router.use('/',require('./route1'))
router.use('/',require('./route2'))


module.exports = router