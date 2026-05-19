import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "./svg-i8v0h32p5p";
import PilihSaldoTray from "../../app/components/PilihSaldoTray";

type ServiceFilter = "semua" | "delivery" | "pickup";

const SERVICE_LABELS: Record<ServiceFilter, string> = {
  semua: "semua GoFood",
  delivery: "GoFood Delivery",
  pickup: "GoFood Pickup",
};
const SERVICE_COUNTS: Record<ServiceFilter, number> = {
  semua: 10,
  delivery: 6,
  pickup: 4,
};

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p9c18100} fill="var(--fill-0, #E52535)" id="color" />
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
    <button onClick={onOpenTray} className="bg-[#ffd0cc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_when_restaurant_confirm">
        <Icon />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">GoFood</p>
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
    <div className="bg-[#ffd0cc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
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

function Frame8({ count }: { count: number }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_bill">
        <Icon3 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#202020] text-[18px] whitespace-nowrap">{count}</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4c4c] text-[14px] whitespace-nowrap">transaksi dari</p>
    </div>
  );
}

function Icon4() {
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

function Frame6({ label, onOpen }: { label: string; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className="bg-[#f9f9f9] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0 border-none cursor-pointer">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">{label}</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon4 />
      </div>
    </button>
  );
}

function Frame({ serviceFilter, onOpenServiceTray }: { serviceFilter: ServiceFilter; onOpenServiceTray: () => void }) {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[16px] relative size-full">
          <Frame8 count={SERVICE_COUNTS[serviceFilter]} />
          <Frame6 label={SERVICE_LABELS[serviceFilter]} onOpen={onOpenServiceTray} />
        </div>
      </div>
    </div>
  );
}

function Frame2({ serviceFilter, onOpenServiceTray }: { serviceFilter: ServiceFilter; onOpenServiceTray: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full">
      <Frame serviceFilter={serviceFilter} onOpenServiceTray={onOpenServiceTray} />
    </div>
  );
}

function Frame1({ onOpenTray, serviceFilter, onOpenServiceTray }: { onOpenTray: () => void; serviceFilter: ServiceFilter; onOpenServiceTray: () => void }) {
  return (
    <div className="bg-[#fdedee] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ffbfba] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Frame3 onOpenTray={onOpenTray} />
      <Frame2 serviceFilter={serviceFilter} onOpenServiceTray={onOpenServiceTray} />
    </div>
  );
}

function Filters({ onOpenTray, serviceFilter, onOpenServiceTray }: { onOpenTray: () => void; serviceFilter: ServiceFilter; onOpenServiceTray: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] w-full" data-name="Filters">
      <Frame1 onOpenTray={onOpenTray} serviceFilter={serviceFilter} onOpenServiceTray={onOpenServiceTray} />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="content">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-right whitespace-nowrap">Dari iklan</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="content">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-right whitespace-nowrap">Dari diskon</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="chips">
        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <Content />
      </div>
      <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0" data-name="chips">
        <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <Content1 />
      </div>
    </div>
  );
}

// ─── Shared transaction components ───────────────────────────────────────────

function IklanIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon"><g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p3da9e380} fill="var(--fill-0, #87027B)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function DiskonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon"><g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p3cdd3460} fill="var(--fill-0, #0081A0)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MitraIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon"><g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p17c39d00} fill="var(--fill-0, #FFB500)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function IklanBadge() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#feebfd] gap-[6px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[12px] shrink-0 to-white" data-name="Discount badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0"><IklanIcon /></div>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[12px] whitespace-nowrap">Dari iklan</p>
    </div>
  );
}

function DiskonBadge() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#d6f7ff] gap-[6px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[12px] shrink-0 to-white" data-name="MFP Type">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]"><DiskonIcon /></div>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[12px] whitespace-nowrap">Dari diskon</p>
    </div>
  );
}

