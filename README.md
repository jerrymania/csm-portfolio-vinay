# Vinay S Savadi — Construction Management Workshop Portfolio

Static portfolio site for **Vinay S Savadi** (USN 01FE21BCV001, Roll No. 163),
School of Civil Engineering, KLE Technological University — Construction Management Workshop (19ECVP301).

## Contents
```
index.html                          Home: profile, contents, project data, team photos
problem-statements/ps1.html–ps3.html  Source-based (supplied workshop records via the master brief)
problem-statements/ps4.html–ps6.html  Constructed academic case studies (visibly labelled)
assets/css/main.css                 "Formwork" theme (concrete, hi-vis yellow, black)
assets/js/main.js                   Progress bar, section highlight, lightbox (optional; site works without JS)
assets/fonts/                       Self-hosted Anton, Schibsted Grotesk, Space Mono (woff2)
assets/images/                      Portrait, team photos (GPS overlays cropped, bystander blurred), phase-layout renders
assets/drawings/                    The three original phase-layout PDFs
QA_REPORT.md                        Checks performed
```
All paths are relative; there is no build step, backend or external request.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
- **Netlify:** drag this folder (the one containing `index.html`) onto app.netlify.com/drop.
- **GitHub Pages:** push the contents to a repository → Settings → Pages → deploy from branch, root folder.
- **Any static host:** upload the folder as-is.

## Editing
The pages are generated from Python sources kept outside this folder. Small text changes can be made directly in the HTML files.
