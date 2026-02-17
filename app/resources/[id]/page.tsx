import { resources } from "@/data/resources";
import Link from "next/link";

export default async function ResourceDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === Number(id));

  if (!resource) return <div className="p-10">Resource not found.</div>;

  return (
    <div className="bg-[#f5f5f9] min-h-screen pb-20">

      {/* ======================================
          HEADER IMAGE WITH TITLE OVERLAY
      ======================================= */}
      <div
        className="w-full h-[260px] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.35)]"></div>

        <h1
          className="
            relative z-10 
            font-serif 
            text-[38px] 
            leading-tight 
            text-white 
            max-w-[900px] 
            px-10
          "
        >
          {resource.title}
        </h1>
      </div>

      {/* ======================================
          MAIN CONTENT CARD
      ======================================= */}
      <div className="max-w-[1200px] mx-auto bg-white mt-[-40px] shadow-lg p-12 rounded-none">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="col-span-2 text-[15px] leading-[1.7] text-[#333]">

            {/* TYPE */}
{/* TYPE + PROVIDER row with small spacing */}
<div className="flex items-start gap-6 mb-6">

  {/* TYPE */}
  <div>
    <p className="uppercase text-[11px] tracking-widest text-[#777]">
      TYPE
    </p>
    <p className="text-[16px] font-semibold text-[#1a1b3a]">
      {resource.modeLabel}
    </p>
  </div>

  {/* Divider */}
  <div className="h-10 w-px bg-[#d2d2d2]"></div>

  {/* PROVIDER */}
  <div>
    <p className="uppercase text-[11px] tracking-widest text-[#777]">
      PROVIDER
    </p>
    <p className="text-[16px] font-semibold text-[#1a1b3a]">
      {resource.provider}
    </p>
  </div>
 {/* <div className="h-10 w-px bg-[#d2d2d2]"></div> */}
   {/* CONTACT */}
  {/* <div>
    <p className="uppercase text-[11px] tracking-widest text-[#777]">
      CONTACT
    </p>
    <p className="text-[16px] font-semibold text-[#1a1b3a]">
      {resource.contact}
    </p>
  </div> */}
</div>


            {/* DESCRIPTION */}
            <p className="text-[15px] text-[#444] mt-4 whitespace-pre-line">
              {resource.description}
            </p>

            {/* TARGETS */}
            <div className="mt-8">
              <p className="uppercase text-[11px] tracking-widest text-[#777]">
                TARGETS
              </p>

              <div className="mt-3 flex flex-col gap-3">
                {resource.audiences.map((aud, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="oqiIcon">
                          <stop offset="0%" stopColor="#2E4AA7" />
                          <stop offset="50%" stopColor="#7AC043" />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="url(#oqiIcon)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="12" cy="12" r="5" fill="url(#oqiIcon)" />
                    </svg>

                    <span className="font-semibold text-[14px]">{aud}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* WEBSITE BUTTON (smaller + bottom right) */}
<div className="mt-auto flex justify-end">
  <Link
    href={resource.url}
    target="_blank"
    className="
      bg-gradient-to-r 
      from-[#2E4AA7] 
      to-[#7AC043]
      text-white 
      font-semibold 
      px-6 py-2      /* smaller */
      rounded-full 
      shadow-md 
      hover:opacity-80 
      transition 
      text-center
      text-[14px]    /* smaller font */
      w-fit
    "
  >
    Go to website →
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}