type TxProps = {
  id: string; time: string;
  penjualan: string; biaya: string; pendapatan: string;
  iklan?: boolean; diskon?: boolean; mitra?: boolean;
};

function SalesTx({ id, time, penjualan, biaya, pendapatan, iklan, diskon, mitra }: TxProps) {
  const isPickup = id.startsWith("FP-");
  const title = isPickup ? `GoFood Pickup | ${id}` : `GoFood Delivery | ${id}`;
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Sales/GoFood/Delivery">
      {(iklan || diskon) && (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Promo tag">
          {iklan && <IklanBadge />}
          {diskon && <DiskonBadge />}
        </div>
      )}
      <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 w-full" data-name="Title & time">
        <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px relative text-[#202020] text-[14px]">{title}</p>
        <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#8b8b8b] text-[12px] text-right whitespace-nowrap">{time}</p>
      </div>
      <div className="content-stretch flex gap-[12px] items-center leading-[16px] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Value">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Element">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Penjualan</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{penjualan}</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Element">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Biaya</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{biaya}</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Element">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">Pendapatan</p>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{pendapatan}</p>
        </div>
      </div>
      {mitra && (
        <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative rounded-[12px] shrink-0 w-full" data-name="MFP value">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0"><MitraIcon /></div>
          <p className="font-['Maison_Neue:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[12px] whitespace-nowrap">Promo yang ditanggung mitra usaha -5.000</p>
        </div>
      )}
    </div>
  );
}

// Delivery: total Pendapatan = 76+96+64+88+60+92 = Rp476.000
function SalesGoFoodDelivery() {
  return <SalesTx id="F-181611" time="18:30, 17 Aug" penjualan="Rp95.000" biaya="Rp19.000" pendapatan="Rp76.000" iklan diskon mitra />;
}
function SalesGoFoodDelivery1() {
  return <SalesTx id="F-181608" time="17:15, 17 Aug" penjualan="Rp120.000" biaya="Rp24.000" pendapatan="Rp96.000" iklan />;
}
function SalesGoFoodDelivery2() {
  return <SalesTx id="F-181605" time="16:00, 17 Aug" penjualan="Rp80.000" biaya="Rp16.000" pendapatan="Rp64.000" />;
}
function SalesGoFoodDelivery4() {
  return <SalesTx id="F-181603" time="14:30, 17 Aug" penjualan="Rp110.000" biaya="Rp22.000" pendapatan="Rp88.000" iklan diskon mitra />;
}
function SalesGoFoodDelivery5() {
  return <SalesTx id="F-181601" time="13:00, 17 Aug" penjualan="Rp75.000" biaya="Rp15.000" pendapatan="Rp60.000" iklan diskon mitra />;
}
function SalesGoFoodDelivery7() {
  return <SalesTx id="F-181599" time="11:45, 17 Aug" penjualan="Rp115.000" biaya="Rp23.000" pendapatan="Rp92.000" iklan diskon mitra />;
}

// Pickup: total Pendapatan = 72+55+59+38 = Rp224.000 — no Dari diskon, no Promo mitra
function SalesGoFoodDelivery3() {
  return <SalesTx id="FP-181612" time="18:00, 17 Aug" penjualan="Rp85.000" biaya="Rp13.000" pendapatan="Rp72.000" />;
}
function SalesGoFoodPickup2() {
  return <SalesTx id="FP-181609" time="15:30, 17 Aug" penjualan="Rp65.000" biaya="Rp10.000" pendapatan="Rp55.000" />;
}
function SalesGoFoodPickup3() {
  return <SalesTx id="FP-181606" time="12:30, 17 Aug" penjualan="Rp70.000" biaya="Rp11.000" pendapatan="Rp59.000" />;
}
function SalesGoFoodPickup4() {
  return <SalesTx id="FP-181602" time="10:00, 17 Aug" penjualan="Rp45.000" biaya="Rp7.000" pendapatan="Rp38.000" />;
}

// ─── List helpers ─────────────────────────────────────────────────────────────

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

