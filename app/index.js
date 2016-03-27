var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <div data-test="12">Hellow React JS!</div>
    )
  }
});

var HelloUser = React.createClass({
  render: function () {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function () {
    var name = 'Andre Ward';
    var friends = ['Bob Marley', 'Stephen King', 'Karl May'];
    return (
      <div>
        <h3>Name: {name}</h3>
        <ShowList names={friends} />
      </div>
    )
  }
})

var ShowList = React.createClass({
  render: function () {
    var listItems = this.props.names.map(function (friend) {
      return <li>{friend}</li>;
    });

    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

ReactDOM.render(
  <HelloUser name="Martin" />,
  document.getElementsByClassName('user-greeting')[0]
);

ReactDOM.render(
  <FriendsContainer />,
  document.getElementsByClassName('friend-list')[0]
);
