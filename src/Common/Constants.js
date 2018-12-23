/* API Endpoints */
// GET APIs
export const GET_MUTUAL_FUND = 'https://api.piggy.co.in/v1/mf/';

// POST APIs
export const SEARCH_MUTUAL_FUND = 'https://api.piggy.co.in/v2/mf/search/';

/* Application Constants */
export const TOTAL_ROWS = 20;
export const KEY_MAPPINGS = {
    "name": "Fund Name",
    "category": "Category",
    "minimum_investment": "Minimum Investment",
    "rating": "Rating",
    "yoy_return": "Returns yoy %",
    "riskometer": "Riskometer"
};
export const MAX_RATINGS = 5;
export const MAX_RISK = 5;
export const RISKOMETER_MAPPING = {
    "Low": 1,
    "Moderately Low": 2,
    "Moderate": 3,
    "Moderately High": 4,
    "High": 5
}
export const FUND_COMPARISON_HEADERS = {
    "name": "Fund Name",
    "nav": "NAV",
    "expense_ratio": "Expense Ratio",
    "dividend_type": "Dividend Type",
    "scheme_class": "Scheme Class",
    "rating": "Ratings",
    "return_3yr": "Returns 3Y",
    "return_5yr": "Returns 5Y",
    "yoy_return": "Returns YOY",
    "riskometer": "Riskometer",
    "minimum_sip_subscription": "Min SIP"
}