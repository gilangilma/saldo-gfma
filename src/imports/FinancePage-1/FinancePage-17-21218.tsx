import { useState, useEffect, useCallback } from "react";
import { SALDO_GOFOOD, SALDO_QRIS, SALDO_TOTAL, formatRp } from "../../data/saldo";
import { useNavigate } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import svgPaths from "./svg-w9q5xzqbo7";
import imgBanner from "./e39a572d2f168c3c71aa69f412ec41f0ccc4cd3c.png";
import icBillsRestructuring from "./ic_bills_restructuring.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p21007380} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Amount() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/all")} className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" data-name="Amount">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#1c1d1d] text-[24px] whitespace-nowrap">{formatRp(SALDO_TOTAL)}</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/24/ic_next_ios">
        <Icon />
      </div>
    </button>
  );
}

function Balance() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[296px]" data-name="Balance">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Saldo yang dapat dicairkan</p>
      <Amount />
    </div>
  );
}

function Layer() {
  return (
    <div className="col-1 h-[18px] ml-[7.5%] mt-[1.8px] relative row-1 w-[85%]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4 18">
        <g clipPath="url(#clip0_17_20754)" id="Layer_1">
          <path clipRule="evenodd" d={svgPaths.p1df5d800} fill="var(--fill-0, #E52535)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p245d52b0} fill="var(--fill-0, #E52535)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_20754">
            <rect fill="white" height="18" width="20.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex-[1_0_0] grid-rows-[max-content] h-full inline-grid leading-[0] min-w-px place-items-start relative" data-name="logo">
      <div className="col-1 h-[24px] ml-0 mt-0 relative row-1 w-full" data-name="bound" />
      <Layer />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Change logo & color">
        <Logo />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#202020] text-[14px]">GoFood</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">{formatRp(SALDO_GOFOOD)}</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame20 />
      <Frame24 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Pendapatan bersih</p>
      <p className="relative shrink-0">+ Rp3.000.000</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Kompensasi</p>
      <p className="relative shrink-0">+ Rp1.000.000</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Pemotongan</p>
      <p className="relative shrink-0">- Rp2.000.000</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #008A0D)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="flex gap-[4px] items-center">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007c0b] text-[14px] whitespace-nowrap">Lihat rincian</p>
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function SaldoGoFood() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/gofood")} className="bg-[#f9f9f9] content-stretch cursor-pointer flex flex-col gap-[12px] items-start justify-center p-[12px] relative rounded-[12px] shrink-0 text-left w-full" data-name="Saldo GoFood">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame28 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame29 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame30 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame31 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame26 />
    </button>
  );
}

function Logo1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logo">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p25d18c0} fill="var(--fill-0, #00AFD6)" fillRule="evenodd" id="Fill 23" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="Change logo & color">
        <Logo1 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#202020] text-[14px]">QRIS</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">{formatRp(SALDO_QRIS)}</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame21 />
      <Frame25 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Pendapatan bersih</p>
      <p className="relative shrink-0">+ Rp1.000.000</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Refund</p>
      <p className="relative shrink-0">Rp0</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] items-start justify-between leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] w-full whitespace-nowrap">
      <p className="relative shrink-0">Pemotongan</p>
      <p className="relative shrink-0">- Rp400.000</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #008A0D)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007c0b] text-[14px] text-right whitespace-nowrap">Lihat rincian</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon2 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame33 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame34 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame36 />
      <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
          <div className="absolute inset-[-0.5px_-0.2%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 257 1">
              <path d="M0.5 0.5H256.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
            </svg>
          </div>
        </div>
      </div>
      <Frame27 />
    </div>
  );
}

function SaldoGoFood1() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/qris")} className="bg-[#f9f9f9] content-stretch cursor-pointer flex flex-col h-[216px] items-start justify-between p-[12px] relative rounded-[12px] shrink-0 text-left w-full" data-name="Saldo GoFood">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame32 />
      <Frame35 />
    </button>
  );
}

