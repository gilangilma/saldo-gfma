import { useState } from "react";

export type KompensasiType = "gofood" | "qris" | "semua";

const PERIODS = ["Hari ini", "Minggu ini", "Minggu lalu", "Bulan ini", "Bulan lalu"];

interface KompensasiItem {
  title: string;
  date: string;
  amount: string;
}

type PeriodMap = Record<string, KompensasiItem[]>;

const GOFOOD: PeriodMap = {
  "Hari ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
  ],
  "Minggu ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "17 Mei 2026, 14:20", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "15 Mei 2026, 13:50", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "13 Mei 2026, 09:18", amount: "Rp45.000" },
  ],
  "Minggu lalu": [
    { title: "Kompensasi GoFood", date: "11 Mei 2026, 13:30", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "10 Mei 2026, 15:40", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "9 Mei 2026, 12:22",  amount: "Rp50.000" },
    { title: "Kompensasi GoFood", date: "7 Mei 2026, 09:33",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "5 Mei 2026, 14:10",  amount: "Rp30.000" },
  ],
  "Bulan ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "17 Mei 2026, 14:20", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "15 Mei 2026, 13:50", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "13 Mei 2026, 09:18", amount: "Rp45.000" },
    { title: "Kompensasi GoFood", date: "11 Mei 2026, 13:30", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "10 Mei 2026, 15:40", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "9 Mei 2026, 12:22",  amount: "Rp50.000" },
    { title: "Kompensasi GoFood", date: "7 Mei 2026, 09:33",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "5 Mei 2026, 14:10",  amount: "Rp30.000" },
    { title: "Kompensasi GoFood", date: "2 Mei 2026, 13:20",  amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "1 Mei 2026, 09:45",  amount: "Rp40.000" },
  ],
  "Bulan lalu": [
    { title: "Kompensasi GoFood", date: "30 Apr 2026, 14:10", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "26 Apr 2026, 13:05", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "24 Apr 2026, 09:50", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "20 Apr 2026, 10:15", amount: "Rp50.000" },
    { title: "Kompensasi GoFood", date: "18 Apr 2026, 14:45", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "12 Apr 2026, 09:40", amount: "Rp45.000" },
    { title: "Kompensasi GoFood", date: "10 Apr 2026, 13:18", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "5 Apr 2026, 12:30",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "3 Apr 2026, 09:10",  amount: "Rp30.000" },
  ],
};

