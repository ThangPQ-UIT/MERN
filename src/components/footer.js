import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <div>
                <p>Copyright © 2019 Facebook Inc.</p>
            </div>
        </div>
        <div>
          <p>Add in test branch(git)</p>
          <p>Add in test branch(git2)</p>
        </div>
    );
  }
}
