import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  increment = () => this.props.maxChars - this.state.input.length;

  // our increment method makes use of the 'setState' method, which is what we use to alter state
  // increment = () => {
  // const newCount = this.state.maxChars - 1;
  // this.setState({
  //  maxChars: newCount
  // });
  // };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleInput}
          value={this.state.input}
        />
        {this.increment()} characters left
      </div>
    );
  }
}

export default TwitterMessage;
