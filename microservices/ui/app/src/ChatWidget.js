import React from 'react';
const style = {
    margin: 0,
    border:0,
    top: 'auto',
    right: 10,
    bottom: 90,
    left: 'auto',
    position: 'fixed',
    boxShadow: '0px 0px 20px #888888',  
    zIndex: 1000,
  };
class ChatWidget extends React.Component{
    render(){
        return(
            <div>
                <iframe title="chat widget" width="350" height="430" src="https://console.dialogflow.com/api-client/demo/embedded/314b948f-00ab-4020-8290-f40b26870170" 
                style={style}></iframe>
            </div>
        )
    }
}

export default ChatWidget;