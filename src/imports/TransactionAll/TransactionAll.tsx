import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "../TransactionGoFood/svg-i8v0h32p5p";
import PilihSaldoTray from "../../app/components/PilihSaldoTray";

function SemuaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#007C0B" strokeWidth="1.5" />
      <path d="M12 7V17M9 9.5C9 9.5 9.5 8 12 8C14.5 8 15 9.5 15 10.5C15 12 13.5 12.5 12 13C10.5 13.5 9 14 9 15.5C9 16.5 9.5 18 12 18C14.5 18 15 16.5 15 16.5" stroke="#007C0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function BillIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p121f8700} fill="var(--fill-0, #4C4C4C)" />
      </svg>
    </div>
  );
}

function BackIcon() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <path clipRule="evenodd" d={svgPaths.pfc39500} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IklanIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p3da9e380} fill="var(--fill-0, #87027B)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function DiskonIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p3cdd3460} fill="var(--fill-0, #0081A0)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function MfpPromoIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p17c39d00} fill="var(--fill-0, #FFB500)" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function DiscountBadge() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#feebfd] gap-[6px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[12px] shrink-0 to-white">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
        <IklanIcon />
      </div>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[12px] whitespace-nowrap">Dari iklan</p>
    </div>
  );
}

function MfpType() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#d6f7ff] gap-[6px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[12px] shrink-0 to-white">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]">
        <DiskonIcon />
      </div>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[12px] whitespace-nowrap">Dari diskon</p>
    </div>
  );
}

function Divider() {
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

type TxTag = "iklan" | "diskon";

interface TxProps {
  title: string;
  time: string;
  penjualan: string;
  biaya: string;
  pendapatan: string;
  tags: TxTag[];
  hasMfp?: boolean;
}

function TransactionRow({ title, time, penjualan, biaya, pendapatan, tags, hasMfp }: TxProps) {
  const hasIklan = tags.includes("iklan");
  const hasDiskon = tags.includes("diskon");
  const showPromoTag = hasIklan || hasDiskon;

  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      {showPromoTag && (
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {hasIklan && (
            <div className="content-stretch flex items-center relative shrink-0">
              <DiscountBadge />
            </div>
          )}
          {hasDiskon && <MfpType />}
        </div>
      )}
      <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px relative text-[#202020] text-[14px]">{title}</p>
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
      {hasMfp && (
        <div className="content-stretch flex gap-[6px] items-center pt-[4px] relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
            <MfpPromoIcon />
          </div>
          <p className="font-['Maison_Neue:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[12px] whitespace-nowrap">Promo yang ditanggung mitra usaha -5.000</p>
        </div>
      )}
    </div>
  );
}

const transactions: TxProps[] = [
  { title: "GoFood Delivery | F-12345678910", time: "18:00, 17 Aug", penjualan: "Rp1.135.000", biaya: "Rp127.000", pendapatan: "Rp2.228.000", tags: ["iklan", "diskon"], hasMfp: true },
  { title: "GoFood Delivery | F-12345678911", time: "17:45, 17 Aug", penjualan: "Rp980.000", biaya: "Rp98.000", pendapatan: "Rp882.000", tags: ["iklan"], hasMfp: false },
  { title: "GoFood Delivery | F-12345678912", time: "17:30, 17 Aug", penjualan: "Rp1.200.000", biaya: "Rp120.000", pendapatan: "Rp1.080.000", tags: [], hasMfp: false },
  { title: "GoFood Pickup | FP-181612", time: "16:00, 17 Aug", penjualan: "Rp750.000", biaya: "Rp75.000", pendapatan: "Rp675.000", tags: ["diskon"], hasMfp: true },
  { title: "GoFood Pickup | FP-181613", time: "15:30, 17 Aug", penjualan: "Rp890.000", biaya: "Rp89.000", pendapatan: "Rp801.000", tags: ["iklan", "diskon"], hasMfp: true },
  { title: "GoFood Delivery | F-12345678913", time: "14:00, 17 Aug", penjualan: "Rp1.050.000", biaya: "Rp105.000", pendapatan: "Rp945.000", tags: ["iklan", "diskon"], hasMfp: true },
  { title: "GoFood Catering | FP-181614", time: "13:30, 17 Aug", penjualan: "Rp2.500.000", biaya: "Rp250.000", pendapatan: "Rp2.250.000", tags: [], hasMfp: false },
  { title: "GoFood Delivery | F-12345678914", time: "12:00, 17 Aug", penjualan: "Rp670.000", biaya: "Rp67.000", pendapatan: "Rp603.000", tags: ["iklan"], hasMfp: false },
  { title: "QRIS | QR-20240518001", time: "11:45, 17 Aug", penjualan: "Rp450.000", biaya: "Rp2.000", pendapatan: "Rp448.000", tags: [], hasMfp: false },
  { title: "QRIS | QR-20240518002", time: "11:30, 17 Aug", penjualan: "Rp320.000", biaya: "Rp2.000", pendapatan: "Rp318.000", tags: ["iklan"], hasMfp: true },
  { title: "QRIS | QR-20240518003", time: "10:00, 17 Aug", penjualan: "Rp550.000", biaya: "Rp2.000", pendapatan: "Rp548.000", tags: ["diskon"], hasMfp: false },
  { title: "GoFood Delivery | F-12345678915", time: "09:30, 17 Aug", penjualan: "Rp1.340.000", biaya: "Rp134.000", pendapatan: "Rp1.206.000", tags: ["iklan", "diskon"], hasMfp: false },
  { title: "QRIS | QR-20240518004", time: "09:00, 17 Aug", penjualan: "Rp280.000", biaya: "Rp2.000", pendapatan: "Rp278.000", tags: [], hasMfp: false },
  { title: "GoFood Pickup | FP-181615", time: "08:30, 17 Aug", penjualan: "Rp920.000", biaya: "Rp92.000", pendapatan: "Rp828.000", tags: ["diskon"], hasMfp: true },
  { title: "QRIS | QR-20240518005", time: "08:00, 17 Aug", penjualan: "Rp180.000", biaya: "Rp2.000", pendapatan: "Rp178.000", tags: ["iklan"], hasMfp: false },
  { title: "GoFood Catering | FP-181616", time: "07:30, 17 Aug", penjualan: "Rp3.200.000", biaya: "Rp320.000", pendapatan: "Rp2.880.000", tags: [], hasMfp: false },
];

function TransactionList() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[20px] px-[16px] rounded-tl-[16px] rounded-tr-[16px] w-full">
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
        <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-right whitespace-nowrap">Dari iklan</p>
        </div>
        <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[24px] shrink-0">
          <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[24px]" />
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-right whitespace-nowrap">Dari diskon</p>
        </div>
      </div>
      {transactions.map((tx, i) => (
        <div key={i} className="w-full flex flex-col gap-[16px]">
          {i > 0 && <Divider />}
          <TransactionRow {...tx} />
        </div>
      ))}
    </div>
  );
}

