// Supply assets to the money market
async function supplyAsset(asset, amount) {
  try {
    const accounts = await web3.eth.getAccounts();
    const result = await weldFinanceContract.methods.supply(asset, amount).send({
      from: accounts[0],
    });
    console.log('Supply successful:', result);
  } catch (error) {
    console.error('Supply error:', error);
  }
}

// Get the current interest rate for a specific asset
async function getInterestRate(asset) {
  try {
    const rate = await weldFinanceContract.methods.getInterestRate(asset).call();
    console.log(`Interest rate for ${asset}: ${rate}%`);
  } catch (error) {
    console.error('Error fetching interest rate:', error);
  }
}
