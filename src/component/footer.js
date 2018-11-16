import React from 'react';
import { connect } from 'react-redux';

function Footer(props){
     return(
       <div>
           <footer>
           <p>Count of List:={props.count}</p>
            </footer>
           </div>
     );
}


function mapsToState(state){
    return({
        count:state.listItem.length
    });
}

export default connect(mapsToState)(Footer);