function Total() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: () => 32, containScroll: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const slides = [<SaldoGoFood key="gofood" />, <SaldoGoFood1 key="qris" />];

  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Total">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative size-full">
        <Balance />
        <div
          className="overflow-hidden"
          style={{ width: "calc(100% + 64px)", marginLeft: "-32px" }}
          ref={emblaRef}
          data-name="Wallet cards"
        >
          <div className="flex gap-[12px]">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="min-w-0 drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)]"
                style={{ flex: "0 0 calc(100% - 64px)" }}
              >
                {slide}
              </div>
            ))}
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="page_control/scroll_pagination">
          <div className="flex items-center justify-center gap-[8px] py-[8px]">
            {slides.map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                {i === selectedIndex ? (
                  <div className="bg-[#008a0d] h-[6px] rounded-[3px] w-[24px]" />
                ) : (
                  <div className="size-[6px] rounded-full bg-[#BFBFBF]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p22766cf0} fill="var(--fill-0, #008A0D)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/24/ic_withdraw">
        <Icon3 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#202020] text-[14px]">Riwayat pencairan</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/all")} className="content-stretch cursor-pointer flex gap-[4px] items-center justify-end relative shrink-0 border-none bg-transparent p-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] text-right whitespace-nowrap">Lihat semua</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon4 />
      </div>
    </button>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative">
      <Frame22 />
      <Frame18 />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative size-full">
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 3 Mei 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">4 Mei 2026, 04:00</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp3.200.000</p>
      <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0" data-name="badge/ribbon/patch">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">Sukses</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function CollapseBtn() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon5 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame37 />
      <CollapseBtn />
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame38 />
        <Frame39 />
      </div>
    </div>
  );
}

function PayoutHistory() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Payout history">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Title />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="plain_divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
          </svg>
        </div>
      </div>
      <Frame19 />
    </div>
  );
}

const TERUTANG_ITEMS = [
  { label: "Biaya iklan", amount: "Rp70.000" },
  { label: "Tagihan Gopay Pinjam Modal", amount: "Rp100.000" },
  { label: "GoSpiker", amount: "Rp2.000" },
];

function ChevronDown() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 12.5L10 7.5L15 12.5" stroke="#4C4C4C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path clipRule="evenodd" d={svgPaths.p34919f00} fill="#8B8B8B" fillRule="evenodd" />
    </svg>
  );
}

function SaldoTerutang() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full" data-name="Saldo terutang">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      {/* Header */}
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[8px] items-center">
            <img src={icBillsRestructuring} alt="" className="size-[32px] shrink-0" />
            <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic text-[#202020] text-[14px]">Saldo terutang</p>
          </div>
          <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic text-[#202020] text-[14px] whitespace-nowrap">Rp172.000</p>
        </div>
        <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic text-[#4c4c4c] text-[13px]">Jumlah tagihan yang akan memotong saldo</p>
      </div>
      {/* Divider */}
      <div className="h-px w-full bg-[#e7e7e7] shrink-0" />
      {/* Toggle row */}
      <button
        onClick={() => setExpanded(v => !v)}
        className="flex items-center justify-between w-full px-[16px] py-[12px] bg-transparent border-none cursor-pointer"
      >
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic text-[#202020] text-[14px]">
          {expanded ? "Sembunyikan rincian" : "Lihat rincian"}
        </p>
        <div className="bg-[#f9f9f9] flex items-center justify-center p-[2px] rounded-[40px] border border-[#e7e7e7]">
          {expanded ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
      {/* Expanded items */}
      {expanded && TERUTANG_ITEMS.map((item) => (
        <div key={item.label} className="w-full">
          <div className="h-px w-full bg-[#e7e7e7]" />
          <div className="flex items-center justify-between px-[16px] py-[12px] w-full">
            <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] not-italic text-[#202020] text-[14px]">{item.label}</p>
            <div className="flex items-center gap-[4px] shrink-0">
              <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] not-italic text-[#4c4c4c] text-[14px] whitespace-nowrap">{item.amount}</p>
              <ChevronRight />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Main() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Main">
      <Total />
      <SaldoTerutang />
      <PayoutHistory />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">Pengaturan</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2835d300} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px not-italic relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#202020] text-[14px] w-full">Bank pencairan</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#8b8b8b] text-[12px] w-full">BCA • 1234567890</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="poi/24/ic_government">
        <Icon6 />
      </div>
      <Frame14 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon7 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame16 />
      <Frame7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p1f578b80} fill="var(--fill-0, #4C4C4C)" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px not-italic relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#202020] text-[14px] w-full">Email snapshot</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[#8b8b8b] text-[12px] w-full">Dikirim: harian</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="communication/24/ic_inbox">
        <Icon8 />
      </div>
      <Frame15 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center justify-end min-w-px relative">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon9 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame17 />
      <Frame8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full">
      <Frame2 />
      <div className="h-px relative shrink-0 w-full" data-name="plain_divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
          <path clipRule="evenodd" d="M0 1H296V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
        </svg>
      </div>
      <Frame4 />
    </div>
  );
}

function Settings() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Settings">
      <Frame12 />
      <Frame />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">Pelajari keuangan di GoFood Merchant</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2f6bf380} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon11 />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/24/ic_help">
        <Icon10 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4c4c] text-[14px]">Bagaimana pendapatan dari penjualan GoFood di hitung?</p>
      <Frame9 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2f6bf380} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon13 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/24/ic_help">
        <Icon12 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4c4c] text-[14px]">Potongan apa saja yang ada di GoFood</p>
      <Frame10 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2f6bf380} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p34919f00} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon15 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/24/ic_help">
        <Icon14 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4c4c] text-[14px]">Bagaimana mekanisme pencairan di GoFood Merchant?</p>
      <Frame11 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[20px] shrink-0 w-full">
      <Frame3 />
      <div className="h-px relative shrink-0 w-full" data-name="plain_divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
          <path clipRule="evenodd" d="M0 1H296V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
        </svg>
      </div>
      <Frame5 />
      <div className="h-px relative shrink-0 w-full" data-name="plain_divider">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 296 1">
          <path clipRule="evenodd" d="M0 1H296V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
        </svg>
      </div>
      <Frame6 />
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Education">
      <Frame13 />
      <Frame1 />
    </div>
  );
}

