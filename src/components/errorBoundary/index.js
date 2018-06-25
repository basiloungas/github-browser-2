import React from 'react';
import {Row, Jumbotron} from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch(error, info) {
    this.setState({ error: error });

    console.log('A React error has been caught:', error, info);
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <Row>
        <Jumbotron>
          <h1>Something went wrong.</h1>
          <p>
            This view handles the the ErrorBoundary concept introduced in React 16.
            <br />
            An error happened somewhere in the react codebase and this is handled through this UI.
          </p>
          <code>
            {JSON.stringify(this.state.error, null, 2)}
          </code>
        </Jumbotron>
      </Row>
    );
  }
}

export default ErrorBoundary;
