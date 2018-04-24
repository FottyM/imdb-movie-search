import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline'
class App extends Component {
  render() {
    console.log(this.props)
    return (
        <React.Fragment>
          <CssBaseline/>
          <div className="main">
            Main
          </div>
        </React.Fragment>
    );
  }
}

export default App;
