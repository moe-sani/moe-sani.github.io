---
layout: post
title: "Physical AI in High-Precision, Low-Volume Manufacturing"
date: 2026-06-15
tags: [Physical AI, Robotics, Manufacturing, Industrial AI]
excerpt: "Applying robotics, automation, and AI to high-precision, low-volume manufacturing in watchmaking, jewelry, and related industries."
image: /assets/images/posts/cover_infographic.png
---

# Physical AI in High-Precision, Low-Volume Manufacturing

**Applying Robotics, Automation, and AI to the World of Luxury Watchmaking, Jewelry, and Beyond**

*Research Brief — June 2026*

---

![Cover Infographic](/assets/images/posts/cover_infographic.png)

---

## Table of Contents

1. [Introduction: A Different Kind of Manufacturing](#1-introduction-a-different-kind-of-manufacturing)
2. [The Manufacturing Journey: From Concept to Customer](#2-the-manufacturing-journey-from-concept-to-customer)
3. [The Luxury Automotive Parallel](#3-the-luxury-automotive-parallel)
4. [Where Physical AI Can Be Applied Today](#4-where-physical-ai-can-be-applied-today)
5. [Case Studies: Physical AI in Action](#5-case-studies-physical-ai-in-action)
6. [Beyond Individual Stages: The Intelligent Thread](#6-beyond-individual-stages-the-intelligent-thread)
7. [Capturing Tribal Knowledge: From Craftsman to Machine](#7-capturing-tribal-knowledge-from-craftsman-to-machine)
8. [The VLA Breakthrough: Vision-Linked Action](#8-the-vla-breakthrough-vision-linked-action)
9. [Looking Forward](#9-looking-forward)
10. [References & Further Reading](#10-references--further-reading)

---

## 1. Introduction: A Different Kind of Manufacturing

When most people think of manufacturing, they picture vast assembly lines — thousands of identical parts flowing through standardised stations, robots welding car bodies at a rate of one every 60 seconds, conveyor belts stretching to the horizon. That image describes high-volume manufacturing: the world of Toyota, Foxconn, and consumer electronics. It is a world optimised for throughput, repeatability, and cost-per-unit.

But there is another world of manufacturing — one that operates on entirely different principles. This is the world of **high-precision, low-volume (HPLV) manufacturing**: where a single product might take days or weeks to complete, where raw materials can cost tens of thousands of pounds per kilogram, where tolerances are measured in microns (thousandths of a millimetre), and where the final product might sell for more than a house.

This world includes luxury watchmaking (Rolex, Omega, Patek Philippe), fine jewelry (Cartier, Tiffany, Chow Tai Fook), aerospace components, medical devices, and — at a larger scale — luxury automotive manufacturing (Ferrari, Lamborghini, McLaren). These industries share a common DNA: low batch sizes, extreme precision requirements, expensive raw materials, and a deep reliance on human skill and judgment.

### What Makes HPLV Different?

| Dimension | Mass Manufacturing | High-Precision, Low-Volume |
|---|---|---|
| **Batch size** | Thousands to millions | One to hundreds |
| **Raw material cost** | Low (steel, plastic, aluminium) | Very high (gold, platinum, titanium, gemstones) |
| **Tolerances** | ±0.1mm typical | ±0.002–0.01mm typical |
| **Cycle time per unit** | Seconds to minutes | Hours to weeks |
| **Automation level** | High (80–95% automated) | Low (70–90% manual) |
| **Workforce** | Operators monitoring machines | Master craftspeople with 10–30 years' experience |
| **Error cost** | Low per unit (scrap and replace) | Extremely high (€500–50,000+ per piece in materials alone) |
| **Product variation** | Minimal (identical units) | High (each piece may be unique) |

The core challenge is this: traditional automation was designed for the left column. It excels when the same operation is repeated millions of times with no variation. But in HPLV manufacturing, the product changes constantly, batch sizes are too small to justify expensive tooling, and the craft skills required are too nuanced for conventional programmed robots. This is why, until recently, HPLV manufacturing remained largely untouched by automation.

What is changing is **AI**. Unlike traditional automation — which requires rigid programming, standardised inputs, and predictable processes — AI can learn from variation, adapt to imperfect conditions, and make decisions based on context rather than rules. **Physical AI**, specifically, combines perception (seeing and sensing the physical world), reasoning (understanding what needs to happen), and action (physically doing something about it) in a single integrated loop. This makes it, for the first time, a viable technology for the craft-intensive, high-variability world of HPLV manufacturing.

> *"Advances in AI are turning the notion that automation is best suited for high-volume on its head. The strength of most American manufacturers is that they can handle an enormous amount of variability."*
> — Josh Gruenstein, CEO of Tutor Intelligence

---

## 2. The Manufacturing Journey: From Concept to Customer

To understand where Physical AI can intervene, we first need to understand the full manufacturing pipeline. Using luxury watchmaking and fine jewelry as our primary examples, a high-value piece passes through **15–25 production stages**, each dependent on the quality of the one before it. A decision made during design — a wall thickness, a stone seat depth, a crown tube angle — cascades through every downstream step. When early decisions are accurate, production flows. When they are not, errors compound and become exponentially more expensive to fix.

> *"In reality, that pendant went through 15 to 25 production stages. It was designed, sculpted, cast, cooled, broken from its mould, filed, polished, coated, inspected and packaged. At each stage, an inspector could have rejected it. What you hold in your hand is a survivor."*

What follows is the typical end-to-end journey, from idea to delivery.

### Phase 1: Concept & Design

#### Step 1 — Concept Development

The journey begins with an idea — drawn from client briefs, market trends, brand heritage, or creative director vision. Hand sketches, mood boards, and reference images establish the aesthetic direction. Key decisions are locked here: metal type and karat, gemstone requirements, movement choice (for watches), target dimensions, and the finishing level that matches the price point. This happens in design studios with large screens, material samples, and reference libraries.

#### Step 2 — CAD Modelling & 3D Design

The approved sketch is translated into a precise 3D digital model using specialised CAD software (Rhino, Matrix, JewelCAD for jewelry; SolidWorks, Siemens NX for watches). Every dimension, tolerance, stone seat, prong position, and internal structure is defined to hundredths of a millimetre. For watches, the CAD defines movement seat geometry, dial feet height, hand stack clearance, crown tube alignment, stem length, and gasket channel depth. This is arguably the **single most consequential step** — errors here cascade through every downstream process.

#### Step 3 — Prototyping & Validation

The digital model becomes physical for the first time via 3D printing (wax or resin) or CNC milling in base metals. The prototype is physically inspected for fit, proportion, wearability, and manufacturing feasibility. For watches, fit checks include movement-in-case, crown feel, bezel alignment, and hand clearance under the crystal. Typically **2–5 revision cycles** before sign-off.

**Machines:** High-resolution SLA/DLP 3D printers (Formlabs, EnvisionTEC), small CNC mills, digital callipers.

### Phase 2: Material Preparation

#### Step 4 — Materials Sourcing & Preparation

Raw materials are procured, assayed, and prepared. Gold (24K) is melted in crucibles, alloyed with silver, copper, or palladium to create 18K or 14K alloys, then cast into ingots or grain. Platinum requires melting at 1,768°C (vs. 1,064°C for gold) and specialised equipment. Gemstones are sourced, graded, and sorted. All of this happens in **secure, access-controlled environments** with CCTV, precision scales (0.01g accuracy), and induction furnaces. A single gold bar can be worth £60,000+, so security and traceability are paramount.

#### Step 5 — Mould Making (Jewelry)

For pieces produced in multiples (even small runs of 20–50), a rubber or silicone mould is created from the master model. This allows consistent wax pattern duplication for casting. The master is placed in a mould frame, vulcanising rubber is packed around it, heated to ~150°C, cooled, then cut open with a scalpel to create two halves.

**Environment:** Ventilated moulding rooms with vulcaniser presses and wax injectors.

### Phase 3: Component Manufacturing

#### Step 6 — CNC Machining

This is the **heart of physical production**. Raw metal stock is transformed into precise components through subtractive manufacturing. CNC handles approximately 85% of component shaping. In watchmaking, 5-axis CNC mills cut cases, bezels, and movement bridges to tolerances of **±0.005mm** — fourteen times finer than a human hair. Gear hobbing machines produce teeth with profiles accurate to ±0.002mm. In jewelry, CNC micro-mills cut clasps, findings, and stone seats directly from CAD files.

**Environment:** Climate-controlled (±1°C), oil mist extraction, vibration-isolated machine foundations, filtered air.

**Key machines:** 5-axis CNC mills (DMG Mori, Tornos, Bumotec), Swiss-type lathes (Citizen, Star), EDM machines for complex internal geometries.

> *"Tolerances on a good 5-axis CNC mill sit around ±0.005mm. A human hair measures roughly 0.07mm. The machine cuts fourteen times finer than that hair. Repeatedly. Thousands of times without deviation."*

#### Step 7 — Casting (Lost-Wax Process)

One of the oldest and most critical techniques in jewelry manufacturing. Molten wax is injected into rubber moulds to create wax replicas. Multiple wax models are attached to a central stem ("tree") for batch casting. The tree is invested in heat-resistant plaster, heated slowly to 650–750°C over 5+ hours to burn out the wax, then molten precious metal (gold at ~1,100°C, platinum at ~1,800°C) is poured into the cavity via vacuum or centrifugal casting.

**Critical variables:** Temperature (±5°C matters), pour speed, metal flow, cooling rate — any variation causes porosity, miscasts, or surface defects.

**Environment:** Casting room — **extremely well-ventilated**, heat-resistant surfaces, fire suppression systems.

### Phase 4: Finishing & Decoration

#### Step 8 — Deburring, Filing & Pre-Finishing

After CNC machining or casting, every component has rough edges, tool marks, and burrs. These are removed via hand filing, tumbling in abrasive media, robotic deburring (high-pressure water/oil jet at 1,000–3,500 bar for watch components), or bench grinding. Precious metal dust is carefully **collected** — polishing dust and filing waste are refined and recovered, because at gold prices of ~£60,000/kg, every gram matters.

#### Step 9 — Polishing & Surface Finishing

This is where a raw machined part becomes a luxury object. Multiple finishing types are often applied to the **same piece**:

| Finish Type | Technique | Tool/Machine |
|---|---|---|
| **Mirror polish** | Progressive buffing with tripoli and rouge compounds | Polishing lathe, felt/cotton buffs |
| **Satin/brushed** | Abrasive belt in one direction | Belt sander, brushing machine (Recomatic) |
| **Sandblasted/matte** | Fine media at controlled pressure | Sandblasting cabinet |
| **Côtes de Genève** *(watches)* | Parallel wavy lines on movement bridges | Rotating wooden peg on CNC or hand-held |
| **Perlage** *(watches)* | Overlapping circles on mainplates | Rotating rubber tip with abrasive paste |
| **Bevelling/anglage** *(watches)* | 45° chamfer on bridge edges, hand-polished to mirror | Zinc/tin block, diamond paste |
| **Zaratsu** *(watches)* | Ultra-flat mirror polish (Grand Seiko technique) | Tin plate with diamond compound |

**Environment:** Polishing workshop — separate from assembly areas to prevent dust contamination, with strong directional lighting and precious metal dust recovery systems built into benches.

#### Step 10 — Decorative Techniques & Engraving

The artistic layer that separates a £500 piece from a £50,000 piece: hand engraving with burins, laser engraving for micron-accurate logos and serial numbers, engine turning (guilloché) on antique or modern CNC rose engine lathes, enamelling (coloured glass powder fused at ~800°C), PVD/DLC coating for colour and scratch resistance, and electroplating (gold plating, rhodium plating for white gold). Each technique requires its own specialist room and equipment.

### Phase 5: Stone Setting

#### Step 11 — Gemstone Setting

One of the most highly skilled manual operations. A stone setter secures each gemstone into its prepared seat using techniques including prong/claw, bezel, pavé, micro-pavé (up to 80 stones/cm²), channel, invisible, and tension setting.

**Environment:** The **quietest, most controlled** environment in the entire factory. Each setter works at a dedicated bench with:
- Binocular microscope (10–40× magnification)
- Strong adjustable LED lighting
- Shellac ball for holding workpieces
- Pneumatic setting handpieces
- Individual stone trays, tweezers, pushers, burnishers

### Phase 6: Assembly

#### Step 12 — Movement Assembly (Watches)

A luxury mechanical watch movement contains **100–700+ individual parts**, all assembled by hand under magnification. Jewel bearings are pressed into the mainplate, the gear train is assembled, the pallet fork fitted, the balance wheel and hairspring installed and regulated, and bridges screwed down with torque-controlled screwdrivers. Oil is applied at precisely the right points in **femtolitre quantities** (10⁻¹⁵ litres) — too much causes capillary creep, too little causes premature wear.

**Environment:** Cleanroom or dust-controlled room — the most critical environment in the factory:
- Temperature: 20–22°C (±1°C)
- Humidity: 45–55% RH
- Air filtration: HEPA filtered, positive pressure
- Anti-static flooring and wrist straps
- White coats, finger cots or gloves

#### Step 13 — Final Assembly (Habillage)

The completed movement is united with external components: movement placed into case, crown and stem fitted, sapphire crystal pressed in with gasket, caseback sealed, bezel assembled, and bracelet or strap attached. For jewelry, individual components are laser-welded or soldered together, clasps and findings attached, and final stone security checked.

### Phase 7: Testing & Quality Control

#### Step 14 — Testing & Regulation

Every watch is individually tested: timing in 6 positions (dial-up, dial-down, crown-up/down/left/right), water resistance pressure testing, power reserve measurement, and functional checks of all complications. For COSC certification, watches are tested over **15 days** in 5 positions at 3 temperatures. For Omega's METAS Master Chronometer certification, watches must maintain accuracy after exposure to **15,000 gauss** magnetic fields.

For jewelry: pull tests on every stone, hallmark verification, weight checks, and dimensional verification against CAD specifications.

#### Step 15 — Final Visual Inspection

The last human gate before packaging. Every surface is inspected under strong, directional light by an experienced inspector — checking for scratches, dust under the crystal, hand alignment, stone alignment, engraving clarity, and overall aesthetic impression. Inspection booths use black backgrounds, multiple light angles (daylight, warm, UV), and magnification.

### Phase 8: Packaging & Delivery

#### Step 16 — Serialisation, Documentation & Shipping

Serial numbers are recorded and linked to production records. Warranty cards and certificates are prepared (increasingly digital/blockchain-based). Pieces are placed in presentation boxes and shipped via specialised secure couriers (Brinks, Malca-Amit). For precious metals crossing borders, customs documentation and insurance are critical. Some brands operate their own automated distribution centres — Omega's facility in Bienne, for example, delivers up to **3,000 gold products** to stores daily through a fully automated logistics system.

---

## 3. The Luxury Automotive Parallel

While the scale is different, the manufacturing philosophy of luxury automotive brands like Ferrari, Lamborghini, and McLaren shares a remarkable number of principles with watchmaking and jewelry. Lamborghini, for instance, has been building cars at its Sant'Agata Bolognese factory since 1963, delivering around **9,000–10,000 cars per year** — a tiny fraction of the millions produced by mass-market manufacturers.

Inside Lamborghini's factory, the production line doesn't use traditional rigid conveyor systems. Instead, **self-guided trolleys** carry each chassis from station to station autonomously. Before assembly begins, a worker gathers all required parts into a foam-lined, multi-drawer cart — with precise cut-outs designed to fit exactly one part and one part only. This kitting process is strikingly similar to how a watchmaker's workstation is prepared with components for each movement.

Ferrari's foundry in Maranello tells a similar story. Solid aluminium ingots are melted at over 700°C and poured by hand into sand moulds — a process not fundamentally different from the lost-wax casting used in jewelry manufacturing. As Ferrari themselves describe it:

> *"The technology has improved over the years, but they remain artisans, using their hands, their eyes, and ultimately their judgement to ensure every component that leaves the Foundry is of the highest quality possible."*
> — [Ferrari: Inside the Factory — The Foundry](https://www.ferrari.com/magazine/articles/inside-the-factory-the-foundry)

The common thread across all HPLV industries — whether the product weighs 50 grams or 1,500 kilograms — is this: **the human is the quality system**. Machines make components, but humans make decisions. And it is precisely this decision-making layer that Physical AI has the potential to augment, support, and learn from.

---

## 4. Where Physical AI Can Be Applied Today

### The Most Accessible Entry Point: Visual Inspection

If there is one area where AI has already proven itself in HPLV manufacturing, it is **visual inspection**. Computer vision systems can now achieve 98–99% defect detection accuracy, outperforming experienced human inspectors in consistency (though not yet in judgment for novel defects). The breakthrough for HPLV specifically is **unsupervised anomaly detection** — models that train only on images of "normal" products and flag anything that deviates, without needing labelled examples of every possible defect type. This eliminates the data bottleneck that previously blocked adoption in high-mix environments where product variants rotate faster than training data can be curated.

Edge-based inspection systems can run inference in **10–50ms** on industrial PCs or smart cameras, enabling 100% inline inspection at production speed. In one documented case, a defect detection model was compressed to just **198KB** and deployed on an ARM Cortex-M7 microcontroller, achieving 99.2% accuracy at under 10ms inference on a 120fps production line.

For luxury watchmaking and jewelry, inspection AI is already being deployed at scale. Chow Tai Fook uses AI deep-learning automated optical inspection (AOI) across its Shunde manufacturing centre, and Jinpao Precision uses Techman AI cobots with built-in AI vision for zero-defect aerospace-grade inspection across 10 major manufacturing processes.

### Beyond Inspection: Physical Action

But inspection is only perception — seeing and judging. The real frontier of Physical AI is when perception is coupled with **action**: robots that don't just detect a problem, but physically do something about it. The following sections explore where this is already happening and where the next opportunities lie.

---

## 5. Case Studies: Physical AI in Action

### 5.1 Robotic Polishing — Christian Tse Design & Manufacturing

![Christian Tse VDK-2300 Robotic Polishing System](https://www.jckonline.com/wp-content/uploads/2022/10/Christian-Tse-Robot-1024x576.jpg)
*The VDK-2300 dual-arm robotic polishing system at Christian Tse's Monrovia, California facility. Source: [JCK](https://www.jckonline.com/editorial-article/future-of-jewelry-manufacturing/)*

Perhaps the most documented example of robotics in luxury jewelry manufacturing is the system built by **Christian Tse Design & Manufacturing (CTD&M)** in California, in partnership with **Flexible Robotic Environment (FRE)**. Their custom VDK-2300 system, which cost approximately **$2 million** to develop, uses a dual articulated-arm robot enclosed in a modular cell. One arm holds the piece of jewelry; the other holds the specific polishing tool required for that particular design.

The system can polish most rigid jewelry designs — rings, earrings, hard bracelets, pendants, and brooches — across nearly the full gamut of fine jewelry metals. Specialty fixturing and multiple tool changers allow it to adapt to different designs without hardware modifications.

The key insight is how the system **complements rather than replaces** human skill. As Christian Tse describes it:

> *"Overnight, a robot can polish 100 units, and in the morning, one of our skilled polishers comes in and completes the job by spending a few minutes on each ring."*

The robot handles the physically demanding, repetitive first polish; the human applies the final artistic judgment. An in-house robotics specialist reprograms the system for each new design, working closely with the polishing team who train the robotics team on craft nuances. This collaborative model — **robot as tireless apprentice, human as master craftsperson** — is likely the template for Physical AI adoption across the luxury sector.

🔗 **Source:** [JCK — Christian Tse on the Future of Jewelry Manufacturing](https://www.jckonline.com/editorial-article/future-of-jewelry-manufacturing/)
🔗 **Also:** [GJEPC Solitaire — Christian Tse Unveils Robotic Polishing System](https://gjepc.org/solitaire/christian-tse-unveils-fine-jewellery-robotic-polishing-system/)

---

### 5.2 Desktop Micro-Factory — Horosys & Mecademic Meca500

![Horosys Smart Micro Factory with Mecademic Meca500](https://www.roboticstomorrow.com/images/articles/17038-Micro_Factory.jpg)
*One of many possible modules for the Smart Micro Factory. Copyright Horosys SA. Source: [RoboticsTomorrow](https://www.roboticstomorrow.com/article/2021/06/smart-micro-factories-for-the-watchmaking-industry/17038/)*

While the CTD&M system addresses jewelry polishing, a Swiss company called **Horosys** has tackled an even more challenging problem: automating the assembly of watch movements. Their **Smart Micro Factory (SMF)** concept, built around the **Mecademic Meca500** — the world's smallest six-axis industrial robot — demonstrates that Physical AI can operate at the microscopic precision levels required by haute horlogerie.

| Specification | Detail |
|---|---|
| **Repeatability** | 0.005mm (5µm) — meets the 0.01mm watchmaking standard |
| **Footprint** | Desktop — each module just 600mm × 600mm |
| **Robot weight** | 4.5kg |
| **Power consumption** | Less than 100W |
| **Control** | B&R or Beckhoff IPC, TCP/IP or EtherCAT |
| **Modularity** | Stations combine like building blocks: bowl feeders, flexible feeders, presses, cameras, metrology |

What makes this system significant for HPLV is its design philosophy: specifically built for **low-volume production, limited investment, and quick payback**. Traditional industrial robots are too large to handle parts weighing fractions of a gram. Collaborative robots lack the sub-10µm precision needed for watchmaking. The Meca500 occupies the sweet spot — an articulated 6-axis arm that is both small enough and precise enough for micro-assembly tasks like press-fitting jewel bearings, riveting, and component insertion into movement plates.

> *"Horosys was able to standardize, add flexibility and optimize the cost of the Smart Micro Factory using the world's smallest and most precise industrial robot."*

🔗 **Source:** [RoboticsTomorrow — Smart Micro Factories for the Watchmaking Industry](https://www.roboticstomorrow.com/article/2021/06/smart-micro-factories-for-the-watchmaking-industry/17038/)
🔗 **Video:** [Mecademic Meca500 in Watchmaking (YouTube)](https://www.youtube.com/watch?v=6TJ7fWcaRoA)
🔗 **Horosys:** [horosys.ch](https://www.horosys.ch/en/home-2/)
🔗 **Mecademic:** [mecademic.com](https://mecademic.com/insights/case-studies/)

---

### 5.3 The Intelligent Factory — Omega, Bienne, Switzerland

![Omega Factory Bienne](https://www.omegawatches.com/media/wysiwyg/omega/stories/new-factory/omega-new-factory-hero.jpg)
*Omega's newest production facility in Bienne, Switzerland. Designed by Shigeru Ban. Source: [Omega](https://www.omegawatches.com/stories/omegas-newest-factory-is-opened)*

Omega's production facility in Bienne, Switzerland — designed by Pritzker Prize-winning architect **Shigeru Ban** and opened in 2017 — represents perhaps the most sophisticated example of automation in luxury watchmaking. It is not, however, a story of robots assembling watches. It is a story of **intelligent logistics, material flow, and environment management** that enables human watchmakers to work at peak efficiency.

At the core of the building, Omega installed a **fully automated storage system** that rises through three floors, containing over **30,000 boxes** filled with all the stock required for watchmaking. Four robotic storage-and-retrieval machines (Stöcklin BOXer family) can execute up to **1,000 container movements per hour**. The entire system is **inertised** — oxygen content reduced to 15.2% — and the integrated warehouse management system automatically triggers container cleaning to maintain the sterile environment required for watch components.

The building consolidates all steps — T2 (watch assembly), T3 (bracelets), and T4 (shipping) — under one roof. Finished watches are stored in specially designed warehouses and transported to the dispatch area via automated conveyor systems. The facility also houses Omega's **METAS Master Chronometer testing** infrastructure, where watches are automatically subjected to magnetic resistance, water resistance, power reserve, and accuracy testing sequences.

The building itself is engineered for precision: a hybrid timber-and-concrete structure where **100mm reinforced concrete** was added on top of cross-laminated timber floors specifically to increase weight and reduce vibrations — because watchmakers are highly sensitive to movement. Clean room construction, unprecedented for a timber building, maintains dust-free conditions throughout.

Omega's approach illustrates a crucial principle: **in HPLV manufacturing, the most impactful automation is often not at the workbench but in the infrastructure that surrounds it.** By automating logistics, kitting, environmental control, and testing, Omega frees its human watchmakers to focus entirely on what they do best — assembling and regulating movements.

🔗 **Source:** [Omega — Our Newest Factory is Opened](https://www.omegawatches.com/stories/omegas-newest-factory-is-opened)
🔗 **Technical Case Study:** [Mass Timber Conference — Omega Factory (PDF)](https://masstimberconference.com/wp-content/uploads/2024/12/MT2024_CaseStudy_28_Omega-Factory.pdf)
🔗 **Logistics Partner:** [Stöcklin — Omega Reference](https://www.stoecklin.com/solutions/industries/references/omega)

---

### 5.4 Smart Manufacturing at Scale — Chow Tai Fook Jewellery Group

**Chow Tai Fook**, one of the world's largest luxury jewellers, operates the **Shunde Artisanal Smart Manufacturing Centre** in Foshan, China — a mega-facility home to over **4,000 employees** producing **5–6 million units** of gold and diamond jewelry each year.

As documented by journalist **Tian Tian C.** (Chua Tian Tian) of Singapore's Money FM during a media tour of the facility, automation has been deployed across multiple physical stages:

- **Diamond cutting and polishing:** Chow Tai Fook owns four of only five water jet laser cutting machines in China, and operates approximately **~1,500 automatic polishing machines** — the largest fleet in the industry.
- **Robotic diamond sorting:** A self-developed robotic arm precisely sorts diamonds as small as **0.16 carats** for grading — a task requiring extreme precision in handling stones just millimetres across.
- **CAD/CAM and CNC machining:** Used for designing and producing intricate pieces in the Rouge and Joie Collections.
- **Master Studio:** Over **400 skilled craftsmen** use traditional techniques — gemstone setting, gold hammering, filigree — to create elaborate pieces. This is the human-craft core that automation supports but does not replace.
- **Automated logistics:** A **100% automated** distribution centre delivers up to **3,000 gold products to stores daily**.

The Chow Tai Fook example is particularly instructive because it shows that even at relatively high volumes (by luxury standards), the company maintains a 400-person Master Studio for the most skilled operations. **Automation handles the scalable, repeatable tasks; master craftspeople handle the artistic and judgment-intensive ones.**

🔗 **Source:** [Tian Tian C. — LinkedIn Post & Video](https://www.linkedin.com/posts/tian-tian-c-40b7a8110_gold-diamonds-and-jewellery-an-activity-7376537131000852480-Lg4G)
🔗 **Podcast:** [Under the Radar — Flying to Shunde (Omny.fm)](https://omny.fm/shows/moneyfm-under-the-radar/under-the-radar-specials-flying-to-shunde-china-to-uncover-what-s-under-the-radar-about-chow-tai-fook-jewellery-s-operations-and-expansion-plans)
🔗 **Tian Tian C. YouTube Channel:** [youtube.com/@TianTianC](https://www.youtube.com/@TianTianC)

---

### 5.5 AI-Programmed Manufacturing — Rolex

Rolex CEO **Jean-Frédéric Dufour** revealed at Dubai Watch Week in November 2025 that Rolex invests roughly **CHF 100 million per year** to refresh and upgrade its manufacturing machinery, with the average age of machines kept at around eight years. AI is used to program and maintain CNC machines that physically cut, mill, and shape every component in-house. Robotic polishing arms handle repetitive case and bracelet link polishing under human supervision. AI-driven predictive maintenance has reduced unplanned downtime by **20%**.

But Dufour was equally clear about where the line is drawn: final assembly remains **100% done by human hands**.

> *"We could automate more, but then we would lose what makes a Rolex a Rolex."*
> — Jean-Frédéric Dufour, CEO Rolex

This statement captures the strategic calculus of Physical AI in luxury: **automate the manufacturing, preserve the craft**. The machine makes the parts; the human makes the watch.

🔗 **Source:** [Revolution Watch — Dubai Watch Week Interview](https://revolutionwatch.com/dubai-watch-week/rolex-ceo-jean-frederic-dufour-interview/)

---

## 6. Beyond Individual Stages: The Intelligent Thread

The case studies above show Physical AI being applied **within** individual stages — polishing, sorting, logistics, machining. But the deeper, more transformative opportunity lies in what happens **between** stages: the handoffs, the feedback loops, the flow of parts and information from one station to the next. Today, these connections are manual, paper-based, and largely invisible. **This is where the biggest gains are hiding.**

### The Invisible Cost of Disconnected Stages

In a typical luxury workshop, stages operate as **isolated craft islands**. A CNC operator machines a case, places it in a tray, and someone carries it to the polishing bench. A polisher finishes it and puts it in another tray for assembly. If the polisher finds a surface defect, they reject it — but that information **never flows back** to the CNC team in any structured way. If a CNC machine is drifting by 2µm, the downstream polisher compensates by hand without knowing why they're working harder today.

This disconnection has real costs: wasted time, wasted material, undiagnosed root causes, and — most critically — the loss of information that could prevent problems before they happen.

### Opportunity 1: Adaptive Compensation Between Stages

Consider a concrete example from polishing. Imagine a cast ring arrives at the polishing station with a minor surface scratch — not severe enough to reject, but requiring extra polishing to remove. Today, the polisher simply spends more time on it. That extra time is unrecorded, and the downstream station has no idea that this particular piece is now slightly thinner in one area due to the additional material removal.

With Physical AI, this interaction changes fundamentally. A vision system at the polishing station detects the scratch, logs its location and depth, and records the additional polishing time and material removal. This data is then **passed forward to the next station** — whether that's stone setting, assembly, or final inspection — along with updated dimensional data for that specific piece. If the extra polishing reduced the wall thickness by 0.02mm, the assembly station knows to adjust the movement ring accordingly. If the piece is now marginally lighter, the quality system updates the expected weight for final verification.

This is the shift from **batch-level quality control to individual-piece intelligence**. Every piece carries its own story — what happened to it, how it was processed, what compensations were applied — and every downstream station can read that story and adapt.

### Opportunity 2: Cross-Stage Feedback Loops

The most powerful application of inter-stage intelligence is the **feedback loop**. Currently, if a pattern of defects emerges at the polishing stage, it might take weeks for someone to trace the root cause back to a casting parameter or a CNC tool wear issue. With AI continuously monitoring data from every stage, these correlations can be identified in real time.

For example:

> *"When casting temperature dropped below 1,090°C in the morning session (because the room was cold), micro-porosity defects at the polishing stage increased by 40%."*

> *"When CNC spindle vibration exceeded threshold X on Machine 3, downstream timing regulation for movements machined on that machine took 3× longer."*

These are patterns that span stages and would take **years of human observation** to notice — if they were noticed at all. An AI system monitoring sensor data from every stage can identify them in days.

### Opportunity 3: Intelligent Material Flow and Kitting

Omega's three-storey automated storage system demonstrates what intelligent material flow looks like at scale: 30,000 boxes, 1,000 container movements per hour, automatic cleaning, sterile storage. But the principle applies at every scale. Even in a 20-person jewelry workshop, a surprising amount of skilled craftsperson time is spent **not crafting** — it's spent walking to the vault, searching for components, carrying parts between stations, and waiting for upstream work to arrive.

Studies suggest manufacturing workers spend **20–35% of their time** on material handling and searching rather than value-adding work. For a craftsperson earning £60,000/year, that's £12,000–21,000/year in non-productive time per person. Physical AI — in the form of autonomous mobile robots (AMRs), intelligent kitting systems, and real-time scheduling algorithms — can return that time to the craft.

### Opportunity 4: Precious Metal Yield Intelligence

In luxury manufacturing, the raw material is often the single largest cost component. At every stage where metal is processed — alloying, casting, CNC machining, filing, polishing — some material is lost. A typical workshop loses **3–8%** of processed gold to unrecovered waste. At 2026 gold prices of approximately £60,000–75,000/kg, a workshop processing 10kg of gold per month that loses 5% is losing **£30,000–37,500 per month**.

AI can optimise every stage to minimise loss: learning which CNC feeds and speeds minimise chip volume, which casting temperatures minimise sprue waste, which polishing compounds retain the least metal. Weight tracking at every handoff (automated precision scales at every station entry and exit) creates an auditable chain of custody and immediately flags anomalies. **Reducing waste from 5% to 3%** on 10kg/month saves approximately **£15,000–17,000 per month** — the AI system pays for itself in weeks.

### Opportunity 5: The Digital Thread as a Learning Dataset

When every physical interaction is logged — every CNC parameter, every casting temperature curve, every polishing force profile, every assembly torque value, every timing test result — the accumulated data becomes more than a quality record. It becomes a **learning dataset**. After 1,000 pieces, the AI has a rich model of what "good" looks like across the entire pipeline. After 10,000 pieces, it can predict quality outcomes from early-stage data with high confidence.

This digital thread also has direct commercial value. For luxury consumers — **89% of Gen-Z luxury buyers** demand sourcing proof — a verifiable provenance record increases trust and, for resale and auction markets, can increase resale value by **15–30%**. The digital thread transforms the manufacturing process from a cost centre into a value-adding asset.

---

## 7. Capturing Tribal Knowledge: From Craftsman to Machine

There is a type of knowledge in HPLV manufacturing that exists nowhere in writing. It lives in the hands, eyes, and instincts of master craftspeople who have spent decades refining their skills. A master polisher knows, without being able to articulate it, that the pressure and angle need to change subtly when transitioning from a flat surface to a curved one. A master setter can feel, through the resistance of the tool, whether a stone is seating correctly. A master watchmaker can hear, in the tick of a balance wheel, whether the hairspring needs a fractional adjustment.

This is **tribal knowledge** — and it is disappearing. As experienced craftspeople retire, their decades of intuition leave with them. Training a new master takes **10–20 years** of apprenticeship, and fewer young people are entering the trades. The luxury industry faces a genuine knowledge crisis: the people who know how to make things to the highest standard are ageing out faster than they can be replaced.

### The Traditional Approach: Learning from Demonstration (LfD)

Robotics researchers have been working on Learning from Demonstration (LfD) for decades — the idea that a robot can learn to perform a task by watching a human do it, rather than being explicitly programmed. In manufacturing, this typically works by having an expert demonstrate a task while the robot records the movements (joint positions, forces, trajectories), then replays and generalises those movements.

A recent roadmap paper from the University of Luxembourg provides a practical framework for implementing LfD in manufacturing settings, addressing the key questions of "What to Demonstrate", "How to Demonstrate", "How to Learn", and "How to Refine" ([Barekatain et al., 2024](https://doi.org/10.3390/robotics13070100)).

However, traditional LfD has a **fundamental limitation** for craft-intensive work: it captures movement trajectories, but it struggles to capture **context-dependent variation**. A master polisher doesn't just follow a path — they adjust their pressure, speed, and angle based on what they see and feel in real time. If the surface has a scratch, they apply more pressure in that area. If the metal is harder than expected, they slow down. If they're transitioning from a mirror-polish zone to a satin-finish zone on the same piece, they change tools and technique mid-stroke.

Traditional LfD records the movement but not the **reason** for the movement. The robot learns *"move arm along this path with this force"* but not *"apply more force here because there's a scratch, and less force there because the surface is already smooth."* This is why, until now, LfD has worked well for repetitive pick-and-place tasks but struggled with the adaptive, judgment-rich tasks that define luxury craftsmanship.

---

## 8. The VLA Breakthrough: Vision-Linked Action

This is where the latest developments in AI change the game. **Vision-Language-Action (VLA) models** represent a fundamentally new approach to robotic learning. Instead of recording movements in isolation, VLA models create a direct, learned link between what the robot **sees** (vision), what it's **told or understands** about the task (language/context), and what it **does** (action).

A VLA model doesn't just learn *"move arm along path X."* It learns: *"When I see a scratch on the surface (vision), and I'm performing a polishing task (language/context), I should increase pressure and slow my speed in that region (action)."* The vision and the action are directly linked — the model understands that different visual inputs should produce different physical outputs, even within the same task.

### Why This Matters for Craft Knowledge

Consider the polishing example in detail. A master polisher working on a gold ring does the following, all within a single operation:

- **Sees a minor casting mark** on the inner surface → increases dwell time and pressure in that area
- **Transitions from the flat top surface to the curved shoulder** → gradually changes tool angle and reduces speed to maintain even contact
- **Reaches the prong area** near a stone setting → dramatically reduces pressure and switches to a smaller tool to avoid disturbing the setting
- **Notices the surface becoming uniformly reflective** → recognises the mirror finish is achieved and moves to the next zone
- **Encounters a harder alloy batch** → adjusts compound grade and increases pressure to compensate

None of these decisions are written in any manual. There is no rule that says "increase pressure by 15% when you see a casting mark." The master does it by feel, built from thousands of hours of experience. Traditional LfD could capture the average trajectory across all these variations, but it would **lose the context-dependent adjustments** that make the difference between adequate and excellent work.

A VLA model, by contrast, can learn these associations directly. By observing a master polisher through multiple demonstrations — with camera feeds capturing the visual context and force/torque sensors capturing the physical actions — the VLA model builds an internal representation that links visual features (scratch detected, surface curvature changing, prong approaching) to action modifications (increase force, change angle, reduce speed). **It learns the *why* behind the *what*.**

### The State of VLA Research

VLA research has seen explosive growth. A systematic review published in 2025 analysed **102 VLA models**, 26 foundational datasets, and 12 simulation platforms. Key models include:

- **Physical Intelligence π0 / π0.5**
- **Google Gemini Robotics**
- **NVIDIA GR00T N1.7** (now commercially licensed)
- **Figure Helix**

Nearly **40% of new robot deployments** in 2026 reportedly use VLA models in some form.

The practical implications are significant: instead of weeks of manual programming for each new product variant, a robot can learn from **50–100 human demonstrations**. Natural language commands like *"Polish the flat surfaces to mirror finish, but use satin on the sides"* become feasible interfaces. A robot can handle products it has **never seen before** by generalising from prior experience with similar shapes and materials.

For HPLV manufacturing, this addresses the fundamental automation barrier: the cost and time of reprogramming for every new product variant. If a VLA-equipped robot can generalise across product families — learning that "rings are polished similarly regardless of whether they have 4 prongs or 6" — then the economics of automation change dramatically, even for batch sizes of 20–50 units.

### From Knowledge Capture to Knowledge Preservation

The deepest value of VLA-based craft knowledge capture isn't just making robots more capable — it's **preserving institutional knowledge** that would otherwise be lost. When a master polisher with 30 years of experience demonstrates their technique while wearing instrumented gloves and working under camera observation, the resulting VLA model doesn't just automate their job — it encodes their expertise in a form that can be studied, transferred to other locations, and refined over time.

This creates a virtuous cycle: the master's knowledge trains the AI, the AI assists newer craftspeople, the newer craftspeople develop their own refinements, and those refinements are captured back into the model. **The tribal knowledge stops being tribal** — it becomes organisational, transferable, and permanent.

---

## 9. Looking Forward

The trajectory is clear. Physical AI will not replace the master craftspeople who define luxury manufacturing — but it will fundamentally change the infrastructure, intelligence, and capabilities that surround them. The transformation will happen in three waves:

### Wave 1: Infrastructure Intelligence (Now – 2 Years)

Automated logistics and kitting (Omega model), AI-powered inspection, predictive maintenance on CNC machines, precious metal yield tracking, and digital thread implementation. These are proven technologies with fast ROI and minimal disruption to craft workflows.

### Wave 2: Task-Level Physical AI (2 – 5 Years)

Robotic polishing with craft knowledge transfer (Christian Tse model), adaptive CNC machining with real-time sensor fusion, desktop micro-factory assembly for specific sub-tasks (Horosys model), AI-optimised casting parameters, and cross-stage feedback loops. These require more integration effort but deliver substantial productivity and quality gains.

### Wave 3: Generalised Physical AI (5 – 10 Years)

VLA-equipped robots that learn craft tasks from demonstration and generalise across product families, sim-to-real micro-assembly trained in simulation and transferred to real micro-robots, full digital thread with AI quality prediction from early-stage data, and natural language interfaces for robot task specification. These represent the frontier — technically feasible in research settings, but requiring significant maturation for production deployment.

---

**The brands that thrive will be those that embrace Physical AI as a tool for amplifying human excellence — not replacing it.** The machine makes the parts; the human makes the masterpiece. Physical AI's role is to make the journey from raw material to masterpiece faster, more efficient, more traceable, and more resilient — without ever losing the human judgment and artistry that make luxury products worth their price.

---

## 10. References & Further Reading

1. **Christian Tse / FRE VDK-2300 Robotic Polishing:** [JCK — Future of Jewelry Manufacturing](https://www.jckonline.com/editorial-article/future-of-jewelry-manufacturing/) | [GJEPC Solitaire](https://gjepc.org/solitaire/christian-tse-unveils-fine-jewellery-robotic-polishing-system/)
2. **Horosys Smart Micro Factory / Mecademic Meca500:** [RoboticsTomorrow](https://www.roboticstomorrow.com/article/2021/06/smart-micro-factories-for-the-watchmaking-industry/17038/) | [Horosys.ch](https://www.horosys.ch/en/home-2/)
3. **Omega Factory, Bienne, Switzerland:** [Omega](https://www.omegawatches.com/stories/omegas-newest-factory-is-opened) | [Mass Timber Case Study (PDF)](https://masstimberconference.com/wp-content/uploads/2024/12/MT2024_CaseStudy_28_Omega-Factory.pdf) | [Stöcklin Reference](https://www.stoecklin.com/solutions/industries/references/omega)
4. **Chow Tai Fook Shunde Centre:** [Tian Tian C. LinkedIn Post](https://www.linkedin.com/posts/tian-tian-c-40b7a8110_gold-diamonds-and-jewellery-an-activity-7376537131000852480-Lg4G) | [Under the Radar Podcast](https://omny.fm/shows/moneyfm-under-the-radar/under-the-radar-specials-flying-to-shunde-china-to-uncover-what-s-under-the-radar-about-chow-tai-fook-jewellery-s-operations-and-expansion-plans)
5. **Rolex CEO — Dubai Watch Week 2025:** [Revolution Watch](https://revolutionwatch.com/dubai-watch-week/rolex-ceo-jean-frederic-dufour-interview/)
6. **Mecademic Meca500 — Watchmaking Video:** [YouTube](https://www.youtube.com/watch?v=6TJ7fWcaRoA)
7. **LfD Manufacturing Roadmap:** Barekatain, A. et al. (2024). *A Practical Roadmap to Learning from Demonstration for Robotic Manipulators in Manufacturing.* Robotics, 13(7), 100. [DOI](https://doi.org/10.3390/robotics13070100)
8. **VLA Models Systematic Review (2025):** arXiv:2507.10672 — 102 models, 26 datasets, 12 simulation platforms
9. **Ferrari Foundry, Maranello:** [Ferrari.com](https://www.ferrari.com/magazine/articles/inside-the-factory-the-foundry)
10. **Lamborghini Factory:** [SlashGear](https://www.slashgear.com/1723142/inside-lamborghini-factory-experience-tools-technology-supercar-production/)
11. **AXIOME Robotic Deburring (Watchmaking):** [axiome.eu](https://www.axiome.eu)
12. **Groupe Recomatic — CNC Polishing:** [recomatic.ch](https://www.recomatic.ch)
13. **ALVMAC — Precision Machines for Watchmaking & Jewelry:** [alvmac.ch](https://www.alvmac.ch)
14. **Chow Tai Fook — Product Supply Chain:** [chowtaifook.com](https://www.chowtaifook.com/en-hk/house-of-ctf/careers/product-production-supply-chain)
15. **Omega Factory Architecture (Mass Timber Conference):** [masstimberconference.com](https://masstimberconference.com/report/content/omega-factory/)

---

*Research compiled June 2026. All data points sourced and verified at time of writing.*
