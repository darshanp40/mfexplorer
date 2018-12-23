import React from 'react'
import './index.css'
import {KEY_MAPPINGS} from '../../Common/Constants';
import {formatData} from '../../Common/Formatters';

const Fund = (props) => (
    <div className="fund-container">
        <div className="fund-selector mt-checkbox">
            <input type="checkbox" className="mt-checkbox-input" name="fund-selector" id={props.data.scheme_key} />
            <label className="mt-checkbox-label" htmlFor={props.data.scheme_key}></label>
        </div>
        <label className="fund-details" htmlFor={props.data.scheme_key}>
            <div className="row">
                {
                    Object.keys(KEY_MAPPINGS).map((item, index)=>{
                        return (
                            <div key={index} className="section col-xs-12 col-sm-6 col-md-4 col-lg-2">
                                <h5 className="field-label">{KEY_MAPPINGS[item]}</h5>
                                <div className={`field-details ${item}`}>{formatData(props.data[item],item)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </label>
        <div className="clear-both"></div>
    </div>
)

export default Fund;