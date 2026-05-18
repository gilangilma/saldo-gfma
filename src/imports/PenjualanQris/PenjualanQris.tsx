import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-nezq83obcl";
import PilihSaldoTray from "../../app/components/PilihSaldoTray";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p2f23d600} fill="var(--fill-0, #0081A0)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame24({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <button onClick={onOpenTray} className="bg-[#a6e8ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_wallet">
        <Icon />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">QRIS</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon1 />
      </div>
    </button>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#a6e8ff] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Hari ini</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon2 />
      </div>
    </div>
  );
}

function Frame22({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[12px] pt-[16px] px-[12px] relative size-full">
          <Frame24 onOpenTray={onOpenTray} />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p33c38ac0} fill="var(--fill-0, #00AA13)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_topup">
        <Icon3 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Penjualan</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[13px] whitespace-nowrap">+ Rp1.000.000</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <Frame10 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p25a76880} fill="var(--fill-0, #F06400)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_blocked">
        <Icon4 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Biaya transaksi</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10022] text-[13px] whitespace-nowrap">- Rp75.000</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <Frame11 />
          <Frame1 />
        </div>
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
          <path clipRule="evenodd" d={svgPaths.p31816e80} fill="var(--fill-0, #00AFD6)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="payments/16/ic_request_money">
        <Icon5 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">Pendapatan bersih</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">= Rp925.000</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <Frame12 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-[328px]">
      <Frame15 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame18({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="bg-[#d6f7ff] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-[328px]">
      <div aria-hidden="true" className="absolute border border-[#0081a0] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Frame22 onOpenTray={onOpenTray} />
      <Frame21 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">Rincian penjualan</p>
      </div>
    </div>
  );
}

function Icon6() {
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
        <Icon6 />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] min-w-px not-italic relative text-[#4c4c4c] text-[13px]">Pembayaran QRIS</p>
          <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp1.000.000</p>
          <CollapseBtn />
        </div>
      </div>
    </div>
  );
}

function RincianPenjualan() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-[328px]" data-name="Rincian penjualan">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame13 />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="plain_divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
          </svg>
        </div>
      </div>
      <Frame16 />
      <div className="h-px relative shrink-0 w-full" data-name="divider">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center pl-[12px] relative size-full">
            <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
              <div className="absolute inset-[-0.5px_-0.16%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 317 1">
                  <path d="M0.5 0.5H316.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">Rincian biaya</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[56px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] gap-[8px] items-center leading-[16px] not-italic px-[12px] py-[16px] relative size-full text-[#4c4c4c] text-[13px]">
          <p className="flex-[1_0_0] min-w-px relative">MDR QRIS</p>
          <p className="relative shrink-0 text-right whitespace-nowrap">- Rp75.000</p>
        </div>
      </div>
    </div>
  );
}

function RincianBiaya() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-[328px]" data-name="Rincian biaya">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame14 />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="plain_divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
          </svg>
        </div>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[16px] whitespace-nowrap">Download laporan</p>
    </div>
  );
}

function DefaultBusinessMiniSpotSelectFromGallery1() {
  return (
    <div className="absolute contents inset-[20%_15%_18.41%_15%]" data-name="default/business/mini_spot/select_from_gallery">
      <div className="absolute inset-[25.2%_15.01%_18.4%_16.36%]" data-name="Fill 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4516 22.5592">
          <path clipRule="evenodd" d={svgPaths.p2d49ed2a} fill="var(--fill-0, #007A0E)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[20%_16.37%_23.6%_15%]" data-name="Fill 4">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.4516 22.5592">
          <path clipRule="evenodd" d={svgPaths.p2d49ed2a} fill="var(--fill-0, #00AA13)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
      <div className="absolute inset-[34.58%_26.28%_34.22%_32.08%]" data-name="Fill 7">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6576 12.48">
          <path clipRule="evenodd" d={svgPaths.p7213a20} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 7" />
        </svg>
      </div>
      <div className="absolute inset-[36.83%_65.98%_54.41%_25.26%]" data-name="Fill 9">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.503 3.504">
          <path clipRule="evenodd" d={svgPaths.pf7de380} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 9" />
        </svg>
      </div>
    </div>
  );
}

function DefaultBusinessMiniSpotSelectFromGallery() {
  return (
    <div className="absolute contents inset-0" data-name="default/business/mini_spot/select_from_gallery">
      <DefaultBusinessMiniSpotSelectFromGallery1 />
    </div>
  );
}

