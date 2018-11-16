import React from 'react';
import Lister from './Lister';
import { Provider } from 'react-redux';

import store from './store/';
import Footer from './footer';

class List extends React.Component{

       
    render(){
        var buttonStyle = ({
            marginLeft: 10,
            display: 'block',
            border: '0.5px solid white',
            backgroundcolor:'#FFFFFF',
            listStyleType:'none'
            
          });
        return(<div style={buttonStyle} >
            <Provider  store={store}>
            <div>
            <Lister />
            
            <Footer/>

            </div>
            
             </Provider>
            
        </div>);
    }
}

export default List;