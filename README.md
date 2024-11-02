# **Pangolin Stimpack Hooks**

**Pangolin Stimpack Hooks** is a user-friendly web application designed to make it easy for anyone to create, deploy, and manage their own Pangolin V3 Hooks. With a simple, gamified interface, users can build hooks focused on boosting liquidity and incentivizing participation on Pangolin DEX, all without needing a complex setup. Currently, Stimpack Hooks offers four core hooks, each geared toward driving liquidity and encouraging both liquidity providers and traders to engage.

The system consists of two main components:
1. `StimpackHook.sol`: The basic hook contract that provides liquidity and volume incentives.
2. `Factory.sol`: A factory contract that manages the deployment and organization of individual hooks.

![Screenshot 2024-11-02 at 16-06-47 Create Next App](https://github.com/user-attachments/assets/e9f14531-e04f-4222-bf79-0f2788255d07)
![Screenshot 2024-11-02 at 16-07-15 Create Next App](https://github.com/user-attachments/assets/99d709fd-221e-4f6f-98b5-0a44eb233f32)
![Screenshot 2024-11-02 at 16-07-23 Create Next App](https://github.com/user-attachments/assets/59c7ab74-33f1-44d4-ab44-439aedddaba7)

## **Table of Contents**
- [Introduction](#introduction)
- [Key Features](#key-features)
- [How It Works](#how-it-works)
  - [Hooks Overview](#hooks-overview)
  - [Gamified Interface](#gamified-interface)
- [Challenges](#challenges)
- [Technologies](#technologies)
- [Setup](#setup)
- [License](#license)

## **Introduction**
The **Pangolin Stimpack Hooks** project is inspired by Pangolin DEX’s pioneering role on Avalanche and the upcoming features in Pangolin V3. Stimpack Hooks provides a versatile and straightforward way for users, whether developers or not, to create DeFi hooks with minimal technical requirements. The initial four hooks focus on jumpstarting liquidity and user engagement, with plans to expand as the protocol grows.

## **Key Features**
- **Simple Hook Creation**: A straightforward process allows anyone to create and deploy hooks to Pangolin DEX.
- **Gamified Interface**: Engaging, interactive elements make it easy to navigate and use, making DeFi accessible to a wider audience.
- **Empowering DeFi Innovation**: Non-developers can create and manage hooks, encouraging innovation and experimentation within the community.

## **How It Works**

### **Hooks Overview**
Stimpack Hooks simplifies the development of liquidity-boosting applications on Pangolin DEX. With no need for extensive user acquisition or liquidity bootstrapping, anyone can easily deploy hooks to support DeFi activity on Pangolin.

### **Gamified Interface**
The gamified UI makes creating hooks both functional and fun. Users can browse and select from the catalog of hooks, focusing on liquidity incentives and engagement while enjoying an intuitive, game-like experience.

## **Challenges**
The project presented unique challenges in preparing for integration with Pangolin’s upcoming V3. However, this application serves as a robust MVP designed to seamlessly operate with Pangolin V3 upon its release.

## **Technologies**
- **Solidity**
- **Foundry**
- **React + Next.js**
- **Wagmi**

## **Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/rafael-abuawad/pangolin-stimpack-hooks
   cd pangolin-stimpack-hooks
   ```

2. Install dependencies:
   ```bash
   forge install
   ```

3. Run the development server:
   ```bash
   anvil
   ```

4. Compile and deploy the contracts:
   ```bash
   forge build
   forge deploy
   ```

## **Notice**
This is a work in progress.

## **License**
This project is licensed under the MIT License.
