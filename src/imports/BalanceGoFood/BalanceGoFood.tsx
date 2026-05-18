import { useState } from "react";
import { useNavigate } from "react-router";
import svgPaths from "./svg-ewyz4of39d";
import PilihSaldoTray from "../../app/components/PilihSaldoTray";
import RiwayatKompensasiTray from "../../app/components/RiwayatKompensasiTray";
import RiwayatPemotonganTray from "../../app/components/RiwayatPemotonganTray";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon">
          <g id="bound" />
          <path d={svgPaths.p9c18100} fill="var(--fill-0, #E52535)" id="color" />
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

function Frame30({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <button onClick={onOpenTray} className="bg-[#ffd0cc] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[16px] shrink-0 cursor-pointer border-none">
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="label/16/ic_when_restaurant_confirm">
        <Icon />
      </div>
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] whitespace-nowrap">GoFood</p>
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_expand_more">
        <Icon1 />
      </div>
    </button>
  );
}

function Frame27({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pb-[12px] pt-[16px] px-[12px] relative size-full">
          <Frame30 onOpenTray={onOpenTray} />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Maison_Neue_APP:Book',sans-serif] gap-[4px] items-start leading-[16px] relative shrink-0 text-[#8b8b8b] text-[13px] w-full">
      <p className="relative shrink-0 whitespace-nowrap">Saldo dalam proses:</p>
      <p className="relative shrink-0 w-[74px]">Rp0</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] relative shrink-0 text-[#202020] text-[14px] w-full">Saldo yang dapat dicairkan</p>
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[44px] relative shrink-0 text-[#1c1d1d] text-[28px] w-full">Rp2.000.000</p>
      <Frame1 />
    </div>
  );
}

function Saldo() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Saldo">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame />
        <div className="content-stretch flex h-px items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
          <div className="flex-[1_0_0] h-0 min-w-px relative" data-name="dotted_divider">
            <div className="absolute inset-[-0.5px_-0.16%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 305 1">
                <path d="M0.5 0.5H304.5" id="dotted_divider" stroke="var(--stroke-0, #E7E7E7)" strokeDasharray="2 2" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] whitespace-nowrap">Pencairan otomatis besok jam 04:00</p>
      </div>
    </div>
  );
}

function Frame26({ onOpenTray }: { onOpenTray: () => void }) {
  return (
    <div className="bg-[#fdedee] content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ffbfba] border-solid inset-[-1px] pointer-events-none rounded-[17px]" />
      <Frame27 onOpenTray={onOpenTray} />
      <Saldo />
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] w-full">Mutasi saldo</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[112px]">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] text-right w-[74px]">Rp0</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] whitespace-nowrap">Saldo awal</p>
      <Frame15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Frame2 />
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
        <Icon2 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[13px] text-right whitespace-nowrap">+ Rp3.000.000</p>
      <CollapseBtn />
    </div>
  );
}

function Frame4() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/finance/gofood/penjualan")} className="cursor-pointer relative shrink-0 w-full bg-transparent border-none p-0 text-left">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] whitespace-nowrap">Pendapatan bersih</p>
          <Frame17 />
        </div>
      </div>
    </button>
  );
}

function Icon3() {
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
        <Icon3 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[13px] text-right whitespace-nowrap">+ Rp1.000.000</p>
      <CollapseBtn1 />
    </div>
  );
}

function Frame5({ onOpenKompensasi }: { onOpenKompensasi: () => void }) {
  return (
    <button onClick={onOpenKompensasi} className="cursor-pointer relative shrink-0 w-full bg-transparent border-none p-0 text-left">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] whitespace-nowrap">Kompensasi</p>
          <Frame18 />
        </div>
      </div>
    </button>
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

function CollapseBtn2() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon4 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c10022] text-[13px] text-right whitespace-nowrap">- Rp2.000.000</p>
      <CollapseBtn2 />
    </div>
  );
}

function Frame6({ onOpenPemotongan }: { onOpenPemotongan: () => void }) {
  return (
    <button onClick={onOpenPemotongan} className="cursor-pointer relative shrink-0 w-full bg-transparent border-none p-0 text-left">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-[16px] relative size-full">
          <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] whitespace-nowrap">Pemotongan</p>
          <Frame19 />
        </div>
      </div>
    </button>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[112px]">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] text-right whitespace-nowrap">Rp2.000.000</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#8b8b8b] text-[13px] whitespace-nowrap">Saldo saat ini</p>
      <Frame20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[16px] relative size-full">
        <Frame3 />
      </div>
    </div>
  );
}

function Frame16({ onOpenKompensasi, onOpenPemotongan }: { onOpenKompensasi: () => void; onOpenPemotongan: () => void }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame7 />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="plain_divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
          </svg>
        </div>
      </div>
      <Frame8 />
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
      <Frame4 />
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
      <Frame5 onOpenKompensasi={onOpenKompensasi} />
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
      <Frame6 onOpenPemotongan={onOpenPemotongan} />
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
      <Frame9 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] min-w-px not-italic relative text-[#202020] text-[14px]">Riwayat pencairan dana</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 3 Mei 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">4 Mei 2026, 04:00</p>
    </div>
  );
}

