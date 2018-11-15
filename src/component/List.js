import React from 'react';
import Lister from './Lister';

import store from './store/';

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
            <Lister store={store}/>
        </div>);
    }
}

export default List;