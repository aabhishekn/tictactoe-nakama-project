import { useState } from "react";

export default function App() {
  const [status, setStatus] = useState("Idle");

  async function connect() {
    setStatus("Connecting...");
    try {
      const { Client } = await import("@heroiclabs/nakama-js");

      const useSSL = false; // local dev
      const client = new Client("defaultkey", "127.0.0.1", "7350", useSSL);

      // simple device auth for demo
      const deviceId = crypto?.randomUUID?.() || String(Date.now());
      const session = await client.authenticateDevice(deviceId, true);

      const socket = client.createSocket(useSSL, false);
      await socket.connect(session, true);

      setStatus("✅ Connected to Nakama");
      console.log("Session:", session);
      console.log("Socket connected:", socket.isConnected);
    } catch (e) {
      console.error(e);
      setStatus("❌ Failed: " + (e?.message || e));
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <div className="w-[360px] p-6 rounded-2xl shadow border bg-white text-center">
        <h1 className="text-2xl font-bold mb-4">TicTacToe • Nakama</h1>
        <p className="text-gray-600 mb-6">
          Click connect to authenticate and open a realtime socket to your local Nakama server.
        </p>
        <button
          onClick={connect}
          className="px-4 py-2 rounded-xl bg-black text-white hover:opacity-90"
        >
          Connect to Nakama
        </button>

        <div className="mt-4 text-sm">
          <span className="font-medium">Status:</span> {status}
        </div>
      </div>
    </div>
  );
}
