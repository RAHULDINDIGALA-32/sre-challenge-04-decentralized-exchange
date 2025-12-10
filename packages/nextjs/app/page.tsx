"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 max-w-4xl">

          {/* HEADER */}
          <h1 className="text-center">
            <span className="block text-2xl mb-2">SpeedRunEthereum</span>
            <span className="block text-4xl font-bold">Challenge 04 — ⚖️ Build a DEX</span>
            <span className="block text-lg mt-2">
              Create a minimal automated market maker that swaps ETH ↔ ERC20 tokens using <strong>x·y = k </strong>(CPAMM).
            </span>
          </h1>

          {/* CONNECTED WALLET */}
          <div className="flex justify-center items-center space-x-2 flex-col mt-6">
            <p className="my-2 font-medium text-lg">Connected Wallet:</p>
            <Address address={connectedAddress} />
          </div>

          {/* HERO IMAGE */}
          <div className="flex flex-col items-center justify-center mt-10">
            <Image
              src="/hero.png"
              width="727"
              height="231"
              alt="Challenge banner"
              className="rounded-xl border-4 border-primary"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-10 space-y-6 text-lg">
            <p>
              🔄 In this challenge you will build a <strong>simple Uniswap-style AMM</strong> that lets anyone:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Add liquidity (ETH + BAL)</li>
              <li>Swap ETH → BAL</li>
              <li>Swap BAL → ETH</li>
              <li>Withdraw liquidity</li>
            </ul>

            <p>
              You will learn how constant-product market making works using the formula:
            </p>

            <pre className="bg-base-200 p-4 rounded-xl overflow-auto text-sm">
{`x * y = k  
(yOutput) = (xInput * 997 * yReserves) / (xReserves * 1000 + xInput * 997)`}
            </pre>

            <p>
              This is the <strong>same pricing model used by Uniswap V2</strong>, including 0.3% fee, precision rounding,
              and liquidity share calculations.
            </p>

            <p>
              Users deposit equal value of ETH + BAL to mint LP tokens.  
              Liquidity providers earn swap fees and maintain a proportional share of the pool.
            </p>

            <p>
              🧠 You will implement:
            </p>

            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Secure token transfers</li>
              <li>Slippage-aware swaps</li>
              <li>Liquidity minting + burning</li>
              <li>AMM math & invariant protection</li>
            </ul>

            <p>
              💥 <strong>Your mission:</strong> Build a fully functional ETH ↔ BAL DEX using constant-product AMM logic,
              deploy it to Sepolia, and create a UI that can add/remove/swap liquidity.
            </p>
          </div>

          {/* CONTRACT ADDRESSES */}
          <div className="mt-10 space-y-6 text-lg">
            <p>The smart contracts were deployed on Sepolia:</p>

            <p className="font-semibold">
              Balloons (ERC20): {" "}
              <Link
                href="https://sepolia.etherscan.io/address/0xb443E83E38a388B67D7520ee568E8b4F68700c6C"
                passHref
                className="link"
              >
                0xb443E83E38a388B67D7520ee568E8b4F68700c6C
              </Link>
              <br />
              Dex Contract: {" "}
              <Link
                href="https://sepolia.etherscan.io/address/0x325E0ee206e0F26F094628f2f11eaf82bc5F2862"
                passHref
                className="link"
              >
                0x325E0ee206e0F26F094628f2f11eaf82bc5F2862
              </Link>
            </p>

            <p>
              From this UI, you will be able to:
              <br />
              💧 Add liquidity  
              🔄 Swap between ETH and BAL  
              📉 Calculate price impact & output amounts  
              🧮 View current reserves  
              🪙 Withdraw liquidity
            </p>

            <p>
              This challenge teaches the internals of AMMs, pricing, slippage,
              and how decentralized exchanges actually work under the hood.
            </p>

            <p>
              Built using{" "}
              <strong>
                Scaffold-ETH 2, Next.js, Wagmi, Viem, RainbowKit, and Hardhat.
              </strong>
            </p>
          </div>

          <p className="text-center text-lg mt-16">
            <a
              href="https://speedrunethereum.com/challenge/build-a-dex"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              SpeedRunEthereum.com
            </a>
          </p>
        </div>

        {/* FOOTER BLOCKS */}
        <div className="grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Interact with contracts in{" "}
                <Link href="/debug" className="link">
                  Debug Contracts
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore transaction history in{" "}
                <Link href="https://sepolia.etherscan.io" className="link">
                  Block Explorer
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
