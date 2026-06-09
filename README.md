# California Coast Road Trip — July 2026

A mobile-first, single-page itinerary site for a family trip:
**San Francisco → Monterey/Big Sur → Los Angeles**, July 26–31, 2026 (home Aug 1).

Built as one self-contained `index.html` (no build step) plus local images.

## Run it
Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's inside
- **Hero** + per-day photographic cover cards (collapsible)
- **Flights** — outbound/return cards, with the BOS→SFO "no AA nonstop" flag
- **Day-by-day** itinerary with per-stop photos, times, notes, and Google Maps directions links
- **Overview map** — Leaflet + OpenStreetMap/CARTO tiles (no API key)
- **Lodging** — editable TBD cards (notes persist to `localStorage`)
- **Booking checklist** — interactive, priority-flagged, persists to `localStorage`
- **Good to know** — practical notes
- **Print stylesheet** — clean one-page printout

## External dependencies (need internet)
- Google Fonts (Fraunces + Hanken Grotesk)
- Leaflet JS/CSS + map tiles (unpkg, CARTO)

Everything else — including all photos — is local under `images/`.

## Photo credits
All landmark photos are from Wikimedia Commons. See [ATTRIBUTIONS.md](ATTRIBUTIONS.md).