const QRIS: PeriodMap = {
  "Hari ini": [
    { title: "Refund QRIS", date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
  ],
  "Minggu ini": [
    { title: "Refund QRIS", date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
    { title: "Refund QRIS", date: "16 Mei 2026, 11:05", amount: "Rp30.000" },
    { title: "Refund QRIS", date: "13 Mei 2026, 15:22", amount: "Rp20.000" },
  ],
  "Minggu lalu": [
    { title: "Refund QRIS", date: "11 Mei 2026, 10:05", amount: "Rp25.000" },
    { title: "Refund QRIS", date: "8 Mei 2026, 11:48",  amount: "Rp20.000" },
    { title: "Refund QRIS", date: "6 Mei 2026, 14:15",  amount: "Rp35.000" },
  ],
  "Bulan ini": [
    { title: "Refund QRIS", date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
    { title: "Refund QRIS", date: "16 Mei 2026, 11:05", amount: "Rp30.000" },
    { title: "Refund QRIS", date: "13 Mei 2026, 15:22", amount: "Rp20.000" },
    { title: "Refund QRIS", date: "11 Mei 2026, 10:05", amount: "Rp25.000" },
    { title: "Refund QRIS", date: "8 Mei 2026, 11:48",  amount: "Rp20.000" },
    { title: "Refund QRIS", date: "6 Mei 2026, 14:15",  amount: "Rp35.000" },
    { title: "Refund QRIS", date: "3 Mei 2026, 10:55",  amount: "Rp25.000" },
    { title: "Refund QRIS", date: "1 Mei 2026, 13:30",  amount: "Rp15.000" },
  ],
  "Bulan lalu": [
    { title: "Refund QRIS", date: "28 Apr 2026, 11:35", amount: "Rp25.000" },
    { title: "Refund QRIS", date: "22 Apr 2026, 12:30", amount: "Rp30.000" },
    { title: "Refund QRIS", date: "15 Apr 2026, 11:22", amount: "Rp15.000" },
    { title: "Refund QRIS", date: "10 Apr 2026, 09:45", amount: "Rp20.000" },
    { title: "Refund QRIS", date: "7 Apr 2026, 10:55",  amount: "Rp25.000" },
    { title: "Refund QRIS", date: "1 Apr 2026, 14:00",  amount: "Rp15.000" },
  ],
};

const SEMUA: PeriodMap = {
  "Hari ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Refund QRIS",       date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
  ],
  "Minggu ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Refund QRIS",       date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "17 Mei 2026, 14:20", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "16 Mei 2026, 11:05", amount: "Rp30.000" },
    { title: "Kompensasi GoFood", date: "15 Mei 2026, 13:50", amount: "Rp15.000" },
    { title: "Refund QRIS",       date: "13 Mei 2026, 15:22", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "13 Mei 2026, 09:18", amount: "Rp45.000" },
  ],
  "Minggu lalu": [
    { title: "Kompensasi GoFood", date: "11 Mei 2026, 13:30", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "11 Mei 2026, 10:05", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "10 Mei 2026, 15:40", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "9 Mei 2026, 12:22",  amount: "Rp50.000" },
    { title: "Refund QRIS",       date: "8 Mei 2026, 11:48",  amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "7 Mei 2026, 09:33",  amount: "Rp35.000" },
    { title: "Refund QRIS",       date: "6 Mei 2026, 14:15",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "5 Mei 2026, 14:10",  amount: "Rp30.000" },
  ],
  "Bulan ini": [
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 12:15", amount: "Rp25.000" },
    { title: "Refund QRIS",       date: "18 Mei 2026, 10:42", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "18 Mei 2026, 08:30", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "17 Mei 2026, 14:20", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "16 Mei 2026, 11:05", amount: "Rp30.000" },
    { title: "Kompensasi GoFood", date: "15 Mei 2026, 13:50", amount: "Rp15.000" },
    { title: "Refund QRIS",       date: "13 Mei 2026, 15:22", amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "13 Mei 2026, 09:18", amount: "Rp45.000" },
    { title: "Kompensasi GoFood", date: "11 Mei 2026, 13:30", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "11 Mei 2026, 10:05", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "10 Mei 2026, 15:40", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "9 Mei 2026, 12:22",  amount: "Rp50.000" },
    { title: "Refund QRIS",       date: "8 Mei 2026, 11:48",  amount: "Rp20.000" },
    { title: "Kompensasi GoFood", date: "7 Mei 2026, 09:33",  amount: "Rp35.000" },
    { title: "Refund QRIS",       date: "6 Mei 2026, 14:15",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "5 Mei 2026, 14:10",  amount: "Rp30.000" },
    { title: "Refund QRIS",       date: "3 Mei 2026, 10:55",  amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "2 Mei 2026, 13:20",  amount: "Rp15.000" },
    { title: "Refund QRIS",       date: "1 Mei 2026, 13:30",  amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "1 Mei 2026, 09:45",  amount: "Rp40.000" },
  ],
  "Bulan lalu": [
    { title: "Kompensasi GoFood", date: "30 Apr 2026, 14:10", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "28 Apr 2026, 11:35", amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "26 Apr 2026, 13:05", amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "24 Apr 2026, 09:50", amount: "Rp15.000" },
    { title: "Refund QRIS",       date: "22 Apr 2026, 12:30", amount: "Rp30.000" },
    { title: "Kompensasi GoFood", date: "20 Apr 2026, 10:15", amount: "Rp50.000" },
    { title: "Kompensasi GoFood", date: "18 Apr 2026, 14:45", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "15 Apr 2026, 11:22", amount: "Rp15.000" },
    { title: "Kompensasi GoFood", date: "12 Apr 2026, 09:40", amount: "Rp45.000" },
    { title: "Kompensasi GoFood", date: "10 Apr 2026, 13:18", amount: "Rp25.000" },
    { title: "Refund QRIS",       date: "10 Apr 2026, 09:45", amount: "Rp20.000" },
    { title: "Refund QRIS",       date: "7 Apr 2026, 10:55",  amount: "Rp25.000" },
    { title: "Kompensasi GoFood", date: "5 Apr 2026, 12:30",  amount: "Rp35.000" },
    { title: "Kompensasi GoFood", date: "3 Apr 2026, 09:10",  amount: "Rp30.000" },
    { title: "Refund QRIS",       date: "1 Apr 2026, 14:00",  amount: "Rp15.000" },
  ],
};

const DATA: Record<KompensasiType, PeriodMap> = { gofood: GOFOOD, qris: QRIS, semua: SEMUA };

const TITLE: Record<KompensasiType, string> = {
  gofood: "Riwayat kompensasi",
  qris:   "Riwayat refund",
  semua:  "Riwayat kompensasi",
};

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        clipRule="evenodd" fillRule="evenodd"
        d="M6 3.5L10.5 8L6 12.5"
        stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  type: KompensasiType;
  onClose: () => void;
}

export default function RiwayatKompensasiTray({ type, onClose }: Props) {
  const [activePeriod, setActivePeriod] = useState("Hari ini");
  const items = DATA[type][activePeriod];

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
            {TITLE[type]}
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

        {/* List */}
        <div className="overflow-y-auto flex-1 pb-6 no-scrollbar" style={{ scrollbarWidth: "none" }}>
          {items.map((item, i) => (
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
              {i < items.length - 1 && <div className="h-px bg-[#e7e7e7] mx-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
