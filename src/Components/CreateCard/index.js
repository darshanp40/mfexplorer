import React, { Component } from 'react'
import './index.css'
export default class CreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: "",
            cardDescription: ""
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    handleDescChange(evt) {
        this.setState({
            cardDescription: evt.target.value,
            descerror:''
        })
    }
    handleTextChange(evt) {
        this.setState({
            cardName: evt.target.value,
            error:''
        })
    }
    submitData() {
        if (this.state.cardName && this.state.cardDescription) { 
            this.props.addData(this.state.cardName, this.state.cardDescription);
            this.setState({
                cardName: '',
                cardDescription:''
            })
        } else {
            this.setState({
                error: this.state.cardName ? '' : 'Please enter card name',
                descerror: this.state.cardDescription ? '' : 'Please enter card description'
            })
        }
    }
    render() {
        return (
            <div className="list-bg">
                <div className="list">
                    <h3 className="pop-heading">Create List</h3>
                    <div className="form-group">
                        <input placeholder="Card Name" onChange={this.handleTextChange} type="text" className="list-name form-control" value={this.state.cardName} />
                        <div className="error">{this.state.error}</div>
                    </div>
                    <div className="form-group">
                        <input placeholder="Description" onChange={this.handleDescChange} type="text" className="list-name form-control" value={this.state.cardDescription} />
                        <div className="error">{this.state.descerror}</div>
                    </div>
                    <div className="list-cta">
                        <button className="btn btn-danger" onClick={this.props.closePopUp}>Cancel</button>
                        <button className="btn btn-success" onClick={this.submitData}>Create</button>
                    </div>
                </div>
            </div>
        )
    }
}
