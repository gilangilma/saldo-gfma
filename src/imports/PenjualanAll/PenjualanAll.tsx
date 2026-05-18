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

function SemuaChip({ onOpenTray }: { onOpenTray?: () => void }) {
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

function SummaryCard() {
  return (
    <div className="bg-[#e0ffe0] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#00880d] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between pb-[12px] pt-[16px] px-[12px] relative size-full">
            <SemuaChip />
            <PeriodChip />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[16px] shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[0px] items-start relative size-full">
          <div className="h-[56px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#00AA13" strokeWidth="1.5"/><path d="M8 5v6M6.5 6.5C6.5 6.5 6.75 5.5 8 5.5C9.25 5.5 9.5 6.25 9.5 6.75C9.5 7.5 8.75 7.75 8 8C7.25 8.25 6.5 8.5 6.5 9.25C6.5 9.75 6.75 10.5 8 10.5C9.25 10.5 9.5 9.75 9.5 9.75" stroke="#00AA13" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Penjualan</p>
                </div>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[13px] whitespace-nowrap">+ Rp4.600.000</p>
              </div>
            </div>
          </div>
          <div className="h-[56px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Biaya transaksi</p>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10022] text-[13px] whitespace-nowrap">- Rp1.600.000</p>
              </div>
            </div>
          </div>
          <div className="h-[56px] relative shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
                <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Pendapatan bersih</p>
                <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">= Rp3.000.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RincianPenjualan() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">Rincian penjualan</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-px min-w-px relative">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="#E7E7E7" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      {[
        { label: "Penjualan GoFood Delivery", amount: "Rp2.000.000" },
        { label: "Penjualan GoFood Pickup", amount: "Rp1.000.000" },
        { label: "Penjualan GoFood Catering", amount: "Rp1.000.000" },
        { label: "Penjualan QRIS", amount: "Rp600.000" },
      ].map((item, i) => (
        <div key={i} className="h-[56px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
              <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] min-w-px not-italic relative text-[#4c4c4c] text-[13px]">{item.label}</p>
              <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">{item.amount}</p>
              <CollapseBtn />
            </div>
          </div>
          {i < 3 && (
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
          )}
        </div>
      ))}
    </div>
  );
}

function RincianBiaya() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">Rincian biaya</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full">
        <div className="flex-[1_0_0] h-px min-w-px relative">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="#E7E7E7" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      {[
        { label: "Biaya layanan GoFood Delivery", amount: "- Rp750.000" },
        { label: "Biaya layanan GoFood Pickup", amount: "- Rp100.000" },
        { label: "Biaya layanan GoFood Catering", amount: "- Rp50.000" },
        { label: "Biaya program promo", amount: "- Rp50.000" },
        { label: "Promo yang ditanggung mitra usaha", amount: "- Rp100.000" },
        { label: "Biaya transaksi QRIS", amount: "- Rp550.000" },
      ].map((item, i, arr) => (
        <div key={i} className="h-[56px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] gap-[8px] items-center leading-[16px] not-italic px-[12px] py-[16px] relative size-full text-[#4c4c4c] text-[13px]">
              <p className="flex-[1_0_0] min-w-px relative">{item.label}</p>
              <p className="relative shrink-0 text-right whitespace-nowrap">{item.amount}</p>
            </div>
          </div>
          {i < arr.length - 1 && (
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
          )}
        </div>
      ))}
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] w-full">
      <SummaryCard />
      <RincianPenjualan />
      <RincianBiaya />
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
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px relative">
          <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0">
            <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Penjualan</p>
          </div>
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" />
        </div>
        <div className="flex-[1_0_0] h-[44px] min-w-px relative">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/all/transaksi", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <div className="content-stretch flex items-center justify-center relative shrink-0">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Transaksi</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PenjualanAll() {
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <MainContent />
      </div>
    </div>
  );
}