function DefaultBusinessSpotHeroItemNotFound() {
  return (
    <div className="-translate-x-1/2 absolute h-[240px] left-[calc(50%+15px)] top-[-17px] w-[360px]" data-name="default/business/spot_hero/item_not_found">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 240">
        <g clipPath="url(#clip0_17_20657)" id="default/business/spot_hero/item_not_found">
          <g id="Vector" />
          <g clipPath="url(#clip1_17_20657)" id="default/business/spot_hero/item_not_found_2">
            <path clipRule="evenodd" d={svgPaths.p1cdeb700} fill="var(--fill-0, #FF9B94)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p13af1180} fill="var(--fill-0, #2B2B2B)" fillRule="evenodd" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p26596d00} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p17dda100} fill="var(--fill-0, #C10022)" fillRule="evenodd" id="Vector_5" />
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p3a77b500} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_6" />
              <path clipRule="evenodd" d={svgPaths.p29c4f8a0} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_7" />
              <path clipRule="evenodd" d={svgPaths.p24033900} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_8" />
              <path clipRule="evenodd" d={svgPaths.p2bcf0880} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_9" />
              <path clipRule="evenodd" d={svgPaths.p1cad8100} fill="var(--fill-0, #FF9B94)" fillRule="evenodd" id="Vector_10" />
              <path clipRule="evenodd" d={svgPaths.p32fff031} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_11" />
              <path clipRule="evenodd" d={svgPaths.p19b3e200} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_12" />
              <path clipRule="evenodd" d={svgPaths.p3253ec00} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_13" />
              <path clipRule="evenodd" d={svgPaths.pee71700} fill="var(--fill-0, #EE2737)" fillRule="evenodd" id="Vector_14" />
              <path clipRule="evenodd" d={svgPaths.p372cc780} fill="var(--fill-0, #C10022)" fillRule="evenodd" id="Vector_15" />
              <path clipRule="evenodd" d={svgPaths.p1d183f00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_16" />
              <path clipRule="evenodd" d={svgPaths.p1269b180} fill="var(--fill-0, #0D0D0D)" fillRule="evenodd" id="Vector_17" />
              <path d={svgPaths.p3e993300} fill="var(--fill-0, #7F3500)" id="Vector_18" />
              <path d={svgPaths.p13e22720} fill="var(--fill-0, #7F3500)" id="Vector_19" />
              <path d={svgPaths.p10f0f000} fill="var(--fill-0, #7F3500)" id="Vector_20" />
              <path d={svgPaths.p1897f880} fill="var(--fill-0, #0D0D0D)" id="Vector_21" />
              <path d={svgPaths.pf643f00} fill="var(--fill-0, #7F3500)" id="Vector_22" />
              <path clipRule="evenodd" d={svgPaths.p2cfefa70} fill="var(--fill-0, #FF706C)" fillRule="evenodd" id="Vector_23" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p3959900} fill="var(--fill-0, #00D000)" fillRule="evenodd" id="Vector_24" />
            <path clipRule="evenodd" d={svgPaths.pce59300} fill="var(--fill-0, #FF9B94)" fillRule="evenodd" id="Vector_25" />
            <path clipRule="evenodd" d={svgPaths.p121ea100} fill="var(--fill-0, #00576C)" fillRule="evenodd" id="Vector_26" />
            <path clipRule="evenodd" d={svgPaths.p602e000} fill="var(--fill-0, #FF9B94)" fillRule="evenodd" id="Vector_27" />
            <path clipRule="evenodd" d={svgPaths.p10b73280} fill="var(--fill-0, #FF9B94)" fillRule="evenodd" id="Vector_28" />
            <path clipRule="evenodd" d={svgPaths.p19990280} fill="var(--fill-0, #7F3500)" fillRule="evenodd" id="Vector_29" />
            <path clipRule="evenodd" d={svgPaths.p2c571400} fill="var(--fill-0, #00576C)" fillRule="evenodd" id="Vector_30" />
            <path clipRule="evenodd" d={svgPaths.p3197dd00} fill="var(--fill-0, #FF6E00)" fillRule="evenodd" id="Vector_31" />
            <path clipRule="evenodd" d={svgPaths.p3949800} fill="var(--fill-0, #7F3500)" fillRule="evenodd" id="Vector_32" />
            <path clipRule="evenodd" d={svgPaths.p201c6772} fill="var(--fill-0, #7F3500)" fillRule="evenodd" id="Vector_33" />
            <path clipRule="evenodd" d={svgPaths.p3c559700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_34" />
            <path clipRule="evenodd" d={svgPaths.pbf0d580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_35" />
            <path clipRule="evenodd" d={svgPaths.p2534b200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_36" />
            <path clipRule="evenodd" d={svgPaths.p1b7ce580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_37" />
            <path clipRule="evenodd" d={svgPaths.p3fe06380} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_38" />
            <path clipRule="evenodd" d={svgPaths.p1abf0500} fill="var(--fill-0, #00AED6)" fillRule="evenodd" id="Vector_39" />
            <path clipRule="evenodd" d={svgPaths.p3c344080} fill="var(--fill-0, #00718B)" fillRule="evenodd" id="Vector_40" />
            <path d={svgPaths.p29a12980} fill="var(--fill-0, #44C9F0)" id="Vector_41" />
            <path d={svgPaths.p309ef500} fill="var(--fill-0, #44C9F0)" id="Vector_42" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_17_20657">
            <rect fill="white" height="240" width="360" />
          </clipPath>
          <clipPath id="clip1_17_20657">
            <rect fill="white" height="133.36" transform="translate(126.219 75)" width="234.042" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FinanceMiniSpotMiniSpotPaylaterSuspiciousActivity() {
  return (
    <div className="absolute contents inset-[15%_19.63%_15%_19.5%]" data-name="finance/mini_spot/mini_spot_paylater_suspicious_activity">
      <div className="absolute inset-[15%_19.63%_15%_19.5%]" data-name="Fill 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.347 28.0002">
          <path clipRule="evenodd" d={svgPaths.p1a864880} fill="var(--fill-0, #FFB31C)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[63.35%_47.44%_29.04%_45.03%]" data-name="Fill 6">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01262 3.04578">
          <path clipRule="evenodd" d={svgPaths.p3d19a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 6" />
        </svg>
      </div>
      <div className="absolute inset-[31.57%_43.4%_42.91%_46.8%]" data-name="Fill 4">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.92052 10.2093">
          <path clipRule="evenodd" d={svgPaths.p261d6000} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
    </div>
  );
}

function DefaultFinanceMiniSpotPaylaterSuspiciousActivity() {
  return (
    <div className="absolute contents inset-0" data-name="default/finance/mini_spot/paylater_suspicious_activity">
      <FinanceMiniSpotMiniSpotPaylaterSuspiciousActivity />
    </div>
  );
}

function Banner() {
  return (
    <div className="bg-[#e52535] h-[184px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Banner">
      <DefaultBusinessSpotHeroItemNotFound />
      <div className="absolute left-[244px] size-[96px] top-[72px]" data-name="default/finance/mini_spot/paylater_suspicious_activity">
        <DefaultFinanceMiniSpotPaylaterSuspiciousActivity />
      </div>
      <p className="absolute font-['Maison_Neue_APP:Bold',sans-serif] leading-[24px] left-[14px] not-italic text-[18px] text-white top-[60px] whitespace-nowrap">Waspada kang tipu</p>
      <p className="absolute font-['Maison_Neue_APP:Bold',sans-serif] leading-[44px] left-[14px] not-italic text-[28px] text-white top-[21px] whitespace-nowrap">JAGA</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[93px] pb-[16px] px-[16px] w-full" data-name="Content">
      <Main />
      <Settings />
      <Education />
      <div className="h-[184px] relative rounded-[16px] shrink-0 w-full" data-name="Banner+">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBanner} />
      </div>
      <Banner />
    </div>
  );
}

function Frame41() {
  const today = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[24px] relative shrink-0 text-[18px]">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] relative shrink-0">Keuangan</p>
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] relative shrink-0">•</p>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0">{today}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-white whitespace-nowrap">
      <Frame41 />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] relative shrink-0 text-[12px]">Diberbarui 2 menit lalu</p>
    </div>
  );
}

function TopNavbar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 overflow-clip px-[16px] pt-[32px] pb-[16px] top-0 w-full z-20" data-name="Top navbar">
      <Frame40 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p11c55f00} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function IconBadge() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon+badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="icon">
        <Icon16 />
      </div>
    </div>
  );
}

