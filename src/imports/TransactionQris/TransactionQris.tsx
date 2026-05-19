import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-5pw8ia0ors";
import PilihSaldoTray from "../../app/components/PilihSaldoTray";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2f23d600} fill="var(--fill-0, #0081A0)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame4({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <button onClick={onOpenTray} className="bg-[#a6e8ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_wallet">
        <Icon />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">QRIS</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon1 />
      </div>
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#a6e8ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Hari ini</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon2 />
      </div>
    </div>
  );
}

function Frame3({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] pt-[16px] px-[12px] relative size-full">
          <Frame4 onOpenTray={onOpenTray} />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p121f8700} fill="var(--fill-0, #4C4C4C)" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_bill">
        <Icon3 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#202020] text-[18px] whitespace-nowrap">8</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4c4c] text-[14px] whitespace-nowrap">transaksi</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame1({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="bg-[#d6f7ff] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#0081a0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Frame3 onOpenTray={onOpenTray} />
      <Frame2 />
    </div>
  );
}

function Filters({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] w-full" data-name="Filters">
      <Frame1 onOpenTray={onOpenTray} />
    </div>
  );
}

// ─── Transaction data ─────────────────────────────────────────────────────────
// 8 transactions: total Penjualan Rp1.000.000 | Biaya Rp75.000 | Pendapatan Rp925.000

type TxData = { id: string; time: string; penjualan: string; biaya: string; pendapatan: string };

const TRANSACTIONS: TxData[] = [
  { id: "281001", time: "18:30, 17 Aug", penjualan: "Rp95.000",  biaya: "Rp7.000",  pendapatan: "Rp88.000"  },
  { id: "281002", time: "17:45, 17 Aug", penjualan: "Rp85.000",  biaya: "Rp6.000",  pendapatan: "Rp79.000"  },
  { id: "281003", time: "17:00, 17 Aug", penjualan: "Rp145.000", biaya: "Rp11.000", pendapatan: "Rp134.000" },
  { id: "281004", time: "16:15, 17 Aug", penjualan: "Rp130.000", biaya: "Rp10.000", pendapatan: "Rp120.000" },
  { id: "281005", time: "14:30, 17 Aug", penjualan: "Rp120.000", biaya: "Rp9.000",  pendapatan: "Rp111.000" },
  { id: "281006", time: "13:00, 17 Aug", penjualan: "Rp155.000", biaya: "Rp12.000", pendapatan: "Rp143.000" },
  { id: "281007", time: "12:00, 17 Aug", penjualan: "Rp155.000", biaya: "Rp12.000", pendapatan: "Rp143.000" },
  { id: "281008", time: "10:30, 17 Aug", penjualan: "Rp115.000", biaya: "Rp8.000",  pendapatan: "Rp107.000" },
];

function QrisTx({ id, time, penjualan, biaya, pendapatan }: TxData) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px relative text-[#202020] text-[14px]">QRIS | {id}</p>
        <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#8b8b8b] text-[12px] text-right whitespace-nowrap">{time}</p>
      </div>
      <div className="content-stretch flex gap-[12px] items-center leading-[16px] not-italic relative shrink-0 w-full whitespace-nowrap">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Penjualan</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{penjualan}</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Biaya</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{biaya}</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Pendapatan</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{pendapatan}</p>
        </div>
      </div>
    </div>
  );
}

function TxDivider() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-px min-w-px relative">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
          <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function TransactionList() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[20px] px-[16px] rounded-tl-[16px] rounded-tr-[16px] w-full">
      {TRANSACTIONS.map((tx, i) => (
        <div key={tx.id} className="contents">
          {i > 0 && <TxDivider />}
          <QrisTx {...tx} />
        </div>
      ))}
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18.044px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0439 16">
        <g id="wifi">
          <g id="bounds" />
          <path d={svgPaths.p12ce9300} fill="var(--fill-0, #202020)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Cellular() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cellular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cellular">
          <g id="bounds" />
          <path clipRule="evenodd" d="M0 15H14V1L0 15Z" fill="var(--fill-0, #202020)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="battery">
          <g id="bounds" />
          <path clipRule="evenodd" d={svgPaths.p31eb3600} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[19px] opacity-90 overflow-clip relative shrink-0 w-[39px]" data-name="time">
      <p className="absolute font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] left-[2.56%] not-italic right-0 text-[#202020] text-[14px] text-right top-[calc(50%-9.5px)] whitespace-nowrap">08:08</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.pfc39500} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  const navigate = useNavigate();
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="left_side">
            <button onClick={() => navigate(-1)} className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/24/ic_back">
              <Icon20 />
            </button>
            <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-w-px overflow-clip relative" data-name="avatar_text">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px not-italic overflow-clip relative">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#202020] text-[16px] w-full">Rincian keuangan</p>
                <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#4c4c4c] text-[12px] w-full">Gado-Gado Mpok Ica, Serang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavbarTab() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex flex-col items-start sticky top-0 w-full z-10" data-name="Top navbar & tab">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start pb-[8px] pt-[28px] shrink-0 w-full" data-name="navbar">
        <Content2 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="tabs/regular">
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/qris", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Saldo</p>
            </button>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/qris/penjualan", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Penjualan</p>
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[44px] items-center justify-center min-w-px relative">
          <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0">
            <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Transaksi</p>
          </div>
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" data-name="line" />
        </div>
      </div>
    </div>
  );
}

export default function TransactionQris() {
  const [showTray, setShowTray] = useState(false);
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <Filters onOpenTray={() => setShowTray(true)} />
        <TransactionList />
      </div>
      {showTray && <PilihSaldoTray selected="qris" onClose={() => setShowTray(false)} />}
    </div>
  );
}
