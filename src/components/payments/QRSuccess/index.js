import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CheckedCircleIcon from '@material-ui/icons/CheckCircle';

class QRSuccess extends Component {
  state = { data: '' };

  render() {
    return (
      <Grid alignItems={'center'} direction={'column'} container>
        <Grid item>
          <CheckedCircleIcon style={{ fontSize: 120, color: 'green' }} />
        </Grid>
        <Grid item>
          <Typography variant={'headline'}>Успешный платеж</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default QRSuccess;
