import { useNavigate } from "react-router";
import svgPaths from "../PenjualanGofood/svg-yru8xw8akx";

function SemuaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#007C0B" strokeWidth="1.5"/>
      <path d="M12 7V17M9 9.5C9 9.5 9.5 8 12 8C14.5 8 15 9.5 15 10.5C15 12 13.5 12.5 12 13C10.5 13.5 9 14 9 15.5C9 16.5 9.5 18 12 18C14.5 18 15 16.5 15 16.5" stroke="#007C0B" strokeWidth="1.5" strokeLinecap="round"/>
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

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" />
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

function SemuaChip() {
  return (
    <div className="bg-[#abffa6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <SemuaIcon />
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Semua</p>
      <ChevronDown />
    </div>
  );
}

function PeriodChip() {
  return (
    <div className="bg-[#abffa6] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Hari ini</p>
      <ChevronDown />
    </div>
  );
}

function CollapseBtn() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <ChevronRight />
    </div>
  );
}

function DottedDivider() {
  return (
    <div className="h-px relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
          <div className="flex-[1_0_0] h-0 min-w-px relative">
            <div className="absolute inset-[-0.5px_-0.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 1">
                <path d="M0.5 0.5H316.5" stroke="#E7E7E7" strokeDasharray="2 2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionItem({ date, time, amount, status }: { date: string; time: string; amount: string; status: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">{date}</p>
          <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">{time}</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
          <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
            <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">{amount}</p>
            <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0">
              <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">{status}</p>
            </div>
          </div>
          <CollapseBtn />
        </div>
      </div>
    </div>
  );
}

const transactions = [
  { date: "Pencairan 3 Mei 2026", time: "4 Mei 2026, 04:00", amount: "Rp3.600.000", status: "Sukses" },
  { date: "Pencairan 2 Mei 2026", time: "3 Mei 2026, 04:00", amount: "Rp3.370.000", status: "Sukses" },
  { date: "Pencairan 1 Mei 2026", time: "2 Mei 2026, 04:00", amount: "Rp3.200.000", status: "Sukses" },
  { date: "Pencairan 30 Apr 2026", time: "1 Mei 2026, 04:00", amount: "Rp4.000.000", status: "Sukses" },
  { date: "Pencairan 29 Apr 2026", time: "30 Apr 2026, 04:00", amount: "Rp4.500.000", status: "Sukses" },
];

function TransactionList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#202020] text-[14px]">Riwayat pencairan dana</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-px min-w-px relative">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="#E7E7E7" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      {transactions.map((tx, i) => (
        <div key={i} className="w-full">
          <TransactionItem {...tx} />
          {i < transactions.length - 1 && <DottedDivider />}
        </div>
      ))}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-center px-[12px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0">
              <div aria-hidden="true" className="absolute border border-[#008a0d] border-solid inset-0 pointer-events-none rounded-[18px]" />
              <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007c0b] text-[14px] text-center whitespace-nowrap">Lihat riwayat lengkap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBar() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <SemuaChip />
      <PeriodChip />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] w-full">
      <FilterBar />
      <TransactionList />
    </div>
  );
}

function NavbarContent() {
  const navigate = useNavigate();
  return (
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
  );
}

function TopNavbarTab() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex flex-col items-start sticky top-0 w-full z-10">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start pb-[8px] pt-[28px] shrink-0 w-full">
        <NavbarContent />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-[44px] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/all", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Saldo</p>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[44px] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/all/penjualan", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Penjualan</p>
              </div>
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px relative">
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
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <MainContent />
      </div>
    </div>
  );
}