function Item() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      role="button"
      tabIndex={0}
      className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative cursor-pointer"
      data-name="item 1"
    >
      <IconBadge />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[min-content]">Beranda</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p21135c00} fill="var(--fill-0, #181818)" id="color" />
        </g>
      </svg>
    </div>
  );
}

function IconBadge1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon+badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="icon">
        <Icon17 />
      </div>
    </div>
  );
}

function Item1() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      role="button"
      tabIndex={0}
      className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative"
      data-name="item 2"
    >
      <IconBadge1 />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[min-content]">Pesanan</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p3c4cf280} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function IconBadge2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon+badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="icon">
        <Icon18 />
      </div>
    </div>
  );
}

function Item2() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      role="button"
      tabIndex={0}
      className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative"
      data-name="item 3"
    >
      <IconBadge2 />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[min-content]">{`Stok & Menu`}</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p9443300} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function IconBadge3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon+badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="icon">
        <Icon19 />
      </div>
    </div>
  );
}

function Item3() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      role="button"
      tabIndex={0}
      className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative"
      data-name="item 4"
    >
      <IconBadge3 />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[min-content]">Promo</p>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p379cb480} fill="var(--fill-0, #00880D)" id="color" />
        </g>
      </svg>
    </div>
  );
}

