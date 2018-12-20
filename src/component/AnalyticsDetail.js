import React from 'react';
import Details from './Details';


class AnalyticsDetails extends React.Component{
    

    constructor(props){
        super(props)
        
       }

    render(){
        console.log('object',this.props.location.state.data)
        return(<div>
                <Details/>
            </div>);
    }
}

export default AnalyticsDetails;