export type PencairanType = "gofood" | "qris" | "semua";

export interface PayoutItem {
  id: string;
  date: string;
  processed: string;
  processedShort: string;
  amount: string;
  gross: string;
  deductionTotal: string;
}

export const ALL_ITEMS: PayoutItem[] = [
  { id: "P10234", date: "Pencairan 3 Mei 2026",  processed: "4 Mei 2026, 04:00",  processedShort: "04:00, 3 Mei",  amount: "Rp700.000",  gross: "+Rp875.000",   deductionTotal: "-Rp175.000" },
  { id: "P10219", date: "Pencairan 2 Mei 2026",  processed: "3 Mei 2026, 04:00",  processedShort: "04:00, 2 Mei",  amount: "Rp580.000",  gross: "+Rp725.000",   deductionTotal: "-Rp145.000" },
  { id: "P10204", date: "Pencairan 1 Mei 2026",  processed: "2 Mei 2026, 04:00",  processedShort: "04:00, 1 Mei",  amount: "Rp530.000",  gross: "+Rp660.000",   deductionTotal: "-Rp130.000" },
  { id: "P10189", date: "Pencairan 30 Apr 2026", processed: "1 Mei 2026, 04:00",  processedShort: "04:00, 30 Apr", amount: "Rp750.000",  gross: "+Rp940.000",   deductionTotal: "-Rp190.000" },
  { id: "P10174", date: "Pencairan 29 Apr 2026", processed: "30 Apr 2026, 04:00", processedShort: "04:00, 29 Apr", amount: "Rp840.000",  gross: "+Rp1.050.000", deductionTotal: "-Rp210.000" },
  { id: "P10159", date: "Pencairan 28 Apr 2026", processed: "29 Apr 2026, 04:00", processedShort: "04:00, 28 Apr", amount: "Rp630.000",  gross: "+Rp785.000",   deductionTotal: "-Rp155.000" },
  { id: "P10144", date: "Pencairan 27 Apr 2026", processed: "28 Apr 2026, 04:00", processedShort: "04:00, 27 Apr", amount: "Rp500.000",  gross: "+Rp620.000",   deductionTotal: "-Rp120.000" },
  { id: "P10129", date: "Pencairan 26 Apr 2026", processed: "27 Apr 2026, 04:00", processedShort: "04:00, 26 Apr", amount: "Rp660.000",  gross: "+Rp825.000",   deductionTotal: "-Rp165.000" },
  { id: "P10114", date: "Pencairan 25 Apr 2026", processed: "26 Apr 2026, 04:00", processedShort: "04:00, 25 Apr", amount: "Rp600.000",  gross: "+Rp745.000",   deductionTotal: "-Rp145.000" },
  { id: "P99366", date: "Pencairan 24 Apr 2026", processed: "25 Apr 2026, 04:00", processedShort: "04:00, 24 Apr", amount: "Rp640.000",  gross: "+Rp800.000",   deductionTotal: "-Rp160.000" },
  { id: "P99351", date: "Pencairan 23 Apr 2026", processed: "24 Apr 2026, 04:00", processedShort: "04:00, 23 Apr", amount: "Rp690.000",  gross: "+Rp860.000",   deductionTotal: "-Rp170.000" },
];

export const DEDUCTION_LABEL: Record<PencairanType, string> = {
  gofood: "Biaya iklan harian",
  qris:   "Komisi QRIS",
  semua:  "Biaya iklan & transaksi",
};

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

interface Props {
  type: PencairanType;
  item: PayoutItem;
  onClose: () => void;
}

export default function DetailPencairanOverlay({ type, item, onClose }: Props) {
  const deductionLabel = DEDUCTION_LABEL[type];

  return (
    <div
      className="absolute inset-0 z-[60] bg-white flex flex-col overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      {/* Header */}
      <div className="flex items-center gap-[12px] px-4 pt-[28px] pb-[12px] bg-white shrink-0">
        <button
          onClick={onClose}
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
                ID: {item.id}
              </p>
            </div>
          </div>
          <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[12px] leading-[16px] text-[#8b8b8b] shrink-0">
            {item.processedShort}
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
          <div className="flex items-center justify-between px-[14px] py-[14px]">
            <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[14px] leading-[20px] text-[#4c4c4c]">
              Pendapatan bersih
            </p>
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#007c0b]">
              {item.gross}
            </p>
          </div>

          <div className="h-px bg-[#e7e7e7] mx-[14px]" />

          <div className="flex items-center justify-between px-[14px] pt-[14px] pb-[8px]">
            <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[14px] leading-[20px] text-[#4c4c4c]">
              Pemotongan
            </p>
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#c10022]">
              {item.deductionTotal}
            </p>
          </div>

          <div className="flex items-center justify-between px-[14px] pb-[14px] pl-[28px]">
            <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
              {deductionLabel}
            </p>
            <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
              {item.deductionTotal}
            </p>
          </div>

          <div className="h-px bg-[#e7e7e7] mx-[14px]" />

          <div className="flex items-center justify-between px-[14px] py-[14px]">
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
              Jumlah pencairan
            </p>
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
              = {item.amount}
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
  );
}
