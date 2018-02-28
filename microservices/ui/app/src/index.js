import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ButtonAppBar from './AppBar';
import ChatComponent from './ChatComponent';
import RecipeReviewCard from './Content';
import { Offline, Online } from 'react-detect-offline';
class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Online>
                <div>
                <ButtonAppBar/>
                <ChatComponent />
                <RecipeReviewCard />
                </div>
            </Online>
                <Offline>
                    <h3>It seems that you are offline. Kindly refresh this page after a successful network connection</h3>
                </Offline>
            </div>
        )
    }
}
ReactDOM.render(<HomePage/>, document.getElementById('root'));
registerServiceWorker();
