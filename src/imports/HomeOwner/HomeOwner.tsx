import { useState, useEffect, useCallback, createContext, useContext } from "react";
import { useNavigate } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import svgPaths from "./svg-ftk39hk4ad";

const IC_HIDE_PATH = "M13.4697 2.862C13.7303 3.12267 13.7303 3.544 13.4697 3.80467L12.3463 4.92762C13.1974 5.60117 13.9465 6.47279 14.5384 7.5202C14.7051 7.81287 14.7051 8.17954 14.5384 8.47954C13.0584 11.1002 10.6117 12.6669 7.99841 12.6669C7.03747 12.6669 6.10255 12.4489 5.22872 12.0469L3.46968 13.8047C3.33968 13.9347 3.16901 14 2.99834 14C2.82768 14 2.65701 13.9347 2.52701 13.8047C2.26634 13.544 2.26634 13.1227 2.52701 12.862L4.03268 11.3558L4.02708 11.3522L5.59015 9.78934C6.13696 10.5241 7.01207 11 7.99834 11C9.6552 11 10.9983 9.65686 10.9983 8C10.9983 7.01373 10.5224 6.13862 9.78768 5.59181L11.2044 4.17487L11.2111 4.17849V4.17849L12.527 2.862C12.7877 2.60134 13.209 2.60134 13.4697 2.862ZM7.99834 3.33334C8.54863 3.33334 9.09157 3.40485 9.6196 3.53947L9.88234 3.612L8.45918 5.03518C8.30895 5.01202 8.15505 5 7.99834 5C6.34149 5 4.99834 6.34315 4.99834 8C4.99834 8.15664 5.01035 8.31047 5.03349 8.46063L3.00168 10.492C2.41968 9.91667 1.89368 9.25 1.45834 8.48C1.29168 8.18667 1.29168 7.82 1.45834 7.52C2.19834 6.21334 3.17834 5.16 4.30501 4.44667C5.42501 3.72667 6.69168 3.33334 7.99834 3.33334ZM9.66501 8C9.66501 8.92048 8.91882 9.66667 7.99834 9.66667C7.37911 9.66667 6.83876 9.32897 6.5514 8.8277L8.82591 6.55299C9.32726 6.84033 9.66501 7.38072 9.66501 8Z";
const IC_VIEWS_PATH = "M7.99972 3.3335C10.6591 3.3335 13.0777 4.92899 14.5424 7.52258C14.7082 7.81789 14.7081 8.18111 14.5416 8.47793C13.0777 11.0707 10.6591 12.6668 7.99972 12.6668C5.34109 12.6668 2.9225 11.0708 1.45767 8.47707C1.29196 8.18177 1.29196 7.81855 1.45853 7.52173C2.92222 4.92927 5.34073 3.3335 7.99972 3.3335ZM7.99999 4.9999C6.34313 4.9999 4.99999 6.34304 4.99999 7.9999C4.99999 9.65675 6.34313 10.9999 7.99999 10.9999C9.65685 10.9999 11 9.65675 11 7.9999C11 6.34304 9.65685 4.9999 7.99999 4.9999ZM7.99999 6.33323C8.92047 6.33323 9.66666 7.07942 9.66666 7.9999C9.66666 8.92037 8.92047 9.66656 7.99999 9.66656C7.07951 9.66656 6.33332 8.92037 6.33332 7.9999C6.33332 7.87044 6.34808 7.74442 6.37629 7.62377C6.46817 7.6516 6.56565 7.66656 6.66666 7.66656C7.21932 7.66656 7.66666 7.21856 7.66666 6.66656C7.66666 6.56568 7.65171 6.46827 7.62354 6.37592C7.74452 6.34799 7.87053 6.33323 7.99999 6.33323Z";

import { SALDO_GOFOOD, SALDO_QRIS, SALDO_TOTAL, formatRp } from "../../data/saldo";

const BalanceContext = createContext<{ visible: boolean; toggle: () => void }>({
  visible: true,
  toggle: () => {},
});

