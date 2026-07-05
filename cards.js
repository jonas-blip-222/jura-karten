/* ============================================================
   Jura-Karten – Kartendatensatz
   ------------------------------------------------------------
   Quelle: Seminarunterlagen "Rechtliche Rahmenbedingungen der
   Beratung" (Prof. Dr. Ehmann u.a.), Rechtsstand 2025/26.

   So fügst du neue Karten hinzu:
   - Kopiere einen { ... }-Block und passe ihn an.
   - Achte auf das Komma am Ende jedes Blocks.
   - Felder:
       id  = eindeutige Nummer (einfach hochzählen)
       t   = Thema (erscheint als Filter) – exakt gleiche
             Schreibweise wie bei anderen Karten verwenden
       typ = "Frage" | "Definition" | "Fall" | "Norm"
       f   = Vorderseite (Frage / Begriff / Fall)
       b   = Rückseite (Antwort / Lösung)
       q   = Fundstelle (z.B. "§ 8a SGB VIII") – darf leer sein
   ============================================================ */

window.JURA_CARDS = [

/* ---------- Beratungsbegriff ---------- */
{ id: 1, t: "Beratungsbegriff", typ: "Norm",
  f: "Welche Norm regelt den Anspruch auf Beratung im Sozialrecht – und was besagt sie?",
  b: "§ 14 SGB I: „Jeder hat Anspruch auf Beratung über seine Rechte und Pflichten nach diesem Gesetzbuch.“ Zuständig sind die Leistungsträger, denen gegenüber die Rechte geltend zu machen sind. Eine gesetzliche Definition von „Beratung“ gibt es nicht – sie wird als Handlungsform vorausgesetzt; auch eine Form ist nicht vorgegeben.",
  q: "§ 14 SGB I" },

{ id: 2, t: "Beratungsbegriff", typ: "Frage",
  f: "Wie grenzt sich Beratung von der bloßen Auskunft (§ 15 SGB I) ab?",
  b: "Beratung geht über die bloße Mitteilung von Wissen (Information) hinaus: Sie „rät“ zu bestimmten rechtlich relevanten Handlungen (z.B. einer Antragstellung), die sie empfiehlt. Voraussetzung ist stets das Eingehen auf die individuelle Lebenssituation – ohne Klärung des maßgeblichen Lebenssachverhalts ist keine fachgerechte Beratung möglich.",
  q: "§§ 14, 15 SGB I" },

{ id: 3, t: "Beratungsbegriff", typ: "Definition",
  f: "Grenze die Handlungsformen ab: Begleitung, Unterstützung, Betreuung, Vertretung, Beistand.",
  b: "Begleitung = beratendes „Mitlaufen“. Unterstützung = Hilfe bei der Umsetzung des Beratungsergebnisses (z.B. Antrag stellen). Betreuung = mehr Befugnisse, geht weiter hinaus. Vertretung = rechtliche Befugnis, Erklärungen für jemanden abzugeben (§ 13 SGB X, Bevollmächtigung). Beistand = § 13 Abs. 4 SGB X.",
  q: "§ 13 SGB X" },

{ id: 4, t: "Beratungsbegriff", typ: "Frage",
  f: "Was sind die Ziele der Beratung im Rechtskontext?",
  b: "Beratung erschöpft sich nicht in der abstrakten Darlegung der Rechtsvorschriften. Sie soll Orientierung bei der Wahrnehmung eigener Rechte bieten, zugleich die an die Person gerichteten (sozial-)rechtlichen Erwartungen aufzeigen und die Bedingungen für ein zweckmäßiges individuelles Entscheiden und Verhalten verbessern.",
  q: "" },

{ id: 5, t: "Beratungsbegriff", typ: "Frage",
  f: "Was sind Kernbestandteile der Beratung im Rechtskontext?",
  b: "Beratung bezieht sich auf Entscheidungen/Handlungen, die der Klient eigenständig vornehmen kann, und stellt dessen Entscheidungsfähigkeit her oder unterstützt sie. Im Rechtskontext ist sie zusätzlich handlungsorientiert: zu klären ist, wie rechtlich relevante Entscheidungen in die Lebenswelt übertragbar sind (Ressourcenanalyse).",
  q: "" },

/* ---------- Beratungsauftrag ---------- */
{ id: 6, t: "Beratungsauftrag", typ: "Frage",
  f: "Wodurch wird der Inhalt der Beratungsleistung (bei freien Trägern) rechtlich bestimmt?",
  b: "Durch die privatrechtliche Vereinbarung zwischen Berater*in (handelnd für den Träger) und Klient*in. Der Beratungsgegenstand („Beratungsauftrag“) sollte möglichst konkret erfasst werden. Die Vereinbarung kommt durch Konsens beider Seiten über den Inhalt zustande.",
  q: "" },

{ id: 7, t: "Beratungsauftrag", typ: "Norm",
  f: "Welches Vertragsverhältnis liegt der Beratung zugrunde – unentgeltlich vs. entgeltlich?",
  b: "Unentgeltliche Beratung: Auftragsverhältnis nach §§ 662 ff. BGB. Entgeltliche Beratung: regelmäßig Dienstvertrag nach §§ 611 ff. BGB.",
  q: "§§ 662 ff. / §§ 611 ff. BGB" },

{ id: 8, t: "Beratungsauftrag", typ: "Frage",
  f: "Wie ist das Beratungsanliegen juristisch einzuordnen?",
  b: "Das Anliegen ist als „Antrag“ (Willenserklärung) zu verstehen, bestimmte Themen zum Beratungsgegenstand zu machen. Über die bloße Äußerung hinaus ist der „wirkliche Wille“ zu erforschen (§ 133 BGB), wenn es dafür Anhaltspunkte gibt.",
  q: "§ 133 BGB" },

{ id: 9, t: "Beratungsauftrag", typ: "Frage",
  f: "Wie ist mit mehreren Anliegen in der Beratung umzugehen?",
  b: "Die Auftragsklärung muss für jedes Anliegen transparent erfolgen. Werden mehrere Aufträge angenommen, ist zu priorisieren (Reihenfolge festlegen). Fristgebundene Sachverhalte (z.B. Widerspruchseinlegung gegen einen Bescheid) haben regelmäßig Vorrang.",
  q: "" },

{ id: 10, t: "Beratungsauftrag", typ: "Frage",
  f: "Unter welchen Voraussetzungen sind Abbruch oder Änderung eines Beratungsauftrags zulässig?",
  b: "Bei Konsens jederzeit. Einseitig durch die Berater*in nur bei „wichtigem Grund“ (z.B. Bedrohung, fehlende Mitwirkung). Ohne wichtigen Grund muss dem Klienten rechtzeitige Vorsorge für anderweitige Beratung ermöglicht werden (§ 671 Abs. 2 BGB). Der Klient kann jederzeit widerrufen.",
  q: "§ 671 Abs. 2 BGB" },

{ id: 11, t: "Beratungsauftrag", typ: "Frage",
  f: "Nenne die idealtypischen Phasen des Beratungsprozesses.",
  b: "1) Einleitungsphase (Erstkontakt, Vertrauen). 2) Erfassen der Anliegen (alles aufnehmen, noch kein Auftrag). 3) Verhandlung (ob/wie beraten werden kann; institutioneller Auftrag, fachliche + zeitliche Ressourcen). 4) Formulierung des angenommenen Auftrags (durch Berater, verständlich). 5) Beratungsleistung + Umsetzung.",
  q: "" },

{ id: 12, t: "Beratungsauftrag", typ: "Frage",
  f: "In welchem Verhältnis stehen Beratungsauftrag, -leistung und -ergebnis?",
  b: "Der Auftrag lässt sich als Frage formulieren; die Beratungsleistung erörtert diese Frage; das Ergebnis beantwortet sie. Das Beratungsergebnis korrespondiert mit dem Beratungsauftrag und sollte erklärt und festgehalten (ggf. visualisiert) werden – inkl. Planung der Umsetzung.",
  q: "" },

{ id: 13, t: "Beratungsauftrag", typ: "Frage",
  f: "Wo endet die Befugnis der Sozialarbeiter*in bei der rechtlichen Unterstützung?",
  b: "Das Rechtsdienstleistungsgesetz (RDG) begrenzt die Befugnis: Komplette Verfahren vor Gericht dürfen nicht betreut werden. Die Befugnis endet regelmäßig beim Erstellen und Überprüfen des Widerspruchs.",
  q: "RDG" },

/* ---------- Rahmen & Rechtsbeziehungen ---------- */
{ id: 14, t: "Rahmen & Rechtsbeziehungen", typ: "Frage",
  f: "Welche institutionellen Rahmenbedingungen bestimmen, ob öffentliches Recht oder Privatrecht gilt?",
  b: "Beratung in einer Behörde durch einen öffentlich-rechtlichen Träger → öffentliches Recht. Beratung durch freien Träger, private Einrichtung oder Privatperson → Privatrecht. Die maßgeblichen Rechtsgrundlagen ergeben sich aus der Einordnung der jeweiligen Rechtsbeziehung.",
  q: "" },

{ id: 15, t: "Rahmen & Rechtsbeziehungen", typ: "Definition",
  f: "Beschreibe das typische Vier-Personen-Modell der Beratungsstelle und die Rechtsverhältnisse.",
  b: "Sozialleistungsträger (z.B. Stadt) – Leistungserbringer (Träger, z.B. Soziale Dienste e.V.) – Berater*in – Klient*in. Verhältnisse: Beratungsleistung = Privatrechtsverhältnis (Klient–Träger); Sozialleistungsverhältnis = öffentliches Recht (Klient–Träger); Finanzierung = Leistungsvereinbarung/Zuwendung (Träger–Sozialleistungsträger); Arbeitsrechtsverhältnis (Berater–Träger).",
  q: "" },

{ id: 16, t: "Rahmen & Rechtsbeziehungen", typ: "Frage",
  f: "Nenne Beispiele für eigenständig geregelte öffentlich-rechtliche Beratungsleistungen.",
  b: "Sucht- und Schuldnerberatung als kommunale Eingliederungsleistungen (§ 16a Nr. 2, 4 SGB II); Berufs- und Weiterbildungsberatung (§ 29 SGB III); Schwangerschaftskonfliktberatung (§§ 5 ff. SchKG); Pflegeberatung (§ 7a SGB XI). Zur Erfüllung öffentlich-rechtlicher Beratungspflichten werden häufig freie Träger eingeschaltet.",
  q: "§ 16a SGB II; § 29 SGB III; § 7a SGB XI" },

{ id: 17, t: "Rahmen & Rechtsbeziehungen", typ: "Frage",
  f: "In welcher Rechtsstellung handeln angestellte Berater*innen gegenüber Klienten?",
  b: "Die Beratungsleistung wird zwischen dem Rechtsträger der Einrichtung und dem Klienten erbracht (privatrechtliche Vereinbarung). Angestellte Berater*innen handeln aufgrund ihres Arbeitsvertrags mit Vertretungsbefugnis und für den Rechtsträger.",
  q: "" },

/* ---------- Schweigepflicht ---------- */
{ id: 18, t: "Schweigepflicht", typ: "Norm",
  f: "Welche Strafnorm schützt das Privatgeheimnis – und welche Nummer gilt für Sozialarbeiter*innen?",
  b: "§ 203 StGB (Verletzung von Privatgeheimnissen). Für staatlich anerkannte Sozialarbeiter*innen/-pädagog*innen ausdrücklich § 203 Abs. 1 Nr. 6 StGB – unabhängig vom Berufsfeld. Es muss sich nicht um ein „Geheimnis“ im Wortsinn handeln; geschützt ist, dass personenbezogene Daten aus dem Beratungsverhältnis nicht offenbart werden.",
  q: "§ 203 Abs. 1 Nr. 6 StGB" },

{ id: 19, t: "Schweigepflicht", typ: "Frage",
  f: "Welche Berufsgruppen erfasst § 203 Abs. 1 StGB (Auswahl aus der Beratung)?",
  b: "Berufspsychologen mit staatlich anerkannter Ausbildung (Nr. 2); Ehe-, Familien-, Erziehungs- oder Jugendberater (Nr. 4); Berater für Suchtfragen in anerkannter Stelle sowie Schwangerschaftskonfliktberatung (Nr. 4, 5); staatlich anerkannte Sozialarbeiter/-pädagogen unabhängig vom Berufsfeld (Nr. 6).",
  q: "§ 203 Abs. 1 StGB" },

{ id: 20, t: "Schweigepflicht", typ: "Frage",
  f: "Welches Verfassungsrecht steht hinter der Schweigepflicht?",
  b: "Das Recht auf informationelle Selbstbestimmung – Ausprägung des allgemeinen Persönlichkeitsrechts, Art. 2 Abs. 1 i.V.m. Art. 1 Abs. 1 GG (BVerfG, Volkszählungsurteil v. 15.12.1983). Jede Person entscheidet grundsätzlich selbst, was mit ihren personenbezogenen Daten geschieht.",
  q: "Art. 2 I i.V.m. Art. 1 I GG" },

{ id: 21, t: "Schweigepflicht", typ: "Definition",
  f: "Was ist ein „Privatgeheimnis“ bzw. ein personenbezogenes Datum?",
  b: "Personenbezogene Daten sind Einzelangaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person (Art. 4 Nr. 1 DSGVO). Sehr weiter Begriff: Name, Alter, Beruf, Krankheiten, Problemlagen, Verhaltensweisen – auch Wertungen, Meinungen und Prognosen. Die Bestimmbarkeitsschwelle ist niedrig.",
  q: "Art. 4 Nr. 1 DSGVO" },

{ id: 22, t: "Schweigepflicht", typ: "Frage",
  f: "Ist bereits die bloße Tatsache einer Beratungsanfrage geschützt?",
  b: "Ja. Auch die bloße Tatsache, dass jemand eine Beratung angefragt hat, ist geschützt – selbst wenn gar kein Termin zustande kommt.",
  q: "" },

{ id: 23, t: "Schweigepflicht", typ: "Frage",
  f: "In welchen drei Rechtsverhältnissen wirkt die Schweigepflicht (Zivil-/Arbeitsrecht)?",
  b: "1) Beratungsvertrag (Privatrecht): Schweigepflicht als Nebenpflicht – auch ohne ausdrückliche Vereinbarung. 2) Deliktsrecht: Verletzung des allgemeinen Persönlichkeitsrechts als „sonstiges Recht“, § 823 Abs. 1 BGB; zudem § 823 Abs. 2 BGB i.V.m. § 203 StGB (Schutzgesetz). 3) Arbeitsverhältnis: Bruch = Verletzung des Arbeitsvertrags.",
  q: "§ 823 BGB; § 203 StGB" },

{ id: 24, t: "Schweigepflicht", typ: "Frage",
  f: "Welche Folgen hat ein Bruch der Schweigepflicht – und welche ist praktisch am gravierendsten?",
  b: "Strafrecht: § 203 StGB (praktisch selten verfolgt, oft § 153 StPO). Zivilrecht: Schadensersatz (§ 823 BGB) – setzt messbaren Schaden voraus (selten). Arbeitsrecht (praktisch gravierendste Folge): Abmahnung, in schweren Fällen verhaltensbedingte Kündigung; Rückgriffshaftung bei Vorsatz/erheblicher Fahrlässigkeit. Dazu: Verlust der Vertrauensgrundlage.",
  q: "" },

{ id: 25, t: "Schweigepflicht", typ: "Norm",
  f: "Dürfen Informationen intern an Kolleg*innen/Gehilfen weitergegeben werden?",
  b: "Ja. Kein „Offenbaren“ i.S.d. § 203 StGB liegt vor, wenn Geheimnisse berufsmäßig tätigen Gehilfen oder mitwirkenden Personen zugänglich gemacht werden, soweit dies für die Tätigkeit erforderlich ist (§ 203 Abs. 3 StGB) – nicht aus Neugier. Mitwirkende unterliegen selbst der Schweigepflicht (§ 203 Abs. 4 S. 2 Nr. 1 StGB).",
  q: "§ 203 Abs. 3, Abs. 4 StGB" },

{ id: 26, t: "Schweigepflicht", typ: "Fall",
  f: "Darf ein Fall in der Supervision bei einer EXTERNEN Supervisorin besprochen werden?",
  b: "Externe Supervisor*innen wirken nicht i.S.d. § 203 Abs. 3 StGB mit → keine erlaubte Weitergabe. Lösung: Einwilligung des Klienten einholen ODER den Sachverhalt wirksam anonymisieren/pseudonymisieren. Interne Teambesprechungen sind dagegen als „mitwirkende Personen“ zulässig.",
  q: "§ 203 Abs. 3 StGB" },

{ id: 27, t: "Schweigepflicht", typ: "Definition",
  f: "Unterscheide Anonymisierung und Pseudonymisierung.",
  b: "Anonymisierung: kein Bruch nur, wenn die Zuordnung zu einer natürlichen Person sicher auszuschließen ist. Pseudonymisierung (Art. 4 Nr. 5 DSGVO): Daten sind ohne gesondert aufbewahrte Zusatzinformationen nicht mehr zuordenbar. Bei kleinem, überschaubarem Personenkreis oft nicht ausreichend → dann Einwilligung nötig.",
  q: "Art. 4 Nr. 5 DSGVO" },

{ id: 28, t: "Schweigepflicht", typ: "Frage",
  f: "Welche drei Abstufungen der Einwilligung (Schweigepflichtentbindung) gibt es?",
  b: "1) Ausdrückliche (schriftliche) Erklärung – Normalfall und sicherster Weg. 2) Einwilligung durch schlüssiges (konkludentes) Verhalten. 3) Mutmaßliche Einwilligung – nur in Ausnahmefällen. Grundregel: Einwilligung muss VORAB eingeholt werden; Voraussetzung ist Einsichtsfähigkeit. Keine Formvorschrift, Schriftform aber empfehlenswert.",
  q: "" },

{ id: 29, t: "Schweigepflicht", typ: "Frage",
  f: "Heilt eine nachträgliche Genehmigung eine bereits erfolgte Weitergabe?",
  b: "Nein. Die nachträgliche Genehmigung beseitigt die Rechtswidrigkeit der bereits erfolgten Weitergabe nicht. Sie stellt nur klar, dass seitens des Klienten keine entgegenstehenden Interessen bestanden haben.",
  q: "" },

{ id: 30, t: "Schweigepflicht", typ: "Frage",
  f: "Was muss eine wirksame Dokumentation der Schweigepflichtentbindung konkret benennen?",
  b: "Wer ist berechtigt, Daten weiterzugeben? Wem gegenüber (Person/Institution) gilt die Einwilligung? Welche Daten/Sachverhalte sind umfasst? Unbestimmte Generaleinwilligungen („gegenüber allen Behörden, Ärzten, dem Arbeitgeber“) sind ggf. unwirksam. Die Entbindung gilt auch gegenüber Angehörigen/Begleitpersonen.",
  q: "" },

{ id: 31, t: "Schweigepflicht", typ: "Norm",
  f: "Nenne die drei Voraussetzungen des rechtfertigenden Notstands (§ 34 StGB).",
  b: "1) Gegenwärtige, nicht anders abwendbare Gefahr für Leben, Leib, Freiheit, sexuelle Selbstbestimmung o.a. wichtiges Rechtsgut (Schaden droht „in allernächster Zeit“). 2) Abwägung: das geschützte Interesse überwiegt das beeinträchtigte (Schweigepflicht) wesentlich. 3) Der Geheimnisbruch ist geeignet, erforderlich und angemessen (mildestes Mittel).",
  q: "§ 34 StGB" },

{ id: 32, t: "Schweigepflicht", typ: "Frage",
  f: "Genügt ein bereits eingetretener Schaden in der Vergangenheit für § 34 StGB?",
  b: "Nein. Ein bloßer Schaden in der Vergangenheit (bzw. reine Strafverfolgung) rechtfertigt keinen Bruch. Es muss eine gegenwärtige Gefahr bestehen – klassisch die Wiederholungsgefahr, ggf. eine andere Ebene (z.B. drohende Selbstgefährdung) – fachlich gut zu begründen.",
  q: "§ 34 StGB" },

{ id: 33, t: "Schweigepflicht", typ: "Fall",
  f: "Ein Klient erscheint stark alkoholisiert, kündigt eine Autofahrt an; Polizei wird informiert – tatsächlich hatte er gar kein Auto dabei. Rechtswidrig?",
  b: "Nein, wenn die fachliche Gefährdungseinschätzung vertretbar war. War aus den bekannten Umständen mit hinreichender Wahrscheinlichkeit auf eine Gefahr zu schließen, ist der Irrtum nicht vorwerfbar (Putativ-/entschuldigender Notstand). Fachliche Einschätzung nachvollziehbar begründen und dokumentieren.",
  q: "§ 34 StGB" },

{ id: 34, t: "Schweigepflicht", typ: "Frage",
  f: "Worin unterscheiden sich „dürfen offenbaren“ und „müssen offenbaren“?",
  b: "„Dürfen“ = Rechtfertigungsgrund (§ 34 StGB) erlaubt den Bruch. „Müssen“ = aktive Handlungs-/Offenbarungspflicht. Eine Pflicht besteht nur in wenigen Ausnahmefällen: bei gesetzlicher Regelung oder Garantenstellung. Ein reiner Beratungsauftrag begründet i.d.R. keine Garantenstellung.",
  q: "" },

{ id: 35, t: "Schweigepflicht", typ: "Fall",
  f: "HIV-Fall (OLG Frankfurt 05.10.1999 – 8 U 67/99): Besteht eine Pflicht, die Ehefrau zu informieren?",
  b: "Eine Handlungspflicht ergibt sich nur ausnahmsweise: bei hoher Wahrscheinlichkeit erheblicher Gefahr UND einer Garantenstellung. Beim Arzt bejaht, weil die Ehefrau selbst Patientin war (Gesundheitsschutzpflicht). Auf eine reine Beratungsperson ohne solche Verantwortung ist das nicht übertragbar.",
  q: "OLG Frankfurt 8 U 67/99" },

{ id: 36, t: "Schweigepflicht", typ: "Norm",
  f: "Besteht eine Pflicht zur Strafanzeige, wenn man von Straftaten erfährt?",
  b: "Grundsätzlich nein. Eine Anzeigepflicht besteht nur bei bestimmten GEPLANTEN besonders schweren Straftaten (§ 138 StGB: z.B. Tötungsdelikte, Raub/räuberische Erpressung, gemeingefährliche Delikte). Bereits begangene Taten müssen nicht angezeigt werden – anders ggf., wenn vom Täter weiter eine Gefahr für das Opfer ausgeht.",
  q: "§ 138 StGB" },

{ id: 37, t: "Schweigepflicht", typ: "Norm",
  f: "Suizidgefahr: Müssen Hilfemaßnahmen eingeleitet werden?",
  b: "Bei akuter Gefährdung in hilfloser Lage ja – sonst Strafbarkeit wegen unterlassener Hilfeleistung (§ 323c StGB, z.B. Notarzt). Ob eine Selbsttötung ein „Unglücksfall“ ist, ist umstritten; ist unklar, ob eine freiverantwortliche Entscheidung vorliegt, kann im Zweifel von einem Unglücksfall ausgegangen werden → Handlungspflicht.",
  q: "§ 323c StGB" },

{ id: 38, t: "Schweigepflicht", typ: "Frage",
  f: "Haben Sozialarbeiter*innen im Strafverfahren ein Zeugnisverweigerungsrecht?",
  b: "Nein – anders als z.B. Ärzt*innen. Ausnahmen bestehen nur für Drogenberatungsstellen und Schwangerschaftskonfliktberatung (§ 53 Abs. 1 Nr. 3a, 3b StPO). Handlungsempfehlung: Klient*innen frühzeitig transparent hinweisen (Aussagepflicht ohnehin nur gegenüber der Staatsanwaltschaft, nicht der Polizei).",
  q: "§ 53 Abs. 1 Nr. 3a, 3b StPO" },

{ id: 39, t: "Schweigepflicht", typ: "Norm",
  f: "Welche eigene Übermittlungsbefugnis gilt in Kinderschutzfällen – und für wen?",
  b: "§ 4 Abs. 1–3 KKG (Gesetz zur Kooperation und Information im Kinderschutz). Gilt u.a. für Ehe-/Familien-/Erziehungs-/Jugend-/Suchtberatung, Schwangerschaftskonfliktberatung sowie staatlich anerkannte Sozialarbeiter*innen/-pädagog*innen. Auslöser: gewichtige Anhaltspunkte für die Gefährdung des Kindeswohls.",
  q: "§ 4 KKG" },

{ id: 40, t: "Schweigepflicht", typ: "Frage",
  f: "Welche Stufenfolge sieht § 4 KKG bei Kindeswohlgefährdung vor?",
  b: "Stufe 1 (§ 4 Abs. 1 KKG): Situation mit Kind/Jugendlichem und Personensorgeberechtigten erörtern und auf Hilfen hinwirken – soweit der wirksame Schutz nicht in Frage gestellt wird. Anspruch auf Beratung durch eine „insoweit erfahrene Fachkraft“ (§ 8a Abs. 4 SGB VIII). Stufe 2 (§ 4 Abs. 3 KKG): scheitert das, ist das Jugendamt zu informieren (Betroffene vorab hinweisen, außer der Schutzzweck steht entgegen). Bezug: § 8a SGB VIII, § 1666 Abs. 1 BGB.",
  q: "§ 4 KKG; § 8a SGB VIII; § 1666 BGB" },

/* ---------- Datenschutz ---------- */
{ id: 41, t: "Datenschutz", typ: "Norm",
  f: "Nenne die Grundsätze der Datenverarbeitung nach Art. 5 DSGVO.",
  b: "a) Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz; b) Zweckbindung (festgelegte, eindeutige, legitime Zwecke; Privileg für Archiv-/Forschungs-/Statistikzwecke, Art. 89 Abs. 1); c) Datenminimierung (auf das notwendige Maß beschränkt); d) Richtigkeit (sachlich richtig, aktuell; Unrichtiges löschen/berichtigen).",
  q: "Art. 5 DSGVO" },

{ id: 42, t: "Datenschutz", typ: "Norm",
  f: "Was regelt das Sozialgeheimnis (§ 35 SGB I)?",
  b: "Jeder hat Anspruch darauf, dass ihn betreffende Sozialdaten (§ 67 Abs. 2 SGB X) von den Leistungsträgern nicht unbefugt verarbeitet werden. Auch intern nur Befugten zugänglich. Sozialdaten von Beschäftigten/Angehörigen sind Personen, die Personalentscheidungen treffen, nicht zugänglich. Die Pflicht gilt auch nach Beendigung der Tätigkeit fort.",
  q: "§ 35 SGB I" },

/* ---------- Normenstruktur ---------- */
{ id: 43, t: "Normenstruktur", typ: "Definition",
  f: "Nenne die Normenhierarchie von oben nach unten.",
  b: "EU-Recht → Verfassungsrecht (GG) → Bundesgesetz (z.B. SGB XII) → Verordnung (z.B. DV zu § 90 SGB XII) → Satzung (nur gültig für die jeweilige Körperschaft des öffentlichen Rechts, z.B. Stadt Frankfurt).",
  q: "" },

{ id: 44, t: "Normenstruktur", typ: "Definition",
  f: "Wie ist eine Rechtsnorm strukturell aufgebaut?",
  b: "Die meisten Normen bestehen aus Voraussetzungen (Tatbestand) und Rechtsfolge – einem „Wenn … dann“-Schema. Beispiel § 19 Abs. 1 S. 1 SGB II: WENN erwerbsfähig und leistungsberechtigt (Voraussetzungen), DANN Bürgergeld/Grundsicherung (Rechtsfolge).",
  q: "§ 19 Abs. 1 SGB II" },

{ id: 45, t: "Normenstruktur", typ: "Definition",
  f: "Was ist eine kumulative Verknüpfung von Voraussetzungen – mit Beispiel?",
  b: "Alle Voraussetzungen müssen erfüllt sein (Signalwort „und“, auch bei bloßer Aufzählung). Beispiel Regelaltersrente (§ 35 S. 1 SGB VI): Anspruch, WENN 1. die Regelaltersgrenze erreicht UND 2. die allgemeine Wartezeit erfüllt ist. Nur wenn alle Voraussetzungen vorliegen, greift die Rechtsfolge.",
  q: "§ 35 SGB VI" },

{ id: 46, t: "Normenstruktur", typ: "Definition",
  f: "Was ist eine alternative Verknüpfung – mit Beispiel?",
  b: "Nur bestimmte oder Kombinationen bestimmter Voraussetzungen müssen erfüllt sein (Signalwort „oder“). Beispiel § 823 Abs. 1 BGB: „Wer vorsätzlich oder fahrlässig das Leben, den Körper, die Gesundheit, die Freiheit, das Eigentum oder ein sonstiges Recht … verletzt …“ – eine der aufgezählten Rechtsgutsverletzungen genügt.",
  q: "§ 823 Abs. 1 BGB" },

{ id: 47, t: "Normenstruktur", typ: "Frage",
  f: "Warum reicht der Wortlaut einer Norm oft nicht – Beispiel SGB II?",
  b: "Verwendete Begriffe sind häufig an anderer Stelle definiert. Beim Bürgergeld sind „Leistungsberechtigung“ und „Erwerbsfähigkeit“ in §§ 7 und 8 SGB II definiert; der Inhalt der Rechtsfolge „Bürgergeld“ in §§ 20–22 SGB II. Man muss den Verweisungen folgen.",
  q: "§§ 7, 8 SGB II" },

{ id: 48, t: "Normenstruktur", typ: "Frage",
  f: "Wie geht man bei der Rechtsanwendung im Einzelfall in drei Schritten vor?",
  b: "Schritt 1: Alle Voraussetzungen der Norm verstehen (kumulativ oder alternativ?). Schritt 2: Prüfen, ob die Voraussetzungen im konkreten Sachverhalt erfüllt sind (Vergleich Norm ↔ Lebenssachverhalt). Schritt 3: Rechtsfolge einfordern.",
  q: "" },

{ id: 49, t: "Normenstruktur", typ: "Frage",
  f: "Woran erkennt man eine Ermessensentscheidung – und was folgt daraus?",
  b: "Signalwörter „kann“ oder „darf“ eröffnen der Verwaltung eine Handlungsmöglichkeit (Ermessen). Das Ermessen MUSS ausgeübt werden; maßgeblich ist, ob der Zweck der Norm durch die Leistung erfüllt wird, und die Umsetzung muss sachgerecht sein (Grundregeln u.a. im SGB I).",
  q: "z.B. § 16 SGB II" },

/* ---------- Erkenntnisquellen ---------- */
{ id: 50, t: "Erkenntnisquellen", typ: "Definition",
  f: "Nenne die vier juristischen Auslegungsmethoden.",
  b: "1) Grammatikalische Auslegung (sprachlicher Wortsinn, z.B. Duden). 2) Historische Auslegung (ursprünglicher Wille des Gesetzgebers, Entstehungsgeschichte). 3) Systematische Auslegung (Regelungszusammenhang, andere Definitionen). 4) Teleologische Auslegung (aktueller Sinn und Zweck). Häufig müssen mehrere nebeneinander angewandt werden.",
  q: "" },

{ id: 51, t: "Erkenntnisquellen", typ: "Definition",
  f: "Was ist Kommentarliteratur und wie zitiert man sie?",
  b: "Erläuterungswerke, die einen Paragraphen systematisch Absatz für Absatz erläutern (mit Hinweisen zu Rechtsprechung/Literatur). Zugang z.B. über beck-online. Zitierbeispiel: „Wapler in Wiesner/Wapler, 6. Aufl. 2022, SGB VIII § 8a Rn. 10“. „Rn.“ = Randnummer der Kommentierung.",
  q: "" },

{ id: 52, t: "Erkenntnisquellen", typ: "Definition",
  f: "Wie ist eine Gerichtsentscheidung aufgebaut?",
  b: "Leitsätze (wesentliche rechtliche Aussagen); Tenor (Entscheidungsformel/Ergebnis); Tatbestand (Lebenssachverhalt + Verfahrensablauf); Entscheidungsgründe (nach Rechts-/Anspruchsgrundlagen geordnete rechtliche Bewertung).",
  q: "" },

{ id: 53, t: "Erkenntnisquellen", typ: "Frage",
  f: "Wie zitiert man eine Gerichtsentscheidung korrekt?",
  b: "Mit Gericht, Datum der Entscheidung und Aktenzeichen. Beispiel: „Landessozialgericht Nordrhein-Westfalen, Urt. v. 23.08.2021 – L 20 SO 20/20, Rn. 18, zit. n. juris.“ Bei Nutzung von juris kann die konkrete Randnummer mit dem Zusatz „zitiert nach juris“ angegeben werden.",
  q: "" },

/* ---------- Verwaltungsverfahren ---------- */
{ id: 54, t: "Verwaltungsverfahren", typ: "Definition",
  f: "Aus welchen drei Phasen besteht das Verwaltungsverfahren?",
  b: "1) Einleitungsphase (Regelfall: Antragstellung, § 16 SGB I). 2) Prüfphase (Behörde prüft, ob die Voraussetzungen des Leistungsgesetzes vorliegen; Feststellung der tatsächlichen Verhältnisse). 3) Entscheidungsphase (rechtsverbindliche Regelung durch Bescheid, § 31 SGB X).",
  q: "§ 16 SGB I; § 31 SGB X" },

{ id: 55, t: "Verwaltungsverfahren", typ: "Definition",
  f: "Was besagt das Meistbegünstigungsprinzip?",
  b: "Im Zweifel muss die Behörde davon ausgehen, dass die für die antragstellende Person günstigste Sozialleistung begehrt wird. Eine Eigenheit des Sozialrechts (nicht ausdrücklich im SGB geregelt). Der Träger soll zudem auf klare, sachdienliche Anträge hinwirken (§ 16 Abs. 3 SGB I).",
  q: "§ 16 Abs. 3 SGB I" },

{ id: 56, t: "Verwaltungsverfahren", typ: "Definition",
  f: "Wann liegt ein Bescheid (Verwaltungsakt) vor?",
  b: "§ 31 SGB X: bei einer auf eine konkrete Regelung für einen bestimmten Adressaten im Einzelfall gerichteten Aussage. Bloße Informationen, Ankündigungen oder Anhörungen enthalten keine Regelung und sind kein Bescheid. Faustregel: Am Ende steht meist eine Entscheidung + Rechtsbehelfsbelehrung.",
  q: "§ 31 SGB X" },

{ id: 57, t: "Verwaltungsverfahren", typ: "Definition",
  f: "Was ist eine Anhörung – und ist sie ein Bescheid?",
  b: "Eine Anhörung ist die Aufforderung, sich zu äußern (Absicht, einen Sachverhalt zu regeln). Sie ist KEIN Bescheid, weil noch keine Regelung getroffen wird. Eine unterbliebene Äußerung kann im Widerspruch nachgeholt werden.",
  q: "§ 24 SGB X" },

{ id: 58, t: "Verwaltungsverfahren", typ: "Frage",
  f: "Welche Folge hat eine fehlende oder fehlerhafte Rechtsbehelfsbelehrung?",
  b: "Der Bescheid bleibt wirksam, aber die Widerspruchsfrist verlängert sich von 1 Monat auf 1 Jahr (§ 66 SGG). Die Rechtsbehelfsbelehrung ist zwar regelmäßiger Bestandteil eines Bescheides, ihr Fehlen macht ihn aber nicht unwirksam.",
  q: "§ 66 SGG" },

{ id: 59, t: "Verwaltungsverfahren", typ: "Definition",
  f: "Was besagt der allgemeine Beweislastgrundsatz im Sozialverwaltungsverfahren?",
  b: "Kann nicht hinreichend aufgeklärt werden, ob die Voraussetzungen einer Norm vorliegen, wird nach Beweislast entschieden: Jeder Beteiligte trägt die Beweislast für die ihm günstigen Tatsachen. Antragsteller → Anspruchsvoraussetzungen; Behörde → Tatsachen, die einen Anspruch einschränken/aufheben.",
  q: "" },

{ id: 60, t: "Verwaltungsverfahren", typ: "Frage",
  f: "Wie wird ein bestehender Bescheid aufgehoben?",
  b: "Aufhebungen von Bescheiden müssen per Aufhebungsbescheid ergehen, damit der vorangegangene Bescheid aufgehoben ist. Eine bloße abweichende Mitteilung genügt nicht.",
  q: "" },

/* ---------- Widerspruch & Rechtsschutz ---------- */
{ id: 61, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "Wie lang ist die Widerspruchsfrist – und ab wann läuft sie?",
  b: "1 Monat, nachdem der Bescheid dem Adressaten bekannt gegeben wurde (§ 84 Abs. 1 SGG). Fehlt/ist die Rechtsbehelfsbelehrung fehlerhaft, gilt eine Jahresfrist (§ 66 Abs. 2 SGG).",
  q: "§ 84 Abs. 1 SGG; § 66 Abs. 2 SGG" },

{ id: 62, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "In welcher Form ist der Widerspruch einzulegen?",
  b: "Schriftform (Brief oder Fax), § 84 Abs. 1 SGG. Per E-Mail nur mit qualifizierter elektronischer Signatur (§ 36a Abs. 2 SGB I). Möglich ist auch die Vorsprache bei der Behörde zur Niederschrift. Goldene Regel: sichersten Weg wählen → Schriftform (Nachweisbarkeit).",
  q: "§ 84 Abs. 1 SGG; § 36a Abs. 2 SGB I" },

{ id: 63, t: "Widerspruch & Rechtsschutz", typ: "Frage",
  f: "Wie berechnet man die Widerspruchsfrist (vereinfacht)?",
  b: "Fristbeginn: Tag des Eingangs des Bescheides (Zugang im Briefkasten), z.B. 05.06.2025. Fristende: Tag des Folgemonats mit zahlenmäßig gleicher Benennung (05.07.), NICHT „4 Wochen“. Fällt das Fristende auf Wochenende/Feiertag, gilt der nächste Werktag. Im Zweifel den frühestmöglichen Zugang ansetzen (oder Erstellung + 4 Tage).",
  q: "§ 84 SGG" },

{ id: 64, t: "Widerspruch & Rechtsschutz", typ: "Fall",
  f: "Formuliere einen fristwahrenden Widerspruch.",
  b: "„Hiermit lege ich Widerspruch gegen den Bescheid vom … mit dem Aktenzeichen … ein. Eine Begründung reiche ich nach.“ Möglicher Zusatz: „Zur Erstellung der Begründung bitte ich um Akteneinsicht (§ 25 SGB X). Bitte teilen Sie mir mit, mit wem ich einen Termin vereinbaren kann.“ Eine Begründung ist gesetzlich nicht zwingend, aber empfehlenswert.",
  q: "§ 25 SGB X" },

{ id: 65, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "Was ist der Überprüfungsantrag (§ 44 SGB X) – und welche Fristen/Grenzen gelten?",
  b: "Auch nach Bestandskraft kann die Behörde zur Überprüfung der Rechtmäßigkeit eines Bescheides verpflichtet werden. Keine feste Frist. Aber: Sozialleistungen werden rückwirkend nur für 4 Jahre erbracht (§ 44 Abs. 4 S. 1 SGB X); bei Grundsicherung nur für 1 Jahr (§ 40 Abs. 1 SGB II, § 116a SGB XII).",
  q: "§ 44 SGB X" },

{ id: 66, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "Was gilt bei einer versäumten Frist wegen Krankheit/Abwesenheit?",
  b: "Wiedereinsetzung in den vorigen Stand (§ 27 SGB X), wenn jemand ohne Verschulden gehindert war, die Frist zu wahren. Antrag innerhalb von zwei Wochen nach Wegfall des Hindernisses – zusammen mit der versäumten Handlung (dem Widerspruch).",
  q: "§ 27 SGB X" },

{ id: 67, t: "Widerspruch & Rechtsschutz", typ: "Frage",
  f: "Wie endet das Widerspruchsverfahren und wie geht es dann weiter?",
  b: "Durch Widerspruchsbescheid: Abhilfe (Änderung zugunsten) oder Zurückweisung (Bestätigung). Gegen Bescheid + Widerspruchsbescheid kann Klage vor dem Sozialgericht erhoben werden. Klagefrist 1 Monat (§ 87 SGG); schriftlich oder zur Niederschrift beim Gericht (§ 90 SGG). Kein Anwaltszwang, keine Verfahrenskosten außer den eigenen.",
  q: "§§ 87, 90 SGG" },

{ id: 68, t: "Widerspruch & Rechtsschutz", typ: "Frage",
  f: "Vor welchem Gericht wird in der Kinder- und Jugendhilfe (SGB VIII) geklagt?",
  b: "Vor dem Verwaltungsgericht (VG) – nicht dem Sozialgericht. Auch hier entstehen bei sozialrechtlichen Klagen keine Kosten.",
  q: "SGB VIII → VG" },

{ id: 69, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "Was tun, wenn eine begünstigende Leistung abgelehnt wird und der Klient dringend darauf angewiesen ist?",
  b: "Der Widerspruch bewirkt hier keine vorläufige Leistung. Beim Sozialgericht ist ein Eilverfahren einzuleiten – die einstweilige Anordnung (§ 86b Abs. 2 SGG) – um eine vorläufige Regelung für die Dauer des Verfahrens zu erreichen. Es muss glaubhaft gemacht werden, dass die Leistung dringend erforderlich ist.",
  q: "§ 86b Abs. 2 SGG" },

{ id: 70, t: "Widerspruch & Rechtsschutz", typ: "Norm",
  f: "Welche Wirkung hat ein Widerspruch gegen eine belastende Regelung (z.B. Kürzung)?",
  b: "Grundsätzlich aufschiebende Wirkung (§ 86a SGG) – die belastende Regelung wird zunächst nicht umgesetzt. Aber: zahlreiche Ausnahmen, v.a. im Grundsicherungsrecht (§ 39 SGB II), in denen der Widerspruch keine aufschiebende Wirkung hat; dann Eilverfahren nach § 86b Abs. 1 SGG.",
  q: "§ 86a SGG; § 39 SGB II" },

/* ---------- Antragstellung ---------- */
{ id: 71, t: "Antragstellung", typ: "Frage",
  f: "Welche Funktion hat die Antragstellung?",
  b: "Der Antrag eröffnet ein Verwaltungsverfahren, das mit der Entscheidung (Bescheid) über die Leistung abgeschlossen wird. Bei vielen Sozialleistungen ist die Antragstellung zugleich selbst eine Leistungsvoraussetzung.",
  q: "§ 16 SGB I" },

{ id: 72, t: "Antragstellung", typ: "Norm",
  f: "Bei welchen Leistungen ist ein Antrag zwingend – und wo genügt Kenntnis?",
  b: "Nur auf Antrag: Grundsicherung für Arbeitsuchende (§ 37 Abs. 1 SGB II), Grundsicherung bei Erwerbsminderung (§ 44 Abs. 1 SGB XII). Ohne Antrag ab Kenntnis: Hilfe zum Lebensunterhalt/weitere Sozialhilfe ab Bekanntwerden der Hilfebedürftigkeit (§ 18 Abs. 1 SGB XII). Rente: grds. ab Antrag (§ 99 Abs. 1 SGB VI), Rückwirkung bis 3 Monate.",
  q: "§ 37 SGB II; § 44/§ 18 SGB XII; § 99 SGB VI" },

{ id: 73, t: "Antragstellung", typ: "Frage",
  f: "In welcher Form muss ein Antrag gestellt werden?",
  b: "Grundsätzlich formlos (§ 16 SGB I), sofern nicht ausdrücklich anders geregelt (Ausnahme z.B. § 141 SGB III persönliche Arbeitslosmeldung). Ausreichend ist eine Erklärung, dass eine Leistung begehrt wird – auch telefonisch, per Fax oder E-Mail. Empfehlung: nachweisbare Form / Eingangsbestätigung. Formulare müssen nicht bei Antragstellung vorliegen.",
  q: "§ 16 SGB I" },

{ id: 74, t: "Antragstellung", typ: "Frage",
  f: "Was besagt das Monatsprinzip – warum kann Abwarten sinnvoll sein?",
  b: "Leistungen beginnen ab dem Antragsmonat; bei der Grundsicherung wirkt der Antrag auf den Monatsanfang zurück (§ 37 Abs. 2 S. 2 SGB II, § 44 Abs. 2 S. 1 SGB XII). Die Antragstellung ist zugleich Stichtag für die Abgrenzung Einkommen/Vermögen: Alles, was VOR dem Antragsmonat zufloss, ist Vermögen. Daher kann es ratsam sein, erwartetes Geld erst zufließen zu lassen und im Folgemonat zu beantragen.",
  q: "§ 37 Abs. 2 SGB II; § 44 Abs. 2 SGB XII" },

{ id: 75, t: "Antragstellung", typ: "Norm",
  f: "Was passiert bei Antragstellung bei einem UNzuständigen Träger?",
  b: "Auch ein Antrag bei einem unzuständigen Sozialleistungsträger (oder bestimmten weiteren Behörden, § 16 Abs. 2 S. 2 SGB I) wahrt den Leistungsbeginn ab Eingang dort. Der Antrag ist unverzüglich an die zuständige Behörde weiterzuleiten (§ 16 Abs. 2 S. 1 SGB I).",
  q: "§ 16 Abs. 2 SGB I" },

{ id: 76, t: "Antragstellung", typ: "Frage",
  f: "Welche Folgen hat eine verspätete Antragstellung?",
  b: "Unmittelbarer Rechtsverlust: Bei Grundsicherung beginnt die Bedarfszeit erst mit dem Antragsmonat. Eine Wiedereinsetzung wird bei versäumter Antragstellung nicht gewährt. Auch Folgewirkungen fehlen (z.B. Beginn von KV-Absicherung, rentenrechtliche Anrechnungszeiten). Mietrückstände vor Antragstellung ggf. nur als Darlehen (§ 22 Abs. 8 SGB II).",
  q: "§ 22 Abs. 8 SGB II" },

{ id: 77, t: "Antragstellung", typ: "Definition",
  f: "Was ist der sozialrechtliche Herstellungsanspruch und welche Voraussetzungen hat er?",
  b: "Unterbleibt ein Antrag wegen fehlerhafter Beratung durch den Träger, wird der Betroffene so gestellt, als sei er richtig beraten worden. Voraussetzungen: 1) Pflichtverletzung der Behörde (z.B. § 14 SGB I Beratung, § 15 Auskunft); 2) dadurch verursachter Nachteil; 3) Beseitigung durch zulässige Amtshandlung (kein Geldersatz, sondern z.B. Nachholung des Antrags). Wichtig: Beratungskontakte dokumentieren – Nachweislast liegt beim Betroffenen.",
  q: "§§ 14, 15 SGB I" },

/* ---------- Mitwirkungspflichten ---------- */
{ id: 78, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Wo sind die Mitwirkungspflichten geregelt und wozu dienen sie?",
  b: "§§ 60–67 SGB I (dazu bereichsspezifische Pflichten in den einzelnen SGB, z.B. § 56 SGB II). Sie sollen die Behörde in die Lage versetzen, die Anspruchsvoraussetzungen zu prüfen. Eine Mitwirkungspflicht muss konkret sein; der Betroffene muss belehrt worden sein.",
  q: "§§ 60–67 SGB I" },

{ id: 79, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Was verlangt § 60 SGB I (Angabe von Tatsachen)?",
  b: "Wer Leistungen beantragt/erhält, muss alle leistungserheblichen Tatsachen angeben (Einkommen, Vermögen, Familienverhältnisse, Alter, Gesundheit), auf Verlangen Dritten die Auskunft gestatten (Schweigepflichtentbindung, soweit anders nicht zu erlangen), Änderungen unverzüglich mitteilen und Beweismittel benennen/Urkunden vorlegen (z.B. Kontoauszüge, § 60 Abs. 1 S. 1 Nr. 3).",
  q: "§ 60 SGB I" },

{ id: 80, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Was regeln §§ 61–64 SGB I?",
  b: "§ 61: Pflicht zum persönlichen Erscheinen (Beistand möglich, § 13 Abs. 4 SGB X; Auslagenerstattung § 65a SGB I). § 62: Pflicht, sich zumutbaren ärztlichen/psychologischen Untersuchungen zu unterziehen. § 63: Pflicht zur Heilbehandlung (z.B. Entwöhnung). § 64: Pflicht zur Teilnahme an berufsfördernden Maßnahmen.",
  q: "§§ 61–64 SGB I" },

{ id: 81, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Welche Grenzen der Mitwirkung nennt § 65 SGB I?",
  b: "Stets zu prüfen (§§ 60–64). Keine Pflicht bei: Unangemessenheit zur Leistung (Nr. 1, z.B. Blankoeinwilligung „für alle Ärzte/Banken“); Verweigerung aus wichtigem Grund (Nr. 2 – wichtige persönliche Belange, Alter); wenn der Träger sich die Erkenntnisse mit zumutbarem Aufwand selbst beschaffen kann, z.B. Amtshilfe (Nr. 3). Zudem Aussageverweigerungsrechte, § 65 Abs. 3.",
  q: "§ 65 SGB I" },

{ id: 82, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Welche Voraussetzungen hat die Versagung/Entziehung wegen fehlender Mitwirkung (§ 66 SGB I)?",
  b: "1) Konkret ermittelte Mitwirkungspflicht (§§ 60–64); 2) Grenzen des § 65 eingehalten; 3) Aufklärung von Amts wegen ausgeschöpft (§ 20 SGB X); 4) sachgerechte Ermessensausübung; 5) schriftlicher, hinreichend bestimmter Hinweis auf die Folgen + ggf. Fristsetzung zur Nachholung (§ 66 Abs. 3). Zudem muss die fehlende Mitwirkung die Sachaufklärung erheblich erschwert haben.",
  q: "§ 66 SGB I" },

{ id: 83, t: "Mitwirkungspflichten", typ: "Norm",
  f: "Kann eine unterlassene Mitwirkung nachgeholt werden?",
  b: "Ja. Nach § 67 SGB I kann die Leistung nachträglich (ganz oder teilweise) erbracht werden, wenn die Mitwirkung nachgeholt wird und die Leistungsvoraussetzungen vorliegen. Hinweis: In der Praxis ist rund die Hälfte der Versagungsbescheide wegen fehlender Mitwirkung fehlerhaft – ein Widerspruch lohnt oft.",
  q: "§ 67 SGB I" },

{ id: 84, t: "Mitwirkungspflichten", typ: "Fall",
  f: "Eine Kindsmutter will den Namen des Kindsvaters nicht mitteilen. Geht die Mitwirkungspflicht vor?",
  b: "Nein. Hier überwiegt das Recht auf körperliche Unversehrtheit des Kindes (bzw. der Mutter) die Mitwirkungspflicht – die Leistung darf nicht allein deswegen versagt werden. Mitwirkungspflichten stehen unter dem Vorbehalt der Zumutbarkeit und wichtiger persönlicher Belange (§ 65 SGB I).",
  q: "§ 65 SGB I" },

/* ---------- Sozialrecht-Überblick ---------- */
{ id: 85, t: "Sozialrecht-Überblick", typ: "Definition",
  f: "Was sind die „Strukturgesetzbücher“ des Sozialrechts und was regeln sie?",
  b: "SGB I, IV, X und das SGG enthalten selbst keine Sozialleistungen, sondern Regelungsmaterie, die für die anderen Bücher gilt. SGB I: Allgemeiner Teil (soziale Rechte, Beratung § 14, Antrag § 16, Mitwirkung §§ 60–67, Ermessen). SGB IV: gemeinsame Vorschriften der Sozialversicherung. SGB X: Verwaltungsverfahren/Datenschutz. SGG: Sozialgerichtsverfahren.",
  q: "SGB I, IV, X; SGG" },

{ id: 86, t: "Sozialrecht-Überblick", typ: "Frage",
  f: "Klausur-Radar: Welches Buch/welcher Träger bei welcher Person?",
  b: "Erwerbsfähig (15–65 J.) + kein Einkommen → SGB II (Jobcenter). Voll erwerbsgemindert / über Altersgrenze → SGB XII (Sozialamt). Kind/Jugendliche(r) bzw. Erziehung → SGB VIII (Jugendamt). Unterscheidung SGB II/XII u.a. nach Arbeitsfähigkeit (unter 3 Std./Tag → eher SGB XII).",
  q: "SGB II / XII / VIII" },

{ id: 87, t: "Sozialrecht-Überblick", typ: "Definition",
  f: "Ordne die wichtigsten SGB-Bücher der Sozialversicherung zu.",
  b: "SGB III Arbeitsförderung (Arbeitsagentur, ALG I). SGB V gesetzliche Krankenversicherung. SGB VI Rentenversicherung. SGB VII Unfallversicherung (Berufsgenossenschaften). SGB IX Reha/Teilhabe/Schwerbehindertenrecht. SGB XI Pflegeversicherung. SGB XIV Soziale Entschädigung (früher OEG/BVG u.a.).",
  q: "" },

{ id: 88, t: "Sozialrecht-Überblick", typ: "Norm",
  f: "Wie unterscheidet § 43 SGB VI volle und teilweise Erwerbsminderung?",
  b: "Maßgeblich ist das Restleistungsvermögen auf dem allgemeinen Arbeitsmarkt: unter 3 Stunden/Tag arbeitsfähig → volle Erwerbsminderungsrente; 3 bis unter 6 Stunden → teilweise Erwerbsminderungsrente. Die Kategorie ermöglicht auch die Zuordnung zu den Leistungssystemen (SGB II vs. SGB XII).",
  q: "§ 43 SGB VI" },

{ id: 89, t: "Sozialrecht-Überblick", typ: "Frage",
  f: "Wie ist das Wohngeld einzuordnen und wie verhält es sich zur Grundsicherung?",
  b: "Wohngeld ist im Wohngeldgesetz gesondert geregelt (materiell Sozialrecht), Träger: Stadt-/Kreisverwaltung, Rechtsweg VG. Es ist ein Mietzuschuss (auch bei Wohneigentum eingeschränkt) für Personen OHNE SGB II/XII-Bezug. Ein Mindesteinkommen muss vorhanden sein; nur in einem schmalen Einkommensband gibt es Wohngeld.",
  q: "WoGG" },

{ id: 90, t: "Sozialrecht-Überblick", typ: "Definition",
  f: "Nenne Aufgaben und Rechtsweg für SGB VIII (Kinder- und Jugendhilfe).",
  b: "Träger: Jugendamt. Aufgaben u.a.: Förderung der Erziehung (§§ 11–14), Hilfe zur Erziehung (§§ 27–35), Inobhutnahme (§ 42), Trennungsberatung (§ 17), Schutzauftrag (§ 8a). Leistungsberechtigt sind die Erziehungsberechtigten. Rechtsweg: Verwaltungsgericht (VG).",
  q: "SGB VIII" },

/* ---------- Gemeinschaften (BG/HG/WG) ---------- */
{ id: 91, t: "Gemeinschaften (BG/HG/WG)", typ: "Norm",
  f: "Was ist eine Bedarfsgemeinschaft (§ 7 Abs. 3 SGB II) und welche Rechtsfolge hat sie?",
  b: "Zusammenschluss mit stärkster Bindung: Partner (Ehegatte, Lebenspartner oder Einstehensgemeinschaft) sowie unverheiratete Kinder unter 25 im Haushalt und deren Eltern/Partner. Rechtsfolge: Einkommen und Vermögen werden zusammen berücksichtigt (Anrechnung quer durch die BG), gemeinsamer Bedarf → Leistung sinkt oder entfällt.",
  q: "§ 7 Abs. 3 SGB II" },

{ id: 92, t: "Gemeinschaften (BG/HG/WG)", typ: "Norm",
  f: "Woran erkennt man eine Verantwortungs- und Einstehensgemeinschaft (§ 7 Abs. 3a SGB II)?",
  b: "Vermutet bei Indizien wie: Zusammenleben länger als 1 Jahr, gemeinsames Kind, Versorgung von Kindern/Angehörigen im Haushalt, Befugnis, über Einkommen/Vermögen des anderen zu verfügen. Der „Einstehenswille“ wird über diese Indizien vermutet. Es ist die stärkste Bindung mit voller wechselseitiger Anrechnung.",
  q: "§ 7 Abs. 3a SGB II" },

{ id: 93, t: "Gemeinschaften (BG/HG/WG)", typ: "Norm",
  f: "Was ist die Haushaltsgemeinschaft nach § 9 Abs. 5 SGB II?",
  b: "Zusammenleben mit Verwandten/Verschwägerten (§§ 1589, 1590 BGB) + Wirtschaften „aus einem Topf“ (mehr als bloßes Wohnen). Nur Verwandte/Verschwägerte! Rechtsfolge: widerlegbare Vermutung, dass Unterstützung geleistet wird, soweit nach Einkommen/Vermögen zumutbar (mit Freibeträgen). Schwächer als die Bedarfsgemeinschaft.",
  q: "§ 9 Abs. 5 SGB II" },

{ id: 94, t: "Gemeinschaften (BG/HG/WG)", typ: "Definition",
  f: "Was kennzeichnet eine reine Wohngemeinschaft – und wo liegt die Gefahr?",
  b: "Bloßes Zusammenwohnen, getrenntes Wirtschaften, kein Einstehenswille, keine Verwandtschaft i.S.d. § 9 Abs. 5. Rechtsfolge: keine Anrechnung, jede Person hat eigenen Anspruch. Achtung: Bei Vorliegen von Indizien droht Umqualifizierung in eine Bedarfs- oder Haushaltsgemeinschaft.",
  q: "" },

{ id: 95, t: "Gemeinschaften (BG/HG/WG)", typ: "Norm",
  f: "Wie unterscheidet sich die Haushaltsgemeinschaft im SGB XII (§ 39) vom SGB II (§ 9 Abs. 5)?",
  b: "Zentraler Unterschied: § 9 Abs. 5 SGB II erfasst nur Verwandte/Verschwägerte; § 39 SGB XII erfasst ALLE Mitbewohner („andere Personen“ in einer Wohnung). § 39 begründet eine widerlegbare Vermutung gemeinsamen Wirtschaftens bereits beim bloßen Zusammenleben (Beweislastumkehr, höhere Darlegungslast). Ausnahmen § 39 S. 3 (z.B. Schwangere, Elternteil mit Kind < 6).",
  q: "§ 39 SGB XII; § 9 Abs. 5 SGB II" },

{ id: 96, t: "Gemeinschaften (BG/HG/WG)", typ: "Frage",
  f: "Wie heißt das SGB-XII-Pendant zur Bedarfsgemeinschaft – und was gilt dort?",
  b: "Die Einsatzgemeinschaft (§ 27 Abs. 2, § 43 Abs. 1 S. 2 SGB XII). Einkommen/Vermögen des Partners über dessen eigenen Bedarf (§ 27a) werden eingesetzt. Es gilt das Individualisierungsprinzip: Bedarf und Einsatz werden je Person getrennt betrachtet. Den Begriff „Bedarfsgemeinschaft“ kennt das SGB XII nicht.",
  q: "§§ 27, 43 SGB XII" },

/* ---------- Vermögen & Grundsicherung ---------- */
{ id: 97, t: "Vermögen & Grundsicherung", typ: "Norm",
  f: "Welche Voraussetzungen hat die Grundsicherung im Alter (§ 41 SGB XII)?",
  b: "Leistungsberechtigt sind Personen mit gewöhnlichem Aufenthalt im Inland, die ihren notwendigen Lebensunterhalt nicht aus Einkommen und Vermögen bestreiten können, wenn sie zusätzlich erfüllen: Altersgrenze 65–67 (Abs. 2) ODER dauerhaft volle Erwerbsminderung (Abs. 3) ODER Personen ab 18 mit Behinderung und bestimmten SGB-IX-Leistungen (Abs. 3a).",
  q: "§ 41 SGB XII" },

{ id: 98, t: "Vermögen & Grundsicherung", typ: "Norm",
  f: "Wie viel Vermögen ist bei der Sozialhilfe einzusetzen – und wie hoch ist der Schonbetrag?",
  b: "§ 90 Abs. 1 SGB XII: Einzusetzen ist das gesamte verwertbare Vermögen. § 90 Abs. 2 Nr. 9: ein „kleiner Barbetrag“ bleibt verschont. Höhe laut Durchführungsverordnung zu § 90 Abs. 2 Nr. 9 SGB XII: 10.000 € pro volljähriger Person. Vermögen über dem Freibetrag ist zuerst für den Lebensunterhalt einzusetzen.",
  q: "§ 90 SGB XII; DV zu § 90 Abs. 2 Nr. 9" },

{ id: 99, t: "Vermögen & Grundsicherung", typ: "Fall",
  f: "Ein 67-jähriger Klient ohne Einkommen hat 11.000 € Rücklagen und beantragt Grundsicherung. Wie entscheidet das Sozialamt?",
  b: "Ablehnung: Mit 1.000 € über dem Vermögensfreibetrag von 10.000 € (§ 90 Abs. 2 Nr. 9 SGB XII i.V.m. DV) kann er seinen Lebensunterhalt zunächst selbst bestreiten. Der überschießende Betrag ist zuerst einzusetzen.",
  q: "§ 90 SGB XII" },

{ id: 100, t: "Vermögen & Grundsicherung", typ: "Frage",
  f: "Welche Handlungsoptionen hat der Klient mit 11.000 €, um doch Grundsicherung zu erhalten?",
  b: "1) Vor Antragstellung geschontes Vermögen erwerben, z.B. angemessenen Hausrat (§ 90 Abs. 2 Nr. 4 SGB XII). 2) Eine „Härte“ nach § 90 Abs. 3 SGB XII geltend machen. 3) Die 1.000 € zunächst für den Lebensunterhalt verbrauchen und im Folgemonat erneut einen Antrag stellen.",
  q: "§ 90 Abs. 2, 3 SGB XII" },

{ id: 101, t: "Vermögen & Grundsicherung", typ: "Norm",
  f: "Nenne wichtige nach § 90 Abs. 2 SGB XII geschützte Vermögensarten.",
  b: "U.a.: staatlich gefördertes Altersvorsorgevermögen (Nr. 2), angemessener Hausrat (Nr. 4), Gegenstände für Berufsausbildung/Erwerbstätigkeit (Nr. 5), Familien-/Erbstücke bei besonderer Härte (Nr. 6), angemessenes selbstbewohntes Hausgrundstück (Nr. 8), kleinere Barbeträge (Nr. 9). Zusätzlich Härtefallschutz nach Abs. 3.",
  q: "§ 90 Abs. 2 SGB XII" },

{ id: 102, t: "Vermögen & Grundsicherung", typ: "Norm",
  f: "Was ist das Grundprinzip des SGB II (Bürgergeld/Grundsicherung)?",
  b: "Bedarf minus eigene Mittel (Einkommen/Vermögen) = Leistungsanspruch. Schlüsselnormen: § 7 (Voraussetzungen), § 9 (Hilfebedürftigkeit), §§ 11/11b (Einkommen/Freibeträge), § 12 (Vermögen), § 16 (Eingliederung), § 31a (Sanktionen). Träger: Jobcenter/Agentur für Arbeit bzw. kommunale Träger.",
  q: "§§ 7, 9, 19 SGB II" },

/* ---------- Zusatz / Vertiefung ---------- */
{ id: 103, t: "Antragstellung", typ: "Norm",
  f: "Was regelt § 28 SGB X (Nachholung eines Antrags)?",
  b: "Wurde eine andere Sozialleistung beantragt (und deshalb der Bürgergeld-Antrag unterlassen) oder ist eine andere Leistung rückwirkend zu erstatten, kann der Antrag nachgeholt werden. Bei der Grundsicherung muss dies unverzüglich geschehen, spätestens bis zum Ablauf des Monats, in dem der Ablehnungs-/Erstattungsbescheid bindend wurde. Rückwirkung auf 1 Jahr begrenzt.",
  q: "§ 28 SGB X i.V.m. § 40 Abs. 3 SGB II" },

{ id: 104, t: "Verwaltungsverfahren", typ: "Frage",
  f: "Was ist die Zugangsfiktion und wie kann man ihr begegnen?",
  b: "Für den Zugang eines Bescheides wird häufig eine Frist unterstellt (z.B. Erstellung + einige Tage). Der Betroffene kann den tatsächlichen Zugang bestreiten – Ausnahme: förmliche Zustellung (gelber Brief/Postzustellungsurkunde, PZU). Im Zweifel für die Fristberechnung den frühestmöglichen Zugang ansetzen.",
  q: "" },

{ id: 105, t: "Erkenntnisquellen", typ: "Definition",
  f: "Was bedeutet „Rechtliche Regelungswirkung ohne die Eigenschaft formeller Rechtsnormen“?",
  b: "Es gibt Vorgaben, die faktisch wirken, aber keine formellen Gesetze sind – z.B. norminterpretierende bzw. fachliche Weisungen (Dienstanweisungen der Verwaltung, etwa der Jobcenter/Arbeitsagentur). Sie binden die Verwaltung intern, sind aber keine Rechtsnormen mit Außenwirkung wie Gesetze oder Verordnungen.",
  q: "" },

{ id: 106, t: "Schweigepflicht", typ: "Fall",
  f: "Ein Klient hat einen Termin. Ein Kollege von ihm ruft an, um selbst einen Termin zu vereinbaren; Sie sagen, Sie könnten ihn nicht beraten, weil bereits ein Termin mit dem Kollegen bestehe. Korrekt?",
  b: "Nein. Bereits die Tatsache, dass die erste Person einen Beratungstermin hat, ist ein geschütztes personenbezogenes Datum. Diese Information gegenüber dem zweiten Anrufer offenzulegen, verletzt die Schweigepflicht – auch wenn nur eine Terminvereinbarung mitgeteilt wird.",
  q: "§ 203 StGB" },

{ id: 107, t: "Beratungsauftrag", typ: "Frage",
  f: "Warum ist die strukturierte Auftragsklärung ein Merkmal von Professionalität?",
  b: "Sie schafft Transparenz über den Beratungsgegenstand, verhindert unterschiedliche Vorstellungen von Berater und Klient und macht das Ergebnis überprüfbar (Ergebnis = Antwort auf die als Frage formulierte Auftragsfrage). „Keine Beratung ohne Auftrag“ – juristisch ist Beratung ohne Auftrag zwar möglich, führt aber zu schlechten Ergebnissen.",
  q: "" },

{ id: 108, t: "Sozialrecht-Überblick", typ: "Frage",
  f: "Was sollte man zur Klausur über die Dynamik des Sozialrechts wissen?",
  b: "Sozialrecht ist hochdynamisch – Auswendiglernen einzelner Beträge ist wenig sinnvoll. Angestrebt ist Überblickskompetenz: die Struktur des Sozialrechts kennen, Lebensverhältnisse der Klient*innen einordnen und wissen, WO man was findet (Handbuch Sozialrechtsberatung online, beck-online, juris). Die Klausur ist eine Open-Book-Klausur (Beratungsfall rechtlich erläutern).",
  q: "" },

{ id: 109, t: "Datenschutz", typ: "Frage",
  f: "Wann ist eine Aussage über einen Klienten trotz „Anonymisierung“ noch riskant?",
  b: "Die Bestimmbarkeitsschwelle ist niedrig: Schon bei einem kleinen, überschaubaren Personenkreis kann auch eine anonymisiert wirkende Schilderung auf die betroffene Person rückführbar sein. Dann liegt kein wirksames Anonymisieren vor und es bräuchte eine Einwilligung.",
  q: "Art. 4 Nr. 1 DSGVO" },

{ id: 110, t: "Mitwirkungspflichten", typ: "Frage",
  f: "Warum lohnt bei Versagungsbescheiden wegen fehlender Mitwirkung häufig ein Widerspruch?",
  b: "Weil die Anforderungen des § 66 SGB I streng sind (konkrete Pflicht, Grenzen § 65, Amtsermittlung ausgeschöpft, Ermessen, schriftlicher Folgenhinweis + Frist) und in der Praxis oft nicht vollständig eingehalten werden – schätzungsweise rund die Hälfte dieser Bescheide ist fehlerhaft.",
  q: "§ 66 SGB I" }

];
