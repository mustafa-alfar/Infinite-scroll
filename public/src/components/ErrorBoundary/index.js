import React from 'react';
import { Layout } from './styled';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { error: true };
  // }
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Layout>
          <h1>{this.state.error.toString()}</h1>
          <p>Please try again later</p>
        </Layout>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}
