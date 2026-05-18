import { useState } from "react";

export type PencairanType = "gofood" | "qris" | "semua";

const PERIODS = ["Hari ini", "Kemarin", "Minggu ini", "Bulan ini"];

interface PayoutItem {
  id: string;
  date: string;
  processed: string;
  processedShort: string;
  amount: string;
  gross: string;
  deductionTotal: string;
}

const ALL_ITEMS: PayoutItem[] = [
  { id: "P10234", date: "Pencairan 3 Mei 2026",  processed: "4 Mei 2026, 04:00",  processedShort: "04:00, 3 Mei",  amount: "Rp3.200.000", gross: "+Rp4.000.000", deductionTotal: "-Rp800.000" },
  { id: "P10219", date: "Pencairan 2 Mei 2026",  processed: "3 Mei 2026, 04:00",  processedShort: "04:00, 2 Mei",  amount: "Rp2.870.000", gross: "+Rp3.600.000", deductionTotal: "-Rp730.000" },
  { id: "P10204", date: "Pencairan 1 Mei 2026",  processed: "2 Mei 2026, 04:00",  processedShort: "04:00, 1 Mei",  amount: "Rp2.700.000", gross: "+Rp3.400.000", deductionTotal: "-Rp700.000" },
  { id: "P10189", date: "Pencairan 30 Apr 2026", processed: "1 Mei 2026, 04:00",  processedShort: "04:00, 30 Apr", amount: "Rp3.500.000", gross: "+Rp4.400.000", deductionTotal: "-Rp900.000" },
  { id: "P10174", date: "Pencairan 29 Apr 2026", processed: "30 Apr 2026, 04:00", processedShort: "04:00, 29 Apr", amount: "Rp4.000.000", gross: "+Rp5.000.000", deductionTotal: "-Rp1.000.000" },
  { id: "P10159", date: "Pencairan 28 Apr 2026", processed: "29 Apr 2026, 04:00", processedShort: "04:00, 28 Apr", amount: "Rp3.100.000", gross: "+Rp3.900.000", deductionTotal: "-Rp800.000" },
  { id: "P10144", date: "Pencairan 27 Apr 2026", processed: "28 Apr 2026, 04:00", processedShort: "04:00, 27 Apr", amount: "Rp2.800.000", gross: "+Rp3.500.000", deductionTotal: "-Rp700.000" },
  { id: "P10129", date: "Pencairan 26 Apr 2026", processed: "27 Apr 2026, 04:00", processedShort: "04:00, 26 Apr", amount: "Rp3.300.000", gross: "+Rp4.150.000", deductionTotal: "-Rp850.000" },
  { id: "P10114", date: "Pencairan 25 Apr 2026", processed: "26 Apr 2026, 04:00", processedShort: "04:00, 25 Apr", amount: "Rp2.950.000", gross: "+Rp3.700.000", deductionTotal: "-Rp750.000" },
  { id: "P99366", date: "Pencairan 24 Apr 2026", processed: "25 Apr 2026, 04:00", processedShort: "04:00, 24 Apr", amount: "Rp3.150.000", gross: "+Rp3.950.000", deductionTotal: "-Rp800.000" },
  { id: "P99351", date: "Pencairan 23 Apr 2026", processed: "24 Apr 2026, 04:00", processedShort: "04:00, 23 Apr", amount: "Rp3.200.000", gross: "+Rp4.000.000", deductionTotal: "-Rp800.000" },
];

const PERIOD_IDX: Record<string, number[]> = {
  "Hari ini":   [0],
  "Kemarin":    [1],
  "Minggu ini": [0, 1, 2, 3, 4],
  "Bulan ini":  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};

const DEDUCTION_LABEL: Record<PencairanType, string> = {
  gofood: "Biaya iklan harian",
  qris:   "Komisi QRIS",
  semua:  "Biaya iklan & transaksi",
};

interface Props {
  type: PencairanType;
  onClose: () => void;
}

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

function BackIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path clipRule="evenodd" fillRule="evenodd"
        d="M15.5 4.5L8 12L15.5 19.5"
        stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function PayoutIconGreen() {
  return (
    <div className="bg-[#e1ffdf] rounded-full size-[40px] flex items-center justify-center shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v14M5 8l5-5 5 5" stroke="#007c0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function BankIcon() {
  return (
    <div className="bg-[#f2f2f4] rounded-[10px] size-[40px] flex items-center justify-center shrink-0">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="9" width="16" height="8" rx="1" stroke="#4C4C4C" strokeWidth="1.3" />
        <path d="M4 9V8L10 3l6 5v1" stroke="#4C4C4C" strokeWidth="1.3" strokeLinejoin="round" />
        <rect x="5" y="12" width="3" height="5" stroke="#4C4C4C" strokeWidth="1.1" />
        <rect x="12" y="12" width="3" height="5" stroke="#4C4C4C" strokeWidth="1.1" />
      </svg>
    </div>
  );
}

export default function RiwayatPencairanTray({ type, onClose }: Props) {
  const [activePeriod, setActivePeriod] = useState("Minggu ini");
  const [selectedItem, setSelectedItem] = useState<PayoutItem | null>(null);

  const items = PERIOD_IDX[activePeriod].map((i) => ALL_ITEMS[i]);
  const deductionLabel = DEDUCTION_LABEL[type];

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
        <div
          className="absolute inset-0 z-[60] bg-white flex flex-col overflow-hidden"
          style={{ borderRadius: "inherit" }}
        >
          {/* Header */}
          <div className="flex items-center gap-[12px] px-4 pt-[28px] pb-[12px] bg-white shrink-0">
            <button
              onClick={() => setSelectedItem(null)}
              className="bg-transparent border-none cursor-pointer p-0 flex items-center justify-center shrink-0"
            >
              <BackIcon />
            </button>
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[18px] leading-[24px] text-[#1c1d1d]">
              Detail pencairan dana
            </p>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 no-scrollbar" style={{ scrollbarWidth: "none" }}>
            {/* Payout info header card */}
            <div className="mx-4 mt-4 bg-[#f9f9f9] rounded-[12px] p-[14px] flex items-center justify-between gap-3">
              <div className="flex items-center gap-[10px]">
                <PayoutIconGreen />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                    Pencairan dana
                  </p>
                  <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[12px] leading-[16px] text-[#8b8b8b]">
                    ID: {selectedItem.id}
                  </p>
                </div>
              </div>
              <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[12px] leading-[16px] text-[#8b8b8b] shrink-0">
                {selectedItem.processedShort}
              </p>
            </div>

            {/* Status badge */}
            <div className="mx-4 mt-3 bg-[#e1ffdf] rounded-[10px] py-[10px] flex items-center justify-center gap-[6px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" fill="#007c0b" />
                <path d="M5 8.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#007c0b]">
                Sukses
              </p>
            </div>

            {/* Financial breakdown */}
            <div className="mx-4 mt-4 bg-white rounded-[12px] border border-[#e7e7e7]">
              {/* Pendapatan bersih */}
              <div className="flex items-center justify-between px-[14px] py-[14px]">
                <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[14px] leading-[20px] text-[#4c4c4c]">
                  Pendapatan bersih
                </p>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#007c0b]">
                  {selectedItem.gross}
                </p>
              </div>

              <div className="h-px bg-[#e7e7e7] mx-[14px]" />

              {/* Pemotongan total */}
              <div className="flex items-center justify-between px-[14px] pt-[14px] pb-[8px]">
                <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[14px] leading-[20px] text-[#4c4c4c]">
                  Pemotongan
                </p>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#c10022]">
                  {selectedItem.deductionTotal}
                </p>
              </div>

              {/* Deduction sub-item */}
              <div className="flex items-center justify-between px-[14px] pb-[14px] pl-[28px]">
                <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
                  {deductionLabel}
                </p>
                <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
                  {selectedItem.deductionTotal.replace("-", "-")}
                </p>
              </div>

              <div className="h-px bg-[#e7e7e7] mx-[14px]" />

              {/* Jumlah pencairan */}
              <div className="flex items-center justify-between px-[14px] py-[14px]">
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                  Jumlah pencairan
                </p>
                <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                  = {selectedItem.amount}
                </p>
              </div>
            </div>

            {/* Bank info */}
            <div className="mx-4 mt-3 mb-6">
              <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b] mb-[8px]">
                Ditransfer ke:
              </p>
              <div className="bg-white rounded-[12px] border border-[#e7e7e7] flex items-center gap-[12px] px-[14px] py-[14px]">
                <BankIcon />
                <div className="flex flex-col gap-[2px]">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                    Bank Jago
                  </p>
                  <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
                    No rek: ******3344
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
