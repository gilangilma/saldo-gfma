import { createBrowserRouter, Outlet } from "react-router";
import { useState, useEffect } from "react";
import HomeOwner from "../imports/HomeOwner/HomeOwner";
import FinancePage from "../imports/FinancePage-1/FinancePage-17-21218";
import BalanceGoFood from "../imports/BalanceGoFood/BalanceGoFood";
import BalanceQris from "../imports/BalanceQris/BalanceQris";
import BalanceAll from "../imports/BalanceAll/BalanceAll";
import PenjualanGofood from "../imports/PenjualanGofood/PenjualanGofood";
import TransactionGoFood from "../imports/TransactionGoFood/TransactionGoFood";
import PenjualanQris from "../imports/PenjualanQris/PenjualanQris";
import TransactionQris from "../imports/TransactionQris/TransactionQris";

function AndroidPhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative"
        style={{
          width: "392px",
          background: "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%)",
          borderRadius: "52px",
          padding: "14px 16px 20px 16px",
          boxShadow:
            "0 0 0 1.5px #444, 0 0 0 2.5px #222, 0 30px 80px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        <div className="absolute" style={{ left: "-3.5px", top: "130px", width: "3.5px", height: "36px", background: "linear-gradient(to right, #333, #444)", borderRadius: "3px 0 0 3px", boxShadow: "-1px 0 2px rgba(0,0,0,0.5)" }} />
        <div className="absolute" style={{ left: "-3.5px", top: "178px", width: "3.5px", height: "36px", background: "linear-gradient(to right, #333, #444)", borderRadius: "3px 0 0 3px", boxShadow: "-1px 0 2px rgba(0,0,0,0.5)" }} />
        <div className="absolute" style={{ right: "-3.5px", top: "160px", width: "3.5px", height: "64px", background: "linear-gradient(to left, #333, #444)", borderRadius: "0 3px 3px 0", boxShadow: "1px 0 2px rgba(0,0,0,0.5)" }} />
        <div style={{ background: "#000", borderRadius: "38px", overflow: "hidden", position: "relative", width: "360px", height: "780px" }}>
          <div style={{ position: "absolute", top: "12px", left: "50%", transform: "translateX(-50%)", width: "12px", height: "12px", borderRadius: "50%", background: "#0a0a0a", boxShadow: "0 0 0 1.5px #1a1a1a", zIndex: 50 }} />
          <div style={{ width: "360px", height: "780px", overflow: "hidden", position: "relative" }}>
            {children}
          </div>
        </div>
        <div style={{ width: "120px", height: "4px", background: "rgba(255,255,255,0.25)", borderRadius: "2px", margin: "10px auto 0" }} />
      </div>
    </div>
  );
}

const DEVICE_HEIGHT = 828;
const DEVICE_MARGIN = 56;

function useDeviceScale() {
  const compute = () => Math.min(1, (window.innerHeight - DEVICE_MARGIN) / DEVICE_HEIGHT);
  const [scale, setScale] = useState(compute);
  useEffect(() => {
    const update = () => setScale(compute());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

function useMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function RootLayout() {
  const isMobile = useMobile();
  const deviceScale = useDeviceScale();

  if (isMobile) {
    return (
      <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
        <Outlet />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center"
      style={{ background: "#e0e0e0", width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <div style={{ zoom: deviceScale }}>
        <AndroidPhoneMockup>
          <Outlet />
        </AndroidPhoneMockup>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomeOwner },
      { path: "finance", Component: FinancePage },
      { path: "finance/gofood", Component: BalanceGoFood },
      { path: "finance/gofood/penjualan", Component: PenjualanGofood },
      { path: "finance/gofood/transaksi", Component: TransactionGoFood },
      { path: "finance/qris", Component: BalanceQris },
      { path: "finance/qris/penjualan", Component: PenjualanQris },
      { path: "finance/qris/transaksi", Component: TransactionQris },
      { path: "finance/all", Component: BalanceAll },
    ],
  },
]);
