const express = require( 'express' );
const fs = require( 'fs' );
const path = require( 'path' );

const app = express();

app.get("/pdf", (req, res) => {
  var file = fs.createReadStream("./src/files/PDF.pdf");
  file.pipe(res);
});
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../dist' ) ) );
app.use( '*', ( req, res ) => {

let indexHTML = fs.readFileSync( path.resolve( __dirname, '../dist/index.html' ), {
    encoding: 'utf8',
} );

res.contentType( 'text/html' );
res.status( 200 );

return res.send( indexHTML );

} );
app.listen( '9000', () => {
    console.log( 'Express server started at <http://localhost:9000>' );
} );
