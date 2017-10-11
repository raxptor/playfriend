var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
var swig = require('swig')

swig.setDefaults({ cache: false });
 
var router = Router()
var api = Router()
router.use('/api/', api);

function get_games()
{
	console.log("aah");
	return [ {name:'apa'}, {name:'banan'}];
}

router.get('/', function (req, res) {	  
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(swig.renderFile('templates/index.html', { get_games: get_games }))
})

api.get('/token/:token', function(req, res) {
	console.log(req.params)
	res.end('Yes [' + req.params.token + "]")
})

api.get('/account/create', function(req, res){
	res.end('Getting account');
})

api.post('/account/create', function(req, res){
		res.end('Creating account');
})
 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(8888)