function TipeLayananTray({ selected, onSelect, onClose }: { selected: ServiceFilter; onSelect: (f: ServiceFilter) => void; onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end" style={{ background: "rgba(0,0,0,0.5)" }} onClick={onClose}>
      <div className="bg-white rounded-tl-[16px] rounded-tr-[16px] pb-[32px]" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-[16px] py-[16px]">
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[#202020] text-[16px] leading-[20px]">Tipe layanan</p>
          <button onClick={onClose} className="bg-transparent border-none cursor-pointer p-0">
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[#008a0d] text-[14px] leading-[20px]">Tutup</p>
          </button>
        </div>
        <div className="h-px w-full bg-[#e7e7e7]" />
        {(["delivery", "pickup", "semua"] as ServiceFilter[]).map(filter => (
          <button key={filter} onClick={() => { onSelect(filter); onClose(); }} className="flex items-center justify-between w-full px-[16px] py-[16px] bg-transparent border-none cursor-pointer">
            <p className={`font-['Maison_Neue_APP:${selected === filter ? "Demi" : "Book"}',sans-serif] text-[#202020] text-[14px] leading-[20px]`}>
              {filter === "delivery" ? "GoFood Delivery" : filter === "pickup" ? "GoFood Pickup" : "Semua GoFood"}
            </p>
            {selected === filter && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8L6.5 12.5L14 5" stroke="#008a0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function TransactionList({ serviceFilter }: { serviceFilter: ServiceFilter }) {
  const d = serviceFilter !== "pickup";
  const p = serviceFilter !== "delivery";
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[20px] px-[16px] rounded-tl-[16px] rounded-tr-[16px] w-full" data-name="Transaction list">
      <Frame7 />
      {d && <><TxDivider /><SalesGoFoodDelivery /></>}
      {p && <><TxDivider /><SalesGoFoodDelivery3 /></>}
      {d && <><TxDivider /><SalesGoFoodDelivery1 /></>}
      {p && <><TxDivider /><SalesGoFoodPickup2 /></>}
      {d && <><TxDivider /><SalesGoFoodDelivery2 /></>}
      {p && <><TxDivider /><SalesGoFoodPickup3 /></>}
      {d && <><TxDivider /><SalesGoFoodDelivery4 /></>}
      {p && <><TxDivider /><SalesGoFoodPickup4 /></>}
      {d && <><TxDivider /><SalesGoFoodDelivery5 /></>}
      {d && <><TxDivider /><SalesGoFoodDelivery7 /></>}
    </div>
  );
}

// ─── Navigation & layout ──────────────────────────────────────────────────────

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
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px not-italic overflow-clip relative" data-name=".properties/navbar/left_side/title_style">
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

function Tabs() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Saldo</p>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Penjualan</p>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Transaksi</p>
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
        <div className="flex-[1_0_0] min-w-px relative" data-name="1">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/gofood", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs />
            </button>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="2">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/gofood/penjualan", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs1 />
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[44px] items-center justify-center min-w-px relative" data-name="3">
          <Tabs2 />
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" data-name="line" />
        </div>
      </div>
    </div>
  );
}

export default function TransactionGoFood() {
  const location = useLocation();
  const [showTray, setShowTray] = useState(false);
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>((location.state?.serviceFilter as ServiceFilter) ?? "semua");
  const [showServiceTray, setShowServiceTray] = useState(false);
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <Filters onOpenTray={() => setShowTray(true)} serviceFilter={serviceFilter} onOpenServiceTray={() => setShowServiceTray(true)} />
        <TransactionList serviceFilter={serviceFilter} />
      </div>
      {showTray && <PilihSaldoTray selected="gofood" onClose={() => setShowTray(false)} />}
      {showServiceTray && <TipeLayananTray selected={serviceFilter} onSelect={setServiceFilter} onClose={() => setShowServiceTray(false)} />}
    </div>
  );
}
