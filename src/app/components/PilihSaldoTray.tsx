import { useNavigate } from "react-router";

type SaldoOption = "gofood" | "qris" | "semua";

interface Props {
  selected: SaldoOption;
  onClose: () => void;
}

function GoFoodIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.5 3.5C17.5 3.5 19 5 19 8.5C19 10.5 17.8 12 16.5 12.5V20C16.5 20.8 15.8 21.5 15 21.5C14.2 21.5 13.5 20.8 13.5 20V12.5C12.2 12 11 10.5 11 8.5C11 5 12.5 3.5 12.5 3.5" stroke="#E52535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 3.5V9.5M9 3.5V9.5M7 9.5C7 9.5 6.5 11 8 12V20C8 20.8 7.3 21.5 6.5 21.5C5.7 21.5 5 20.8 5 20V12C3.5 11 3 9.5 3 9.5" stroke="#E52535" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function QrisIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="#0081A0" strokeWidth="1.5"/>
      <path d="M3 10H21" stroke="#0081A0" strokeWidth="1.5"/>
      <circle cx="7.5" cy="15" r="1.5" fill="#0081A0"/>
    </svg>
  );
}

function SemuaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#007C0B" strokeWidth="1.5"/>
      <path d="M12 7V17M9 9.5C9 9.5 9.5 8 12 8C14.5 8 15 9.5 15 10.5C15 12 13.5 12.5 12 13C10.5 13.5 9 14 9 15.5C9 16.5 9.5 18 12 18C14.5 18 15 16.5 15 16.5" stroke="#007C0B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#008A0D"/>
      <path d="M5.5 10L8.5 13L14.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PilihSaldoTray({ selected, onClose }: Props) {
  const navigate = useNavigate();

  const handleSelect = (option: SaldoOption) => {
    onClose();
    if (option === "gofood") navigate("/finance/gofood");
    else if (option === "qris") navigate("/finance/qris");
    else navigate("/finance/all");
  };

  const options: { key: SaldoOption; label: string; bg: string; icon: React.ReactNode }[] = [
    { key: "gofood", label: "GoFood",  bg: "bg-[#ffd0cc]", icon: <GoFoodIcon /> },
    { key: "qris",   label: "QRIS",   bg: "bg-[#a6e8ff]", icon: <QrisIcon />   },
    { key: "semua",  label: "Semua",  bg: "bg-[#abffa6]", icon: <SemuaIcon />  },
  ];

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end" style={{ borderRadius: "inherit" }}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white rounded-full size-[40px] flex items-center justify-center shadow"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="#1C1D1D" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Sheet */}
      <div className="relative bg-white rounded-t-[20px] z-10 pb-6">
        {/* Drag pill */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-[40px] h-[4px] bg-[#e0e0e0] rounded-full" />
        </div>

        <div className="px-4 pb-2">
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[18px] leading-[28px] text-[#1c1d1d]">Pilih saldo</p>
        </div>

        <div className="h-px bg-[#e8e8e8] mx-4 mb-2" />

        {options.map((opt) => (
          <button
            key={opt.key}
            onClick={() => handleSelect(opt.key)}
            className="flex items-center gap-[16px] w-full px-4 py-[14px]"
          >
            <div className={`${opt.bg} rounded-[12px] size-[40px] flex items-center justify-center shrink-0`}>
              {opt.icon}
            </div>
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] text-[16px] leading-[24px] text-[#1c1d1d] flex-1 text-left">
              {opt.label}
            </p>
            {selected === opt.key && <CheckIcon />}
          </button>
        ))}
      </div>
    </div>
  );
}
