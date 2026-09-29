# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Parancsok

- `npm run dev`: elindítja a Vite fejlesztői szervert
- `npm run build`: éles build a `dist/` mappába
- `npm run preview`: helyben kiszolgálja a lebuildelt `dist/` mappát
- `npm run lint`: lefuttatja az ESLintet (flat config: `eslint.config.js`; a nem használt változók megengedettek, ha nagybetűvel vagy `_`-sal kezdődnek, illetve a Framer Motion `motion` importja, mert azt a szabály JSX-ben nem látja)
- `npm run deploy`: kiteszi a `dist/` mappát GitHub Pagesre a `gh-pages` csomaggal. Előtte le kell futtatni az `npm run build`-et, mert nincs predeploy hook. Az oldal címe https://bbtimtim.github.io/, a `vite.config.js` pedig `base: "/"` beállítást használ.

Tesztek nincsenek.

## Felépítés

Egyoldalas személyes portfólió React 19-cel, Vite-tal és SCSS-sel. Nincs router és nincs állapotkezelő. Az `src/App.jsx` sorban egymás alá teszi a szekciókat: Navbar → Main → About → Portfolio → Contact.

- **Navigáció a szekciók között:** sima horgonylinkekkel működik (`#about`, `#portfolio`, `#contact`, `#homepage`). Minden komponens gyökérelemén ott van a hozzá tartozó `id`. Az `src/app.scss` a `html` elemen bekapcsolja a `scroll-snap-type: y mandatory`-t és a sima görgetést, ezért a szekciók magassága befolyásolja, milyen érzés görgetni az oldalt.
- **Stílusok:** minden komponens a saját, mellette lévő `.scss` fájlját importálja (pl. `Contact.jsx` → `contact.scss`). Az osztálynevek globálisak, nem CSS modulok. A reszponzív töréspontok az `src/mixins.scss` `mobile` / `tablet` / `desktop` mixinjeiből jönnek (mind `max-width` lekérdezés), ezeket a `@use '/src/mixins.scss' as *;` sor húzza be. A betűtípusok az `app.scss`-ben lévő Google Fonts `@import`-ból jönnek.
- **Animációk:** mindenhol Framer Motion (variants objektumok, `whileInView`, `useInView`). A Lottie és a `@react-spring/parallax` telepítve van, de mielőtt építenél rájuk, nézd meg, hogy tényleg használja-e őket a kód.
- **Projektkártyák:** a `Portfolio.jsx`-ben kézzel vannak beírva JSX-ként, projektenként egy kártya. A képernyőképekre abszolút útvonallal hivatkoznak a `public/` mappából (pl. `url('/todo2.png')`).
- **Kapcsolati űrlap:** a `Contact.jsx` a böngészőből küld levelet EmailJS-en keresztül. A `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` és `VITE_EMAILJS_PUBLIC_KEY` értékeket a `.env`-ből veszi. Mivel ezek `VITE_` változók, belekerülnek a lebuildelt bundle-be.

## Konvenciók

- A felület minden szövege magyar, ahogy a README is. Az új szövegek is legyenek magyarul.
- A komponensek `.jsx` fájlok (nincs TypeScript). A komponensfájlok neve PascalCase, a hozzájuk tartozó stíluslapoké kisbetűs.
