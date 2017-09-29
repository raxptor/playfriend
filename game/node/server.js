// Configuration set.
var config_set = process.env.NODE_CONFIG || 'global'
console.log("Loading config set[" + config_set + "]");
var config = require('./config/config.' + config_set)

var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
var swig = require('swig')

swig.setDefaults({ cache: false });
 
var router = Router()
var api = Router()
router.use('/api/', api);

router.get('/', function (req, res) {	  
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(swig.renderFile('templates/index.html', { }))
})

api.post('/account/create', function(req, res) {
	// create new account.
})

api.post('/account/link', function(req, res) {
	// link with playfrind user.
})
 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(9999)