function Bg() {
  return (
    <div className="absolute h-[288px] left-0 top-0 w-full" data-name="bg">
      <div className="absolute inset-[0_0_-11.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 360 320">
          <g id="bg">
            <path d="M360 0H0V320H360V0Z" fill="url(#paint0_linear_1_3712)" id="Vector" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_3712" x1="78" x2="131" y1="5" y2="239">
              <stop offset="0.115913" stopColor="#EE2737" />
              <stop offset="0.313142" stopColor="#EF6972" />
              <stop offset="0.618469" stopColor="#F1B9BA" />
              <stop offset="1" stopColor="#F2F2F2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Wifi() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18.044px]" data-name="wifi">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0439 16">
        <g id="wifi">
          <g id="bounds" />
          <path d={svgPaths.p12ce9300} fill="var(--fill-0, #1C1D1D)" id="Shape" />
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
          <path clipRule="evenodd" d="M0 15H14V1L0 15Z" fill="var(--fill-0, #1C1D1D)" fillRule="evenodd" id="Shape" />
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
          <path clipRule="evenodd" d={svgPaths.p31eb3600} fill="var(--fill-0, #1C1D1D)" fillRule="evenodd" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="h-[19px] opacity-90 overflow-clip relative shrink-0 w-[39px]" data-name="time">
      <p className="absolute font-['Maison_Neue:Demi',sans-serif] leading-[normal] left-[2.56%] not-italic right-0 text-[#1c1d1d] text-[14px] text-right top-[calc(50%-9.5px)] whitespace-nowrap">08:08</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p9c18100} fill="var(--fill-0, #F1494C)" id="color" />
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
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#f1f2f4] content-stretch flex items-center p-[4px] relative rounded-[100px] shrink-0">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon1 />
      </div>
    </div>
  );
}

function ButtonPill() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-w-px relative rounded-[24px]" data-name="button/pill">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_when_restaurant_confirm">
            <Icon />
          </div>
          <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#494a4a] text-[14px]">Gado-Gado Mpok Ica, Serang</p>
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function ProfileDp() {
  return (
    <div className="relative shrink-0 w-full" data-name="profile_DP">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <ButtonPill />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.pd6b5900} fill="var(--fill-0, #008839)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1bc34280} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[82px]">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_correct">
        <Icon2 />
      </div>
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] min-w-px not-italic relative text-[#494a4a] text-[13px]">Buka</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon3 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[20px] shrink-0">
      <Frame />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1d643a00} fill="var(--fill-0, #494A4A)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-start p-[8px] relative rounded-[32px] shrink-0" data-name="button/iconButton">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_user">
          <Icon4 />
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
          <path d={svgPaths.p5ab2e00} fill="var(--fill-0, #494A4A)" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex items-start p-[8px] relative rounded-[32px] shrink-0" data-name="button/iconButton">
        <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="communication/16/ic_inbox">
          <Icon5 />
        </div>
      </div>
      <div className="absolute bg-[#ea001f] content-stretch flex flex-col items-start justify-center left-[18px] px-[4px] rounded-[8px] top-[-3px]" data-name="badge/notification">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
        <p className="font-['Maison_Neue:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[143px]">
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function ProfileDp1() {
  return (
    <div className="relative shrink-0 w-full" data-name="profile_DP">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Frame1 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[16px] relative shrink-0 w-full">
      <ProfileDp />
      <ProfileDp1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="header">
      <div className="relative shrink-0 w-full invisible" data-name="status bar">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-end pb-px px-[8px] relative size-full">
            <Wifi />
            <Cellular />
            <Battery />
            <Time />
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Masthead() {
  return (
    <div className="absolute bg-[#ffede0] content-stretch flex flex-col h-[156px] items-start left-0 overflow-clip rounded-tl-[16px] rounded-tr-[16px] top-0 w-full" data-name="Masthead">
      <Bg />
      <Header />
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

function Frame53() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/all")} className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[14px] whitespace-nowrap">Total saldo</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon6 />
      </div>
    </button>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p1996f000} fill="var(--fill-0, #4C4C4C)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  const { visible, toggle } = useContext(BalanceContext);
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[14px] whitespace-nowrap">
        {visible ? formatRp(SALDO_TOTAL) : "Rp••••••"}
      </p>
      <button
        onClick={toggle}
        className="relative shrink-0 size-[16px] cursor-pointer bg-transparent border-none p-0"
        data-name="label/16/ic_hide"
      >
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path clipRule="evenodd" d={visible ? IC_HIDE_PATH : IC_VIEWS_PATH} fill="#4C4C4C" fillRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame53 />
      <Frame51 />
    </div>
  );
}

function Layer() {
  return (
    <div className="col-1 h-[30px] ml-[7.5%] mt-[5px] relative row-1 w-[85%]" data-name="Layer_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 30">
        <g clipPath="url(#clip0_1_3715)" id="Layer_1">
          <path clipRule="evenodd" d={svgPaths.p1dba6000} fill="var(--fill-0, #E52535)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p14650c00} fill="var(--fill-0, #E52535)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_3715">
            <rect fill="white" height="30" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex-[1_0_0] grid-rows-[max-content] h-full inline-grid leading-[0] min-w-px place-items-start relative" data-name="logo">
      <div className="col-1 h-[40px] ml-0 mt-0 relative row-1 w-full" data-name="bound" />
      <Layer />
    </div>
  );
}

function Frame49() {
  const { visible } = useContext(BalanceContext);
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">
        {visible ? `Saldo: ${formatRp(SALDO_GOFOOD)}` : "Saldo: Rp••••••"}
      </p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">GoFood</p>
      <Frame49 />
    </div>
  );
}

function Icon8() {
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
        <Icon8 />
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Change logo & color">
        <Logo />
      </div>
      <Frame38 />
      <CollapseBtn />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1c1d1d] text-[16px]">Rp4.000.000</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">Penjualan</p>
      <Frame2 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p30069600} fill="var(--fill-0, #00880D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Detail() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Detail">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_increased_data">
        <Icon9 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00700b] text-[13px] whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[16px] whitespace-nowrap">8</p>
      <Detail />
    </div>
  );
}

function Wallet() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Wallet 2">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">Transaksi hari ini</p>
      <Frame3 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Data">
      <Text />
      <Wallet />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative size-full">
        <Frame43 />
        <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
            <div className="absolute inset-[-0.5px_-0.18%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277 1">
                <path d="M0.5 0.5H276.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
        <Data />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] gap-[4px] items-center leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">
      <p className="relative shrink-0">10:00</p>
      <p className="relative shrink-0">•</p>
      <p className="relative shrink-0">GoFood delivery</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">+Rp50.000</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Frame35 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame46() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/gofood")} className="bg-[#f9f9f9] content-stretch cursor-pointer flex flex-col items-start relative rounded-[16px] text-left" style={{ width: "288px" }}>
      <Frame40 />
      <Frame34 />
    </button>
  );
}

function Logo1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="logo">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p30111700} fill="var(--fill-0, #00AFD6)" fillRule="evenodd" id="Fill 23" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  const { visible } = useContext(BalanceContext);
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[16px] min-w-px not-italic relative text-[#4c4c4c] text-[13px] whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0">Gopay</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-right">
        {visible ? `Saldo: ${formatRp(SALDO_QRIS)}` : "Saldo: Rp••••••"}
      </p>
    </div>
  );
}

function Icon10() {
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

function CollapseBtn1() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon10 />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Change logo & color">
        <Logo1 />
      </div>
      <Frame39 />
      <CollapseBtn1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#1c1d1d] text-[16px]">Rp2.350.100</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">Penjualan</p>
      <Frame4 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p30069600} fill="var(--fill-0, #00880D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Detail1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Detail">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_increased_data">
        <Icon11 />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00700b] text-[13px] whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[16px] whitespace-nowrap">8</p>
      <Detail1 />
    </div>
  );
}

