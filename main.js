async function requestLoan(assetId, tokenAmount, ltvRatio) {
  
  const mockApiResponse = (assetId, tokenAmount, ltvRatio) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const loanAmount = tokenAmount * ltvRatio;
        const loanApproved = loanAmount > 0; 
        resolve({
          loan_approved: loanApproved,
          loan_amount: loanApproved ? loanAmount : 0,
        });
      }, 1000); 
    });
  };

  
  const response = await mockApiResponse(assetId, tokenAmount, ltvRatio);
  return response;
}


const loanRequest = {
  asset_id: "1234",
  token_amount: 10000,
  ltv_ratio: 0.9,
};

requestLoan(loanRequest.asset_id, loanRequest.token_amount, loanRequest.ltv_ratio)
  .then((result) => {
    console.log("Loan Response:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });