import React, { Component } from 'react'
import ListCard from '../ListCard'
import ListAdder from '../ListAdder'
import CreateCard from '../CreateCard'
import './index.css'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [],
            listData: {},
            showListAdder: false,
            currentList: '',
            showCreateCard: false
        }
        this.showListAdder = this.showListAdder.bind(this);
        this.hideListAdder = this.hideListAdder.bind(this);
        this.addCard = this.addCard.bind(this);
        this.addList = this.addList.bind(this);
        this.closePopUp = this.closePopUp.bind(this);
        this.showPopUp = this.showPopUp.bind(this);
        this.addData = this.addData.bind(this);
    }
    showListAdder() {
        this.setState({
            showListAdder: true
        })
    }
    hideListAdder() {
        this.setState({
            showListAdder: false
        })
    }
    addData(title, description) {
        let listData = this.state.listData;
        listData[this.state.currentList].cards.push({
            title: title,
            description: description
        })
        this.setState({
            listData: listData,
        })
        this.closePopUp();
    }
    addList(listName) {
        this.hideListAdder();
        let list = this.state.lists;
        let listData = this.state.listData;
        listData[listName] = {
            cards: []
        };
        list.push(listName);
        this.setState({
            lists: list,
            listData: listData
        })
    }
    closePopUp() {
        this.setState({
            showCreateCard: false
        })
    }
    showPopUp(data) {
        this.setState({
            currentList: data,
            showCreateCard: true
        })
    }
    
    addCard(item) {
        this.showPopUp(item);

    }
    render() {
        let listData = (this.state.lists.length && (
            <ListCard ondrop="drop(event)" ondragover="allowDrop(event)" draggedEvent={this.draggedEvent} addCard={this.addCard} listData={this.state.listData} lists={this.state.lists} gotoList={this.gotoList} />
        ));
        if (!listData) {
            listData = (
                <div></div>
            )
        }
        return (
            <div className="wrapper">
                <div className={this.state.showCreateCard ? '' : 'hidden'}>
                    <CreateCard closePopUp={this.closePopUp} addData={this.addData} />
                </div>
                <div>
                    <header className="header">
                        <span className="header-title">My List</span>
                    </header>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="o-hidden">
                                <div className="scrollable-parent">
                                    <div style={{ width: 270 + 270 * (this.state.lists.length ? this.state.lists.length : 1) }} className="scrollable-container">
                                        {listData}
                                        {
                                            this.state.showListAdder && (
                                                <div className="inline-element">
                                                    <ListAdder addList={this.addList} />
                                                </div>
                                            )
                                        }
                                        {
                                            !this.state.showListAdder && (
                                                <div className="inline-element">
                                                    <button className="btn btn-primary" onClick={this.showListAdder}>Add List</button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
