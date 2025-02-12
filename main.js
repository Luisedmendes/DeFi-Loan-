
function requestLoan(asset) {
  
  const ltvRatio = 0.9;

  
  const loanAmount = asset.token_amount * ltvRatio;

  
  if (asset.token_amount >= 1000) { 
    return {
      loan_approved: true,
      loan_amount: loanAmount
    };
  } else {
    return {
      loan_approved: false,
      loan_amount: 0
    };
  }
}


const asset = {
  asset_id: "1234",
  token_amount: 10000,  
  ltv_ratio: 0.9
};


const loanResponse = requestLoan(asset);


console.log(JSON.stringify(loanResponse, null, 2));
