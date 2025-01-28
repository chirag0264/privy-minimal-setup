# Privy Minimal Setup

This repository is a minimal setup to reproduce the issue with Privy SDK on Vercel deployment.

## Project Structure

This project uses a Turborepo setup with NPM.

### Commands

- **Clone this repository:**:  
   ```bash
   [git clone https://github.com/chirag0264/privy-minimal-setup](https://github.com/chirag0264/privy-minimal-setup)
   cd privy_minimal_app
   ```

- **Install dependencies**:  
  Navigate to the `apps/web` directory:  
  ```bash
  cd apps/web
  yarn install
  ```

- **Build the project**:  
  ```bash
  yarn build
  ```

- **Run in development**:  
  ```bash
  yarn dev
  ```

- **Run in production**:  
  ```bash
  yarn start
  ```

## Issue Description

When deploying to Vercel, the following error is encountered:  
*Describe the error here, including any logs or screenshots.*

## Dependencies

- **Node.js**: v16+  
- **Privy SDK**: *specific version*  
- **Turborepo**: *specific version*  
- **React/Next.js**: *specific version*

## Notes

This setup is intentionally kept minimal to assist in debugging the issue.

---
