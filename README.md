# nhts
Node HTTP Test Server - A tiny node HTTP server to help test HTTP clients' timeout logic.

## Usage
Scenario 1: don't specify a timeout. nhts replies with 200 and prints time
it received the request.

	node nhts.js

Scenario 2: specify a timeout in milliseconds. nhts prints time it received
request, but waits for N milliseconds before replying with a 200.

	node nhts.js 5000

Useful when you want to test an HTTP client's timeout logic.

## Notes
Currently hard-coded to listen on port 8080. Will update (eventually).
