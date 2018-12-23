import React, { Component } from 'react'
import { ROOT } from '../../Common/Routes'
import {GET_MUTUAL_FUND} from '../../Common/Constants'
import { withRouter } from 'react-router-dom'
import ComparisonTable from '../ComparisonTable'

class FundComparison extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fundsToCompare:[],
            fundsData: []
        }
    }
    componentDidMount() {
        if (this.props && this.props.location && this.props.location.state && this.props.location.state.fundsToCompare && this.props.location.state.fundsToCompare.length > 1) {
            this.setState({
                fundsToCompare: this.props.location.state.fundsToCompare
            })
            this.fetchFundsDetails(this.props.location.state.fundsToCompare);
        } else {
            this.props.history.push({
                pathname: ROOT
            })
        }
    }
    fetchFundsDetails(funds) {
        let urls = funds.map((item)=>(GET_MUTUAL_FUND + '?key=' + item));
        var promises = urls.map(url => fetch(url).then(response => response.json()));
        Promise.all(promises).then(results => {
            let arrData = [];
            for (let index = 0; index < results.length; index++) {
                const element = results[index];
                arrData.push({
                    "name": element.data.mutual_fund.details.name,
                    "objective": element.data.mutual_fund.details.objective,
                    "nav": element.data.mutual_fund.nav,
                    "plan_type": element.data.mutual_fund.plan_type,
                    "expense_ratio": element.data.mutual_fund.expense_ratio,
                    "dividend_type": element.data.mutual_fund.dividend_type,
                    "category": element.data.mutual_fund.details.category,
                    "scheme_class": element.data.mutual_fund.details.scheme_class,
                    "rating": element.data.mutual_fund.details.rating,
                    "return_3yr": element.data.mutual_fund.details.return_3yr,
                    "return_5yr": element.data.mutual_fund.details.return_5yr,
                    "yoy_return": element.data.mutual_fund.details.yoy_return,
                    "riskometer": element.data.mutual_fund.details.riskometer,
                    "exit_load": element.data.mutual_fund.details.exit_load,
                    "exit_load_text": element.data.mutual_fund.details.exit_load,
                    "is_elss": element.data.mutual_fund.details.is_elss,
                    "minimum_sip_subscription": element.data.mutual_fund.details.minimum_sip_subscription
                })
            }
            this.setState({
                fundsData: arrData,
                dumpedData: results
            })
        });
    }
    render() {
        return (
            <div className="compare-container">
                <div className="header text-left">
                    <button className="btn btn-brand" onClick={()=>{this.props.history.push({pathname:ROOT})}}>Back to Home</button>
                </div>
                <div className="funds-container">
                    {
                        this.state.fundsData && this.state.fundsData.length && (
                            <ComparisonTable data={this.state.fundsData}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default withRouter(FundComparison);