function Icon7() {
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

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#007c0b] text-[14px]">Download gambar</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon7 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="relative shrink-0 size-[40px]" data-name="default/business/mini_spot/select_from_gallery">
          <DefaultBusinessMiniSpotSelectFromGallery />
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function DriverMiniSpotMiniSpotNews() {
  return (
    <div className="absolute contents inset-[15%_19.86%_15.01%_17.5%]" data-name="driver/mini_spot/mini_spot_news">
      <div className="absolute inset-[16.61%_20.91%_15%_17.5%]" data-name="Fill 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.6345 27.3572">
          <path clipRule="evenodd" d={svgPaths.p843ec0} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[15%_19.86%_20.53%_23.58%]" data-name="Fill 4">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6219 25.7898">
          <path clipRule="evenodd" d={svgPaths.p956a200} fill="var(--fill-0, #B3E7F3)" fillRule="evenodd" id="Fill 4" />
        </svg>
      </div>
      <div className="absolute inset-[67.2%_26.62%_28.56%_61.38%]" data-name="Fill 11">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.79816 1.69516">
          <path clipRule="evenodd" d={svgPaths.p13e5bc00} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 11" />
        </svg>
      </div>
      <div className="absolute inset-[56.48%_44.69%_37.62%_33.75%]" data-name="Fill 17">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.62404 2.35775">
          <path clipRule="evenodd" d={svgPaths.p254f4f40} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 17" />
        </svg>
      </div>
      <div className="absolute inset-[45.66%_27.79%_46.88%_32.82%]" data-name="Fill 15">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7565 2.98487">
          <path clipRule="evenodd" d={svgPaths.p251aa5e0} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 15" />
        </svg>
      </div>
      <div className="absolute inset-[30.73%_28.78%_64.02%_49.03%]" data-name="Fill 9">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87854 2.10025">
          <path clipRule="evenodd" d={svgPaths.p36abd00} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 9" />
        </svg>
      </div>
      <div className="absolute inset-[25.05%_54.32%_57.03%_30.66%]" data-name="Fill 13">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00899 7.1676">
          <path clipRule="evenodd" d={svgPaths.pb7310c0} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 13" />
        </svg>
      </div>
      <div className="absolute inset-[22.93%_29.44%_71.82%_48.36%]" data-name="Fill 7">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.87854 2.0994">
          <path clipRule="evenodd" d={svgPaths.p2c100600} fill="var(--fill-0, #00AFDA)" fillRule="evenodd" id="Fill 7" />
        </svg>
      </div>
    </div>
  );
}

function DefaultDriverMiniSpotNews() {
  return (
    <div className="absolute contents inset-0" data-name="default/driver/mini_spot/news">
      <DriverMiniSpotMiniSpotNews />
    </div>
  );
}

function Icon8() {
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#007c0b] text-[14px]">Download PDF</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon8 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex-[1_0_0] min-w-px relative rounded-[16px]">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="relative shrink-0 size-[40px]" data-name="default/driver/mini_spot/news">
          <DefaultDriverMiniSpotNews />
        </div>
        <Frame8 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function DownloadReport() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Download report">
      <Frame3 />
      <Frame6 />
    </div>
  );
}

