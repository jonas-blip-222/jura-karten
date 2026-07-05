# Jura-Karten – Kurzanleitung

Karteikarten-Web-App (PWA) fürs Beratungsrecht. Lernen mit Selbstbewertung und
Spaced Repetition (Leitner, 5 Fächer). Läuft offline – ideal für die Bahn.

## Dateien
- `index.html` – die App (Design + Logik in einer Datei)
- `cards.js` – die Karteninhalte (hier fügst du neue Karten hinzu)
- `manifest.json`, `sw.js` – machen die App installierbar und offline-fähig
- `icon-*.png` – App-Icons

## Sofort testen (am Computer)
Doppelklick auf `index.html` – öffnet sich im Browser. Karten durchblättern,
antippen zum Umdrehen, unten selbst bewerten. Der Lernstand wird lokal im
Browser gespeichert.

## Bedienung
- **Tippen** auf die Karte → dreht sie um (Frage → Antwort).
- **Nicht gewusst / Unsicher / Gewusst** → steuert, wie oft die Karte wiederkommt.
- **Themen** (oben) → einzelne Themengebiete ein-/ausblenden.
- **Fortschritt** (oben) → Verteilung über die 5 Fächer, fällige Karten, Reset.

## Aufs iPhone bringen (einmalig)
1. Dateien bei GitHub hochladen und GitHub Pages aktivieren
   (siehe `Projekt-2_Rechts-Karteikarten_Fahrplan.md`, Etappe 5).
2. Öffentlichen Link auf dem iPhone in Safari öffnen.
3. Teilen-Symbol → „Zum Home-Bildschirm“. Fertig – startet wie eine App, offline.

## Neue Karten hinzufügen
`cards.js` öffnen, einen `{ ... }`-Block kopieren und anpassen. Felder:
`id` (Nummer hochzählen), `t` (Thema), `typ` (Frage/Definition/Fall/Norm),
`f` (Vorderseite), `b` (Rückseite), `q` (Fundstelle, z. B. „§ 8a SGB VIII“).
Auf das Komma am Ende jedes Blocks achten.

Nach inhaltlichen Updates in `sw.js` die Zeile `const CACHE = "jura-karten-v1"`
auf `v2`, `v3` … hochzählen – dann laden alle Handys die neuen Karten sicher nach.

## Wichtiger Hinweis
Die Karten wurden aus den Seminarunterlagen erstellt und fachlich geprüft.
Vor der Klausur trotzdem stichprobenartig gegen die Originalfolien/Gesetze
abgleichen – Sozialrecht ändert sich, und Klausurrelevanz kennt nur dein Seminar.
