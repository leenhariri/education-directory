"use client";
import HeaderHero from "@/components/HeaderHero";
import { useState, useMemo } from "react";
import FiltersSidebar from "@/components/FiltersSidebar";
import ResourceCard from "@/components/ResourceCards";
import { resources, ResourceCategory } from "@/data/resources";

export default function HomePage() {
  // Main (multi-select) category filters
  const [activeCategories, setActiveCategories] = useState<ResourceCategory[]>([]);

  // Subfilters (multi-select)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTargets, setSelectedTargets] = useState<string[]>([]);
  const [selectedPrerequisites, setSelectedPrerequisites] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);

  // Generic toggle helper
  function toggleInArray(
    value: string,
    setter: (fn: (prev: string[]) => string[]) => void
  ) {
    setter((prev) =>
      prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]
    );
  }

  function toggleCategory(category: ResourceCategory) {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }

function resetFilters() {
  setActiveCategories([]);
  setSelectedLanguages([]);
  setSelectedTargets([]);
  setSelectedPrerequisites([]);
  setSelectedFormats([]);   // ← NEW
}


const filteredResources = useMemo(() => {
  let list = resources;

  // CATEGORY
if (activeCategories.length > 0) {
  list = list.filter((r) =>
    activeCategories.every((cat) => r.category.includes(cat))
  );
}


  // LANGUAGE
  if (selectedLanguages.length > 0) {
    list = list.filter((r) => 
      r.language.some((lang)=>selectedLanguages.includes(lang)));
  }

  // LEVEL / TARGET
  if (selectedTargets.length > 0) {
    list = list.filter((r) =>
      r.target.some((target) => selectedTargets.includes(target))
    );
  }

  // PREREQUISITES
  if (selectedPrerequisites.length > 0) {
    list = list.filter((r) =>
      r.prerequisite.some((pre) => selectedPrerequisites.includes(pre))
    );
  }

  // FORMAT
  if (selectedFormats.length > 0) {
    list = list.filter((r) =>
      r.format.some((f) => selectedFormats.includes(f))
    );
  }

  return list;
}, [
  activeCategories,
  selectedLanguages,
  selectedTargets,
  selectedPrerequisites,
  selectedFormats,   // ★ ADD THIS
]);


  return (
    <div className="w-full bg-white">

      {/* 🔥 ADD THE HEADER HERO HERE */}
      <HeaderHero />

      {/* 🔽 Content now BELOW hero */}
      <div className="w-full min-h-screen flex justify-center">

        {/* Push content down by height of hero (400px + padding) */}

        <div className="flex w-full max-w-[1100px] mx-auto pt-10 pb-20 gap-10 px-6">

          {/* SIDEBAR */}
<FiltersSidebar
  active={activeCategories}
  onToggleCategory={toggleCategory}

  languages={["English", "French", "Spanish", "Python", "German", "Portuguese", "Deutch", "Bahasa Indonesia"]}
  targets={["Beginner", "Intermediate", "Advanced"]}
  prerequisites={["None", "Basic trigonometry", "Basic knowledge of quantum physics"]}

  formats={["Videos", "Educational Toolkits"]}  

  selectedLanguages={selectedLanguages}
  selectedTargets={selectedTargets}
  selectedPrerequisites={selectedPrerequisites}
  selectedFormats={selectedFormats}                                            

  onToggleLanguage={(l) => toggleInArray(l, setSelectedLanguages)}
  onToggleTarget={(t) => toggleInArray(t, setSelectedTargets)}
  onTogglePrerequisite={(pre) => toggleInArray(pre, setSelectedPrerequisites)}
  onToggleFormat={(f) => toggleInArray(f, setSelectedFormats)}                 

  onReset={resetFilters}
/>


          {/* MAIN CONTENT */}
          <section className="flex-1">
            <div className="w-full 
            
            max-w-[800px] mx-auto">

              {/* Item count */}
              <div className="flex justify-end mb-8">
                <p className="text-[24px] font-serif text-[#1a1b3a]">
                  {filteredResources.length} items
                </p>
              </div>

              {/* Cards */}
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
