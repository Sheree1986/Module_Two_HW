import React, { Component } from 'react';
import DivTwo from './DivTwo';

export class DivOne extends Component {
    render() {
        return (
            <div>
                <h3> <DivTwo child={this.props.parent} /></h3>
            </div>
        );
    }
}

export default DivOne;