// Task 2.6 on-wheel version

var Counter = React.createClass({
  
  propTypes: {
    counterNumber: React.PropTypes.number.isRequired,
  },
  getInitialState: function() {
    return {
      counter: 0
    };
  },
  handleWheel: function(e) {
    this.setState({
      counter: e.nativeEvent.wheelDelta > 0 ? this.state.counter + 1 : this.state.counter - 1,
    });
  },
  render: function() {
    return React.createElement('div', { onWheel: this.handleWheel },
      React.createElement('span', {}, this.props.counterNumber + ' Counter......... '  + this.state.counter),
    );  
  }   
});

var element = React.createElement('div', {},
  React.createElement(Counter, {counterNumber : 1}),
  React.createElement(Counter, {counterNumber : 2}),
  React.createElement(Counter, {counterNumber : 3})
);
ReactDOM.render(element, document.getElementById('app'));