import React from 'react'
import './index.css'
const Sidebar = (props)=> {
    return (
        <div className={`sidebar ${props.toggleClass}`}>
            <div className="close-button" onClick={props.toggleSidebar}></div>
            <h3 className="sidebar-header">Filters</h3>
            <div className="filters">
                { 
                    props.filters && (
                        Object.keys(props.filters).map((item, index) => {
                            return (
                                <div key={index} className="filter-container">
                                    <h4 className="filter-category">{props.filters[item].displayText}</h4>
                                    <div className="filter-value-container">
                                        {
                                            props.filters[item].data.map((filter, index)=>{
                                                return (
                                                    <div key={index} className="filter">
                                                        <div className="mt-checkbox">
                                                            <input type="checkbox" className="mt-checkbox-input" name={item} id={filter.key} onClick={props.filterData}/>
                                                            <label className="mt-checkbox-label" htmlFor={filter.key}>{filter.key.replace(/_/g, " ")}</label>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    );
}
export default Sidebar;