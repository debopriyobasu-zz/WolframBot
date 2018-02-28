import React, { Component } from 'react';
import ChatWidget from './ChatWidget';
import Button from 'material-ui/Button';
const style = {
  margin: 0,
  top: 'auto',
  right: 10,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  backgroundColor:'#EF6C00',
  color:'#FFFFFF',
};

class ChatComponent extends Component {
    constructor( props ){
      super( props )
      this.state = { show : false };
      
      this.toggleDiv = this.toggleDiv.bind(this)
  }
  
  toggleDiv = () => {
      const { show } = this.state;
      this.setState( { show : !show } )
  }
  render() {
    return (
      <div>
        <div>
          { this.state.show && <ChatWidget /> }
        </div>
      <Button variant="fab" aria-label="add" style={style} onClick={ this.toggleDiv } >
        <i class="fas fa-comment"></i>
      </Button>
      </div>
    );
  }
}

export default ChatComponent;