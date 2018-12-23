import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { SEARCH_MUTUAL_FUND, TOTAL_ROWS } from '../../Common/Constants'
import Fund from '../Fund'
import Sidebar from '../Sidebar'
import { FUND_COMPARISON } from '../../Common/Routes'
import { RequestBuilder } from '../../Common/RequestBuilder'
import './index.css'

class FundExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarClass: '',
            fundsToCompare: []
        };
        this.fundClicked = this.fundClicked.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
        this.compareFunds = this.compareFunds.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
    }
    filterFunds(filters) {
        let fundsDump = this.state.funds;
        Object.keys(filters).map(function(item) {
            if(filters[item].checked.length) {
                fundsDump = fundsDump.filter((data)=>filters[item].checked.indexOf(data[item].toLowerCase()) > -1);
            }
            return fundsDump;
        })
        this.setState({
            filteredFunds: fundsDump
        })
    }
    applyFilters(evt) {
        let filterType = evt.target.name;
        let filterObj = this.state.filters;
        if(evt.target.checked) {
            filterObj[filterType].checked.push(evt.target.id.toLowerCase().split("_").join(" "));
        } else {
            filterObj[filterType].checked.splice(filterObj[filterType].checked.indexOf(evt.target.id.toLowerCase()),1);
        }
        this.filterFunds(filterObj);
        this.setState({
            filters: filterObj
        });
    }
    compareFunds() {
        if(this.state.fundsToCompare.length <= 1) {
            alert('Please select at least two funds');
        } else {
            this.props.history.push({
                pathname:FUND_COMPARISON,
                state: {
                    fundsToCompare: this.state.fundsToCompare
                }
            });
        }
    }
    componentDidMount() {
        this.requestMFList();
        this.attachEventListener();
    }
    attachEventListener() {
        document.querySelector('.funds-list').addEventListener('click', this.fundClicked);
    }
    fundClicked(evt) {
        if (evt.target.type === "checkbox") {
            let arrFundsToCompare = this.state.fundsToCompare;
            if(!evt.target.checked) {
                let index = arrFundsToCompare.indexOf(evt.target.id);
                arrFundsToCompare.splice(index,1);
            } else {
                arrFundsToCompare.push(evt.target.id);
            }
            this.setState({
                fundsToCompare:arrFundsToCompare
            })
        }
    }
    requestMFList() {
        var requestData = new RequestBuilder({
            url: SEARCH_MUTUAL_FUND,
            method: "POST",
            credentials: "omit",
            body: {
                "search": "",
                "rows": TOTAL_ROWS,
                "filters": { "minimum_investments": -1, "minimumInvestment": -1 }
            }
        });
        requestData
            .buildRequest()
            .then((response) => {
                return response.json();
            }).then((response) => {
                if (response && response.data) {
                    this.updateMFDetails(response.data);
                }
            });
    }
    updateMFDetails(data) {
        var dataObj = {
            filters: {
                category: {
                    displayText: 'Category',
                    data: data.facets.category,
                    checked: []
                },
                riskometer: {
                    displayText: 'Riskometer',
                    data: data.facets.riskometer,
                    checked: []
                }
            },
            funds: data.search_results,
            filteredFunds: data.search_results
        };
        this.setState(dataObj);
    }

    toggleSidebar() {
        this.setState((prevState)=>({
            sidebarClass: (prevState.sidebarClass === 'open' ? '' : 'open')
        }));
    }

    render() {
        return (
            <div className="parent">
                <Sidebar filterData={this.applyFilters} toggleClass={this.state.sidebarClass} toggleSidebar={this.toggleSidebar} filters={this.state.filters}/>
                <div className="header text-right">
                    <div className="hamburger" onClick={this.toggleSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><path stroke="#c635d7" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg>
                    </div>
                    <button className="btn btn-brand" onClick={this.compareFunds}>Compare ({this.state.fundsToCompare.length})</button>
                </div>
                <div className="funds-list">
                    {
                        this.state && this.state.filteredFunds && this.state.filteredFunds.length && (
                            this.state.filteredFunds.map((item, index) => {
                                return (
                                    <Fund key={index} data={item} />
                                )
                            })
                        )
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(FundExplorer);
