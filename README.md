# Privy Minimal Setup

This repository is a minimal setup to reproduce the issue with Privy SDK on Vercel deployment.

## Project Structure

This project uses a Turborepo setup with NPM.

### Commands

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

## Steps to Reproduce

1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. Install dependencies:
   ```bash
   cd apps/web
   yarn install
   ```

3. Deploy to Vercel:
   - Follow [Vercel's guide](https://vercel.com/docs) to deploy the project.
   - Observe the issue with the Privy SDK.

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
