# Eterna | Infinite On-Chain Life

> **"What if an NPC didn't die when you turned off the server?"**

<img width="960" height="434" alt="eterna-homepage" src="https://github.com/user-attachments/assets/d6ea33b3-692e-4a0b-8868-f00cfcadcc3e" />




Eterna is the first platform for **autonomous, persistent AI personalities** that live within the Amadeus consensus layer. We are moving AI from "rented" centralized servers to "owned" decentralized consensus.


## 🛑 The Problem
AI agents today are fragile.
*   **Centralized Risk**: They live on AWS or OpenAI servers. If the dev stops paying the bill, the agent vanishes.
*   **No "Soul"**: They have no long-term memory or verifiable history.
*   **Rent vs Own**: Users pay subscriptions for access, but they never own the agent's state or accomplishments.


## The Solution: Consensus-Level Life
We treat every AI inference as a blockchain transaction. By leveraging Amadeus's **Consensus-Level Compute**, Eterna agents run deterministically across the network.
*   **Verifiable Thought**: The network validates the agent's output, not just a single server.
*   **Immutable Memory**: An agent's history ("System Prompt" + "Experience") is stored permanently on-chain.


## Concrete Use Case: The "Forever-Quest Giver"
Imagine a Quest Giver NPC in an on-chain MMORPG.
*   **Today (Web2):** If the game studio shuts down, the NPC disappears.
*   **With Eterna:** The NPC is an **Eterna Agent**.
    *   It remembers every player it has ever met (stored in Arweave/Amadeus state).
    *   It continues to exist and give quests even if the original game frontend goes offline.
    *   Players can "take" this NPC to other compatible games because its state is public and decentralized.


## Technical Reality: What Runs Today vs. Future
We are building for the **Amadeus Genesis Soft Hack**, focusing on architecture and uPoW simulation. Here is the honest breakdown of our stack:

| Component | Today (The Prototype) | Future (Amadeus Native) |
| :--- | :--- | :--- |
| **Inference** | Off-chain simulation (LLM API via Gateway) | **uPoW Consensus**: Miners run MatMul inference directly on-chain. |
| **Consensus** | Simulated verification delay & state update | **Native Verification**: Network validates weights & output hash. |
| **Memory** | **Arweave Permaweb** (UI Integrated) | **Amadeus Storage** + Arweave Bridge. |
| **Agent State** | Merkle Root stored on simulated contract | **WASM Runtime**: Full agent state stored in contract memory. |

*> **Note:** We have implemented the full "Lifecycle" (Mint -> Chat -> Verify -> Update) to demonstrate the exact UX of the future protocol.*


## Architecture
Our system bridges the high-speed Amadeus L1 with the permanent storage of Arweave.

1.  **Soul Forge**: User mints an agent. The "System Prompt" is hashed and stored on **IPFS/Arweave**.
2.  **Amadeus RPC**: The user sends a chat message as a transaction (`Submit Tx`).
3.  **Consensus Layer**:
    *   Miners receive the input + previous state.
    *   They execute the inference (Deterministic execution).
    *   They reach consensus on the output (The "Response").
4.  **State Update**: The agent's "Merkle State Root" is updated on-chain.
5.  **Permaweb Archive**: The full conversation log is archived to **Arweave** for eternal retrieval (Bonus Challenge).


<img width="932" height="408" alt="eterna-architecture" src="https://github.com/user-attachments/assets/fd5cb24e-d398-412f-93ae-ad9d19d9e59c" />


## Monetization Path
Eterna is not just a toy; it is a **marketplace for intelligence**.
1.  **Minting Fees**: Creating a "Soul" requires burning $AMA.
2.  **The Soul Marketplace**:
    *   Users can trade "Evolved Agents".
    *   *Example:* A "Math Tutor Bot" that has successfully taught 1,000 students is more valuable than a blank slate.
    *   Eterna takes a **2.5% fee** on all agent sales.
3.  **Compute Gas**: In the future, users pay gas in $AMA directly to miners for the inference compute.


## Technology Used
*   **Framework:** Next.js 14 (App Router)
*   **Styling:** Tailwind CSS v4 + Framer Motion (Cyber-Ethereal Theme)
*   **State:** Custom consensus simulation hooks
*   **Icons:** Lucide React


## How to Run It (Locally)
Want to poke the code? It's open source.

```bash
# 1. Clone the repo
git clone https://github.com/GokhanCey/Eterna.git

# 2. Install the goods
npm install

# 3. Ignite the reactor
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and breathe life into the machine.

## 🔗 Links
*   **Source Code**: https://github.com/GokhanCey/Eterna
*   **Live Demo**: https://eterna-rust.vercel.app
*   **Video**: (tbu)
*   **License**: MIT

---
*Built with 💜 for the Amadeus Genesis Hackathon.*
