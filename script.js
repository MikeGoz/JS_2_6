// task 2.6  

var Counter = React.createClass({
  
  propTypes: {
    counterNumber: React.PropTypes.number.isRequired,
  },
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },  
  render: function() {
    return React.createElement('div', {onWheel: this.increment, 
                                       onClick: this.decrement},
      React.createElement('span', {}, this.props.counterNumber + ' Counter......... '  + this.state.counter),
    );  
  }   
});

var element = React.createElement('div', {},
  React.createElement(Counter, {counterNumber : 1}, + '.....'),
  React.createElement(Counter, {counterNumber : 2}),
  React.createElement(Counter, {counterNumber : 3})
);
ReactDOM.render(element, document.getElementById('app'));
            