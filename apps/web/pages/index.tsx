import { PrivyProvider, usePrivy, useWallets } from "@privy-io/react-auth";
import { useState, useEffect } from "react";

// Wrapper component for Privy Provider
function MainContent() {
  const {
    login: privyLogin,
    logout: privyLogout,
    authenticated,
    user: privyUser,
    ready,
  } = usePrivy();

  const { wallets } = useWallets();
  const [signedMessage, setSignedMessage] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // Define WalletEnum if not already defined
  const WalletEnum = {
    PRIVY: "privy",
  };

  const privyWallet = wallets.find(
    (wallet) => wallet.walletClientType === WalletEnum.PRIVY
  );

  console.log("privyWallet", privyWallet);

  const handleSign = async () => {
    try {
      console.log("Starting sign process...");
      const nonce = "Hello from Privy!";
      const address = privyWallet?.address;
      const provider = await privyWallet?.getEthereumProvider();

      const signature = await provider?.request({
        method: "personal_sign",
        params: [nonce, address],
      });

      setSignedMessage({
        signature,
        address,
        nonce,
      });
    } catch (error: any) {
      console.error("Error in handleSign:", error);
      setError(error?.message || "Error signing message");
    }
  };

  // Debug logs
  useEffect(() => {
    console.log("Auth State:", {
      authenticated,
      privyUser,
      walletsCount: wallets?.length,
      hasPrivyWallet: !!privyWallet,
      walletAddress: privyWallet ? String(privyWallet.address) : null,
    });
  }, [authenticated, privyUser, wallets, privyWallet]);

  if (!ready) return <div>Loading Privy...</div>;
  if (ready && !authenticated) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Privy Wallet Test</h1>
        <p>Please login to continue</p>
        <button onClick={privyLogin}>Login with Privy</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Privy Wallet Test</h1>
      {error && (
        <div
          style={{
            color: "red",
            margin: "10px 0",
            padding: "10px",
            border: "1px solid red",
          }}
        >
          Error: {error}
          <button onClick={() => setError(null)}>Clear</button>
        </div>
      )}
      <div>
        {authenticated ? (
          <div>
            <p>User: {privyUser?.email?.address || "No email"}</p>
            {privyWallet ? (
              <div>
                <p>Wallet: {String(privyWallet.address)}</p>
                <button onClick={handleSign}>Sign Message</button>
              </div>
            ) : (
              <p>Waiting for wallet initialization...</p>
            )}
            {signedMessage && (
              <div>
                <h2>Signed Message:</h2>
                <pre>{JSON.stringify(signedMessage, null, 2)}</pre>
              </div>
            )}
            <button onClick={privyLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please login to continue</p>
            <button onClick={privyLogin}>Login with Privy</button>
          </div>
        )}
      </div>
    </div>
  );
}

// Main page component with error boundary
export default function Home() {
  return (
    <PrivyProvider
      appId="cm6gbn8ch040ojivsuri5q2os" // Demo_ID
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: "light",
        },
      }}
    >
      <MainContent />
    </PrivyProvider>
  );
}
