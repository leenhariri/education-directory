"use client";

import { ResourceCategory } from "@/data/resources";
import { useState } from "react";

const FILTERS: ResourceCategory[] = [
//   "PROGRAMS",
  "COURSES",
  "GAMES",
  "WEBINARS"
//   "TRAININGS",
//   "ONLINE ACTIVITIES",

];

interface Props {
  active: ResourceCategory[];
formats: string[];



  languages: string[];
  targets: string[];
  prerequisites: string[];

  selectedLanguages: string[];
  selectedTargets: string[];
  selectedPrerequisites: string[];
selectedFormats: string[];
  onToggleCategory: (category: ResourceCategory) => void;

  onToggleLanguage: (val: string) => void;
  onToggleTarget: (val: string) => void;
  onTogglePrerequisite: (val: string) => void;
onToggleFormat: (v: string) => void;
  onReset: () => void;
}

export default function FiltersSidebar({
  active,
  languages,
  targets,
  prerequisites,
  formats,
  selectedLanguages,
  selectedTargets,
  selectedPrerequisites,
  selectedFormats,
  onToggleCategory,
  onToggleLanguage,
  onToggleTarget,
  onTogglePrerequisite,
  onToggleFormat,
  onReset,
}: Props) {
console.log("props:", {
  onToggleLanguage,
  onToggleTarget,
  onTogglePrerequisite,
  onToggleFormat,
});

const [open, setOpen] = useState({
  lang: false,
  target: false,
  pre: false,
  format: false,   // ← NEW
});


  return (
    <aside className="w-[200px] shrink-0 select-none">

      {/* Header */}
      <div className="pt-3 mb-8">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="#333" fill="none">
            <path d="M4 4h16M6 10h12M10 16h4" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 className="uppercase text-[16px] tracking-wide font-semibold text-[#333]">
            Filters
          </h2>
        </div>
        <div className="h-[1px] bg-[#d0d0d0] mt-3" />
      </div>

      {/* MAIN CATEGORY BUTTONS */}
      {/* uncomment later */}
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => onToggleCategory(filter)}
  className={`
    w-full py-3 mb-3 text-[13px] uppercase transition rounded-none border
      
    ${
      active.includes(filter)
        ? "bg-[#2E4AA7] border-[#2E4AA7] text-white"
        : "bg-white border-[#2E4AA7] text-[#2E4AA7] hover:bg-[#2E4AA7] hover:text-white"
    }
  `}
        >
          {filter}
        </button>
      ))}

{/* ------------ FORMAT DROPDOWN ------------ */}


      {/* ------------ LANGUAGE DROPDOWN ------------ */}
<button
  onClick={() => setOpen((p) => ({ ...p, lang: !p.lang }))}
  className="
    w-full 
    text-left 
    text-[13px]       /* smaller font */
    mt-4 mb-1 
    text-[#666]       /* faded text */
    flex justify-between 
    items-center
    hover:text-[#333] 
    transition
  "
>
  Filter by Language
  <span className="text-[12px] opacity-70">{open.lang ? "▲" : "▼"}</span>
</button>

<div className="border-b border-dashed border-[#bbb] mb-3 opacity-60" />


      {open.lang && (
        <div className="mb-4 pl-2">
          {languages.map((lang) => (
<div
  key={lang}
  className={`
    cursor-pointer 
    py-1 
    text-[12px]        /* smaller */
    ${selectedLanguages.includes(lang)
      ? "text-[#2E4AA7] font-semibold"
      : "text-[#777]"}  /* faded default */
  `}
  onClick={() => onToggleLanguage(lang)}
>
  {lang}
</div>

          ))}
        </div>
      )}
{/* ------------ FORMAT DROPDOWN ------------ */}
<button
  onClick={() => setOpen((p) => ({ ...p, format: !p.format }))}
  className="
    w-full 
    text-left 
    text-[13px] 
    mb-1 mt-4 
    text-[#666] 
    flex justify-between items-center
    hover:text-[#333]
    transition
  "
>
  Filter by Format
  <span className="text-[12px] opacity-70">{open.format ? "▲" : "▼"}</span>
</button>

<div className="border-b border-dashed border-[#bbb] opacity-60 mb-3" />

{open.format && (
  <div className="mb-2 pl-2">
    {formats.map((f) => (
      <div
        key={f}
        onClick={() => onToggleFormat(f)}
        className={`
          cursor-pointer 
          py-1 
          text-[12px]
          ${selectedFormats.includes(f)
            ? "text-[#2E4AA7] font-semibold"
            : "text-[#777]"}
        `}
      >
        {f}
      </div>
    ))}
  </div>
)}


      {/* ------------ TARGET DROPDOWN ------------ */}
      {/* ------------ LEVEL DROPDOWN ------------ */}
<button
  onClick={() => setOpen((p) => ({ ...p, target: !p.target }))}
  className="
    w-full 
    text-left 
    text-[13px] 
    mb-1 mt-4 
    text-[#666] 
    flex justify-between items-center
    hover:text-[#333]
    transition
  "
>
  Filter by Level
  <span className="text-[12px] opacity-70">{open.target ? "▲" : "▼"}</span>
</button>

<div className="border-b border-dashed border-[#bbb] opacity-60 mb-3" />

{open.target && (
  <div className="mb-2 pl-2">
    {targets.map((target) => (
      <div
        key={target}
        onClick={() => onToggleTarget(target)}
        className={`
          cursor-pointer 
          py-1 
          text-[12px]
          ${selectedTargets.includes(target)
            ? "text-[#2E4AA7] font-semibold"
            : "text-[#777]"}
        `}
      >
        {target}
      </div>
    ))}
  </div>
)}



     
     {/* ------------ PREREQUISITES DROPDOWN ------------ */}
<button
  onClick={() => setOpen((p) => ({ ...p, pre: !p.pre }))}
  className="
    w-full 
    text-left 
    text-[13px] 
    mb-1 mt-4 
    text-[#666] 
    flex justify-between items-center
    hover:text-[#333]
    transition
  "
>
  Filter by Prerequisites
  <span className="text-[12px] opacity-70">{open.pre ? "▲" : "▼"}</span>
</button>

<div className="border-b border-dashed border-[#bbb] opacity-60 mb-3" />

{open.pre && (
  <div className="mb-2 pl-2">
    {prerequisites.map((pre) => (
      <div
        key={pre}
        onClick={() => onTogglePrerequisite(pre)}
        className={`
          cursor-pointer 
          py-1 
          text-[12px]
          ${selectedPrerequisites.includes(pre)
            ? "text-[#2E4AA7] font-semibold"
            : "text-[#777]"}
        `}
      >
        {pre}
      </div>
    ))}
  </div>
)}


      {/* RESET BUTTON */}
<button
  onClick={onReset}
  className="
    mx-auto
    w-[120px]
    py-1.5
    mt-4

    rounded-full
    text-[13px]
    font-medium
    flex items-center justify-center gap-1

    border-2 border-[#3949AB]    /* bold navy outline */
    text-[#0A0F47]               /* navy text */
    bg-white

    hover:bg-[#3949AB]           /* your blue color */
    hover:border-[#3949AB]       /* match outline on hover */
    hover:text-white

    transition-all duration-200
  "
>
  Reset ↻
</button>






    </aside>
  );
}
