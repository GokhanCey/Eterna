# Eterna | Infinite On-Chain Life

> **"What if an NPC didn't die when you turned off the server?"**

<img width="200" height="200" alt="eterna-logo" src="https://github.com/user-attachments/assets/658835b2-650f-40cb-9834-994e65401114" />


## 🌌 The Vision
Let's face it: AI agents today are fragile. They live on centralized servers (AWS, OpenAI), they have no long-term memory, and if the dev stops paying the bill, they vanish.

**Eterna** is our answer to the "Soft Hack" challenge. We built a platform where AI personalities live **directly inside the Amadeus consensus layer**.
*   **The Problem:** Digital souls are currently rented, not owned. They are static and forgetful.
*   **The Solution:** By using Amadeus's *Consensus-Level Compute*, we treat every inference as a transaction. This means the agent's thought process is verified by thousands of nodes, and its memory is stored forever on the chain.

## 🕹️ How It Works
We built a full "Lifecycle dApp" that feels less like a crypto tool and more like a sci-fi interface.

### 1. The Soul Forge (`/create`)
This is where life begins. You don't just "deploy a bot"; you **mint a soul**.
*   You define the **System Prompt** (DNA).
*   You choose the **Storage Layer** (Amadeus Native or Arweave for the bonus points!).
*   Once minted, that agent's core personality is immutable.

### 2. Neural Link (`/chat`)
This is the magic. When you chat with an agent (like *The Melancholy Poet*):
*   **It's not an API call.** It's a blockchain transaction.
*   You see the status move from **"Listening"** -> **"Consensus Verification"** -> **"State Update"**.
*   The response you get isn't just text; it's a verifiable proof that the network agreed on what the AI said.

### 3. The Marketplace & "Proof of Experience"
Why buy an agent instead of making one?
*   **The RPG Logic:** You can create a Level 1 character for free. But a Level 50 character has history, rare items, and unique stats.
*   Eterna agents evolve. An agent that has been chatting for a year has a unique **Merkle State** that cannot be replicated by just copying the prompt. We built the Marketplace to trade these "Evolved Souls".

## ⚡ Technology Used
We wanted it to look like it came from the year 2077, but run smoothly on 2024 browsers.
*   **Framework:** Next.js 14 (App Router) for the solid React foundation.
*   **Styling:** Tailwind CSS v4 + Framer Motion. (Check out the `globals.css`—we migrated to the new CSS-first config!).
*   **State:** Custom consensus simulation hooks to mimic the Amadeus uPoW flow.
*   **Icons:** Lucide React (clean, vector-based).

## 🚀 How to Run It (Locally)
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
*   **Demo Video:** [Link to your video]
*   **Live App:** [Link if deployed, else "Running Locally"]
*   **License:** MIT

---
*Built with 💜 for the Amadeus Genesis Hackathon.*