function Filters({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[16px] w-full">
      <div className="bg-[#e0ffe0] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border border-[#00880d] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
        <div className="relative shrink-0 w-full">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[12px] pt-[16px] px-[12px] relative size-full">
              <button onClick={onOpenTray} className="bg-[#abffa6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
                <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                  <SemuaIcon />
                </div>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Semua</p>
                <ChevronDown />
              </button>
              <div className="bg-[#abffa6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Hari ini</p>
                <ChevronDown />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white content-stretch flex flex-col items-center relative rounded-[16px] shrink-0 w-full">
          <div className="h-[56px] relative shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[16px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0">
                    <BillIcon />
                  </div>
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#202020] text-[18px] whitespace-nowrap">16</p>
                  <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4c4c] text-[14px] whitespace-nowrap">transaksi dari</p>
                </div>
                <div className="bg-[#f9f9f9] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">semua</p>
                  <ChevronDown />
                </div>
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
    <div className="content-stretch drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex flex-col items-start sticky top-0 w-full z-10">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start pb-[8px] pt-[28px] shrink-0 w-full">
        <div className="flex-[1_0_0] min-h-px relative w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
                <button onClick={() => navigate(-1)} className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0">
                  <BackIcon />
                </button>
                <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-w-px overflow-clip relative">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px not-italic overflow-clip relative">
                    <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#202020] text-[16px] w-full">Rincian keuangan</p>
                    <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#4c4c4c] text-[12px] w-full">Gado-Gado Mpok Ica, Serang</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/all", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Saldo</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-[1_0_0] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/all/penjualan", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Penjualan</p>
              </div>
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[44px] items-center justify-center min-w-px relative">
          <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0">
            <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Transaksi</p>
          </div>
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" />
        </div>
      </div>
    </div>
  );
}

export default function TransactionAll() {
  const [showTray, setShowTray] = useState(false);
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <Filters onOpenTray={() => setShowTray(true)} />
        <TransactionList />
      </div>
      {showTray && <PilihSaldoTray selected="semua" onClose={() => setShowTray(false)} />}
    </div>
  );
}