function IconBadge4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="icon+badge">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="icon">
        <Icon20 />
      </div>
    </div>
  );
}

function Selected() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative" data-name="selected">
      <div className="absolute h-[48px] left-0 right-[-0.2px] top-0" data-name="fade">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 48">
          <path d="M0 0H69V48H0V0Z" fill="url(#paint0_linear_1_3600)" id="fade" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3600" x1="34.5" x2="34.5" y1="0" y2="48">
              <stop stopColor="#E0FFE0" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute h-[3px] left-0 right-[-0.2px] top-0" data-name="indicator">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 3">
          <path d={svgPaths.p245fc1c0} fill="var(--fill-0, #008839)" id="indicator" />
        </svg>
      </div>
      <IconBadge4 />
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] h-[16px] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[64px]">Keuangan</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p3bd1f180} fill="var(--fill-0, white)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

export default function FinancePage() {
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden" data-name="Finance page">
      {/* Scrollable content area */}
      <div
        className="no-scrollbar absolute top-0 left-0 right-0 bottom-[64px] overflow-y-auto overflow-x-hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Green header background scrolls with content */}
        <div className="bg-[#00880d] h-[155px] left-0 top-0 w-full absolute" data-name="Background" />
        <TopNavbar />
        <Content />
      </div>
      {/* Sticky bottom nav */}
      <div
        className="absolute bg-white bottom-0 content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] flex items-center justify-center left-0 px-[8px] right-0 rounded-bl-[16px] rounded-br-[16px]"
        style={{ zIndex: 10 }}
        data-name="bottom_navigation"
      >
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
        <Selected />
      </div>
      {/* Floating QRIS button */}
      <div
        className="absolute bg-[#00880d] bottom-[80px] content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] flex gap-[4px] h-[36px] items-center justify-center pl-[8px] pr-[12px] py-[8px] rounded-[24px]"
        style={{ left: "50%", transform: "translateX(-50%)", zIndex: 11 }}
        data-name="button/floating"
      >
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_scan">
          <Icon21 />
        </div>
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Tampilkan QRIS</p>
      </div>
    </div>
  );
}