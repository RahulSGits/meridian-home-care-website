/* All marketing content lives here so pages stay layout-only. */

export type Service = {
  slug: string;
  name: string;
  from: number; // 0 = quoted
  duration: string;
  copy: string;
  items: string[];
  /* Detail-page content */
  intro: string;
  forWho: string;
  checklist: { room: string; tasks: string[] }[];
  notIncluded: string[];
  photo: string;
};

export const services: Service[] = [
  {
    slug: "house-cleaning",
    name: "House cleaning",
    from: 149,
    duration: "2–3h",
    copy:
      "The weekly or biweekly standard: every room reset, floors done wet, all touch surfaces disinfected, beds made, bins emptied and relined.",
    items: ["Kitchen", "Bathrooms", "Floors", "Dusting", "Beds"],
    intro:
      "The visit that keeps a home level. Two cleaners, a written room-by-room checklist, and the same lead every time so nothing has to be explained twice.",
    forWho:
      "Households already in reasonable order who want it held there — weekly, biweekly or monthly.",
    checklist: [
      {
        room: "Kitchen",
        tasks: [
          "Counters, backsplash and sink descaled",
          "Appliance exteriors and fronts degreased",
          "Cooktop and hood face cleaned",
          "Cabinet fronts wiped, handles disinfected",
          "Floor swept and wet-cleaned to the edges",
          "Bin emptied, washed and relined",
        ],
      },
      {
        room: "Bathrooms",
        tasks: [
          "Shower, tub and screen descaled",
          "Toilet cleaned inside, outside and behind",
          "Basin, taps and mirror polished streak-free",
          "Tile and grout wiped, mould spot-treated",
          "Towels straightened, paper restocked",
          "Floor wet-cleaned and drain checked",
        ],
      },
      {
        room: "Bedrooms & living",
        tasks: [
          "Beds made or linens changed if left out",
          "All flat surfaces dusted, top down",
          "Mirrors and glass polished",
          "Upholstery vacuumed, cushions reset",
          "Under accessible furniture vacuumed",
          "Skirting boards spot-cleaned",
        ],
      },
      {
        room: "Whole home",
        tasks: [
          "Light switches, handles and rails disinfected",
          "Hard floors vacuumed then wet-cleaned",
          "Carpets vacuumed in overlapping passes",
          "Interior glass on doors cleaned",
          "Bins emptied and relined throughout",
          "Final walk-through against the checklist",
        ],
      },
    ],
    notIncluded: [
      "Interior of oven, fridge or cabinets — add these as extras",
      "Exterior windows above the second floor",
      "Biohazard, pest or mould remediation",
      "Moving furniture heavier than two people can lift safely",
    ],
    photo: "Living room reset after a standard house clean",
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning",
    from: 329,
    duration: "5–7h",
    copy:
      "A full reset for a home that has not had one in a while — baseboards, door frames, vents, grout, behind and under the movable furniture.",
    items: ["Baseboards", "Grout", "Vents", "Under furniture", "Descaling"],
    intro:
      "Everything in a standard clean, plus the surfaces a weekly visit never reaches. Most homes need one once a year; most first-time clients start here.",
    forWho:
      "Homes that have gone six months or more without a thorough clean, spring resets, and first visits before a recurring plan starts.",
    checklist: [
      {
        room: "Detail work",
        tasks: [
          "Baseboards, door frames and door tops washed",
          "Light fixtures and ceiling fans wiped",
          "Air vent covers removed where possible and cleaned",
          "Switch plates and outlet covers degreased",
          "Radiators and behind them vacuumed",
          "Cobweb removal in every corner and ceiling line",
        ],
      },
      {
        room: "Kitchen deep",
        tasks: [
          "Cooktop, hood filter and splash degreased",
          "Cabinet fronts degreased top to bottom",
          "Behind and beneath movable appliances",
          "Sink descaled and drain deodorised",
          "Bin housing washed inside and out",
          "Small appliance exteriors detailed",
        ],
      },
      {
        room: "Bathroom deep",
        tasks: [
          "Grout scrubbed line by line",
          "Limescale removed from glass, taps and heads",
          "Extractor fan cover cleaned",
          "Behind and beneath the toilet base",
          "Cabinet and vanity interiors wiped",
          "Silicone seals treated for mould",
        ],
      },
      {
        room: "Floors & furniture",
        tasks: [
          "Movable furniture shifted and cleaned beneath",
          "Hard floor edges and corners hand-detailed",
          "Carpets vacuumed in two directions",
          "Stair treads and risers hand-cleaned",
          "Upholstery vacuumed including under cushions",
          "Floor transitions and thresholds detailed",
        ],
      },
    ],
    notIncluded: [
      "Carpet hot-water extraction — book Carpet & upholstery alongside",
      "Post-construction dust — that needs the HEPA three-pass service",
      "Wall washing beyond spot-cleaning",
      "Loft, crawlspace or garage unless scoped in advance",
    ],
    photo: "Baseboard and grout detail during a deep clean",
  },
  {
    slug: "move-in-clean",
    name: "Move-in clean",
    from: 279,
    duration: "4–6h",
    copy:
      "Every surface a previous tenant touched, cleaned before your boxes arrive. Cabinets, closets, appliance interiors, light fixtures and window tracks.",
    items: ["Cabinets", "Appliances", "Closets", "Window tracks"],
    intro:
      "An empty property cleaned to the standard you would want before unpacking a single box — inside every cabinet, closet and appliance.",
    forWho:
      "Anyone taking possession of a home, whether or not the previous occupant had it cleaned.",
    checklist: [
      {
        room: "Kitchen",
        tasks: [
          "Inside every cabinet and drawer, then fronts",
          "Fridge interior including seals and shelving",
          "Oven interior, racks, door glass and grill",
          "Dishwasher filter and seal",
          "Sink, taps and waste disposal deodorised",
          "Splashback and hood degreased",
        ],
      },
      {
        room: "Bathrooms",
        tasks: [
          "Full descale of all fittings and glass",
          "Vanity and medicine cabinet interiors",
          "Toilet sanitised including the cistern exterior",
          "Extractor fan and cover cleaned",
          "Grout scrubbed and seals treated",
          "Mirrors polished streak-free",
        ],
      },
      {
        room: "Throughout",
        tasks: [
          "Closet and wardrobe interiors including rails",
          "Window tracks vacuumed then wet-cleaned",
          "Interior glass and sills cleaned",
          "Light fixtures and fan blades wiped",
          "Switch plates, handles and rails disinfected",
          "Skirting boards and door frames washed",
        ],
      },
      {
        room: "Floors",
        tasks: [
          "Hard floors vacuumed then wet-cleaned twice",
          "Carpets vacuumed in overlapping passes",
          "Stairs hand-detailed",
          "Corners and edges hand-cleaned",
          "Thresholds and transitions detailed",
          "Balcony or patio swept if present",
        ],
      },
    ],
    notIncluded: [
      "Paint touch-ups or minor repairs",
      "Removal of the previous occupant's belongings",
      "Post-construction fine dust — book that service instead",
      "Exterior windows above the second floor",
    ],
    photo: "Empty apartment cleaned before move-in",
  },
  {
    slug: "move-out-clean",
    name: "Move-out clean",
    from: 289,
    duration: "4–6h",
    copy:
      "Built against the standard landlords actually inspect. We photograph every room on completion so your deposit conversation is short.",
    items: ["Deposit-grade", "Photo report", "Appliances", "Walls spot-cleaned"],
    intro:
      "Scoped from real Chicago inspection checklists, finished with a timestamped photo set of every room. If your landlord disputes the clean, you have the evidence.",
    forWho:
      "Tenants at the end of a lease, sellers before a closing walk-through, and landlords turning a unit between tenancies.",
    checklist: [
      {
        room: "Deposit-critical",
        tasks: [
          "Oven interior including racks, glass and grill",
          "Fridge interior, seals and beneath the unit",
          "Extractor hood filter degreased",
          "Limescale removed from every fitting",
          "Window tracks and interior glass",
          "Wall marks spot-cleaned where paint allows",
        ],
      },
      {
        room: "Kitchen & bathrooms",
        tasks: [
          "All cabinet and drawer interiors",
          "Sinks, taps and drains descaled and deodorised",
          "Tile, grout and seals scrubbed",
          "Toilet sanitised inside and behind",
          "Appliance exteriors and sides",
          "Bin housing washed",
        ],
      },
      {
        room: "Whole property",
        tasks: [
          "Closet and storage interiors emptied of dust",
          "Skirting boards, frames and door tops washed",
          "Light fixtures and fan blades cleaned",
          "Switch plates and handles disinfected",
          "Cobwebs removed throughout",
          "Balcony, patio or entry swept",
        ],
      },
      {
        room: "Handover",
        tasks: [
          "Floors wet-cleaned last, working to the exit",
          "Timestamped photo set of every room",
          "Checklist signed by the lead cleaner",
          "Report emailed within two hours",
          "Keys returned as instructed",
          "Free return visit if the landlord flags anything in 48h",
        ],
      },
    ],
    notIncluded: [
      "Rubbish removal or furniture disposal — quoted separately",
      "Repainting or filling wall holes",
      "Carpet hot-water extraction — add Carpet & upholstery",
      "Exterior window cleaning above the second floor",
    ],
    photo: "Photo-documented handover after a move-out clean",
  },
  {
    slug: "post-construction",
    name: "Post-construction",
    from: 449,
    duration: "6–9h",
    copy:
      "Fine dust removal in three passes with HEPA extraction — the only way it stops reappearing a week later. Paint flecks and adhesive residue included.",
    items: ["HEPA", "Three passes", "Residue removal", "Air vents"],
    intro:
      "Construction dust is not ordinary dust — it is silica and gypsum fine enough to stay airborne for days. One pass never holds. We do three, with HEPA extraction between each.",
    forWho:
      "Renovations, extensions, new builds and any job where trades have just left the property.",
    checklist: [
      {
        room: "Pass one — bulk",
        tasks: [
          "Debris, offcuts and packaging removed to your bins",
          "Protective sheeting lifted and bagged",
          "Ceilings, walls and ledges HEPA-vacuumed top down",
          "Air vents and returns vacuumed and wiped",
          "Filters checked and flagged for replacement",
          "Windows opened, air exchange started",
        ],
      },
      {
        room: "Pass two — surfaces",
        tasks: [
          "Every horizontal surface HEPA-vacuumed again",
          "Paint flecks scraped from glass and hardware",
          "Adhesive and sticker residue removed",
          "Grout haze cleared from new tile",
          "Fixtures, fittings and hardware polished",
          "Cabinet and closet interiors cleaned",
        ],
      },
      {
        room: "Pass three — settle",
        tasks: [
          "Four-hour settle period, then a final HEPA pass",
          "Floors wet-cleaned twice with clean water each time",
          "Glass and mirrors polished last",
          "Skirting, frames and thresholds detailed",
          "Site walked with your contractor or PM",
          "Dust-level check on a white cloth test",
        ],
      },
      {
        room: "Documentation",
        tasks: [
          "Before and after photo set per room",
          "Filter replacement recommendations",
          "Snag list of anything trades need to return for",
          "Signed completion sheet",
          "Free return visit within 7 days if dust reappears",
          "Waste disposal log if requested",
        ],
      },
    ],
    notIncluded: [
      "Skip hire or off-site waste removal",
      "Any work requiring scaffolding or a lift",
      "Asbestos, lead or hazardous material handling",
      "Snagging or finishing work itself",
    ],
    photo: "HEPA extraction during a post-construction clean",
  },
  {
    slug: "carpet-upholstery",
    name: "Carpet & upholstery",
    from: 189,
    duration: "2–4h",
    copy:
      "Hot-water extraction with a low-moisture wand, so rugs and sofas are walk-on dry in two hours rather than overnight.",
    items: ["Extraction", "Stain treatment", "Deodorising", "Fast dry"],
    intro:
      "IICRC-standard hot-water extraction, run at low moisture so fibres are damp rather than soaked. Walk-on dry in about two hours, fully dry the same day.",
    forWho:
      "Households with pets or children, end-of-tenancy carpets, and anyone who has tried a rental machine and been disappointed.",
    checklist: [
      {
        room: "Preparation",
        tasks: [
          "Fibre and colourfastness test in a hidden area",
          "Movable furniture lifted and blocked",
          "Dry vacuum in two directions to lift grit",
          "Stains identified and matched to a treatment",
          "Pre-spray applied and given full dwell time",
          "Edges and corners agitated by hand",
        ],
      },
      {
        room: "Extraction",
        tasks: [
          "Hot-water extraction in overlapping passes",
          "Low-moisture wand to limit saturation",
          "Extra dry passes on every section",
          "Traffic lanes given a second treatment",
          "Rinse balanced to leave no sticky residue",
          "Deodoriser applied on request",
        ],
      },
      {
        room: "Upholstery",
        tasks: [
          "Sofas, chairs and headboards treated by fabric code",
          "Cushions cleaned on both faces",
          "Arms and headrests given extra attention",
          "Under cushions vacuumed and cleaned",
          "Fabric protector applied if booked",
          "Leather cleaned and conditioned separately",
        ],
      },
      {
        room: "Finish",
        tasks: [
          "Pile groomed in one direction",
          "Air movers run on request",
          "Furniture blocks left until dry",
          "Walk-on dry in roughly two hours",
          "Aftercare notes left with you",
          "Spot re-treatment free within 14 days",
        ],
      },
    ],
    notIncluded: [
      "Persian, silk or antique rugs — these go to a specialist partner",
      "Structural water damage or flood restoration",
      "Guaranteed removal of dye, bleach or burn damage",
      "Carpet repair, re-stretching or re-fitting",
    ],
    photo: "Hot-water extraction on a living room carpet",
  },
  {
    slug: "window-cleaning",
    name: "Window cleaning",
    from: 129,
    duration: "2–3h",
    copy:
      "Interior and exterior on ground and second floor, frames and sills wiped, tracks vacuumed, screens rinsed.",
    items: ["Interior", "Exterior", "Frames", "Screens"],
    intro:
      "Purified-water poles outside, squeegee and scrim inside. No detergent film, so glass stays clear for weeks longer than a spray-and-wipe.",
    forWho:
      "Houses and low-rise apartments up to the second floor, and any interior glass at any height.",
    checklist: [
      {
        room: "Glass",
        tasks: [
          "Interior glass squeegeed and detailed",
          "Exterior glass on ground and second floor",
          "Purified water — no detergent residue",
          "Glass doors and panels included",
          "Interior mirrors polished on request",
          "Skylights where safely reachable from inside",
        ],
      },
      {
        room: "Frames & tracks",
        tasks: [
          "Frames washed inside and out",
          "Sills wiped and dried",
          "Tracks vacuumed then wet-cleaned",
          "Hinges and locks wiped",
          "Weather seals checked and cleaned",
          "Drainage holes cleared",
        ],
      },
      {
        room: "Screens",
        tasks: [
          "Screens removed where designed to be",
          "Rinsed and soft-brushed both sides",
          "Frames wiped down",
          "Dried before refitting",
          "Damage flagged with a photo",
          "Refitted and checked for fit",
        ],
      },
      {
        room: "Finish",
        tasks: [
          "Interior floors protected throughout",
          "Every pane checked in raking light",
          "Touch-ups before the team leaves",
          "Any glass defects photographed and reported",
          "Free re-clean if rain spots within 48 hours",
          "Quarterly plans available at a lower rate",
        ],
      },
    ],
    notIncluded: [
      "Anything above the second floor — that needs a rope or lift crew",
      "Hard-water mineral etching removal (quoted separately)",
      "Frame painting or seal replacement",
      "Storm window removal and storage",
    ],
    photo: "Windows and city light after cleaning",
  },
  {
    slug: "airbnb-turnover",
    name: "Airbnb turnover",
    from: 119,
    duration: "1.5–2h",
    copy:
      "Hotel-grade turnover on a two-hour window with linen swap, restock, and a damage-check photo set filed to your host inbox.",
    items: ["Linen swap", "Restock", "Photo check", "2h window"],
    intro:
      "Built for the gap between checkout and check-in. Fixed two-hour window, linen swapped, consumables restocked, and a damage-check photo set filed before the next guest books in.",
    forWho:
      "Short-let hosts and property managers running one unit or fifty across Chicago.",
    checklist: [
      {
        room: "Reset",
        tasks: [
          "Full linen and towel swap, laundry taken away",
          "Beds made to a hotel standard",
          "Kitchen reset including dishwasher unload",
          "Bathrooms sanitised and restocked",
          "Floors vacuumed and wet-cleaned",
          "Rubbish and recycling removed",
        ],
      },
      {
        room: "Restock",
        tasks: [
          "Toilet paper, soap and shampoo topped up",
          "Coffee, tea and welcome items replaced",
          "Cleaning supplies for guests replenished",
          "Consumables logged against your par levels",
          "Low-stock alert sent to your inbox",
          "Guest book and house rules straightened",
        ],
      },
      {
        room: "Damage check",
        tasks: [
          "Photo set of every room on completion",
          "Damage or missing items flagged same-day",
          "Appliance function spot-check",
          "Smoke and CO alarm indicator check",
          "Lost property bagged, logged and stored",
          "Maintenance issues escalated with photos",
        ],
      },
      {
        room: "Operations",
        tasks: [
          "Two-hour window guaranteed",
          "Calendar sync from your PMS or iCal",
          "Keyed, coded or lockbox access",
          "Same cleaner assigned per property",
          "Emergency same-day cover available",
          "Monthly consolidated invoice",
        ],
      },
    ],
    notIncluded: [
      "Guest communication or check-in handling",
      "Maintenance and repairs (we flag, you approve, we can arrange)",
      "Deep cleans — schedule these quarterly alongside",
      "Restocking cost of consumables themselves",
    ],
    photo: "Short-let apartment reset between guests",
  },
  {
    slug: "office-cleaning",
    name: "Office cleaning",
    from: 199,
    duration: "2–4h",
    copy:
      "After-hours cleaning for studios and small offices — desks, kitchens, glass, washrooms and waste, on a keyed access plan.",
    items: ["After hours", "Washrooms", "Glass", "Waste"],
    intro:
      "Evening and early-morning cleaning for studios, agencies and small offices. Keyed access, a named crew, and a shared log your office manager can actually read.",
    forWho:
      "Workplaces between 1,000 and 15,000 sq ft wanting a fixed nightly or weekly programme.",
    checklist: [
      {
        room: "Workspace",
        tasks: [
          "Desks cleared-surface wiped and disinfected",
          "Monitors, keyboards and phones sanitised",
          "Meeting rooms reset, whiteboards cleaned",
          "Glass partitions and doors polished",
          "Soft seating vacuumed",
          "Cables and floor boxes vacuumed around",
        ],
      },
      {
        room: "Kitchen & breakout",
        tasks: [
          "Counters, sinks and splashbacks degreased",
          "Fridge exterior wiped, interior weekly",
          "Coffee machine cleaned to manufacturer spec",
          "Dishwasher run and emptied",
          "Bins emptied, washed and relined",
          "Stock levels of supplies reported",
        ],
      },
      {
        room: "Washrooms",
        tasks: [
          "All fittings sanitised and descaled",
          "Mirrors and glass polished",
          "Consumables restocked",
          "Floors wet-cleaned with a dedicated mop system",
          "Colour-coded cloths to prevent cross-contamination",
          "Sanitary waste service coordinated",
        ],
      },
      {
        room: "Programme",
        tasks: [
          "Named account lead with a direct line",
          "Keyed or fob access with a logged key register",
          "Shared cleaning log updated each visit",
          "Monthly audit score against the scope",
          "Consumables ordering handled if wanted",
          "Out-of-hours emergency cover",
        ],
      },
    ],
    notIncluded: [
      "Window cleaning above the second floor",
      "Confidential waste shredding or disposal",
      "Server room or data floor access without escort",
      "Deep carpet extraction — scheduled separately",
    ],
    photo: "Studio office after an after-hours clean",
  },
  {
    slug: "commercial-contract",
    name: "Commercial contract",
    from: 0,
    duration: "Scoped",
    copy:
      "Multi-site programmes with a named account lead, monthly audit scoring and a shared cleaning log your facilities team can read.",
    items: ["Named lead", "Audit scoring", "Shared log", "SLA"],
    intro:
      "For estates rather than single sites. A scoped programme, a named account lead, audit scoring against a written specification, and an SLA with actual remedies in it.",
    forWho:
      "Facilities teams running multiple locations across Chicago and the North Shore.",
    checklist: [
      {
        room: "Scoping",
        tasks: [
          "Site-by-site survey and measured scope",
          "Written specification per area type",
          "Frequency matrix agreed with your team",
          "TUPE assessment where staff transfer",
          "Risk assessments and method statements",
          "Fixed pricing for the contract term",
        ],
      },
      {
        room: "Delivery",
        tasks: [
          "Named account lead and deputy",
          "Consistent crews per site",
          "Uniformed, badged and DBS-equivalent checked",
          "Colour-coded systems throughout",
          "Consumables management included",
          "Periodic works scheduled in advance",
        ],
      },
      {
        room: "Assurance",
        tasks: [
          "Monthly audit scored against the specification",
          "Shared cleaning log open to your team",
          "Quarterly service review meeting",
          "Incident and near-miss reporting",
          "KPI dashboard with trend reporting",
          "Remedy credits written into the SLA",
        ],
      },
      {
        room: "Compliance",
        tasks: [
          "COSHH data sheets on every site",
          "Insurance certificates issued annually",
          "Right-to-work and background checks on file",
          "OSHA-aligned training records",
          "Waste transfer documentation",
          "Sustainability reporting on request",
        ],
      },
    ],
    notIncluded: [
      "Specialist trades — glazing at height, pest, or waste haulage",
      "Grounds maintenance and landscaping",
      "Security or reception staffing",
      "Capital works and refurbishment cleaning (quoted per project)",
    ],
    photo: "Multi-site commercial cleaning programme",
  },
  {
    slug: "restaurant-hospitality",
    name: "Restaurant & hospitality",
    from: 0,
    duration: "Scoped",
    copy:
      "Front and back of house to health-inspection standard, with degreasing schedules for hoods, fryers and floor drains.",
    items: ["Degreasing", "Hoods", "Drains", "FOH + BOH"],
    intro:
      "Kitchens fail inspections on grease and drains, not on the dining room. We scope both, on a schedule that matches how hard the site actually runs.",
    forWho:
      "Restaurants, bars, cafés and hotel F&B operations across Chicago.",
    checklist: [
      {
        room: "Back of house",
        tasks: [
          "Cooking line degreased nightly",
          "Hood canopies, filters and plenums scheduled",
          "Fryer surrounds and splash zones",
          "Floor drains cleared and deodorised",
          "Walk-in and cold store floors and shelving",
          "Prep surfaces sanitised to food-contact standard",
        ],
      },
      {
        room: "Front of house",
        tasks: [
          "Dining floors, skirting and banquette bases",
          "Bar tops, wells, speed rails and glass",
          "Booth and seat upholstery",
          "Windows, entrances and brass polished",
          "Washrooms sanitised and restocked",
          "Waste and recycling stations",
        ],
      },
      {
        room: "Periodic",
        tasks: [
          "Deep hood and duct cleaning to NFPA 96 intervals",
          "Grease trap servicing coordinated",
          "Ceiling tile and vent cleaning",
          "Light diffuser cleaning",
          "Floor deep-scrub and re-seal",
          "Pre-inspection blitz on request",
        ],
      },
      {
        room: "Compliance",
        tasks: [
          "Documented cleaning schedules per area",
          "Sign-off sheets retained for inspection",
          "Food-safe chemical selection with data sheets",
          "Colour-coded cloth and mop systems",
          "Allergen cross-contamination controls",
          "Certificates issued after periodic works",
        ],
      },
    ],
    notIncluded: [
      "Grease trap pumping itself (we coordinate a licensed hauler)",
      "Kitchen equipment repair or servicing",
      "Pest control treatment",
      "Extraction fan mechanical work",
    ],
    photo: "Commercial kitchen line after degreasing",
  },
  {
    slug: "medical-dental",
    name: "Medical & dental",
    from: 0,
    duration: "Scoped",
    copy:
      "Clinical-grade protocols with documented dwell times, colour-coded cloth systems and sharps-aware waste handling.",
    items: ["Dwell times", "Colour-coded", "Documented", "Waste handling"],
    intro:
      "Clinical cleaning is a documented process, not a standard of effort. Every product has a stated contact time, every zone has its own colour, and every visit leaves a record.",
    forWho:
      "GP surgeries, dental practices, clinics, and allied health premises.",
    checklist: [
      {
        room: "Clinical areas",
        tasks: [
          "Surfaces cleaned then disinfected with logged dwell time",
          "Chairs, units and arms wiped to protocol",
          "Splash zones treated after every session",
          "Hand-hygiene stations cleaned and restocked",
          "Floors wet-cleaned with a dedicated system",
          "Curtains and screens scheduled for change",
        ],
      },
      {
        room: "Waste",
        tasks: [
          "Sharps containers checked, never handled internally",
          "Clinical waste segregated to your policy",
          "Bins replaced with correct-colour liners",
          "Waste routes cleaned after each collection",
          "Spill kits checked and restocked",
          "Documentation retained per visit",
        ],
      },
      {
        room: "Non-clinical",
        tasks: [
          "Reception, waiting and play areas sanitised",
          "Toys and touch surfaces treated daily",
          "Staff rooms and kitchens cleaned",
          "Washrooms sanitised and restocked",
          "Glass, doors and rails disinfected",
          "Offices and records areas cleaned to policy",
        ],
      },
      {
        room: "Assurance",
        tasks: [
          "Colour-coded cloth and mop system throughout",
          "Product data sheets and dwell times on site",
          "Cleaning schedule visible per room",
          "Signed record for every visit",
          "Staff trained in infection-control basics",
          "Audit support ahead of inspection",
        ],
      },
    ],
    notIncluded: [
      "Sharps disposal or clinical waste haulage",
      "Decontamination of instruments or sterilising equipment",
      "Terminal cleaning after notifiable infection without prior scoping",
      "Any task requiring clinical qualification",
    ],
    photo: "Clinic treatment room cleaned to protocol",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/* ── Pricing ─────────────────────────────────────────────────────────── */

export const frequencies: [string, number][] = [
  ["One-time", 1],
  ["Monthly", 0.94],
  ["Every 2 weeks", 0.87],
  ["Weekly", 0.8],
];

export const propertyRates: Record<string, number> = {
  Apartment: 0.085,
  House: 0.075,
  Office: 0.062,
  Villa: 0.098,
  "Move-out": 0.14,
  Airbnb: 0.11,
};

export const extrasList: [string, number][] = [
  ["Interior windows", 45],
  ["Inside fridge", 35],
  ["Inside oven", 40],
  ["Laundry & fold", 30],
  ["Cabinet interiors", 55],
  ["Balcony / patio", 25],
];

export const arrivalTimes = [
  "8:00–10:00",
  "10:00–12:00",
  "12:00–2:00",
  "2:00–4:00",
  "4:00–6:00",
];

export type Plan = {
  name: string;
  copy: string;
  features: string[];
  cta: string;
  popular: boolean;
  mult: number;
};

export const plans: Plan[] = [
  {
    name: "Essential",
    copy: "Weekly and biweekly upkeep for a home that is already in good order.",
    features: [
      "Full kitchen and bathrooms",
      "Floors wet-cleaned",
      "Dusting and surfaces",
      "Beds made, bins relined",
      "Same lead cleaner",
    ],
    cta: "Book Essential",
    popular: false,
    mult: 1,
  },
  {
    name: "Signature",
    copy:
      "Our most-booked plan. Everything in Essential plus the details that make a home feel new.",
    features: [
      "Everything in Essential",
      "Interior windows and sills",
      "Appliance exteriors and fronts",
      "Baseboards and door frames",
      "Two rotating deep-clean zones",
      "Priority same-day rebooking",
    ],
    cta: "Book Signature",
    popular: true,
    mult: 1.42,
  },
  {
    name: "Restorative",
    copy:
      "The full reset — for spring, for move-outs, or for a home that needs catching up on.",
    features: [
      "Everything in Signature",
      "Grout, vents and light fixtures",
      "Inside fridge, oven and cabinets",
      "Under and behind furniture",
      "Upholstery refresh",
      "Photo condition report",
    ],
    cta: "Book Restorative",
    popular: false,
    mult: 2.35,
  },
];

/* Comparison matrix used on the pricing page. */
export const planMatrix: { label: string; on: [boolean, boolean, boolean] }[] = [
  { label: "Kitchen and bathrooms in full", on: [true, true, true] },
  { label: "Floors vacuumed and wet-cleaned", on: [true, true, true] },
  { label: "Dusting, surfaces and mirrors", on: [true, true, true] },
  { label: "Beds made, bins emptied and relined", on: [true, true, true] },
  { label: "Same lead cleaner every visit", on: [true, true, true] },
  { label: "Interior windows and sills", on: [false, true, true] },
  { label: "Appliance exteriors and fronts", on: [false, true, true] },
  { label: "Baseboards and door frames", on: [false, true, true] },
  { label: "Two rotating deep-clean zones", on: [false, true, true] },
  { label: "Priority same-day rebooking", on: [false, true, true] },
  { label: "Grout, vents and light fixtures", on: [false, false, true] },
  { label: "Inside fridge, oven and cabinets", on: [false, false, true] },
  { label: "Under and behind furniture", on: [false, false, true] },
  { label: "Upholstery refresh", on: [false, false, true] },
  { label: "Photo condition report", on: [false, false, true] },
];

/* ── Editorial ───────────────────────────────────────────────────────── */

export const reasons: [string, string][] = [
  [
    "The same team, every time",
    "Recurring clients keep one lead cleaner. She learns which cupboard the good glasses live in, and you stop leaving notes.",
  ],
  [
    "Priced before you book",
    'The number on this page is the number on the invoice. No hourly overruns, no "supplies" line, no tipping expected.',
  ],
  [
    "Employed, not gigged",
    "W-2 staff, paid well above the Chicago average, insured under our policy — not contractors we met last week.",
  ],
  [
    "Vetted twice",
    "National criminal background check, reference calls, and a six-week supervised training programme before any solo visit.",
  ],
  [
    "Genuinely green",
    "Green Seal certified products as standard, and a fragrance-free protocol on request for allergy and infant households.",
  ],
  [
    "Re-cleaned free",
    "Tell us within 48 hours and we return at no charge. Last quarter that was 1.4% of visits, and we publish the number.",
  ],
];

export const steps: [string, string, string][] = [
  [
    "01",
    "Book",
    "Ninety seconds on this page. Pick the day, see the flat price, confirm without a card.",
  ],
  [
    "02",
    "We arrive",
    "Two cleaners, in uniform, in the window you chose. You get a photo and ETA by text that morning.",
  ],
  [
    "03",
    "We clean",
    "Against a written room-by-room checklist, signed off before they leave the property.",
  ],
  [
    "04",
    "You inspect",
    "A photo set lands in your inbox. Anything short of standard gets re-cleaned free within 48 hours.",
  ],
];

export const testimonials: [string, string, string][] = [
  [
    "“I have cancelled three cleaning services in five years. Meridian has had my keys for two and I have never once had to check their work.”",
    "Anna Petrosyan",
    "Signature, biweekly · Bucktown · Client since 2024",
  ],
  [
    "“The move-out photo report got my full deposit back from a landlord who does not give deposits back. That alone paid for the year.”",
    "Devon Hale",
    "Move-out clean · Logan Square",
  ],
  [
    "“Same two people every fortnight. My daughter knows them by name. That is not something I expected to matter, and it is the reason we stay.”",
    "Marguerite Oyelaran",
    "Essential, weekly · Lincoln Park · Client since 2022",
  ],
  [
    "“We run eleven short-lets. Turnovers land inside the two-hour window, every time, and the photo check has caught damage twice before the next guest.”",
    "Tomas Ridder",
    "Airbnb turnover, 11 units · West Loop",
  ],
  [
    "“Post-construction dust beat two other companies. Meridian did three passes and it never came back. Our contractor now books them by default.”",
    "Sasha Lindqvist",
    "Post-construction · Wicker Park",
  ],
  [
    "“Eleven years of contract cleaning across four sites and this is the first provider whose audit scores I do not have to argue about.”",
    "Bernard Achebe",
    "Commercial contract, 4 sites · Loop",
  ],
];

export const faqs: [string, string][] = [
  [
    "Do I need to be home?",
    "No. Most clients give us keyed or coded access on a signed access agreement. Every entry and exit is logged and you get a text when the team arrives and when they leave.",
  ],
  [
    "What about pets?",
    "Fine, and expected — tell us their names in the booking notes. Products are pet-safe as standard and we can run a fragrance-free protocol on request.",
  ],
  [
    "How does cancellation work?",
    "Free up to 24 hours before the visit. Inside 24 hours we charge 50% of the visit price, because the team is already scheduled and paid.",
  ],
  [
    "Are you insured?",
    "Bonded and insured to $2M in general liability, with an additional care-custody-and-control policy covering your contents. Certificates are shared on request.",
  ],
  [
    "Do you bring supplies?",
    "Everything, including a HEPA vacuum per floor. If you prefer we use your products, say so and we will — it does not change the price.",
  ],
  [
    "Can I keep the same cleaner?",
    "Yes, and it is the default on recurring plans. If your lead cleaner is unwell you are told in advance who is covering, with their photo.",
  ],
  [
    "What if something is missed?",
    "Tell us within 48 hours and we come back at no charge. We publish our re-clean rate every quarter — currently 1.4% of visits.",
  ],
  [
    "Is tipping expected?",
    "No. Our cleaners are W-2 employees paid well above the local average, and the price you see is complete. Tips are passed on in full if you insist.",
  ],
  [
    "How far ahead should I book?",
    "Two to three days for a standard clean, a week for a deep clean or move-out. Same-day is often possible if you book before 10am.",
  ],
  [
    "What payment methods do you take?",
    "Card, ACH and invoice for commercial accounts. Nothing is charged until the job is complete and you have had a chance to look at it.",
  ],
  [
    "Do you clean during holidays?",
    "We run every day except Thanksgiving, Christmas Day and New Year's Day. Visits falling on those dates are moved and you are told a fortnight ahead.",
  ],
  [
    "Can I change or pause a recurring plan?",
    "Any time, from your account or by phone, with no fee and no minimum term. Pauses hold your regular slot for up to eight weeks.",
  ],
];

export const team: {
  name: string;
  role: string;
  years: string;
  cert: string;
  bio: string;
  photo: string;
}[] = [
  {
    name: "Renata Moreno",
    role: "Lead cleaner, North Side",
    years: "9 years",
    cert: "IICRC certified",
    bio:
      "Runs the largest recurring book in the company and has trained roughly half the current team. If your plan is weekly on the North Side, it is probably Renata's crew.",
    photo: "Portrait — lead cleaner in uniform, natural light",
  },
  {
    name: "Jonah Whitfield",
    role: "Deep-clean specialist",
    years: "6 years",
    cert: "Post-construction",
    bio:
      "Came from commercial restoration and brought the three-pass HEPA method with him. Handles every post-construction job over 2,000 sq ft personally.",
    photo: "Portrait — deep-clean specialist with HEPA kit",
  },
  {
    name: "Amara Osei",
    role: "Operations lead",
    years: "7 years",
    cert: "Green Seal trainer",
    bio:
      "Owns the checklist. Every room-by-room standard the crews sign off against was written and revised by Amara, and she audits a sample of visits each week.",
    photo: "Portrait — operations lead at a desk",
  },
  {
    name: "Piotr Lewandowski",
    role: "Commercial accounts",
    years: "11 years",
    cert: "OSHA 30",
    bio:
      "Scopes and runs the multi-site contracts. Facilities managers get his direct line, not a ticket queue, and he sits the quarterly reviews himself.",
    photo: "Portrait — commercial accounts lead on site",
  },
];

export const certs = [
  "Green Seal certified",
  "IICRC trained",
  "Licensed IL #CL-114862",
  "Bonded & insured $2M",
  "Google Guaranteed",
];

export const counters: [number, string, string][] = [
  [10428, "+", "Homes cleaned in Chicago"],
  [98, "%", "Would book us again"],
  [24, "/7", "Booking and support"],
  [100, "%", "Insured, bonded, W-2 staff"],
];

export const gallery: { id: string; ratio: string; label: string }[] = [
  { id: "g1", ratio: "3 / 4", label: "Kitchen after a restorative clean" },
  { id: "g2", ratio: "4 / 3", label: "Bathroom tile and grout detail" },
  { id: "g3", ratio: "1 / 1", label: "Cleaner at work, wide shot" },
  { id: "g4", ratio: "4 / 5", label: "Made bed in a bright bedroom" },
  { id: "g5", ratio: "3 / 2", label: "Windows and city light" },
  { id: "g6", ratio: "1 / 1", label: "Neatly stacked supplies and HEPA vacuum" },
  { id: "g7", ratio: "4 / 3", label: "Hallway floors wet-cleaned to the edges" },
  { id: "g8", ratio: "3 / 4", label: "Oven interior after a move-out clean" },
  { id: "g9", ratio: "1 / 1", label: "Folded linen stack, short-let turnover" },
  { id: "g10", ratio: "3 / 2", label: "Post-construction dust extraction in progress" },
  { id: "g11", ratio: "4 / 5", label: "Bathroom fittings descaled and polished" },
  { id: "g12", ratio: "4 / 3", label: "Office breakout area, after hours" },
];

/* ── Service areas ───────────────────────────────────────────────────── */

export const areas: { zone: string; blurb: string; hoods: string[] }[] = [
  {
    zone: "North Side",
    blurb:
      "Our largest crew base. Same-day availability most weekdays, and the shortest arrival windows we offer.",
    hoods: [
      "Lincoln Park",
      "Lakeview",
      "Bucktown",
      "Wicker Park",
      "Logan Square",
      "Roscoe Village",
      "North Center",
      "Andersonville",
      "Uptown",
      "Ravenswood",
    ],
  },
  {
    zone: "Downtown & West",
    blurb:
      "High-rise and loft coverage with building access handled directly — we hold COIs with most major managers.",
    hoods: [
      "West Loop",
      "Fulton Market",
      "River North",
      "Streeterville",
      "South Loop",
      "Gold Coast",
      "Near West Side",
      "Pilsen",
      "Little Italy",
      "Greektown",
    ],
  },
  {
    zone: "North Shore",
    blurb:
      "Suburban houses and villas, generally on weekly or biweekly plans. A small surcharge applies past Highland Park.",
    hoods: [
      "Evanston",
      "Wilmette",
      "Winnetka",
      "Glencoe",
      "Highland Park",
      "Skokie",
      "Northbrook",
      "Glenview",
      "Kenilworth",
      "Lake Forest",
    ],
  },
  {
    zone: "South & Southwest",
    blurb:
      "Growing coverage with fixed crews. Recurring plans available now; one-time bookings subject to route capacity.",
    hoods: [
      "Hyde Park",
      "Kenwood",
      "Bridgeport",
      "Beverly",
      "Bronzeville",
      "Chinatown",
      "Back of the Yards",
      "Garfield Ridge",
    ],
  },
];

/* ── Careers ─────────────────────────────────────────────────────────── */

export const jobs: {
  title: string;
  type: string;
  pay: string;
  location: string;
  copy: string;
}[] = [
  {
    title: "Cleaner — North Side crew",
    type: "Full-time, W-2",
    pay: "$24–28 / hr",
    location: "Chicago, North Side",
    copy:
      "Six-week paid training, a fixed route, and the same clients week to week. No gig apps, no unpaid travel between jobs.",
  },
  {
    title: "Deep-clean specialist",
    type: "Full-time, W-2",
    pay: "$28–33 / hr",
    location: "Chicago, citywide",
    copy:
      "Restorative and post-construction work. IICRC certification paid for, HEPA and extraction equipment provided.",
  },
  {
    title: "Crew lead — West Loop",
    type: "Full-time, W-2",
    pay: "$31–36 / hr",
    location: "Chicago, West Loop",
    copy:
      "Run a two-van crew, hold the checklist standard, and be the name your clients ask for. Two years' cleaning experience required.",
  },
  {
    title: "Scheduler / dispatch",
    type: "Full-time, hybrid",
    pay: "$52–60k",
    location: "Fulton Market office",
    copy:
      "Own the daily board — routing, cover, and the phone. You are the human that answers when a client calls at 7am.",
  },
];

export const benefits = [
  "W-2 employment, never 1099",
  "Health, dental and vision from day 31",
  "Paid six-week training programme",
  "Mileage and travel time paid between jobs",
  "All equipment and products supplied",
  "Uniform and laundry allowance",
  "Paid time off accruing from week one",
  "Certification fees covered (IICRC, Green Seal, OSHA)",
];
