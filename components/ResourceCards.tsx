import Link from "next/link";
import type { Resource } from "@/data/resources";
interface Props {
  resource: Resource;
}
export default function ResourceCard({ resource }: Props) {

  return (
<Link
      href={`/resources/${resource.id}`}
      onClick={() => {
        if (typeof window !== "undefined" && (window as any)._paq) {
          (window as any)._paq.push([
            "trackEvent",
            "Resource",
            "Card Click",
            `${resource.title} (${resource.id})`,
          ]);
        }
      }}
  className="
    group
    block
    bg-[#f5f5f5]
    border border-[#e3e3ee]
    rounded-none
    px-6 py-6       /* smaller padding */
    mb-6            /* smaller margin between cards */
    shadow-sm
    transition 
    cursor-pointer
    hover:bg-[#e8e8f0]
    hover:shadow-md
  "
>



      <div className="flex gap-10">

        {/* LEFT */}
        <div className="flex-1">

          {/* TYPE LABEL */}
{/* TYPE LABELS */}
<div className="flex flex-wrap gap-2 mb-3">
  {(resource.modeLabel ?? []).map((label: string, i: number) => (
    <span
      key={i}
      className="uppercase text-[10px] tracking-[0.22em] text-[#666] border border-[#d2d2df] px-2 py-[2px]"
    >
      {label}
    </span>
  ))}
</div>

          {/* TITLE */}
          <h2 className="font-serif text-[22px] leading-snug text-[#1a1b3a] group-hover:text-[#2E4AA7] transition-colors">

            {resource.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[14px] leading-relaxed text-[#444] mb-6 max-w-[520px]">
            {resource.description}
          </p>

          {/* AUDIENCES */}
          <div className="flex flex-wrap items-center gap-6 text-[13px] text-[#1a1b3a]">
            {resource.audiences.map((aud: string, i: number) => (
              <div key={i} className="flex items-center gap-2">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="18"
  viewBox="0 0 16 16"
>
  <defs>
    <linearGradient id="oqiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#2E4AA7" />   {/* Blue */}
      {/* <stop offset="25%" stopColor="#2AAEA1" />   */}
      <stop offset="50%" stopColor="#7AC043" /> 
      {/* <stop offset="75%" stopColor="#F1AF3C" />  
      <stop offset="100%" stopColor="#C763A3" /> */}
    </linearGradient>
  </defs>

  <path fill="url(#oqiGradient)" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path fill="url(#oqiGradient)" d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
  <path fill="url(#oqiGradient)" d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>
  <path fill="url(#oqiGradient)" d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>

                {aud}
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <div className="w-[180px] border-l border-dashed border-[#d2d2df] pl-6 flex flex-col gap-6">

          <div>
            <p className="uppercase text-[10px] tracking-[0.25em] text-[#777] mb-1">
              Providers
            </p>
            <p className="text-[14px] font-semibold">{resource.provider}</p>
          </div>

          <div>
            <p className="uppercase text-[10px] tracking-[0.25em] text-[#777] mb-1">
              Certificate
            </p>
            <p className="text-[14px] font-semibold leading-snug">{resource.certificate}</p>
          </div>
{/* 
          <div className="mt-auto">
            <span className="text-[12px] font-semibold uppercase tracking-wide underline">
              View Details
            </span>
          </div> */}

        </div>

      </div>
    </Link>
  );
}