function Wallet1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Wallet 2">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">Transaksi hari ini</p>
      <Frame5 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Data">
      <Text1 />
      <Wallet1 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_4px_rgba(85,96,113,0.1)] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[12px] relative size-full">
        <Frame44 />
        <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
            <div className="absolute inset-[-0.5px_-0.18%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277 1">
                <path d="M0.5 0.5H276.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
        <Data1 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] gap-[4px] items-center leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">
      <p className="relative shrink-0">10:00</p>
      <p className="relative shrink-0">•</p>
      <p className="relative shrink-0">QRIS</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[13px] whitespace-nowrap">+Rp50.000</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Frame36 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/qris")} className="bg-[#f9f9f9] content-stretch cursor-pointer flex flex-col items-start relative rounded-[16px] text-left" style={{ width: "288px" }}>
      <Frame41 />
      <Frame42 />
    </button>
  );
}

function Frame52() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      {/* Carousel viewport */}
      <div ref={emblaRef} style={{ overflow: "hidden", width: "calc(100% + 32px)", marginLeft: "-16px", marginRight: "-16px" }}>
        <div style={{ display: "flex", gap: "16px", paddingLeft: "16px" }}>
          <div style={{ flex: "0 0 288px", maxWidth: "288px" }}>
            <Frame46 />
          </div>
          <div style={{ flex: "0 0 288px", maxWidth: "288px", marginRight: "16px" }}>
            <Frame48 />
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="relative shrink-0 w-full" data-name="page_control/scroll_pagination">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[144px] py-[8px] relative size-full">
            {[0, 1].map((i) => (
              <div key={i} className="content-stretch flex items-center justify-center relative rounded-[3px] shrink-0">
                {selectedIndex === i ? (
                  <div className="bg-[#008a0d] h-[6px] relative rounded-[3px] shrink-0 w-[24px]" />
                ) : (
                  <div className="relative shrink-0 size-[6px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                      <circle cx="3" cy="3" fill="#BFBFBF" r="3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame50 />
      <Frame52 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#757575] text-[12px] whitespace-nowrap">Diperbarui 2 menit lalu</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[14px] w-full">Performa di GoFood hari ini</p>
      <Frame31 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame32 />
      <p className="decoration-solid font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1c1d1d] text-[14px] underline whitespace-nowrap">Pelajari</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col h-[64px] items-start relative shrink-0">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#1c1d1d] text-[21px] whitespace-nowrap">248</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p30069600} fill="var(--fill-0, #EA001F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c7001b] text-[12px] whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-180">
          <div className="content-stretch flex items-center justify-center overflow-clip relative" data-name="navigation/16/ic_increased_data">
            <Icon12 />
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] h-[32px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#1c1d1d] text-[12px] w-[min-content]">Resto terlihat</p>
      <Frame24 />
      <Frame17 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Frame12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_2px_8px_0px_rgba(85,96,113,0.1)]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1c1d1d] text-[21px] whitespace-nowrap">50</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#757575] text-[0px] w-[min-content]">
        <span className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] text-[#494a4a] text-[12px]">20%</span>
        <span className="leading-[16px] text-[12px]">{` dari resto terlihat`}</span>
      </p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p30069600} fill="var(--fill-0, #00880D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00700b] text-[12px] whitespace-nowrap">10%</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_increased_data">
        <Icon13 />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#1c1d1d] text-[12px] w-[min-content]">Resto dikunjungi</p>
      <Frame25 />
      <Frame18 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[12px] relative size-full">
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_2px_8px_0px_rgba(85,96,113,0.1)]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[28px] relative shrink-0 text-[#1c1d1d] text-[21px] whitespace-nowrap">5</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[0] min-w-full relative shrink-0 text-[#757575] text-[0px] w-[min-content]">
        <span className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] text-[#494a4a] text-[12px]">10%</span>
        <span className="leading-[16px] text-[12px]">{` dari kunjungan`}</span>
      </p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p30069600} fill="var(--fill-0, #00880D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#00700b] text-[12px] whitespace-nowrap">2%</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_increased_data">
        <Icon14 />
      </div>
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px relative w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#1c1d1d] text-[12px] w-[min-content]">Pesanan selesai</p>
      <Frame26 />
      <Frame19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e8e8] border-solid inset-[-1px] pointer-events-none rounded-[17px] shadow-[0px_2px_8px_0px_rgba(85,96,113,0.1)]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[160px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame6 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame16 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame15 />
      </div>
    </div>
  );
}

