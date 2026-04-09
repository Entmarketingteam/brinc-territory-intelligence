# Real-Time Crime Center (RTCC) — Industry Report

*Research window: ~March–April 2026 with 2025 context. Synthesized via the `last30days-skill` workflow (web sources only).*

## TL;DR
The RTCC market has effectively consolidated into a **three-horse race: Axon (via Fusus), Flock Safety, and Motorola (CommandCentral Aware)**, with **Genetec** as the open VMS layer and a long tail of regional integrators. The 30-day window is defined by: (1) a wave of **mid-size city launches** (Chamblee GA, Providence RI, Seattle expansion), (2) Axon's blowout Q4 2025 earnings validating the "Fusus as front door" thesis, (3) a coordinated **ACLU pushback in Providence** that's becoming the template for opposition nationwide, and (4) the emerging fusion of RTCCs with DFR programs — RTCCs are now the software spine that DFR drones plug into.

---

## 1. Company Landscape

### Axon (Fusus) — the runaway leader
- **Acquired Fusus Jan 31, 2024 for $241.3M.** Now the dominant RTCC software layer in the U.S.
- **Scale:** Supporting **millions of livestreams annually across 2,000+ agencies** — roughly 2× the footprint of any competitor.
- **Q4 2025 revenue: $797M, +39% YoY.** Full-year 2025: $2.8B (+33.5%). 2026 guidance: **27–30% growth** (~$3.6B).
- **Axon 911 ↔ Fusus integration** shipped — PSAP calls now flow directly into the real-time operations view. This is the move that turns Fusus from "camera aggregator" into "911-native common operating picture."
- **FedRAMP recommended**, pending final certification — unlocks the full U.S. federal market (DHS, CBP, USMS, federal facility security).
- **Product strategy:** Fusus is the free/low-cost entry point → upsell Axon Evidence, Axon Respond, Axon Air (drones via Skydio), body cams, Tasers. The cheapest RTCC in the market is also the stickiest.

### Flock Safety — the hardware-backed challenger
- Named alongside Axon and Genetec as one of the **three most widely used RTCC integration vendors**.
- Distribution moat: 5,000+ communities already running Flock ALPR → natural upsell to RTCC dashboards.
- **Chamblee GA (March 5, 2026):** $2M RTCC launched with Flock at the core — **~$559K for Flock cameras** in phase one alone. 80 PTZ cameras + ALPR network fused into a single video wall. Claimed outcome: **50% accident reduction, 58% injury-crash reduction** at the Peachtree Blvd / Chamblee-Dunwoody Rd intersection. That stat is now in every sales deck.
- Flock's Aerodome drone stack means Flock is the **only single-vendor RTCC-to-drone play** — no partnerships required.

### Motorola Solutions — the incumbent
- **CommandCentral Aware:** Cloud-native command center suite that unifies 911 call handling, CAD, video analytics, field reports, records, and evidence under a single map-based COP (common operating picture).
- **New Genetec VMS integration:** Cloud-based provisioning + livestreaming from community-partner cameras (businesses, schools, churches) directly into Aware. This is Motorola's answer to Fusus's community-camera registration model.
- **Strategic leverage:** Owns VESTA 911 (the most-used PSAP software in the U.S.), APX radios, and the BRINC DFR alliance — meaning every call that comes into VESTA can flow through Aware into a BRINC drone. Motorola is trying to be Axon-for-the-incumbents.
- **Weakness:** Slower cloud migration and more fragmented SKUs than Axon's bundled platform.

### Genetec — the open VMS layer
- Third of the "big three" integration vendors. Plays more neutrally — its VMS plugs into both Motorola Aware and standalone RTCCs. Less of a direct RTCC platform and more of an infrastructure utility.

---

## 2. Adoption & Usage Signals (last 30 days)

