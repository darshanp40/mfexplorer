import React, { Component } from 'react'
import {isEmpty} from '../../Common/Formatters'

export default class ListDetails extends Component {
    render() {

        return (
            <div>
                <header className="header">
                    <div className="back" onClick={this.props.showHome}></div>
                    <span className="header-title">{this.props.list}</span>
                </header>
                <div className="row">
                    <div className="col-xs-12 o-hidden">
                        <div className="scrollable-container">
                            {
                               <div>

                               </div>
                            }
                            <div className="inline-element">
                                <button className="btn btn-primary">Add List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
