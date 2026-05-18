import { useState } from "react";

export type PemotonganType = "gofood" | "qris" | "semua";

const PERIODS = ["Hari ini", "Kemarin", "Minggu ini", "Bulan ini"];

interface PemotonganItem {
  title: string;
  date: string;
  amount: string;
}

type PeriodMap = Record<string, PemotonganItem[]>;

const GOFOOD: PeriodMap = {
  "Hari ini": [
    { title: "Iklan dengan potongan harian", date: "18/5/26, 12:00", amount: "- Rp13.500" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"  },
  ],
  "Kemarin": [
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750" },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"  },
  ],
  "Minggu ini": [
    { title: "Iklan dengan potongan harian", date: "18/5/26, 12:00", amount: "- Rp13.500" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"  },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750" },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"  },
    { title: "Iklan dengan potongan harian", date: "16/5/26, 09:00", amount: "- Rp12.000" },
    { title: "Iklan dengan potongan harian", date: "15/5/26, 10:30", amount: "- Rp7.500"  },
    { title: "Iklan dengan potongan harian", date: "14/5/26, 08:45", amount: "- Rp11.200" },
    { title: "Iklan dengan potongan harian", date: "13/5/26, 09:15", amount: "- Rp14.800" },
    { title: "Iklan dengan potongan harian", date: "12/5/26, 10:00", amount: "- Rp6.900"  },
  ],
  "Bulan ini": [
    { title: "Iklan dengan potongan harian", date: "18/5/26, 12:00", amount: "- Rp13.500" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"  },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750" },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"  },
    { title: "Iklan dengan potongan harian", date: "16/5/26, 09:00", amount: "- Rp12.000" },
    { title: "Iklan dengan potongan harian", date: "15/5/26, 10:30", amount: "- Rp7.500"  },
    { title: "Iklan dengan potongan harian", date: "14/5/26, 08:45", amount: "- Rp11.200" },
    { title: "Iklan dengan potongan harian", date: "13/5/26, 09:15", amount: "- Rp14.800" },
    { title: "Iklan dengan potongan harian", date: "12/5/26, 10:00", amount: "- Rp6.900"  },
    { title: "Iklan dengan potongan harian", date: "11/5/26, 09:30", amount: "- Rp10.500" },
    { title: "Iklan dengan potongan harian", date: "10/5/26, 08:15", amount: "- Rp13.200" },
    { title: "Iklan dengan potongan harian", date: "9/5/26, 10:45",  amount: "- Rp8.100"  },
    { title: "Iklan dengan potongan harian", date: "8/5/26, 09:00",  amount: "- Rp16.500" },
    { title: "Iklan dengan potongan harian", date: "7/5/26, 08:30",  amount: "- Rp11.800" },
    { title: "Iklan dengan potongan harian", date: "6/5/26, 10:00",  amount: "- Rp7.200"  },
    { title: "Iklan dengan potongan harian", date: "5/5/26, 09:15",  amount: "- Rp14.000" },
    { title: "Iklan dengan potongan harian", date: "3/5/26, 08:45",  amount: "- Rp9.600"  },
    { title: "Iklan dengan potongan harian", date: "2/5/26, 10:30",  amount: "- Rp12.300" },
    { title: "Iklan dengan potongan harian", date: "1/5/26, 09:00",  amount: "- Rp8.400"  },
  ],
};