function Frame24() {
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

function CollapseBtn3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon5 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame24 />
      <CollapseBtn3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame21 />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 2 Mei 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">3 Mei 2026, 04:00</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp2.870.000</p>
      <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0" data-name="badge/ribbon/patch">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">Sukses</p>
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

function CollapseBtn4() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon6 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame31 />
      <CollapseBtn4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame25 />
        <Frame29 />
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 1 Mei 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">2 Mei 2026, 04:00</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp2.700.000</p>
      <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0" data-name="badge/ribbon/patch">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">Sukses</p>
      </div>
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

function CollapseBtn5() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon7 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame34 />
      <CollapseBtn5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame32 />
        <Frame33 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 30 Apr 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">1 Mei 2026, 04:00</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp3.500.000</p>
      <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0" data-name="badge/ribbon/patch">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">Sukses</p>
      </div>
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

function CollapseBtn6() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon8 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame37 />
      <CollapseBtn6 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame35 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] relative shrink-0 text-[#4c4c4c] text-[13px]">Pencairan 29 Apr 2026</p>
      <p className="font-['Maison_Neue_APP:Book',sans-serif] relative shrink-0 text-[#8b8b8b] text-[12px]">30 Apr 2026, 04:00</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0">
      <p className="font-['Maison_Neue_APP:Book',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4c4c] text-[13px] text-right whitespace-nowrap">Rp4.000.000</p>
      <div className="bg-[#e1ffdf] content-stretch flex flex-col items-start justify-center px-[4px] relative rounded-[8px] shrink-0" data-name="badge/ribbon/patch">
        <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#007c0b] text-[12px] whitespace-nowrap">Sukses</p>
      </div>
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

function CollapseBtn7() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start p-[4px] relative rounded-[40px] shrink-0" data-name="collapse_btn">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/16/ic_next_ios">
        <Icon9 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-w-px relative">
      <Frame40 />
      <CollapseBtn7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start px-[12px] py-[16px] relative size-full">
        <Frame38 />
        <Frame39 />
      </div>
    </div>
  );
}

function Frame41() {
  const navigate = useNavigate();
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[12px] py-[16px] relative size-full">
          <button onClick={() => navigate("/finance/all")} className="content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[8px] relative rounded-[18px] shrink-0 bg-transparent border-none" data-name="button/secondary">
            <div aria-hidden="true" className="absolute border border-[#008a0d] border-solid inset-0 pointer-events-none rounded-[18px]" />
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name=".properties/button/label/tiny">
              <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#007c0b] text-[14px] text-center whitespace-nowrap">Lihat riwayat lengkap</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e7e7e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame22 />
      <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="plain_divider">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 1">
            <path clipRule="evenodd" d="M0 1H328V0H0V1Z" fill="var(--fill-0, #E7E7E7)" fillRule="evenodd" id="plain_divider" />
          </svg>
        </div>
      </div>
      <Frame10 />
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
      <Frame11 />
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
      <Frame12 />
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
      <Frame13 />
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
      <Frame14 />
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
      <Frame41 />
    </div>
  );
}

function Top({ onOpenTray, onOpenKompensasi, onOpenPemotongan }: { onOpenTray: () => void; onOpenKompensasi: () => void; onOpenPemotongan: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] w-full" data-name="Top">
      <Frame26 onOpenTray={onOpenTray} />
      <Frame16 onOpenKompensasi={onOpenKompensasi} onOpenPemotongan={onOpenPemotongan} />
      <Frame28 />
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

function Icon10() {
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

function Content() {
  const navigate = useNavigate();
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center px-[16px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="left_side">
            <button onClick={() => navigate(-1)} className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative shrink-0" data-name="navigation/24/ic_back">
              <Icon10 />
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
    <div className="content-stretch flex items-center justify-center pt-[12px] px-[8px] relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#202020] text-[14px] text-center whitespace-nowrap">Saldo</p>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Tabs">
      <p className="font-['Maison_Neue_APP:Demi',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#8b8b8b] text-[14px] text-center whitespace-nowrap">Penjualan</p>
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
        <Content />
      </div>
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip relative shrink-0 w-full" data-name="tabs/regular">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center justify-center min-w-px relative" data-name="1">
          <Tabs />
          <div className="bg-[#008a0d] h-[2px] relative shrink-0 w-full" data-name="line" />
        </div>
        <div className="flex-[1_0_0] min-w-px relative" data-name="2">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/gofood/penjualan", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs1 />
            </button>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[44px] min-w-px relative" data-name="3">
          <div className="flex flex-row items-center justify-center size-full">
            <button onClick={() => navigate("/finance/gofood/transaksi", { replace: true })} className="content-stretch cursor-pointer flex items-center justify-center px-[8px] py-[12px] relative size-full">
              <Tabs2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BalanceGoFood() {
  const [showTray, setShowTray] = useState(false);
  const [showKompensasi, setShowKompensasi] = useState(false);
  const [showPemotongan, setShowPemotongan] = useState(false);
  return (
    <div className="bg-[#f2f2f4] relative rounded-[16px] size-full overflow-hidden" data-name="Balance/GoFood">
      <div className="no-scrollbar absolute top-0 left-0 right-0 bottom-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        <TopNavbarTab />
        <Top onOpenTray={() => setShowTray(true)} onOpenKompensasi={() => setShowKompensasi(true)} onOpenPemotongan={() => setShowPemotongan(true)} />
      </div>
      {showTray && <PilihSaldoTray selected="gofood" onClose={() => setShowTray(false)} />}
      {showKompensasi && <RiwayatKompensasiTray type="gofood" onClose={() => setShowKompensasi(false)} />}
      {showPemotongan && <RiwayatPemotonganTray type="gofood" onClose={() => setShowPemotongan(false)} />}
    </div>
  );
}