(function(routeConroller) {

	routeConroller.init = function(app) {
		app.get('/', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/:name', function(req, res) {
		  res.render('layout', {});
		})

		app.get('/index/:view', function(req, res) {
		  res.render('index/' + req.param('view'), {});
		});

		app.get('/directive/:view', function(req, res) {
		  res.render('directive/' + req.param('view'), {});
		});

		app.get('/index/new.vash', function(req, res) {
		  res.render('index/new.vash', {});
		});
	};

})(module.exports)