import React from "react";
import { MAX_RATINGS, RISKOMETER_MAPPING, MAX_RISK } from '../Common/Constants'
export const formatData = (data, key) => {
    switch (key) {
        case "rating":
            let arrRatings = [];
            for (let index = 1; index <= MAX_RATINGS; index++) {
                arrRatings.push(
                    <svg
                        key={index}
                        viewBox="0 0 51 48"
                        className="widget-svg widget-selected"
                        style={{
                            width: "14px",
                            height: "14px",
                            transition: "transform 0.2s ease-in-out 0s"
                        }}>
                        <path
                            className="widget"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                                fill: (index < data) ? "rgb(255, 128, 0)" : "rgb(203, 211, 227)",
                                transition: "fill 0.2s ease-in-out 0s"
                            }}
                        />
                    </svg>
                );
            }
            return arrRatings;
        case "riskometer":
                return renderRiskometer(data);
        case "minimum_investment":
        case "minimum_sip_subscription":
        case "nav":
                return formatCommas(data);
        default:
            return data;
    }
};
export const renderRiskometer = (data) => {
    var arrRiskData = [];
    for (let index = 1; index <= MAX_RISK; index++) {
        arrRiskData.push(
            <div key={index} className={(index <= RISKOMETER_MAPPING[data]) ? "filled" : ""}></div>
        )
    }
    return arrRiskData;
}
export const formatCommas = (data) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}