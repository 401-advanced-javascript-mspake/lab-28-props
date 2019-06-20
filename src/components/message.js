import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World',
    };
  }

  render() {
    return (<div> 
      <p>{ this.state.text }</p> 
      <img src="https://cdn140.picsart.com/262979961014212.png?r1024x1024"></img>
      </div>);
  }
}

export default Message;
