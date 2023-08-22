


 Weld Finance Asset Functions

This repository provides utility functions to interact with the Weld Finance money market, allowing users to supply assets and fetch current interest rates for a specific asset.

## Features

- **Supply Asset**: Allow users to supply assets to the money market.
- **Get Interest Rate**: Fetch the current interest rate for a particular asset.

## Setup & Installation

1. **Clone the repository**

   ```sh
   git clone <repository_url>
Ensure web3 is set up

The functions utilize the web3 library to interact with Ethereum. Ensure that you have it initialized in your project.

Initialize weldFinanceContract

Before using the functions, ensure you have initialized the weldFinanceContract with the appropriate ABI and contract address.

Functions
1. supplyAsset(asset, amount)
Supply an amount of a specific asset to the money market.

Parameters:

asset: The asset identifier or contract address.
amount: The amount of the asset to supply.
2. getInterestRate(asset)
Fetch the current interest rate for a particular asset.

Parameters:

asset: The asset identifier or contract address.
Usage
javascript
Copy code
// To supply an asset
await supplyAsset('0xAssetContractAddress', 100);

// To get the current interest rate for an asset
await getInterestRate('0xAssetContractAddress');
Dependencies
web3.js

