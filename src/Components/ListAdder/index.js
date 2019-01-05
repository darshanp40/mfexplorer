import React, {Component} from 'react'
import './index.css'

export default class ListAdder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            error: ''
        }

        this.submitData = this.submitData.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    submitData() {
        if(this.state.text) {
            let textValue = this.state.text;
            this.setState({
                text: ''
            })
            this.props.addList(textValue);
        } else {
            this.setState({
                error: 'Please enter a valid list name'
            })
        }
    }
    handleTextChange(evt) {
        this.setState({
            text: evt.target.value
        })
    }
    render() {
        return (
            <div className="list-adder">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="List Name" value={this.state.text} onChange={this.handleTextChange}/>
                    <button className="btn btn-success" onClick={()=>{this.submitData()}}>Add</button>
                    <div className="error">{this.state.error}</div>
                </div>
            </div>
        )
    }
}
