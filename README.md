# ⚖️ SRE Challenge 04 — Build a DEX (Constant Product AMM)

A full-stack Web3 project built as part of **SpeedRunEthereum Challenge 04**.

This challenge demonstrates how a Uniswap-style Automated Market Maker (AMM) works under the hood using the constant-product formula:
`x * y = k`

You will learn how to:

- Add / remove liquidity  
- Swap ETH ↔ ERC20 tokens  
- Maintain invariant balance  
- Handle slippage, price impact, and pool shares  
- Use precise AMM math identical to Uniswap V2  

This is a hands-on deep dive into DeFi, AMMs, and DEX mechanics.

---

## 🚀 Live Demo

- **Frontend (Vercel):** https://sre-challenge-04-decentralized-exch.vercel.app/  
- **Balloons Token (ERC20) Contract (Sepolia):** `0xb443E83E38a388B67D7520ee568E8b4F68700c6C`  
- **DEX Contract (Sepolia):** `0x325E0ee206e0F26F094628f2f11eaf82bc5F2862`  
- **Block Explorer:** https://sepolia.etherscan.io/address/0x325E0ee206e0F26F094628f2f11eaf82bc5F2862

---

## 🧱 Tech Stack

### 🖥 Smart Contracts

- Solidity (v0.8.x)
- Hardhat
- Sepolia Testnet  
- `Balloons.sol` (ERC20)
- `Dex.sol` (AMM with constant-product market making)
- Liquidity pool accounting (LP tokens)
- Swap logic with 0.3% fee (997 / 1000 multiplier)

### 🎨 Frontend (Scaffold-ETH 2)

- Next.js 13 (App Router)
- React
- TypeScript
- TailwindCSS
- Wagmi + Viem
- RainbowKit
- Scaffold-ETH 2 Debug Panel & Block Explorer
- Deployment on Vercel

---

## 🎯 Features

### 🔹 DEX Contract (AMM)

Implements a minimalistic Uniswap V2-style AMM:


### 1. Add Liquidity

Users deposit ETH + BAL in correct proportions: 
```solidity
tokenDeposit = (msg.value * tokenReserve / ethReserve) + 1;
```
(+1 wei avoids rounding errors and preserves invariant safety.)

LP tokens minted:
```solidity
liquidityMinted = msg.value * totalLiquidity / ethReserve;
```

### 2. Swap ETH → BAL

Constant-product swap math: 
```solidity
yOutput = (xInput * 997 * yReserves) 
          / (xReserves * 1000 + xInput * 997);
```

### 3. Swap BAL → ETH

Same formula, reversed reserves. 

### 4. Remove Liquidity

Users burn LP tokens to withdraw:

- Their share of ETH
- Their share of BAL

Proportional based on:
```solidity
liquidity / totalLiquidity
```

### 5. Invariant Protection

Every swap preserves:
```nginx
x * y >= k
```
Even with rounding and fees.

--- 

## 🚨 Why Constant Product?

This DEX replicates the exact mechanism used by **Uniswap V2**, ensuring:

- Continuous liquidity  
- Price based on pool ratio  
- Fees reinvested into LPs  
- Zero external price feeds  
- Fully on-chain deterministic pricing  

This challenge gives a real DeFi engineering experience.

---

## 🎮 Frontend dApp

A clean, production-ready UI built using Scaffold-ETH 2, allowing users to:

- Connect wallet  
- Add liquidity (ETH + BAL)  
- Withdraw liquidity  
- Swap ETH ↔ BAL  
- View token reserves  
- See price impact + output estimation  
- See pool share percentage  
- Debug contracts using SE-2 “Debug Contracts”  
- Inspect transactions via built-in Block Explorer  

---

## 📊 AMM Math Visualization

The UI shows:

- ETH reserve  
- BAL reserve  
- k-value  
- Expected output  
- Slippage warning  
- LP share  

Perfect for learning how a DEX actually works.

---

## 📐 Learning Outcomes

By completing this challenge, you learn:

- How Automated Market Makers (AMMs) work  
- How Uniswap V2 implements constant-product pricing  
- Why `x * y = k` is price-defining  
- How swap fees are incorporated (0.3%)  
- Why slippage occurs  
- How LP tokens are minted and burned  
- How liquidity proportionality works  
- How ETH ↔ ERC20 reserves adjust after swaps  
- How to build a UI for AMM interactions  
- How to use Wagmi + Viem for contract reads/writes  
- How Scaffold-ETH 2 accelerates dApp development  

---

## 🎓 Part of SpeedRunEthereum

This project is part of:

🏃 **SpeedRunEthereum — Challenge 04: Build a DEX**  
https://speedrunethereum.com/challenge/dex

Built using **Scaffold-ETH 2**, the modern full-stack Ethereum development framework.

---

