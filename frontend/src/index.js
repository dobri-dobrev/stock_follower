'use strict';
//https://github.com/facebook/flux/tree/master/examples/flux-todomvc
//https://thesocietea.org/2015/04/building-a-json-api-with-rails-part-4-implementing-authentication/
//https://auth0.com/blog/2015/04/09/adding-authentication-to-your-react-flux-app/
//https://github.com/auth0/react-flux-jwt-authentication-sample/tree/gh-pages/src/components
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var $ = require('jquery');


var RouterContainer = require('./services/routerContainer.js');
var routes = require('./routes.js');
var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

RouterContainer.set(router);

router.run(function (Handler) {
  React.render(<Handler />, $("#container")[0]);
});

// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, $("#container")[0]);
// });



// React.render(
//   <LoginForm />,
//   $("#container")[0]
// );


// var CommentList = React.createClass({
//   render: function() {
//     var commentNodes = this.props.data.map( function(comment, index){
//       return(
//         <Comment author={comment.author} txt={comment.text} key={index}/>
//       );
//     });
//     return (
//       <div className="CommentList">
//         {commentNodes}
//       </div>
//       );
//   }
// });
// var CommentBox = React.createClass({
//   getInitialState: function() {
//     return {data: []}
//   },
//   callServer: function(){
//     $.ajax({
//         url: this.props.url,
//         jsonp: "callback",
//         dataType: "jsonp",
//         success: function( data ) {
//             this.setState({data: data}); // server response
//         }.bind(this),
//         error: function(xhr, status, err){
//           console.log("Shit");
//         }
//     });
//   },
//   componentDidMount: function() {
//     this.callServer();
//     //setInterval(this.callServer, this.props.pollInterval);
//   },
//   render: function() {
//     return (
//       <div className="CommentBox">
//         <h1> Comments</h1>
//         <CommentList data = {this.state.data} />
//         <CommentForm />
//       </div>
//       );
//   }
// });




// React.render(
//   <CommentBox url= "http://localhost:4567/jsonp" pollInterval={2000}/>,
//   $("#container")[0]
// );



