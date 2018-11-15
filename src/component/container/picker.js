import Select from 'muicss/lib/react/select';
import Option from 'muicss/lib/react/option';
import Appbar from 'muicss/lib/react/appbar';
import React, { Component } from "react";

import Button from "@material-ui/core/Button"; 





export default class LoginScreen extends React.Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      picker2: '',
      picker: '',
    };
  }

  pickerValueChanged_picker2 = (event) => {
    this.setState({picker2: event.target.value});
  }
  
  pickerValueChanged_picker = (event) => {
    this.setState({picker: event.target.value});
  }
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_button = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_button_outer = {
        pointerEvents: 'none',
     };
    let selection_picker2 = this.state.picker2;
    
    let selection_picker = this.state.picker;
    
    let s1 = {verticalAlign: 'middle'};
    let s2 = {textAlign: 'right'};
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <Appbar>
       <table width="100%">
         <tbody>
           <tr style={s1}>
             <td className="mui--appbar-height">Left Side</td>
             <td className="mui--appbar-height" style={s2}>Right Side</td>
           </tr>
         </tbody>
       </table>

      
      </Appbar>
      <div>
          <Button color="primary">Click</Button>
        </div>
        
      </div>
    )
  }
  

}

