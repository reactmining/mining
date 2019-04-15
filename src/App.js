import React, { Component } from 'react';
// import { Query, withApollo } from "react-apollo";
// import gql from "graphql-tag";
import { TextField, Button, Card, CardContent } from '@material-ui/core';
import { GET_USERS } from './actions/index';
import { connect } from 'react-redux';
class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <Card>
        <CardContent>
          <TextField id="username" label="User Name" />
          <TextField id="password" label="Password" />
          <Button variant="contained" >
            Submit
        </Button>
        </CardContent>
      </Card>
    );
  }
}
const mapStateToProps = (state) => ({
  newState: state.users
})

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch({ type: GET_USERS })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