function DriverMiniSpotMiniSpotLoanEducationalItems() {
  return (
    <div className="absolute contents inset-[17.5%_14.97%_17.72%_15%]" data-name="driver/mini_spot/mini_spot_loan_educational_items">
      <div className="absolute inset-[59.76%_15.1%_20.73%_15.09%]" data-name="Fill 3">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.923 7.804">
          <path clipRule="evenodd" d={svgPaths.p9041d00} fill="var(--fill-0, #E8E8E8)" fillRule="evenodd" id="Fill 3" />
        </svg>
      </div>
      <div className="absolute inset-[77.64%_15%_17.71%_15%]" data-name="Fill 7">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9995 1.859">
          <path clipRule="evenodd" d={svgPaths.p38005500} fill="var(--fill-0, #A5A5A5)" fillRule="evenodd" id="Fill 7" />
        </svg>
      </div>
      <div className="absolute inset-[70.41%_37.99%_24.83%_38.56%]" data-name="Fill 9">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.382 1.903">
          <path clipRule="evenodd" d={svgPaths.p8149e00} fill="var(--fill-0, #A5A5A5)" fillRule="evenodd" id="Fill 9" />
        </svg>
      </div>
      <div className="absolute inset-[61.6%_22.31%_31.04%_22.88%]" data-name="Fill 8">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.924 2.947">
          <path clipRule="evenodd" d={svgPaths.p3e217200} fill="var(--fill-0, #A5A5A5)" fillRule="evenodd" id="Fill 8" />
        </svg>
      </div>
      <div className="absolute inset-[22.64%_21.01%_40.25%_21.57%]" data-name="Fill 1">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.969 14.844">
          <path clipRule="evenodd" d={svgPaths.p17e39900} fill="var(--fill-0, #004656)" fillRule="evenodd" id="Fill 1" />
        </svg>
      </div>
      <div className="absolute inset-[25.25%_23.62%_42.85%_24.18%]" data-name="Fill 5">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.879 12.757">
          <path clipRule="evenodd" d="M0 12.757H20.879V0H0V12.757Z" fill="var(--fill-0, #AFE4F0)" fillRule="evenodd" id="Fill 5" />
        </svg>
      </div>
      <div className="absolute inset-[17.5%_14.97%_52.5%_55.03%]" data-name="Fill 10">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9992 11.9999">
          <path clipRule="evenodd" d={svgPaths.p37d23c0} fill="var(--fill-0, #00AA13)" fillRule="evenodd" id="Fill 10" />
        </svg>
      </div>
      <div className="absolute inset-[25.97%_20.76%_60.97%_66.17%]" data-name="Fill 11">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.22925 5.22475">
          <path clipRule="evenodd" d={svgPaths.p16f00d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 11" />
        </svg>
      </div>
      <div className="absolute inset-[30.22%_30.38%_60.97%_60.82%]" data-name="Fill 12">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5205 3.52125">
          <path clipRule="evenodd" d={svgPaths.p37f70000} fill="var(--fill-0, white)" fillRule="evenodd" id="Fill 12" />
        </svg>
      </div>
    </div>
  );
}

function DefaultDriverMiniSpotLoanEducationalItems() {
  return (
    <div className="absolute contents inset-0" data-name="default/driver/mini_spot/loan_educational_items">
      <DriverMiniSpotMiniSpotLoanEducationalItems />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative size-full">
        <div className="relative shrink-0 size-[40px]" data-name="default/driver/mini_spot/loan_educational_items">
          <DefaultDriverMiniSpotLoanEducationalItems />
        </div>
        <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#4c4c4c] text-[14px] w-[min-content]">Untuk melihat data riwayat lebih lama dari bulan lalu, silakan akses GoFood Merchant Portal melalui komputer/desktop:</p>
        <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[#202020] text-[14px] w-[min-content]">portal.gofoodmerchant.co.id</p>
      </div>
    </div>
  );
}

function Content({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] w-full" data-name="Content">
      <Frame18 onOpenTray={onOpenTray} />
      <RincianPenjualan />
      <RincianBiaya />
      <DownloadReport />
      <Frame9 />
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18.044px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0439 16">
        <g id="wifi">
          <g id="bounds" />
          <path d={svgPaths.p12ce9300} fill="var(--fill-0, #202020)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Cellular() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="cellular">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="cellular">
          <g id="bounds" />
          <path clipRule="evenodd" d="M0 15H14V1L0 15Z" fill="var(--fill-0, #202020)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="battery">
          <g id="bounds" />
          <path clipRule="evenodd" d={svgPaths.p31eb3600} fill="var(--fill-0, #202020)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[19px] opacity-90 overflow-clip relative shrink-0 w-[39px]" data-name="time">
      <p className="absolute font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] left-[2.56%] not-italic right-0 text-[#202020] text-[14px] text-right top-[calc(50%-9.5px)] whitespace-nowrap">08:08</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.pfc39500} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  const navigate = useNavigate();
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="left_side">
            <button onClick={() => navigate(-1)} className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/24/ic_back">
              <Icon9 />
            </button>
            <div className="content-stretch flex flex-[1_0_0] h-[40px] items-center min-w-px overflow-clip relative" data-name="avatar_text">
              <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px not-italic overflow-clip relative" data-name=".properties/navbar/left_side/title_style">
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

function Tabs() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Saldo</p>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Penjualan</p>
    </div>
  );
}

function Tabs2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Transaksi</p>
    </div>
  );
}

function TopNavbarTab() {
  const navigate = useNavigate();
  return (
    <div className="content-stretch drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] flex flex-col items-start sticky top-0 w-full z-10" data-name="Top navbar & tab">
      <div className="bg-white content-stretch flex flex-col h-[76px] items-start pb-[8px] pt-[28px] shrink-0 w-full" data-name="navbar">
        <Content1 />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="tabs/regular">
        <div className="flex-[1_0_0] min-w-px relative" data-name="1">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/qris", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs />
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px relative" data-name="2">
          <Tabs1 />
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" data-name="line" />
        </div>
        <div className="flex-[1_0_0] h-[44px] min-w-px relative" data-name="3">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/qris/transaksi", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PenjualanQris() {
  const [showTray, setShowTray] = useState(false);
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <Content onOpenTray={() => setShowTray(true)} />
      </div>
      {showTray && <PilihSaldoTray selected="qris" onClose={() => setShowTray(false)} />}
    </div>
  );
}