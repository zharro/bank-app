import React, { Component } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
  CardActions,
  CardMedia,
} from '@material-ui/core';
import CheckedCircleIcon from '@material-ui/icons/CheckCircle';
import qs from 'qs';

const Confirmation = props => (
  <Grid alignItems={'center'} direction={'column'} container>
    <Grid item>
      <Card>
        <CardMedia style={{ height: 90 }} image={'./images/rjd_logo.jpg'} />
        <CardContent>
          <List>
            <ListItem>
              <ListItemText
                primary={'ИНН'}
                secondary={props.inn || '1234567890'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={'Расчетный счет'}
                secondary={props.invoice || 'A123B12312312'}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={'Сумма'}
                secondary={`${props.amount || '1203.88'} руб.`}
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button color={'primary'} onClick={props.onClick}>
            Подтвердить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
);

const Success = () => (
  <Grid alignItems={'center'} direction={'column'} container>
    <Grid item>
      <CheckedCircleIcon style={{ fontSize: 120, color: 'green' }} />
    </Grid>
    <Grid item>
      <Typography variant={'headline'}>Успешный платеж</Typography>
    </Grid>
  </Grid>
);

class QRSuccess extends Component {
  state = { data: {}, hasAgree: false };

  onClick = () => {
    this.setState({ hasAgree: true });
  };

  componentDidMount() {
    const queryParams = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    try {
      this.setState({ data: JSON.parse(queryParams.data) });
    } catch (error) {}
  }

  render() {
    const { hasAgree, data } = this.state;

    return !hasAgree ? (
      <Confirmation
        inn={data.inn}
        invoice={data.invoice}
        amount={data.amount}
        search={this.props.location.search}
        onClick={this.onClick}
      />
    ) : (
      <Success />
    );
  }
}

export default QRSuccess;