| City | Signal | Why it matters |
|---|---|---|
| **Seattle** | Expanding RTCC from 8am–3am to **24/7**; expanding camera footprint into Capitol Hill nightlife core + Central District. Estimated $400K install + $35K/yr ops for Capitol Hill alone. | Major progressive city doubling down — political cover for similar markets (Portland, Minneapolis, DC) |
| **Seattle (SPD claim, March 2026)** | Officers working with RTCC analysts are **3× more likely to arrest an offender** | This is now the canonical ROI stat the industry quotes |
| **Chamblee, GA** | $2M RTCC opened March 5, 2026 on Flock stack; built to serve neighboring north DeKalb agencies | Regional/mutual-aid model — suburban departments sharing one RTCC (huge unlock for SMB municipal market) |
| **Providence, RI** | RTCC launched, integrating drones + Flock ALPR + private camera feeds | Flashpoint for ACLU pushback (below) |
| **New Providence, NJ** | RTCC surveillance software rollout drawing civil liberties scrutiny | Signals that opposition is spreading to affluent suburbs, not just cities |

---

## 3. The RTCC × DFR Convergence

This is the single biggest structural story and ties directly to the DFR report:

- **RTCC is becoming the operating system for DFR.** Drone feeds from Skydio DFR Command, BRINC Guardian, and Flock Alpha all land in an RTCC (Fusus, Aware, or Flock's own dashboard) where analysts triage them alongside ALPR hits, gunshot detections, and 911 calls.
- **Axon 911 → Fusus → Skydio X10** is now a fully wired call-to-drone pipeline.
- **Motorola VESTA 911 → CommandCentral Aware → BRINC Guardian** is the mirror pipeline on the incumbent stack. **This is BRINC's primary RTCC-adjacent moat.**
- **Flock is the only all-in-one:** ALPR + RTCC + Alpha drone — no partner dependencies.
- **Implication:** Selling a standalone RTCC in 2026 without a drone story is getting harder. Selling a drone without an RTCC integration story is nearly impossible.

---

## 4. Opposition & Privacy Narrative

The pushback is real and coordinating faster than the industry's PR response:

- **Providence (Feb–March 2026) is the epicenter:**
  - **ACLU of Rhode Island** publicly condemned the RTCC for having *zero* written privacy policies governing use of drones, ALPR, and private camera feeds.
  - **ACLU + Brown University campus chapter** asked Brown President Christina Paxson to **reject PPD's request to share campus camera feeds** with the RTCC. Similar letters sent to other Providence-area universities. This is the first organized attempt to cut off the private-camera integration pipeline at the source.
  - ACLU is pushing Providence City Council to amend the Community Police Relations Act to **bar RTCC/ALPR use for federal immigration enforcement** or warrantless demographic collection — a template bill that will show up elsewhere.
- **Seattle accountability layer:** The **Office of Inspector General has hired independent academic experts** to evaluate SPD's RTCC, CCTV, and ALPR usage — the most structured oversight model so far and worth watching as a reference framework.
- **Key legal vacuum:** The EFF, ACLU, and Providence PD all agreed they **could not point to any local, state, or federal regulation specifically governing ALPR or RTCC technology.** That's both the industry's tailwind (no legal friction) and its biggest latent risk.
- **No active federal lawsuits** against RTCCs identified in the window — the fight is still advocacy and ordinance-level, not litigation.

---

## 5. What's Actionable / What to Watch

| Signal | Why it matters |
|---|---|
| **Fusus FedRAMP final certification** | Unlocks federal market; would accelerate Axon's already-dominant position |
| **Providence ordinance outcome** | First real privacy ordinance test case — template for 20+ cities with pending RTCC proposals |
| **Chamblee regional/mutual-aid model** | Suburban SMB municipal market is the next land-grab; watch for county-level RTCCs |
| **Motorola–Genetec VMS integration uptake** | Is the Axon moat beatable with a Motorola+Genetec open-stack alternative? |
| **Brown University decision on camera sharing** | If a major university says no, expect a cascade; if it says yes, expect an ACLU lawsuit |
| **Axon Q1 2026 earnings (late April/May)** | First post-Fusus-integration quarter where the Fusus → Axon 911 pipeline shows up in net new logos |
| **RTCC-as-a-service pricing compression** | Flock's $559K phase-one pricing in Chamblee suggests sub-$1M turnkey RTCCs are now the entry point — 5x cheaper than 2022 builds |

---

## Sources
- [Axon Q4 2025 Earnings — PR Newswire](https://www.prnewswire.com/news-releases/axon-reports-q4-2025-revenue-of-797-million-up-39-year-over-year-302696190.html)
- [Axon Accelerates Real-Time Operations with Fusus Acquisition — Investor Relations](https://investor.axon.com/2024-02-01-Axon-Accelerates-Real-Time-Operations-Solution-with-Strategic-Acquisition-of-Fusus)
- [Fusus PitchBook Profile](https://pitchbook.com/profiles/company/462738-88)
- [Protect Life in Real Time: RTCCs and the Axon Ecosystem — Axon](https://www.axon.com/news/about/protect-life-in-real-time)
- [Real-Time Crime Center in the Cloud — Axon](https://www.axon.com/resources/real-time-crime-center-in-the-cloud-the-next-generation-of-police-technology)
- [Building a Real Time Crime Center the Right Way — Flock Safety](https://www.flocksafety.com/blog/building-a-real-time-crime-center-the-right-way-insights-from-industry-experts)
- [Chamblee Opens $2M Real-Time Crime Center — Hoodline](https://hoodline.com/2026/03/chamblee-flips-the-switch-on-2-million-crime-watching-command-center/)
- [CommandCentral Aware Overview — Motorola Solutions](https://www.motorolasolutions.com/en_xl/products/smart-public-safety-solutions/intelligence-led-public-safety/commandcentral-aware.html)
- [What's New with CommandCentral Aware — Motorola Solutions](https://blog.motorolasolutions.com/en_us/whats-new-aware/)
- [Motorola Expands Real-Time Awareness for Command Center — Police1](https://www.police1.com/police-products/police-technology/publicsafetysoftware/articles/motorola-solutions-expands-real-time-awareness-for-command-center-Zzdj5aNrydcN6wR9/)
- [US Real Time Crime Center Locations — Motorola Solutions](https://www.motorolasolutions.com/en_us/blog/real-time-crime-center-locations)
- [Case for Expanding Seattle's RTCC — Capitol Hill Seattle](https://www.capitolhillseattle.com/2026/03/the-case-for-expanding-seattles-real-time-crime-center-and-more-cameras-on-capitol-hill-plus-the-one-already-above-12th-ave/)
- [Who's Keeping an Eye on Seattle's Surveillance Cameras? — South Seattle Emerald](https://southseattleemerald.org/news/2026/03/31/whos-keeping-an-eye-on-seattles-surveillance-cameras)
- [Seattle RTCC Early Results — Office of the Mayor](https://harrell.seattle.gov/2025/07/15/seattles-real-time-crime-center-delivers-early-results-to-improve-public-safety/)
- [Providence Police Surveillance Software — The Providence Eye](https://pvdeye.org/real-time-crime-center/)
- [ACLU RI Calls Out Providence RTCC — ACLU of Rhode Island](https://www.riaclu.org/en/news/aclu-calls-out-lack-privacy-protections-providences-new-real-time-crime-center-urges-passage)
- [ACLU Urges Brown to Reject Camera Sharing — Boston Globe](https://www.bostonglobe.com/2026/02/06/metro/aclu-urges-brown-university-reject-sharing-video-feeds-with-police-ri/)
- [ACLU Criticizes Providence Crime Center — WPRI](https://www.wpri.com/news/local-news/providence/aclu-criticizes-providence-crime-center-over-lack-of-privacy-rules/)
- [RTCC Surveillance Tech Overview — Milestone Systems](https://www.milestonesys.com/resources/content/articles/real-time-crime-centers/)
- [How Agencies Operationalize RTCCs — Police1](https://www.police1.com/real-time-policing/an-inside-look-at-how-agencies-are-operationalizing-real-time-policing)