const QRIS: PeriodMap = {
  "Hari ini": [
    { title: "Tagihan Gopay Pinjam Modal", date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "18/5/26, 07:00", amount: "- Rp2.000"   },
  ],
  "Kemarin": [
    { title: "Tagihan GoSpiker", date: "17/5/26, 07:00", amount: "- Rp2.000" },
  ],
  "Minggu ini": [
    { title: "Tagihan Gopay Pinjam Modal", date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "18/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "17/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "16/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal", date: "15/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "15/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "14/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "13/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "12/5/26, 07:00", amount: "- Rp2.000"   },
  ],
  "Bulan ini": [
    { title: "Tagihan Gopay Pinjam Modal", date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "18/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "17/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "16/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal", date: "15/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "15/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "14/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "13/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "12/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "11/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal", date: "10/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "10/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "9/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "8/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal", date: "7/5/26, 09:00",  amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "7/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "6/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "5/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal", date: "3/5/26, 09:00",  amount: "- Rp250.000" },
    { title: "Tagihan GoSpiker",           date: "3/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "2/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan GoSpiker",           date: "1/5/26, 07:00",  amount: "- Rp2.000"   },
  ],
};

const SEMUA: PeriodMap = {
  "Hari ini": [
    { title: "Tagihan Gopay Pinjam Modal",  date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"  },
    { title: "Tagihan GoSpiker",             date: "18/5/26, 07:00", amount: "- Rp2.000"  },
  ],
  "Kemarin": [
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750" },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"  },
    { title: "Tagihan GoSpiker",             date: "17/5/26, 07:00", amount: "- Rp2.000"  },
  ],
  "Minggu ini": [
    { title: "Tagihan Gopay Pinjam Modal",   date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"   },
    { title: "Tagihan GoSpiker",             date: "18/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750"  },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"   },
    { title: "Tagihan GoSpiker",             date: "17/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "16/5/26, 09:00", amount: "- Rp12.000"  },
    { title: "Tagihan GoSpiker",             date: "16/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal",   date: "15/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "15/5/26, 10:30", amount: "- Rp7.500"   },
    { title: "Tagihan GoSpiker",             date: "15/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "14/5/26, 08:45", amount: "- Rp11.200"  },
    { title: "Tagihan GoSpiker",             date: "14/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "13/5/26, 09:15", amount: "- Rp14.800"  },
    { title: "Tagihan GoSpiker",             date: "13/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "12/5/26, 10:00", amount: "- Rp6.900"   },
    { title: "Tagihan GoSpiker",             date: "12/5/26, 07:00", amount: "- Rp2.000"   },
  ],
  "Bulan ini": [
    { title: "Tagihan Gopay Pinjam Modal",   date: "18/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "18/5/26, 08:00", amount: "- Rp8.750"   },
    { title: "Tagihan GoSpiker",             date: "18/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 10:00", amount: "- Rp15.750"  },
    { title: "Iklan dengan potongan harian", date: "17/5/26, 08:30", amount: "- Rp9.200"   },
    { title: "Tagihan GoSpiker",             date: "17/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "16/5/26, 09:00", amount: "- Rp12.000"  },
    { title: "Tagihan GoSpiker",             date: "16/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal",   date: "15/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "15/5/26, 10:30", amount: "- Rp7.500"   },
    { title: "Tagihan GoSpiker",             date: "15/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "14/5/26, 08:45", amount: "- Rp11.200"  },
    { title: "Tagihan GoSpiker",             date: "14/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "13/5/26, 09:15", amount: "- Rp14.800"  },
    { title: "Tagihan GoSpiker",             date: "13/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "12/5/26, 10:00", amount: "- Rp6.900"   },
    { title: "Tagihan GoSpiker",             date: "12/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "11/5/26, 09:30", amount: "- Rp10.500"  },
    { title: "Tagihan GoSpiker",             date: "11/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal",   date: "10/5/26, 09:00", amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "10/5/26, 08:15", amount: "- Rp13.200"  },
    { title: "Tagihan GoSpiker",             date: "10/5/26, 07:00", amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "9/5/26, 10:45",  amount: "- Rp8.100"   },
    { title: "Tagihan GoSpiker",             date: "9/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "8/5/26, 09:00",  amount: "- Rp16.500"  },
    { title: "Tagihan GoSpiker",             date: "8/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal",   date: "7/5/26, 09:00",  amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "7/5/26, 08:30",  amount: "- Rp11.800"  },
    { title: "Tagihan GoSpiker",             date: "7/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "6/5/26, 10:00",  amount: "- Rp7.200"   },
    { title: "Tagihan GoSpiker",             date: "6/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "5/5/26, 09:15",  amount: "- Rp14.000"  },
    { title: "Tagihan GoSpiker",             date: "5/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Tagihan Gopay Pinjam Modal",   date: "3/5/26, 09:00",  amount: "- Rp250.000" },
    { title: "Iklan dengan potongan harian", date: "3/5/26, 08:45",  amount: "- Rp9.600"   },
    { title: "Tagihan GoSpiker",             date: "3/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "2/5/26, 10:30",  amount: "- Rp12.300"  },
    { title: "Tagihan GoSpiker",             date: "2/5/26, 07:00",  amount: "- Rp2.000"   },
    { title: "Iklan dengan potongan harian", date: "1/5/26, 09:00",  amount: "- Rp8.400"   },
    { title: "Tagihan GoSpiker",             date: "1/5/26, 07:00",  amount: "- Rp2.000"   },
  ],
};

const DATA: Record<PemotonganType, PeriodMap> = { gofood: GOFOOD, qris: QRIS, semua: SEMUA };

function CollapseBtn() {
  return (
    <div className="bg-[#f9f9f9] flex items-center justify-center p-[4px] rounded-full shrink-0 relative border border-[#e7e7e7]">
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
  type: PemotonganType;
  onClose: () => void;
}

export default function RiwayatPemotonganTray({ type, onClose }: Props) {
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
            Riwayat pemotongan
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
              {i > 0 && <div className="h-px bg-[#e7e7e7] mx-4" />}
              <div className="flex items-center justify-between px-4 py-[14px] gap-[12px]">
                <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[14px] leading-[20px] text-[#1c1d1d]">
                    {item.title}
                  </p>
                  <p className="font-['Maison_Neue_APP:Book',sans-serif] text-[13px] leading-[16px] text-[#8b8b8b]">
                    {item.date}
                  </p>
                </div>
                <div className="flex items-center gap-[12px] shrink-0">
                  <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[13px] leading-[16px] text-[#c10022]">
                    {item.amount}
                  </p>
                  <CollapseBtn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
