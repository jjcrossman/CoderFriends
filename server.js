const express = require( 'express' );
const app = express();
const session = require( 'express-session' );
const passport = require( 'passport' );
const { Strategy } = require( "passport-github2" );
const GithubStrategy = Strategy;

const config = require( "./config.js" );

const port = 3000;

app.use( session( config.myServer ) );
app.use( passport.initialize() );
app.use( passport.session() );
app.use( express.static( `${ __dirname }/public` ) );


//LISTEN
app.listen( port, () => console.log( `Coder Friends is listening on port ${ port }` ) );
