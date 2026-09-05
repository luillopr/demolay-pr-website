# DeMolay Puerto Rico Website — V3.5

Production static website for demolaypr.org.

## V2.6 changes
- Real English URLs under `/en/` for every public page.
- Spanish/English `hreflang` pairs and bilingual sitemap.
- Language button now changes URLs instead of swapping text in-place.
- Upcoming events added for September 9, 12–13, 25 and 26, 2026.
- Upcoming-events teaser added to the home page.
- Event structured data added without inventing unprovided locations or times.
- Join age limits corrected to 12–21 on both languages.
- English join form prepares an English email and English WhatsApp uses an English prefilled message.

Deploy with the existing Cloudflare Workers static-assets configuration.


## V2.8 — Confirmed September 2026 event details
- Added confirmed times and locations for Sept. 9, 12–13, 25 and 26 events.
- Clarified DeMolay role: support at Shriners clinic/golf; participant in Grand Lodge Tropical Night as part of the extended Masonic family.
- Upgraded Event JSON-LD with times, places, attendance mode and corrected organizers.


## V2.8 event access updates
- Sept 9 meeting: open invitation to everyone interested in DeMolay.
- Sept 12–13 Shriners Clinic: volunteers welcome.
- Sept 25 Shriners Golf Tournament: registration required.
- Sept 26 Grand Lodge Tropical Night: registration required.


## V2.9 event date display fix
- Fixed invisible event date panels caused by an undefined CSS variable.
- Added weekday labels in Spanish and English (MIÉ/WED, SÁB–DOM/SAT–SUN, VIE/FRI, SÁB/SAT).
- Event cards now clearly display weekday, date, month and year.


## V3.0 event updates
- Visible date badges added to upcoming event cards (weekday, day, month, year).
- Shriners Golf Tournament registration button links to https://shrinersgolfpr.org/.
- Grand Lodge Tropical Night registration button links to the official Zeffy ticket page.
- Registration URLs added to Event structured data.

## V3.1 photo library update
- Replaced the home-page hero with an energetic Masonic 5K photo.
- Updated the home-page activity preview with public speaking, an active ceremony and a Memorial Day observance.
- Expanded the Spanish and English galleries to ten optimized activity photos.
- Added descriptive bilingual captions and accessible image text.

## V3.2 event directions and social updates
- Added complete venue addresses and map directions to all upcoming events.
- Added full postal addresses to the Spanish and English Event structured data.
- Added an official Facebook timeline widget to both home pages, with direct Facebook and Instagram links.

## V3.3 mobile and discovery improvements
- Fixed horizontal overflow on the home-page chapter feature at mobile widths.
- Verified the home, events, gallery, navigation and social sections at a 390 px phone viewport.
- Reworked the Spanish and English home-page titles, descriptions and primary headings around searches for youth activities, leadership, community service and adult mentorship in Puerto Rico.
- Added visible parent-focused content that explains how DeMolay can complement options such as Scouts, sports and school clubs.
- Added `Service` structured data describing the youth program and its 12–21 audience.
- Updated the sitemap modification dates for the home pages.

## V3.4 leadership article
- Added the Spanish article `/news/como-desarrollar-liderazgo-en-jovenes/`.
- Added the article to the News page and XML sitemap.
- Included Article JSON-LD, canonical metadata and a social-sharing image.
- Covered practical responsibility, event planning, public speaking, service, teamwork, adult mentorship and reflection.
- Added official DeMolay International sources for the youth-led, adult-advised program model.
- Added responsive editorial styles and verified the article at a 390 px phone viewport.

## V3.5 participation and form updates
- Added interest paths on the Spanish and English Join pages for adult advisors/volunteers and communities interested in starting a chapter.
- Added corresponding links from the Spanish and English Resources pages.
- Interest buttons prepare pre-addressed emails; they do not submit, store or approve an official application.
- Made the phone number mandatory on both youth/family interest forms.
- Added semantic autocomplete for the young man's name, municipality, parent/guardian name, email and phone fields.
- Kept youth and guardian autocomplete data in separate browser sections to avoid mixing identities.
- Added an off-screen honeypot field to both forms. Suspected bot submissions are silently rejected and reset.
- Added a cache-version to the Join page script so browsers receive the updated form protection.

## Current form behavior and future protection
- The website is static. The youth/family form prepares an email in the visitor's email application and does not store data on the site.
- Adult-advisor and new-chapter interest links also prepare email messages to `info@demolaypr.org`.
- The honeypot is a lightweight first layer. A future server-backed form can add free Cloudflare Turnstile verification, server-side validation and rate limiting.
