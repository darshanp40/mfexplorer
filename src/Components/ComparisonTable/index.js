import React from 'react'
import { FUND_COMPARISON_HEADERS } from '../../Common/Constants'
import { formatData } from '../../Common/Formatters'
import './index.css'
const ComparisonTable = function (props) {
    return (
        <div className="parent">
            <div className="scrollable-table">
                <div className="field-header">
                    {
                        Object.keys(FUND_COMPARISON_HEADERS).map((item, index) => {
                            return (
                                <div key={index} className={`field ${item}`}>
                                    <h5 className="field-data">{FUND_COMPARISON_HEADERS[item]}</h5>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="field-body">
                    {
                        props.data.length && (
                            props.data.map((item, index) => {
                                return (
                                    <div key={index} className="field-row">
                                        {
                                            Object.keys(FUND_COMPARISON_HEADERS).map((header, index) => {
                                                return (
                                                    <div key={index} className={`field-value ${header}`}>
                                                        <span className="field-data-value">{formatData(item[header], header)}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default ComparisonTable;