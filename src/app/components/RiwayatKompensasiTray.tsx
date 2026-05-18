import { useState } from "react";

const PERIODS = ["Hari ini", "Minggu ini", "Minggu lalu", "Bulan ini", "Bulan lalu"];

interface KompensasiItem {
  title: string;
  date: string;
  amount: string;
}

const ITEMS: KompensasiItem[] = [
  { title: "Kompensasi GoFood", date: "17 Mei 2026, 11:43", amount: "Rp175.000" },
  { title: "Kompensasi QRIS",   date: "17 Mei 2026, 10:25", amount: "Rp90.000"  },
  { title: "Kompensasi GoFood", date: "17 Mei 2026, 08:07", amount: "Rp250.000" },
];

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" fillRule="evenodd"
        d="M6 3.5L10.5 8L6 12.5"
        stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  onClose: () => void;
}

export default function RiwayatKompensasiTray({ onClose }: Props) {
  const [activePeriod, setActivePeriod] = useState("Hari ini");

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end" style={{ borderRadius: "inherit" }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white rounded-full size-[40px] flex items-center justify-center shadow cursor-pointer border-none"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="#1C1D1D" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Sheet */}
      <div className="relative bg-white rounded-t-[20px] z-10 max-h-[82%] flex flex-col">
        {/* Drag pill */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-[40px] h-[4px] bg-[#e0e0e0] rounded-full" />
        </div>

        {/* Title */}
        <div className="px-4 pt-3 pb-4 shrink-0">
          <p className="font-['Maison_Neue_APP:Bold',sans-serif] text-[22px] leading-[28px] text-[#1c1d1d]">
            Riwayat kompensasi
          </p>
        </div>

        {/* Period filter pills */}
        <div className="flex gap-[8px] px-4 pb-4 overflow-x-auto shrink-0 no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {PERIODS.map((period) => (
            <button
              key={period}
              onClick={() => setActivePeriod(period)}
              className={`whitespace-nowrap px-[16px] py-[8px] rounded-[20px] text-[14px] font-['Maison_Neue_APP:Demi',sans-serif] border shrink-0 cursor-pointer ${
                activePeriod === period
                  ? "bg-[#e0ffe0] border-[#00880d] text-[#007c0b]"
                  : "bg-white border-[#e0e0e0] text-[#202020]"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Compensation list */}
        <div className="overflow-y-auto flex-1 pb-6 no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {ITEMS.map((item, i) => (
            <div key={i}>
              <button className="flex items-center justify-between w-full px-4 py-[16px] text-left bg-transparent border-none cursor-pointer">
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                    {item.title}
                  </p>
                  <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-[8px] shrink-0">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                    {item.amount}
                  </p>
                  <ChevronRight />
                </div>
              </button>
              {i < ITEMS.length - 1 && <div className="h-px bg-[#e7e7e7] mx-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
