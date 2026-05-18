import { useState } from "react";
import DetailPencairanOverlay, { ALL_ITEMS, DEDUCTION_LABEL, type PencairanType, type PayoutItem } from "./DetailPencairanOverlay";

export type { PencairanType, PayoutItem };

const PERIODS = ["Hari ini", "Kemarin", "Minggu ini", "Minggu lalu", "Bulan ini", "Bulan lalu"];

const PERIOD_IDX: Record<string, number[]> = {
  "Hari ini":    [0],
  "Kemarin":     [1],
  "Minggu ini":  [0, 1, 2, 3, 4, 5, 6],
  "Minggu lalu": [7, 8, 9, 10],
  "Bulan ini":   [0, 1, 2],
  "Bulan lalu":  [3, 4, 5, 6, 7, 8, 9, 10],
};

function ChevronRight() {
  return (
    <div className="bg-[#f9f9f9] flex items-center justify-center p-[4px] rounded-full shrink-0 border border-[#e7e7e7]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path clipRule="evenodd" fillRule="evenodd"
          d="M6 3.5L10.5 8L6 12.5"
          stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

interface Props {
  type: PencairanType;
  onClose: () => void;
}

export default function RiwayatPencairanTray({ type, onClose }: Props) {
  const [activePeriod, setActivePeriod] = useState("Minggu ini");
  const [selectedItem, setSelectedItem] = useState<PayoutItem | null>(null);

  const items = PERIOD_IDX[activePeriod].map((i) => ALL_ITEMS[i]);

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
            Riwayat pencairan
          </p>
        </div>

        {/* Period pills */}
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
            <div key={item.id}>
              {i > 0 && <div className="h-px bg-[#e7e7e7] mx-4" />}
              <button
                onClick={() => setSelectedItem(item)}
                className="w-full bg-transparent border-none p-0 text-left cursor-pointer"
              >
                <div className="flex items-center justify-between px-4 py-[14px] gap-[12px]">
                  <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#4c4c4c]">
                      {item.date}
                    </p>
                    <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[12px] leading-[16px] text-[#8b8b8b]">
                      {item.processed}
                    </p>
                  </div>
                  <div className="flex items-center gap-[12px] shrink-0">
                    <div className="flex flex-col items-end gap-[2px]">
                      <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#4c4c4c]">
                        {item.amount}
                      </p>
                      <div className="bg-[#e1ffdf] rounded-[8px] px-[4px]">
                        <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[12px] leading-[16px] text-[#007c0b]">
                          Sukses
                        </p>
                      </div>
                    </div>
                    <ChevronRight />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Detail overlay */}
      {selectedItem && (
        <DetailPencairanOverlay
          type={type}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
