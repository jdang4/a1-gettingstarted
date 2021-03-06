const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break

    case '/index.html':
      sendFile( response, 'index.html' )
      break

    case '/styles.css':
      sendFile(response, 'styles.css')
      break

    case '/images/shanghai-pic.jpg':
      sendFile(response, 'images/shanghai-pic.jpg')
      break

    case '/images/train.png':
      sendFile(response, 'images/train.png')
      break

    case '/images/github-logo.png':
      sendFile(response, 'images/github-logo.png')
      break
    
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     file = content
     response.end( content, 'utf-8' )
   })
}
