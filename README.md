# plumie — Website V1

Mobile-first Sleep-Wellness-Prototyp mit Next.js App Router, TypeScript und Tailwind CSS 4. Deutsche Inhalte, lokal eingebundene Schriftarten Cormorant Garamond und DM Sans, optimierte WebP-Produktbilder aus den gelieferten Assets.

## Lokal starten

```sh
npm ci
npm run dev
```

## Prüfen

```sh
npm run build
npm run typecheck
```

## Funktionen

- Drei Darreichungsformen mit Bild- und Textwechsel
- Einmalig/Abo mit 15 Prozent Preisunterschied (Beispielpreise)
- Demo-Warenkorb mit Mengen, Entfernen und Summe
- Interaktive Abendrituale, FAQ und Formularvalidierung
- Scroll-Reveals, Bildübergänge und Reduced-Motion-Unterstützung
- Responsive Navigation, native Dialoge und Tastaturbedienung

Kein Checkout, keine Zahlungsintegration, keine Datenbank. Das Formular speichert oder versendet keine Daten. Warenkorb nur im flüchtigen Browserzustand. Texte, Rezeptur, Preisgestaltung, Abo-Bedingungen und rechtliche Anbieterangaben sind Konzepte und müssen vor einem kommerziellen Launch geprüft und vervollständigt werden. Keine erfundenen Kundenbewertungen.

## Designgrundlage

Neungeteilte mobile Referenzcollage und vom Auftraggeber gelieferte Bildassets. Der im Auftrag genannte Master-Prompt unter `/mnt/data/Eingefügter Text.txt` war auf dem lokalen Rechner nicht verfügbar. Umsetzung anhand des Auftrags, des referenzierten Chats und der vollständigen visuellen Referenz. Die Originalcollage dient als Referenz, nicht als eingebettete Website.

## Vercel

Als Next.js-Projekt importieren; Standardwerte für Install und Build. Keine Umgebungsvariablen nötig. `main` ist der Produktionsbranch.
