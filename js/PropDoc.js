'use strict';

import React from 'react';

export default class PropDoc extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
    optional: React.PropTypes.bool,
    defaultVal: React.PropTypes.string
  };
  
  render() {
    return (
      <div className="form-group">
        <label>{this.props.name}</label>
        <pre>
          <div className="code-group">
            <code>
              {this.props.type}
              {this._renderOptional()}
            </code>
            {this._renderDefault()}
          </div>
        </pre>  
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
  _renderOptional() {
    if (this.props.optional) {
      return <span className="optional"> optional</span>;
    }
  }
  _renderDefault() {
    if (this.props.defaultVal) {
      const innerHTML = { __html: this.props.defaultVal };

      return (
        <div>
          <br />
          <code>default: <pre dangerouslySetInnerHTML={innerHTML} /></code>
        </div>
      );
    }
  }
}
