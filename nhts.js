var http = require('http');

function sleep(ms) {
	ms += new Date().getTime();
	while (new Date() < ms){}
}

// Fake wait time. Useful for clients who connect to this server and want
// to test their time out logic.
var waitms = 0;
if (process.argv.length > 2)
	// Warning: ignoring error checking
	waitms = parseInt(process.argv[2], 10);

var server = http.createServer(function(req, res) {
	console.log(new Date().toLocaleTimeString() + ': got request');
	if (waitms > 0)
		sleep(waitms);
	res.writeHead(200);
	res.end('Hello from NHTS!');
});

console.log(new Date().toLocaleTimeString() + ': nhts listening on port 8080');
server.listen(8080);