function TitleDesc() {
  return (
    <div className="bg-[#f7f7f7] relative rounded-[20px] shrink-0 w-full" data-name="Title desc">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[12px] relative size-full">
          <Frame11 />
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p3745c600} fill="var(--fill-0, #A54703)" fillRule="evenodd" id="color" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative">
      <p className="flex-[1_0_0] font-['Maison_Neue_APP:Book',sans-serif] leading-[0] min-w-px not-italic relative text-[#a54703] text-[0px]">
        <span className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] text-[14px]">Resto tayang</span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
        <span className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] text-[14px]">menurun</span>
        <span className="leading-[20px] text-[14px]">{`. `}</span>
        <span className="leading-[20px] text-[14px]">Saatnya</span>
        <span className="leading-[20px] text-[14px]">{` pasang Iklan GoFood `}</span>
        <span className="leading-[20px] text-[14px]">agar</span>
        <span className="leading-[20px] text-[14px]">{` `}</span>
        <span className="leading-[20px] text-[14px]">resto</span>
        <span className="leading-[20px] text-[14px]">{` banyak `}</span>
        <span className="leading-[20px] text-[14px]">dilihat.</span>
      </p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_forward">
        <Icon15 />
      </div>
    </div>
  );
}

function TitleDesc1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title desc">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[12px] relative size-full">
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Funnel() {
  return (
    <div className="bg-[#ffede0] content-stretch flex flex-col items-start overflow-clip relative rounded-[20px] w-full" data-name="Funnel">
      <TitleDesc />
      <TitleDesc1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[20px] w-full">
      <Frame47 />
      <Funnel />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[660px] items-center left-0 right-0 rounded-tl-[20px] rounded-tr-[20px] top-[140px]">
      <Frame23 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icon">
          <g id="bound" />
          <path clipRule="evenodd" d={svgPaths.p11c55f00} fill="var(--fill-0, #00880D)" fillRule="evenodd" id="color" />
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
      <IconBadge />
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] h-[16px] leading-[16px] not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[64px]">Beranda</p>
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

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative" data-name="item 2">
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

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative" data-name="item 3">
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

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative" data-name="item 4">
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
          <path d={svgPaths.p379cb480} fill="var(--fill-0, #494A4A)" id="color" />
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

function Item3() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/finance")}
      className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[64px] items-center min-w-px pb-[8px] pt-[12px] relative cursor-pointer"
      role="button"
      tabIndex={0}
      data-name="item 5"
    >
      <IconBadge4 />
      <p className="font-['Maison_Neue_APP:Book',sans-serif] h-[16px] leading-[16px] min-w-full not-italic relative shrink-0 text-[#494a4a] text-[12px] text-center w-[min-content]">Keuangan</p>
    </div>
  );
}

export default function HomeOwner() {
  const [balanceVisible, setBalanceVisible] = useState(true);
  const toggleBalance = useCallback(() => setBalanceVisible((v) => !v), []);

  return (
    <BalanceContext.Provider value={{ visible: balanceVisible, toggle: toggleBalance }}>
    <div className="bg-[#f1f2f4] relative rounded-[16px] size-full overflow-hidden" data-name="Home/Owner">
      {/* Scrollable content area — sits above the bottom nav */}
      <div
        className="no-scrollbar absolute top-0 left-0 right-0 bottom-[64px] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="relative" style={{ height: "800px" }}>
          <Masthead />
          <Frame20 />
        </div>
      </div>

      {/* Sticky bottom nav */}
      <div className="absolute bg-white bottom-0 content-stretch drop-shadow-[0px_0px_5px_rgba(0,0,0,0.15)] flex items-center justify-center left-0 px-[8px] right-0 rounded-bl-[16px] rounded-br-[16px]" style={{ zIndex: 10 }} data-name="bottom_navigation">
        <Selected />
        <Item />
        <Item1 />
        <Item2 />
        <Item3 />
      </div>
    </div>
    </BalanceContext.Provider>
  );
}