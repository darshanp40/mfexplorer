import React, { Component } from 'react'
import ListAdder from '../ListAdder'
import './index.css'
const ListCard = function (props) {
    let lists = [];
    lists = props.lists.map((item, index) => {
        return (
            <div key={index} className="list-card">
                <div className="title">
                    <span>{item}</span>
                    {/* <ListAdder /> */}
                </div>
                <div className="card-container"  onDrop={(evt)=>{window.drop(evt)}} onDragOver={(evt)=>{window.allowDrop(evt)}}>
                    {props.listData[item].cards && (
                        props.listData[item].cards.map((item, index) => {
                            return (
                                <div key={index} id={"card" + index + item.title} className="card" draggable="true" onDragStart={(evt)=>{window.dragStart(evt)}}>
                                    {item.title}
                                </div>
                            )
                        }))
                    }
                </div>
                <div className="list-cta">
                    <button className="section-button" onClick={() => { props.addCard(item) }}>AddCard</button>
                </div>
            </div>
        );
    })
    return (
        <div className="list-container">
            {lists}
        </div>
    )
}

export default ListCard;