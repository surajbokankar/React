import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


class MyApps extends  React.Component{
      render(){
          return(
    <Grid container className='root' spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={Number(10)}>
            {[0, 1, 2].map(value => (
              <Grid 
              
              key={value} item>
                <label> Hello</label>
              </Grid>
            ))}
          </Grid>
          
        </Grid>
        
        </Grid>

          );
      }
}

export default MyApps;