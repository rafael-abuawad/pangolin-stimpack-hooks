# **Pangolin Stimpack Hooks**

**Pangolin Stimpack Hooks** is a set of hooks designed to incentivize liquidity and trading on Pangolin DEX. This project empowers both developers and regular users to create DeFi applications with an engaging, gamified interface. Built for Pangolin’s upcoming V3, these hooks allow easy integration and user engagement without requiring complex setup.

The system consists of two main contracts:
1. `StimpackHook.sol`: The most basic hook for providing liqudity and volume incentives.
2. `Factory.sol`: The factory, wich manages the deployments of the hooks, and so on.

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
The **Pangolin Stimpack Hooks** project is inspired by Pangolin DEX’s role as the first decentralized exchange on Avalanche and the upcoming features in Pangolin V3. Hooks offer an innovative way to extend DeFi functionality by enabling applications that don’t require initial liquidity or user acquisition from scratch. With a growing catalog, this project can become a valuable tool for both users and entrepreneurs.

## **Key Features**
- **Hook Simplicity**: A streamlined set of hooks for developers, lowering the barrier to entry for creating DeFi applications.
- **Gamified User Interface**: Interactive elements make the experience engaging and intuitive, suitable for users with varying technical backgrounds.
- **Empowerment Through Accessibility**: Allows non-developers to create and deploy hooks, promoting innovation within the community.

## **How It Works**

### **Hooks Overview**
The hooks are designed to simplify the development process for applications on Pangolin DEX. By removing the need to bootstrap liquidity or attract users, developers can focus on building their core applications without the typical overhead.

### **Gamified Interface**
The user interface introduces gamified elements, making it not only functional but also fun and intuitive. With an extensive catalog of hooks, users can easily explore and select those that fit their needs, while entrepreneurs have a powerful tool for creating user-friendly DeFi solutions.

## **Challenges**
Developing for an unreleased protocol posed unique challenges. However, this project serves as a functional MVP that will seamlessly integrate with Pangolin V3 once it’s ready for production.

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
This is work in progress.

## **License**
This project is licensed under the MIT License.
