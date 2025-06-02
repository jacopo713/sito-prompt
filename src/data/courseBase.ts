import { Course } from '@/types/course'

export const courseBase: Course = {
  id: 'corso-base',
  title: 'Corso Base - Metacognizione nel Prompt',
  description: 'Fondamenti del prompt engineering attraverso tecniche di metacognizione avanzata',
  level: 'BASE',
  totalDuration: '4 ore', // Aggiornata durata totale
  learningObjectives: [
    'Comprendere i principi della metacognizione applicata al prompt engineering',
    'Sviluppare consapevolezza del proprio processo di pensiero e stile cognitivo nel prompting',
    'Riconoscere i pattern fondamentali con cui l\'AI elabora le informazioni per anticiparne il comportamento',
    'Imparare a calibrare e ottimizzare iterativamente i propri prompt utilizzando il ciclo ARIA e metriche di qualità',
    'Sviluppare un\'interazione collaborativa strategica e di co-creazione con l\'AI, evolvendo da un uso strumentale a un utilizzo avanzato per la risoluzione di problemi complessi',
    'Sviluppare consapevolezza delle proprie abilità cognitive chiave (attenzione, memoria, pianificazione, flessibilità) e modularle per un prompting superiore',
    'Padroneggiare le tecniche di prompting efficace, sia creativo che funzionale',
    'Valutare la propria comprensione dei concetti chiave del corso e l\'applicazione delle metodologie apprese',
  ],
  modules: [
    {
      id: 'modulo-1',
      title: 'Introduzione alla Metacognizione nel Prompt',
      description: 'Scopri cos\'è la metacognizione dal punto di vista psicologico e come applicarla al prompt engineering',
      duration: '30 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Che cos\'è la Metacognizione?',
          content: `La **metacognizione** è letteralmente "il pensare sul pensare" - la capacità di essere consapevoli dei propri processi mentali mentre stanno accadendo.

È quella voce interiore che ti chiede: "Sto capendo davvero questo concetto?" oppure "Qual è il modo migliore per affrontare questo problema?"

**Esempi quotidiani di metacognizione:**
- Quando ti accorgi di non aver capito una spiegazione e chiedi chiarimenti
- Quando scegli deliberatamente una strategia diversa per studiare un argomento difficile  
- Quando ti rendi conto che stai procrastinando e cambi approccio
- Quando rifletti su un errore per capire come evitarlo in futuro`
        },
        {
          type: 'tip',
          title: 'Momento di Riflessione',
          content: '🤔 **Pausa metacognitiva**: Mentre leggi questo testo, prova a notare come sta funzionando la tua mente. Stai solo "assorbendo" le informazioni o stai attivamente collegando questi concetti a tue esperienze? Questo è metacognizione in azione!'
        },
        {
          type: 'text',
          title: 'Perché la Metacognizione è Cruciale',
          content: `La ricerca in psicologia cognitiva ha dimostrato che le persone con **alta consapevolezza metacognitiva** ottengono risultati superiori in praticamente ogni ambito:

**📚 Apprendimento più efficace:** Gli studenti metacognitivi imparano il 40% più velocemente
**🎯 Problem-solving migliore:** Risolvono problemi complessi con maggiore successo
**🧠 Memoria potenziata:** Ricordano informazioni più a lungo e con maggiore precisione
**⚡ Adattabilità:** Si adattano più rapidamente a nuove situazioni e cambiamenti

**Il segreto?** Non si limitano a "fare" - riflettono costantemente su *come* stanno facendo e su *come* potrebbero fare meglio.`
        },
        {
          type: 'example',
          title: 'Studente Normale vs Studente Metacognitivo',
          content: `**Studente normale** mentre studia:
"Leggo questo capitolo, poi faccio gli esercizi"

**Studente metacognitivo** mentre studia:
"Prima verifico cosa so già di questo argomento... Mentre leggo, mi sto chiedendo se sto davvero comprendendo o solo memorizzando... Questo concetto mi sembra difficile, provo a spiegarlo a parole mie... Gli esercizi mi stanno venendo facili, forse dovrei cercare problemi più complessi per testare davvero la mia comprensione"

La differenza è evidente: il secondo studente **guida attivamente** il suo processo di apprendimento.`
        },
        {
          type: 'text',
          title: 'Uso Passivo vs Uso Proattivo dell\'Intelligenza Artificiale',
          content: `Prima di applicare la metacognizione all'AI, è fondamentale comprendere la differenza tra **uso passivo** e **uso proattivo** dell'intelligenza artificiale.

**USO PASSIVO dell'AI:**
- Accetti le risposte senza questionarle
- Fai domande generiche e superficiali
- Non rifletti sul processo di interazione
- Usi l'AI come un motore di ricerca avanzato
- Subisci l'output invece di guidarlo

**USO PROATTIVO dell'AI:**
- Questionari attivamente le risposte ricevute
- Strutturi domande specifiche e contestualizzate
- Rifletti continuamente su come migliorare l'interazione
- Usi l'AI come partner di pensiero
- Guidi strategicamente il processo di co-creazione`
        },
        {
          type: 'example',
          title: 'Uso Passivo vs Uso Proattivo in Pratica',
          content: `**Scenario:** Devi scrivere una email importante a un cliente

**APPROCCIO PASSIVO:**
"Scrivi un'email per un cliente"
[Ricevi la risposta]
[La copi e incolli senza modifiche]

**APPROCCIO PROATTIVO:**
"Devo scrivere un'email a un cliente enterprise che ha espresso dubbi sul nostro servizio. L'obiettivo è rassicurarlo mantenendo un tono professionale ma empatico. Prima di iniziare: quali informazioni aggiuntive potrebbero servire per personalizzare al meglio questo messaggio?"
[Ricevi la risposta]
"Ottimo, ora scrivi l'email includendo questi elementi specifici..."
[Analizzi il risultato]
"Il tono mi sembra giusto, ma la parte finale potrebbe essere più actionable. Come possiamo renderla più specifica?"`
        },
        {
          type: 'text',
          title: 'Il Ponte: Dalla Psicologia al Prompt Engineering',
          content: `Ora, **trasferisci questo concetto all'AI**. Quando interagisci con un'intelligenza artificiale, stai essenzialmente "pensando insieme" a un sistema estremamente potente.

La maggior parte delle persone usa l'AI in modo **passivo**:
- Fa una domanda
- Riceve una risposta  
- Accetta il risultato senza riflettere

Ma cosa succederebbe se applicassi la **metacognizione** e un approccio **proattivo** a questo processo?`
        },
        {
          type: 'text',
          title: 'Metacognizione nel Prompt: La Rivoluzione Proattiva',
          content: `Il **prompt engineering metacognitivo** significa essere **proattivamente** consapevoli e riflessivi su:

**🎯 Il tuo obiettivo:** "Cosa sto realmente cercando di ottenere?"
**🧠 Il tuo processo mentale:** "Come sto strutturando questa richiesta?"
**🔄 L'interazione:** "Come sta rispondendo l'AI e perché?"
**⚡ L'ottimizzazione:** "Come posso migliorare questa conversazione?"

Non stai più semplicemente "usando" l'AI in modo passivo - stai **co-pensando proattivamente** con essa.`
        },
        {
          type: 'text',
          title: 'Strategie di Prompting Proattivo: Creativo vs Funzionale',
          content: `Quando usi l'AI in modo proattivo, puoi adottare diverse strategie a seconda del tuo obiettivo. Ecco due approcci comuni:

**1. Approccio Creativo Globale (Top-Down): Ideale per la generazione di bozze iniziali complesse (es. un tema grafico).**
   - **Fase 1: Richiesta Iniziale Ampia.** Chiedi all'AI di generare una bozza completa. Ad esempio: *"Crea un tema grafico per un sito web di e-commerce di moda sostenibile, stile minimalista, elegante, colori naturali. Includi layout per homepage, pagina prodotto, blog."*
   - **Fase 2: Anteprima e Valutazione.** Analizza la proposta generale. *"Ok, l'impostazione generale mi piace, ma i colori sono troppo scuri e la hero section è poco impattante."*
   - **Fase 3: Rifinitura Dettagliata.** Procedi con modifiche specifiche pezzo per pezzo. *"Modifica i colori primari in #F5F5DC e secondari in #A8B8A0. Rendi la hero section più visiva con un'immagine full-width e un claim più breve."*
   - **Vantaggio:** Ottieni rapidamente una visione d'insieme e iteri su una base concreta.
   - **Svantaggio:** La prima bozza potrebbe essere lontana dall'ideale.

**2. Approccio Funzionale Incrementale (Bottom-Up): Ottimo per sviluppare funzionalità complesse e interconnesse passo-passo.**
   - **Scenario Complesso:** Integrare un sistema di pagamento Stripe per un prodotto, collegandolo all'autenticazione utenti Firebase per tracciare gli acquisti.
   - **Motivazione all'Approccio Step-by-Step:** Un prompt unico come *"Crea l'integrazione completa di Firebase Auth e Stripe Payments per il mio e-commerce Next.js, gestendo chiavi API, webhook, e salvataggio acquisti nel database utente"* sarebbe estremamente complesso per l'AI e difficilmente produrrebbe un risultato funzionante e ottimale. Ci sono troppe variabili, dipendenze tra file (es. \\\`src/lib/firebase.ts\\\`, \\\`src/hooks/useAuth.ts\\\`, \\\`src/app/api/create-checkout-session/route.ts\\\`, \\\`src/app/api/stripe/webhook/route.ts\\\`, \\\`src/components/PurchaseButton.tsx\\\`) e configurazioni specifiche (chiavi API, variabili d'ambiente).

   - **Fase 1: Configurazione Autenticazione Utente (Firebase).**
     - **Prompt Iniziale:** *"Aiutami a configurare l'autenticazione Google con Firebase nel mio progetto Next.js. Iniziamo creando il file di configurazione Firebase (\\\`src/lib/firebase.ts\\\`) con le mie variabili d'ambiente. Poi, implementiamo le funzioni \`signInWithGoogle\` e \`signOutUser\`."*
     - **Prompt di Follow-up:** *"Ora creiamo un hook \`useAuth\` (\\\`src/hooks/useAuth.ts\\\`) per gestire lo stato dell'utente globalmente e un componente \`AuthButton\` (\\\`src/components/AuthButton.tsx\\\`) per visualizzare lo stato di login/logout e permettere le azioni."*

   - **Fase 2: Creazione Sessione di Checkout (Stripe API Route).**
     - **Prompt Iniziale:** *"Passiamo a Stripe. Devo creare una API route Next.js (\\\`src/app/api/create-checkout-session/route.ts\\\`) che generi una sessione di checkout Stripe. Questa route deve ricevere \`courseType\` e \`userEmail\` (dall'utente autenticato) dal client, recuperare il \`priceId\` corretto da una costante \`COURSES\` definita in \\\`src/lib/stripe.ts\\\`, e includere l'email dell'utente e il tipo di corso nei metadati di Stripe. Assicurati di gestire correttamente le chiavi API Stripe."*
     - **Prompt di Follow-up:** *"Nel frontend, modifica il componente \`PurchaseButton\` (\\\`src/components/PurchaseButton.tsx\\\`) per: 1. Usare l'hook \`useAuth\` per verificare se l'utente è loggato. 2. Se non loggato, mostrare un messaggio di errore. 3. Se loggato, chiamare la nostra API route \`/api/create-checkout-session\` con \`courseType\` e \`user.email\`. 4. Reindirizzare l'utente all'URL di checkout fornito da Stripe."*

   - **Fase 3: Gestione Conferma Acquisto (Stripe Webhook).**
     - **Prompt Iniziale:** *"Ora devo gestire la conferma del pagamento. Crea una API route per il webhook Stripe (\\\`src/app/api/stripe/webhook/route.ts\\\`) che ascolti l'evento \`checkout.session.completed\`. Deve verificare la firma del webhook (usando \`STRIPE_WEBHOOK_SECRET\`) e, in caso di successo, estrarre \`userEmail\` e \`courseType\` dai metadati della sessione."*
     - **Prompt di Follow-up (logica applicativa):** *"In questa route webhook, dopo aver verificato l'evento e estratto i metadati, aggiungeremo la logica per salvare i dettagli dell'acquisto (es. corso acquistato, data, ID sessione Stripe) nel database Firestore dell'utente (identificato da \`userEmail\`). Questo permetterà di sbloccare l'accesso al corso per l'utente."*

   - **Vantaggio Chiave:** Questo approccio scompone un'attività complessa e multi-file in parti gestibili. Ad ogni step, si fornisce un contesto chiaro all'AI, si possono testare le funzionalità singolarmente e si riduce drasticamente la probabilità di errori o output subottimali. L'AI agisce come un pair programmer focalizzato su un compito specifico alla volta.
   - **Mantenimento del Contesto:** È cruciale, durante questi passaggi, fornire all'AI i file rilevanti o aggiornarla sullo stato attuale del codice per garantire che i nuovi pezzi si integrino correttamente. Ad esempio, prima di modificare \\\`PurchaseButton\\\`, potresti fornire all'AI il contenuto aggiornato di \\\`useAuth\\\` e della route \\\`create-checkout-session\\\`. Comunicare quali file sono stati modificati e come, aiuta l'AI a "ricordare" lo stato del progetto.

**Metacognizione in Azione:**
La scelta tra questi approcci è una decisione metacognitiva. Chiediti:
- *"Qual è la natura del mio compito? Generazione o modifica? È un task isolato o parte di un sistema più grande?"*
- *"Ho bisogno di una visione d'insieme immediata o preferisco un controllo granulare sulla costruzione di ogni componente?"*
- *"Quale strategia mi permetterà di interagire più efficacemente con l'AI per *questo specifico obiettivo*, minimizzando ambiguità e massimizzando la qualità dell'output?"*

Essere proattivi significa anche scegliere la strategia di interazione più adatta e guidare l'AI attraverso la complessità, mantenendo il controllo del processo di sviluppo.`
        },
        {
          type: 'warning',
          title: 'Il Pericolo dell\'Uso Passivo',
          content: `⚠️ **Attenzione al rischio passivo**: L'uso passivo dell'AI può portare a:
- Dipendenza eccessiva senza sviluppo delle proprie capacità
- Accettazione di output mediocri o inappropriati
- Perdita di pensiero critico
- Risultati generici e poco personalizzati
- Stagnazione intellettuale

L'approccio **proattivo** e **metacognitivo** ti mantiene al comando del processo.`
        },
        {
          type: 'example',
          title: 'Approccio Passivo vs Approccio Proattivo Metacognitivo',
          content: `**Approccio passivo:**
"Scrivi un piano di marketing per la mia startup"
[Accetta quello che riceve senza questionare]

**Approccio proattivo metacognitivo:**
"Voglio sviluppare un piano di marketing, ma prima voglio essere sicuro di strutturare bene questa richiesta in modo proattivo. Quali informazioni ha bisogno l'AI per darmi un output davvero utile? Probabilmente dovrei specificare: il settore, il target, il budget, i miei obiettivi specifici... 

Ora provo con: 'Aiutami a creare un piano di marketing per una startup nel settore fintech, target giovani professionisti 25-35 anni, budget mensile 5k€, obiettivo principale acquisire 1000 utenti nei primi 3 mesi. Prima di iniziare, dimmi: ci sono altri dettagli cruciali che dovrei condividere per ottimizzare questo piano?'"

Vedi la differenza? Il secondo approccio **attiva proattivamente il pensiero critico** sia tuo che dell'AI.`
        },
        {
          type: 'text',
          title: 'I 4 Pilastri della Metodologia CORE',
          content: `In questo corso svilupperai un sistema metacognitivo strutturato attraverso i **4 Pilastri CORE**:

**C** - **Context Mastery**: Gestione proattiva e strategica del contesto
**O** - **Optimization Thinking**: Mentalità di miglioramento continuo e proattivo
**R** - **Reflexive Prompting**: Prompting riflessivo e auto-correttivo
**E** - **Enhancement Symbiosis**: Simbiosi di potenziamento reciproco e proattivo

Ogni pilastro rappresenta una dimensione della tua evoluzione cognitiva nell'interazione proattiva con l'AI.`
        },
        {
          type: 'tip',
          title: 'Il Test del Proattivo',
          content: `🧪 **Per verificare se stai usando l'AI proattivamente, chiediti:**
- Sto guidando io la conversazione o la sto subendo?
- Sto questionando e migliorando le risposte che ricevo?
- Sto fornendo contesto strategico o solo domande superficiali?
- Sto imparando qualcosa di nuovo su come interagire meglio?
- Sto co-creando valore o solo consumando output?

Se rispondi "sì" alla maggior parte delle domande, sei sulla strada giusta!`
        },
        {
          type: 'warning',
          title: 'Un Cambiamento di Paradigma',
          content: `⚠️ **Attenzione**: Questo approccio richiede un cambiamento mentale profondo. Non stai imparando "trucchi" o "formule magiche" per i prompt. 

Stai sviluppando una **nuova forma di intelligenza proattiva** - la capacità di pensare efficacemente in partnership con l'AI. È più impegnativo dell'uso passivo, ma i risultati sono trasformativi.`
        }
      ]
    },
    {
      id: 'modulo-2', 
      title: 'Autoanalisi del Pensiero',
      description: 'Sviluppa la consapevolezza metacognitiva del tuo processo di prompting attraverso l\'analisi del tuo stile cognitivo',
      duration: '40 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'La Base Psicologica del Tuo Stile di Prompting',
          content: `Prima di ottimizzare i tuoi prompt, devi capire **come funziona naturalmente la tua mente**. La ricerca in psicologia della personalità ha identificato 5 dimensioni fondamentali che influenzano il modo in cui elaboriamo informazioni e affrontiamo problemi.

Queste dimensioni - conosciute come **"Big Five"** - si riflettono direttamente nel modo in cui interagisci con l'AI. Comprendere il tuo profilo ti permetterà di sviluppare un stile di prompting che amplifica i tuoi punti di forza naturali.`
        },
        {
          type: 'tip',
          title: 'Autoanalisi Preliminare',
          content: `🧠 **Prima di continuare, rifletti onestamente:** - Come affronti naturalmente un problema nuovo?
- Preferisci esplorare molte possibilità o focalizzarti su una soluzione?
- Ti piace seguire procedure consolidate o inventare approcci originali?
- Lavori meglio con indicazioni dettagliate o linee guida generali?

Le tue risposte riveleranno pattern che si riflettono nei tuoi prompt.`
        },
        {
          type: 'text',
          title: 'I 4 Archetipi del Prompting Metacognitivo',
          content: `Basandoci sui pattern cognitivi universali, abbiamo identificato 4 stili fondamentali di prompting. Ognuno corrisponde a specifiche combinazioni di tratti di personalità e offre vantaggi unici nell'interazione con l'AI.

**Importante:** Non esiste uno stile "migliore" - l'obiettivo è riconoscere il tuo stile naturale e potenziarlo attraverso la metacognizione.`
        },
        {
          type: 'text',
          title: '🎯 L\'ESECUTORE - Efficienza e Risultati',
          content: `**Profilo psicologico:** Alta Coscienziosità + Focus sui risultati
**Caratteristiche:** Va dritto al punto, prompt concisi, orientato all'azione
**Punti di forza:** Efficienza, chiarezza, praticità immediata
**Sfide:** Può perdere sfumature, contesto limitato, creatività ridotta

**Prompt tipico:** "Fammi un riassunto esecutivo di questo documento in 3 punti chiave"

**Pattern di miglioramento:**
- Aggiungi una domanda di controllo: "Ho fornito abbastanza contesto?"
- Includi criteri di qualità: "Focus sui 3 aspetti più actionable"
- Metacognizione: "Cosa potrei star trascurando con questo approccio diretto?"`
        },
        {
          type: 'text', 
          title: '🌊 L\'ESPLORATORE - Curiosità e Possibilità',
          content: `**Profilo psicologico:** Alta Apertura + Estroversione intellettuale
**Caratteristiche:** Curioso, fa molte domande, esplora possibilità multiple
**Punti di forza:** Creatività, visione ampia, scoperta di connessioni inaspettate
**Sfide:** Può divagare, difficoltà a concludere, paralisi da analisi

**Prompt tipico:**
"Quali sono tutte le possibili interpretazioni di questo fenomeno e come si collegano tra loro in contesti diversi?"

**Pattern di miglioramento:**
- Stabilisci limiti: "Esplorami 3-5 direzioni principali"
- Includi checkpoint: "Dopo ogni direzione, riassumi il punto chiave"
- Metacognizione: "Sto esplorando per apprendere o per procrastinare la decisione?"`
        },
        {
          type: 'text',
          title: '🏗️ IL SISTEMATICO - Struttura e Metodologia', 
          content: `**Profilo psicologico:** Alta Coscienziosità + Bassa Apertura (preferenza per ordine)
**Caratteristiche:** Strutturato, metodico, ama framework e procedure
**Punti di forza:** Organizzazione, completezza, riproducibilità
**Sfide:** Rigidità, può bloccare creatività, over-engineering

**Prompt tipico:**
"Analizza questo problema seguendo il framework SWOT, fornendo per ogni quadrante almeno 3 elementi con relative priorità e azioni conseguenti"

**Pattern di miglioramento:**
- Includi spazio per creatività: "Dopo l'analisi strutturata, suggerisci 1 approccio non convenzionale"
- Metacognizione: "Questa struttura sta illuminando o limitando la soluzione?"
- Validazione: "Questo framework è il più adatto per questo specifico problema?"`
        },
        {
          type: 'text',
          title: '🎨 IL VISIONARIO - Creatività e Innovazione',
          content: `**Profilo psicologico:** Alta Apertura + Intuizione associativa
**Caratteristiche:** Associativo, metaforico, cerca soluzioni innovative e non ovvie
**Punti di forza:** Originalità, pensiero laterale, breakthrough creativi
**Sfide:** Inconsistenza, può essere vago, difficoltà nell'implementazione

**Prompt tipico:**
"Immagina che questo problema aziendale sia un ecosistema naturale. Come lo descriveresti, quali sono le dinamiche nascoste e cosa suggerisce per soluzioni biomimetiche?"

**Pattern di miglioramento:**
- Bilancia con concretezza: "Traducimi questa metafora in 3 azioni pratiche"
- Metacognizione: "Questa creatività sta generando valore o confusione?"
- Ancoraggio: "Come posso testare rapidamente questa idea innovativa?"`
        },
        {
          type: 'example',
          title: 'Stile Misto in Azione',
          content: `**Scenario:** Devi sviluppare una strategia di marketing

**Esecutore puro:** "Strategia marketing per prodotto X, target Y, budget Z, deliverable in 3 giorni"

**Esecutore metacognitivo:** "Sviluppiamo una strategia marketing per [specifiche]. Prima: questo approccio diretto è adeguato alla complessità del problema? Se servono insight più profondi, iniziamo con 10 minuti di esplorazione, poi focalizziamoci sull'esecuzione"

**Risultato:** Mantieni la tua efficienza naturale ma aggiungi un layer di consapevolezza che previene errori da tunnel vision.`
        },
        {
          type: 'text',
          title: 'Il Tuo Assessment Personale',
          content: `**Step 1:** Identifica il tuo stile predominante rispondendo a queste domande:

**Quando affronti un nuovo progetto:**
A) Definisco subito obiettivi e deadline (Esecutore)
B) Esploro prima tutte le possibilità (Esploratore)  
C) Cerco il framework migliore da applicare (Sistematico)
D) Immagino soluzioni completamente nuove (Visionario)

**Quando scrivi una email importante:**
A) Vai dritto al punto, massimo 3 frasi
B) Fornisci contesto e consideri multiple angolazioni
C) Segui una struttura: contesto-problema-soluzione-azione
D) Usi analogie o esempi creativi per spiegare

**Quando devi imparare qualcosa di nuovo:**
A) Cerchi il tutorial più efficiente
B) Leggi diverse fonti per avere una visione completa
C) Segui un corso strutturato passo-passo
D) Sperimenti direttamente e connetti a cose che già conosci`
        },
        {
          type: 'text',
          title: 'Interpretazione e Sviluppo',
          content: `**Maggioranza A:** Sei un **Esecutore** - Il tuo superpotere è l'efficienza, la tua sfida è l'ampiezza di vedute

**Maggioranza B:** Sei un **Esploratore** - Il tuo superpotere è la scoperta, la tua sfida è la focalizzazione

**Maggioranza C:** Sei un **Sistematico** - Il tuo superpotere è l'organizzazione, la tua sfida è la flessibilità

**Maggioranza D:** Sei un **Visionario** - Il tuo superpotere è l'innovazione, la tua sfida è l'implementazione

**Mix di stili:** Ottimo! Hai versatilità naturale - impara a scegliere consapevolmente lo stile più adatto al contesto.`
        },
        {
          type: 'warning',
          title: 'Oltre gli Stereotipi',
          content: `⚠️ **Importante:** Questi stili non sono "scatole" rigide. Sono **punti di partenza** per la consapevolezza metacognitiva. 

Il vero potere emerge quando:
- Riconosci il tuo stile naturale
- Sviluppi competenza negli altri stili  
- Scegli consapevolmente l'approccio più efficace per ogni situazione
- Combini stili per risultati superiori`
        },
        {
          type: 'tip',
          title: 'Il Tuo Piano di Sviluppo Personalizzato',
          content: `📋 **Basandoti sul tuo stile identificato:**

**Se sei Esecutore:** Aggiungi 30 secondi di "esplorazione controllata" prima di ogni prompt importante
**Se sei Esploratore:** Imposta timer di 10 minuti per fasi esplorative, poi passa all'azione  
**Se sei Sistematico:** Dedica il 20% del tempo a sperimentare approcci "non standard"
**Se sei Visionario:** Chiedi sempre all'AI di "rendere concreto" ogni insight creativo

**Per tutti:** Inizia ogni sessione importante chiedendoti: "Che stile è più adatto a questo obiettivo specifico?"`
        }
      ]
    },
    {
      id: 'modulo-3',
      title: 'Pattern Recognition nell\'AI',
      description: 'Impara a riconoscere come l\'AI elabora le informazioni per migliorare i tuoi prompt',
      duration: '40 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Come "Pensa" l\'AI (e come non pensa)',
          content: `Per interagire efficacemente con un'Intelligenza Artificiale Generativa, come i modelli linguistici di grandi dimensioni (LLM), è fondamentale comprendere i meccanismi con cui elabora le informazioni. 
          
Sebbene non "pensino" nel senso umano del termine (cioè, non hanno coscienza, intenzionalità o comprensione semantica profonda), questi sistemi operano riconoscendo e generando pattern statistici complessi presenti nei vasti dataset su cui sono stati addestrati. L'AI non "comprende" il testo come un umano, ma è estremamente abile nell'identificare relazioni statistiche tra parole, frasi e concetti. 

Comprendere questi pattern comportamentali ti permette di formulare prompt che guidano l'AI verso l'output desiderato con maggiore precisione, anticipando come potrebbe interpretare le tue richieste.`
        },
        {
          type: 'text',
          title: 'I 5 Pattern Comportamentali Chiave dell\'AI',
          content: `Osservando il comportamento degli LLM, possiamo identificare alcuni pattern ricorrenti nel modo in cui processano i prompt e generano risposte:

**1. Pattern Completion (Completamento di Pattern):** L'AI eccelle nel completare sequenze o schemi testuali. Se inizi una frase, una lista, fornisci un esempio di formato, o persino un frammento di codice, l'AI cercherà di continuarlo in modo statisticamente coerente con i dati su cui è stata addestrata.
**2. Context Dependency (Dipendenza dal Contesto):** La qualità, la pertinenza e la specificità della risposta dell'AI dipendono criticamente dal contesto fornito nel prompt. Informazioni più chiare, specifiche, rilevanti e ben strutturate all'interno del prompt portano quasi sempre a output di qualità superiore.
**3. Priming Effect (Effetto Priming/Priorità Iniziale):** Le informazioni e le istruzioni presentate all'inizio del prompt (come il ruolo da assumere, le direttive principali, o il formato desiderato) tendono ad avere un'influenza significativa e persistente sull'intera risposta generata.
**4. Structural Preference (Preferenza Strutturale):** L'AI risponde meglio e in modo più prevedibile a prompt che utilizzano una struttura chiara, logica e organizzata. Elementi come elenchi puntati, numerati, titoli, markdown per la formattazione (es. grassetto, corsivo), e istruzioni passo-passo possono migliorare significativamente la "comprensione" della richiesta e la qualità dell'output.
**5. Semantic Coherence (Coerenza Semantica):** L'AI tende a generare testo che sia semanticamente correlato e coerente con il prompt e con le informazioni generate precedentemente nella stessa interazione. Raggruppa e utilizza concetti, parole e stili che statisticamente appaiono insieme nei suoi dati di addestramento, cercando di mantenere un flusso logico e stilisticamente omogeneo.`
        },
        {
          type: 'example',
          title: 'Sfruttare il Pattern Completion e la Structural Preference',
          content: `**Prompt Meno Efficace:** "Parlami del digital marketing."

**Prompt Più Efficace (sfruttando Pattern Completion e Structural Preference):** "Sto preparando una presentazione sulle tendenze emergenti nel digital marketing per il 2024. Vorrei focalizzarmi su tre aree chiave. Per ognuna, fornisci una breve descrizione (2-3 frasi) e un esempio pratico.

**Formato desiderato:**
**Area Chiave 1:** [Nome dell'Area]
   - **Descrizione:** ...
   - **Esempio Pratico:** ...

**Area Chiave 2:** [Nome dell'Area]
   - **Descrizione:** ...
   - **Esempio Pratico:** ...

**Area Chiave 3:** [Nome dell'Area]
   - **Descrizione:** ...
   - **Esempio Pratico:** ...

Completa questa struttura."

L'AI riconoscerà lo schema "lista di aree con descrizione ed esempio" e si atterrà al formato richiesto, fornendo una risposta più strutturata, utile e allineata all'obiettivo.`
        },
        {
          type: 'text',
          title: 'Gestione Implicita del Peso degli Elementi nel Prompt',
          content: `Una tecnica avanzata per guidare l'AI consiste nel comunicare le priorità e l'importanza relativa dei vari elementi del tuo prompt in modo implicito, attraverso il **contesto, la formulazione e la struttura**, piuttosto che affidarsi a etichette esplicite di 'peso' (che l'AI potrebbe non interpretare come desiderato o che potrebbero addirittura confonderla).

L'AI è abile nel dedurre l'importanza relativa degli elementi dalla loro posizione, enfasi, ripetizione misurata e specificità nel prompt.

**Principi chiave per la gestione implicita del peso:**
- **Posizione (Primacy Effect):** Gli elementi più importanti o le istruzioni guida dovrebbero essere collocati all'inizio del prompt.
- **Enfasi e Formulazione:** Usare un linguaggio chiaro e diretto per gli aspetti cruciali. Frasi come "È fondamentale che...", "Assicurati di includere...", "L'obiettivo principale è..." possono segnalare importanza.
- **Specificità e Dettaglio:** Fornire maggiori dettagli sugli aspetti che ritieni più rilevanti guida l'AI a concentrarsi su di essi.
- **Ordine delle Istruzioni:** In una sequenza di istruzioni, l'ordine può implicare una priorità o un flusso logico che l'AI tenderà a seguire.
- **Contesto Narrativo/Emotivo (con cautela):** Il tono generale e il contesto possono suggerire urgenza o importanza, ma va usato con moderazione per non introdurre bias eccessivi.`
        },
        {
          type: 'example',
          title: 'Esempio: Prompt Breve e Passivo (Inefficace)',
          content: `"Prepara una presentazione sui risultati del Q3."

❌ **Problemi di questo approccio:**
- Estremamente generico e vago.
- Nessun contesto sul target audience, lo scopo, o i punti chiave da evidenziare.
- Manca completamente l'indicazione dell'urgenza, del livello di dettaglio o del formato.
- L'AI deve "indovinare" quasi tutto, portando a risultati probabilmente insoddisfacenti.`
        },
        {
          type: 'example',
          title: 'Esempio: Prompt Proattivo con Gestione Implicita del Peso (Efficace)',
          content: `**Contesto:** Devo creare una presentazione concisa e di impatto per il consiglio di amministrazione (board) sui risultati finanziari del Q3. L'obiettivo è rassicurarli sulla performance e ottenere l'approvazione per la strategia del Q4. È cruciale mostrare professionalità e profonda comprensione dei dati.

**Prompt:**
"Agisci come un CFO esperto. Prepara una sintesi esecutiva (massimo 5 slide) per il board sui risultati finanziari del Q3. 
**Focus principale:** evidenziare la crescita del fatturato del 23% rispetto al Q2, trainata dal successo del nuovo prodotto 'ProWidget' nel segmento enterprise. Dettaglia i fattori di questo successo.
**In secondo luogo:** analizza brevemente le aree di spesa principali, sottolineando le ottimizzazioni effettuate.
**Infine:** introduci le proiezioni per il Q4, mostrando fiducia ma anche consapevolezza delle sfide di mercato (es. aumento costi materie prime).
Mantieni un tono formale, professionale e basato sui dati. La presentazione deve essere chiara, visivamente pulita e orientata a infondere fiducia. Evita linguaggio tecnico eccessivo.

**Struttura suggerita per le slide:**
1.  Titolo e Sommario Esecutivo Q3
2.  Highlight Performance: Crescita Fatturato e Successo ProWidget (con grafici chiave)
3.  Analisi Spese e Ottimizzazioni
4.  Proiezioni Q4 e Strategia Proposta
5.  Conclusioni e Call to Action (Approvazione strategia Q4)

Assicurati che ogni slide abbia un messaggio chiave chiaro."

✅ **Vantaggi di questo approccio:**
- **Ruolo Definito:** "Agisci come un CFO esperto" imposta il tono e il livello di analisi.
- **Priorità Chiare:** L'uso di "Focus principale:", "In secondo luogo:", "Infine:" guida l'attenzione dell'AI.
- **Specificità:** Dettagli come "crescita del 23%", "ProWidget", "segmento enterprise" forniscono materiale concreto.
- **Obiettivo Esplicito:** "rassicurarli sulla performance e ottenere l'approvazione" chiarisce lo scopo.
- **Struttura Suggerita:** Fornisce un canovaccio che l'AI può seguire, migliorando l'organizzazione.
- **Tono e Stile:** Istruzioni chiare sul linguaggio e la presentazione.
L'AI può dedurre le priorità e l'importanza degli elementi dalla loro formulazione e posizione, senza etichette artificiali di "peso".`
        },
        {
          type: 'tip',
          title: 'Come l\'AI "Interpreta" il Peso Implicito',
          content: `🎯 Dall'esempio precedente, l'AI può inferire che:
- La crescita del fatturato e il successo di ProWidget sono **massimamente importanti** (indicati come "Focus principale" e posizionati presto).
- L'analisi delle spese è **importante ma secondaria**.
- Le proiezioni Q4 sono il passo logico successivo, con un mix di fiducia e realismo.
- La professionalità, la chiarezza e l'orientamento al board sono **requisiti trasversali critici**.

💡 **Risultato:** Una presentazione più mirata, pertinente e professionale, che risponde meglio alle esigenze implicite ed esplicite del richiedente.`
        }
      ]
    },
    {
      id: 'modulo-4',
      title: 'Calibrazione Continua dei Prompt',
      description: 'Tecniche per ottimizzare iterativamente i tuoi prompt e migliorare la qualità delle risposte AI.',
      duration: '45 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Il Ciclo di Calibrazione ARIA',
          content: `Il Ciclo di Calibrazione ARIA è un processo iterativo fondamentale per affinare sistematicamente i tuoi prompt e migliorare la qualità delle risposte dell'AI. Trasforma ogni interazione in un'opportunità di apprendimento e ottimizzazione.
          
**A.R.I.A.** è un acronimo che sta per:
- **Analyze (Analizza):** Esamina criticamente la risposta dell'AI. È accurata, completa, pertinente e nel formato desiderato? Risponde pienamente all'intento del tuo prompt?
- **Reflect (Rifletti):** Collega la qualità della risposta (o la sua mancanza) al tuo prompt. Cosa ha funzionato bene? Cosa potrebbe aver causato imprecisioni, ambiguità o deviazioni? Il contesto fornito era sufficiente e chiaro? Le istruzioni erano interpretabili in modi diversi?
- **Iterate (Itera):** Modifica il prompt originale basandoti sulla tua analisi e riflessione. Sperimenta con riformulazioni, aggiungi contesto o dettagli cruciali, chiarisci ambiguità, semplifica istruzioni complesse, prova un approccio o una struttura differente.
- **Adopt (Adotta):** Una volta ottenuto un output che soddisfa i tuoi criteri, consolida le modifiche che hanno prodotto i miglioramenti. Questa versione ottimizzata del prompt diventa il tuo nuovo standard o un template di riferimento per quel tipo di richiesta o compito.`
        },
        {
          type: 'example',
          title: 'Calibrazione ARIA in Azione: Sviluppo di Contenuti',
          content: `**Obiettivo:** Generare una descrizione per una nuova app di meditazione.

**Prompt v1 (Input Iniziale):** "Scrivi una descrizione per una nuova app di meditazione."
**Risultato AI v1:** "Ecco la nostra nuova app di meditazione! Ti aiuta a rilassarti e a trovare la calma. Scaricala oggi!" 
* **Analyze:** La risposta è troppo generica, breve, e non dice nulla di specifico sull'app. Manca di persuasività.
* **Reflect:** Il prompt era estremamente vago. Non ho fornito dettagli su nome, caratteristiche uniche, target audience o tono desiderato.

**Prompt v2 (Iterazione 1):** "Scrivi una descrizione accattivante (circa 100 parole) per la app 'SereneMind'. SereneMind offre guide meditate personalizzate da esperti, suoni della natura, e tracciamento dei progressi. Il target sono professionisti stressati. Tono: calmante ma professionale."
**Risultato AI v2:** "Trova la tua oasi di pace con SereneMind, l'app di meditazione pensata per professionisti impegnati. Offriamo guide personalizzate da veri esperti, suoni della natura rilassanti per aiutarti a concentrarti, e un sistema per tracciare i tuoi progressi verso una maggiore calma interiore. Riduci lo stress e migliora il tuo benessere con SereneMind. Provala!"
* **Analyze:** Molto meglio! Più specifica e informativa. Il tono è abbastanza buono. Forse un po' lunga e potrebbe essere più incisiva all'inizio.
* **Reflect:** I dettagli specifici hanno aiutato enormemente. La lunghezza è quasi giusta. Potrei chiedere un'apertura più forte.

**Prompt v3 (Iterazione 2):** "Riscrivi questa descrizione per l'app 'SereneMind', iniziando con un hook più forte e mantenendola entro 80 parole. Mantieni il target (professionisti stressati) e le caratteristiche chiave (guide personalizzate, suoni natura, tracciamento progressi). Tono: calmante e professionale. Descrizione da migliorare: [testo del Risultato AI v2]"
**Risultato AI v3:** "Sconfiggi lo stress quotidiano con SereneMind. L'app per professionisti che cercano calma e focus attraverso guide meditate personalizzate da esperti, suoni della natura avvolgenti e tracciamento dei progressi. Ritrova il tuo equilibrio e la tua produttività. Scopri SereneMind."
* **Analyze:** Ottimo! L'hook iniziale è più forte, la lunghezza è rispettata, i punti chiave ci sono tutti.
* **Reflect:** L'istruzione di "migliorare" un testo esistente e di focalizzarsi sull'hook è stata efficace.
* **Adopt:** Questo prompt v3 è un buon modello per descrizioni di app simili.`
        },
        {
          type: 'text',
          title: 'Metriche Chiave per la Valutazione dell\'Output (Fase Analyze)',
          content: `Quando analizzi la risposta dell'AI (la fase "Analyze" del ciclo ARIA), considera queste metriche di qualità per guidare la tua valutazione:

- **Rilevanza (Relevance):** La risposta è direttamente pertinente e focalizzata sulla richiesta specifica del tuo prompt? Evita divagazioni o informazioni non richieste?
- **Completezza (Completeness):** L'output copre tutti gli aspetti importanti, sia quelli esplicitamente richiesti nel prompt sia quelli ragionevolmente impliciti?
- **Accuratezza (Accuracy):** Le informazioni fornite sono fattualmente corrette e prive di errori significativi o invenzioni ("allucinazioni")? (È sempre cruciale verificare esternamente le informazioni critiche generate dall'AI).
- **Specificità (Specificity):** La risposta è sufficientemente dettagliata e concreta per essere utile, o risulta vaga, generica o superficiale?
- **Azionabilità (Actionability):** Le informazioni, i suggerimenti o i contenuti forniti possono essere tradotti in azioni concrete, decisioni o ulteriori passi?
- **Coerenza (Coherence):** Il testo è ben strutturato, segue un flusso logico e non presenta contraddizioni interne o salti illogici? Lo stile è consistente?
- **Chiarezza (Clarity):** Il linguaggio utilizzato è chiaro, conciso e facilmente comprensibile per il target audience previsto? Evita ambiguità?
- **Rispetto dei Vincoli (Constraint Adherence):** L'AI ha rispettato i vincoli principali specificati (es. lunghezza, formato, tono, ruolo) in modo sufficientemente accurato, pur mantenendo un'espressione fluida e naturale?
- **Utilità Complessiva (Overall Usefulness):** Nel complesso, quanto è utile la risposta per raggiungere l'obiettivo che ti eri prefissato con il prompt?
- **Insight/Originalità (Insightfulness/Originality) (se applicabile):** Se l'obiettivo era la creatività o l'analisi, l'AI offre prospettive nuove, connessioni non ovvie o soluzioni originali?`
        },
        {
          type: 'tip',
          title: 'Log delle Iterazioni',
          content: `Quando lavori su prompt complessi o importanti, può essere utile tenere un piccolo "log delle iterazioni". Annota brevemente le versioni del prompt, le risposte dell'AI e le tue riflessioni. Questo ti aiuterà a:
- Tracciare i progressi e capire cosa funziona meglio.
- Evitare di ripetere errori.
- Costruire una libreria personale di prompt efficaci e di lezioni apprese.`
        }
      ]
    },
    {
      id: 'modulo-5',
      title: 'Interazione Collaborativa Strategica con l\'AI',
      description: 'Sviluppa un rapporto di crescita e collaborazione con l\'intelligenza artificiale, guidandola come un potente strumento di supporto al pensiero.',
      duration: '30 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Oltre lo Strumento: Verso un\'Interazione Collaborativa Strategica',
          content: `L'obiettivo finale della maestria nel prompt engineering trascende la mera utilizzazione dell'AI come uno strumento esecutivo per compiti specifici. Si tratta di coltivare una **interazione collaborativa strategica**: una dinamica di lavoro avanzata e interattiva in cui le tue capacità cognitive umane (come il pensiero critico, la creatività, l'intuizione, la comprensione del contesto ampio) e le capacità di elaborazione dell'AI (come l'analisi di grandi volumi di dati, il riconoscimento di pattern, la generazione rapida di testo) lavorano in sinergia, sotto la tua guida strategica.
          
Questa collaborazione mira a risultati, insight e soluzioni superiori a quelli che potresti raggiungere affidandoti esclusivamente alle tue risorse o usando l'AI in modo passivo.`
        },
        {
          type: 'text',
          title: 'I 3 Livelli di Interazione Evolutiva con l\'AI',
          content: `Possiamo concettualizzare l'evoluzione del nostro rapporto con l'AI attraverso tre livelli principali di interazione:

**Livello 1 - AI come Strumento (Tool):**
In questo livello, l'AI viene usata per eseguire compiti specifici e ben definiti. Tu fornisci istruzioni dirette e l'AI produce un output. La tua interazione è prevalentemente transazionale.
*Esempio di prompt:* *"Traduci questo paragrafo in tedesco."* o *"Riassumi questo articolo in 3 punti chiave."*

**Livello 2 - AI come Assistente (Assistant):**
L'AI agisce come un assistente più capace che supporta i tuoi processi di pensiero e di lavoro. Può offrire opzioni, generare bozze, organizzare informazioni, o elaborare dati sotto la tua guida più strategica. L'interazione diventa più dialogica e iterativa.
*Esempio di prompt:* *"Sto scrivendo un post sul blog riguardo ai benefici del lavoro da remoto. Genera alcune idee per i titoli e una bozza dell'introduzione, considerando un target di manager HR."*

**Livello 3 - AI come Collaboratore Strategico nel Processo Cognitivo:**
Questo è il livello dell'**interazione collaborativa strategica**. L'AI non è solo un esecutore o un assistente, ma un potente strumento che, sotto la tua guida esperta, partecipa attivamente al processo di problem-solving, ideazione e creazione. Tu definisci la strategia, poni le domande giuste, valuti criticamente e integri gli output dell'AI nel tuo flusso di lavoro cognitivo. L'AI amplifica le tue capacità, ma la direzione e la responsabilità rimangono umane.
*Esempio di prompt:* *"Stiamo affrontando un calo di engagement sulla nostra piattaforma. Utilizzerò le tue capacità di analisi per esplorare i dati. Basandoti sui dati di utilizzo recenti (che ti fornirò) e sulle tendenze generali del settore che puoi recuperare, identifica pattern o correlazioni insolite. Formulerò poi delle ipotesi basate su questi insight. Successivamente, ti chiederò di aiutarmi a sviluppare e valutare alcune strategie controintuitive per invertire questo trend."*

In questo Livello 3, guidi l'AI per co-sviluppare soluzioni e insight, mantenendo una chiara distinzione dei ruoli e sfruttando le capacità dell'AI come un'estensione delle tue abilità analitiche e creative.`
        },
        {
          type: 'text',
          title: 'Caratteristiche di un\'Interazione Collaborativa Strategica',
          content: `Un'interazione collaborativa strategica con l'AI solitamente presenta queste caratteristiche:
- **Guida Umana Chiara e Intenzionale:** L'utente definisce gli obiettivi, la strategia dell'interazione e i criteri di valutazione.
- **Dialogo Iterativo e Raffinato:** Conversazioni multi-turn in cui ogni output dell'AI viene analizzato e utilizzato per affinare il prompt successivo.
- **Feedback Specifico e Costruttivo:** Fornisci all'AI feedback dettagliato per indirizzarla verso l'output desiderato.
- **Utilizzo dell'AI per Esplorazione e Analisi:** Sfruttare la capacità dell'AI di processare informazioni e identificare pattern per esplorare possibilità o analizzare dati, sempre sotto supervisione umana.
- **Combinazione di Competenze:** Integrare l'efficienza dell'AI nella generazione e analisi con l'esperienza, l'intuizione, il giudizio etico e la comprensione contestuale dell'utente.
- **Apprendimento Adattivo dell'Utente:** L'utente impara a conoscere i punti di forza e i limiti del modello AI specifico, adattando il proprio stile di prompting per massimizzare l'efficacia.`
        },
        {
          type: 'example',
          title: 'Esempio di Prompt per un\'Interazione Collaborativa Strategica',
          content: `**Scenario:** Un team di design vuole sviluppare un nuovo prodotto sostenibile. L'utente è il lead designer.

**Prompt per una Collaborazione Strategica:**
"AI, fungerai da mio assistente di ricerca e brainstorming per la fase di concept di un nuovo prodotto di consumo. Il prodotto deve essere altamente sostenibile, innovativo e desiderabile per il target Millennial e Gen Z attento all'ambiente.

**Fase 1: Ricerca e Analisi di Mercato (Input per l'AI).**
Forniscimi un'analisi delle attuali tendenze nei prodotti di consumo sostenibili, focalizzandoti su:
a) Categorie di prodotti con maggiore potenziale di innovazione sostenibile.
b) Materiali emergenti eco-compatibili.
c) Modelli di business circolari di successo in settori affini.
Presenta i risultati in modo strutturato.

**Fase 2: Brainstorming Guidato (Collaborazione).**
Basandomi sulla tua analisi e sulla mia esperienza nel design, esploreremo insieme alcune direzioni. Iniziamo dalla categoria [Il designer inserisce una categoria identificata o di suo interesse]. Quali sono, secondo te, 3 approcci progettuali specifici che potrebbero combinare innovazione e sostenibilità in questa categoria?

**Fase 3: Sviluppo Preliminare di Concept (Guida del Designer, Esecuzione AI).**
Ora, svilupperemo 3 concept di prodotto preliminari. Ti fornirò io l'idea centrale per ciascuno. Il tuo compito sarà di espandere ogni idea descrivendo:
1.  Nome provvisorio e tagline.
2.  Dettagli sulle caratteristiche di sostenibilità (materiali, ciclo vita).
3.  Possibili elementi di 'wow factor' per il target.
Mi aspetto che tu integri le informazioni emerse nelle fasi precedenti.

In ogni fase, valuterò i tuoi output e ti fornirò feedback per le iterazioni successive. Il nostro obiettivo è arrivare a concept solidi e ben argomentati."

Questo approccio:
- Definisce chiaramente i **ruoli e le fasi** della collaborazione.
- Utilizza l'AI per **compiti specifici di analisi e generazione** dove eccelle.
- Mantiene la **guida strategica e la valutazione critica** saldamente nelle mani dell'utente.
- Struttura un **processo iterativo** di co-sviluppo.`
        },
        {
          type: 'warning',
          title: 'Un\'Interazione Collaborativa Strategica Richiede Impegno',
          content: `Sviluppare un'efficace interazione collaborativa strategica con l'AI non è automatico. Richiede:
- **Pazienza e Pratica:** Imparare a formulare prompt chiari, a iterare e a interpretare gli output dell'AI.
- **Pensiero Critico Costante:** Valutare sempre gli output dell'AI, non accettarli passivamente e verificare le informazioni cruciali.
- **Curiosità Intellettuale e Apertura:** Essere disposti a sperimentare e ad apprendere dai risultati, anche quelli inattesi.
- **Adattabilità e Flessibilità:** Essere pronti a modificare il proprio approccio e i propri prompt in base al comportamento specifico del modello AI e all'evoluzione dell'interazione.
          
È un investimento di tempo e di impegno mentale, ma i benefici in termini di qualità del lavoro, innovazione e apprendimento possono essere significativi, mantenendo sempre l'essere umano al centro del processo decisionale e creativo.`
        }
      ]
    },
    {
      id: 'modulo-6',
      title: 'Modulo 6 - Quiz Finale di Autovalutazione',
      description: 'Valuta la tua comprensione dei concetti chiave del corso attraverso questo quiz finale. È richiesto un punteggio minimo per considerare il corso completato con successo.',
      duration: '15 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Istruzioni per il Quiz Finale',
          content: `Questo quiz finale è progettato per aiutarti a consolidare e valutare la tua comprensione dei principi fondamentali del prompt engineering metacognitivo.

**Dettagli del Quiz:**
- Il quiz consiste in 5 domande a scelta multipla.
- Ogni domanda copre argomenti trattati nei moduli precedenti.
- Hai un tentativo per rispondere a ciascuna domanda.
- Per superare il quiz e completare il corso, devi rispondere correttamente ad **almeno 4 domande su 5 (80%)**.

Leggi attentamente ogni domanda e le relative opzioni prima di selezionare la tua risposta. In bocca al lupo!
`
        }
      ],
      exercises: [
        {
          id: 'quiz-1',
          question: 'Qual è la definizione più accurata di "metacognizione" nel contesto del prompt engineering?',
          type: 'multiple-choice',
          options: [
            'La capacità di scrivere prompt molto lunghi e dettagliati.',
            'Essere consapevoli e riflessivi sul proprio processo di pensiero, sugli obiettivi e sull\'interazione con l\'AI durante il prompting.',
            'L\'uso di software specializzato per generare prompt automaticamente.',
            'La memorizzazione di una vasta lista di comandi per l\'AI.'
          ],
          correctAnswer: 1,
          explanation: 'La metacognizione nel prompt engineering implica una riflessione attiva sul proprio processo di interazione con l\'AI per migliorarlo (Modulo 1).'
        },
        {
          id: 'quiz-2',
          question: 'Quale delle seguenti affermazioni descrive meglio un "uso proattivo" dell\'AI?',
          type: 'multiple-choice',
          options: [
            'Accettare la prima risposta dell\'AI senza ulteriori domande.',
            'Fare domande generiche e aspettarsi che l\'AI capisca tutto il contesto.',
            'Guidare strategicamente l\'interazione, questionare le risposte e usare l\'AI come partner di pensiero.',
            'Usare l\'AI solo per compiti semplici e ripetitivi.'
          ],
          correctAnswer: 2,
          explanation: 'L\'uso proattivo implica guidare l\'interazione, fornire contesto, questionare e co-creare con l\'AI (Modulo 1).'
        },
        {
          id: 'quiz-3',
          question: 'Un utente che preferisce prompt concisi, va dritto al punto ed è orientato all\'azione, probabilmente riflette quale Archetipo del Prompting Metacognitivo?',
          type: 'multiple-choice',
          options: [
            'L\'Esploratore',
            'Il Visionario',
            'Il Sistematico',
            'L\'Esecutore'
          ],
          correctAnswer: 3,
          explanation: 'L\'Esecutore è caratterizzato da efficienza, chiarezza e un approccio diretto e orientato ai risultati (Modulo 2).'
        },
        {
          id: 'quiz-4',
          question: 'Quando l\'AI tende a completare uno schema o una struttura che le fornisci nel prompt (es. una lista numerata iniziata), quale pattern fondamentale sta sfruttando?',
          type: 'multiple-choice',
          options: [
            'Context Dependency',
            'Pattern Completion',
            'Priming Effect',
            'Semantic Coherence'
          ],
          correctAnswer: 1,
          explanation: 'Il Pattern Completion è la tendenza dell\'AI a completare schemi e strutture riconosciute nel prompt (Modulo 3).'
        },
        {
          id: 'quiz-5',
          question: 'Il ciclo di calibrazione "ARIA" per ottimizzare i prompt è un acronimo che sta per:',
          type: 'multiple-choice',
          options: [
            'Ask, Review, Implement, Assess',
            'Analyze, Reflect, Iterate, Adopt',
            'Action, Result, Improve, Augment',
            'Aim, Refine, Instruct, Achieve'
          ],
          correctAnswer: 1,
          explanation: 'ARIA sta per Analyze (Analizza la risposta), Reflect (Rifletti), Iterate (Modifica il prompt), Adopt (Adotta la versione migliorata) (Modulo 4).'
        }
      ]
    },
    { 
      id: 'modulo-7',
      title: 'Consapevolezza Cognitiva Avanzata nel Prompting',
      description: 'Diventa consapevole di come le tue abilità cognitive chiave (attenzione, memoria, pianificazione, flessibilità) influenzano la creazione dei prompt e impara a modularle per un\'efficacia superiore.',
      duration: '40 min', // Durata aggiornata
      content: [
        {
          type: 'text',
          title: 'Introduzione: Il Cervello Dietro il Prompt',
          content: `Hai mai pensato a quali **superpoteri della tua mente** entrano in gioco quando scrivi un prompt efficace? Non si tratta solo di "digitare parole", ma di un sofisticato balletto di abilità cognitive. 
          
Questo modulo ti guiderà a riconoscere e potenziare queste abilità, ispirandoci alla comprensione dettagliata delle funzioni cognitive come quelle esplorate da strumenti di valutazione quali il **CogniFit CAB (Cognitive Assessment Battery)**. Comprendere come usi attenzione, memoria, ragionamento e flessibilità ti darà un controllo senza precedenti sulla qualità dei tuoi prompt.`
        },
        {
          type: 'text',
          title: '1. Attenzione: Il Faro della Tua Mente',
          content: `L'**attenzione** è la capacità di concentrare le tue risorse mentali su uno stimolo specifico (attenzione focalizzata) o più stimoli contemporaneamente (attenzione divisa), ignorando le distrazioni (attenzione selettiva).

**Nel Prompting:**
- **Attenzione Focalizzata:** Mantenere chiaro l'obiettivo del prompt mentre lo si formula, senza perdersi in dettagli irrilevanti.
- **Attenzione Selettiva:** Filtrare il "rumore" nelle risposte dell'AI, individuando le informazioni cruciali.
- **Attenzione Divisa:** Gestire contemporaneamente la costruzione del prompt, l'obiettivo finale, e l'anticipazione della risposta dell'AI.

**Esempio:** Stai cercando di generare un'immagine specifica. L'AI ti propone varianti interessanti ma non pertinenti. L'attenzione selettiva ti aiuta a ignorare le distrazioni e a rifocalizzare l'AI sull'obiettivo originale.`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sull\'Attenzione',
          content: `🤔 Domandati:
- "Sono completamente focalizzato sul risultato che voglio ottenere o la mia mente sta divagando?"
- "Sto attivamente filtrando le informazioni irrilevanti dall'AI o mi lascio trasportare da ogni sua proposta?"
- "Riesco a mantenere la concentrazione per tutto il processo di iterazione del prompt?"`
        },
        {
          type: 'text',
          title: '2. Memoria di Lavoro: Il Tuo Blocco Appunti Mentale',
          content: `La **memoria di lavoro** è un sistema a capacità limitata che ti permette di mantenere temporaneamente e manipolare le informazioni necessarie per compiti cognitivi complessi, come il ragionamento e l'apprendimento.

**Nel Prompting:**
- Ricordare il contesto fornito all'AI nelle interazioni precedenti.
- Tenere a mente le diverse componenti di un prompt complesso mentre lo si costruisce.
- Confrontare la risposta attuale dell'AI con le istruzioni date e i risultati precedenti.

**Esempio:** Stai scrivendo un racconto con l'AI. Devi ricordare i nomi dei personaggi, i dettagli della trama già stabiliti e le istruzioni specifiche che hai dato per il capitolo corrente.`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sulla Memoria di Lavoro',
          content: `🧠 Domandati:
- "Ho tutte le informazioni chiave del contesto attuale disponibili mentalmente o ho bisogno di prenderne nota?"
- "Il mio prompt è diventato così complesso che sto faticando a ricordarne tutte le parti e i loro scopi?"
- "Sto attivamente richiamando informazioni rilevanti dalle interazioni precedenti con l'AI?"`
        },
        {
          type: 'text',
          title: '3. Pianificazione Strategica: L\'Architetto dei Prompt',
          content: `La **pianificazione** è un'abilità esecutiva cruciale che coinvolge la capacità di stabilire obiettivi, definire i passaggi per raggiungerli, organizzare le risorse e anticipare i risultati.

**Nel Prompting:**
- Strutturare una conversazione multi-turn con l'AI.
- Scomporre una richiesta complessa in una serie di prompt più piccoli e gestibili (approccio bottom-up).
- Anticipare come l'AI potrebbe interpretare certe frasi e pianificare alternative.

**Esempio:** Invece di chiedere "Scrivi un intero business plan", pianifichi una serie di prompt: "Definiamo la mission", "Analizziamo il target", "Proponi strategie di marketing", ecc.`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sulla Pianificazione',
          content: `🗺️ Domandati:
- "Ho una strategia chiara per questa interazione o sto procedendo a caso?"
- "Quali sono i passaggi logici per guidare l'AI verso il risultato desiderato?"
- "Ho considerato possibili ostacoli o incomprensioni da parte dell'AI e come superarli?"`
        },
        {
          type: 'text',
          title: '4. Flessibilità Cognitiva: L\'Arte dell\'Adattamento',
          content: `La **flessibilità cognitiva** (o shifting) è la capacità di adattare il proprio pensiero e comportamento a situazioni nuove, mutevoli o inaspettate. Permette di passare da un compito a un altro o di cambiare prospettiva.

**Nel Prompting:**
- Modificare il proprio prompt quando l'AI non fornisce la risposta attesa.
- Esplorare diverse formulazioni o approcci se il primo tentativo fallisce.
- Integrare feedback inatteso dall'AI per migliorare la richiesta.

**Esempio:** L'AI continua a fraintendere una tua richiesta. Invece di ripetere lo stesso prompt, usi la flessibilità cognitiva per riformularlo completamente, magari usando un'analogia o un ruolo diverso (es. "Spiegamelo come se fossi un bambino").`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sulla Flessibilità',
          content: `🤸 Domandati:
- "Sono ancorato a un solo modo di formulare la mia richiesta, anche se non sta funzionando?"
- "Sono aperto a cambiare radicalmente il mio approccio se necessario?"
- "Come posso usare la risposta dell'AI, anche se non è quella attesa, per affinare la mia prossima mossa?"`
        },
        {
          type: 'text',
          title: '5. Ragionamento Logico e Valutazione Critica: Il Giudice Interiore',
          content: `Il **ragionamento logico** permette di trarre conclusioni valide da premesse date, mentre la **valutazione critica** è l'abilità di analizzare informazioni e argomentazioni in modo obiettivo per formarne un giudizio.

**Nel Prompting:**
- Costruire prompt che siano internamente coerenti e non contraddittori.
- Valutare la logica, la coerenza e l'accuratezza delle risposte dell'AI.
- Identificare fallacie logiche o bias nelle informazioni generate.

**Esempio:** Chiedi all'AI di confrontare due prodotti. Valuti criticamente se il confronto è equilibrato, se i criteri usati sono rilevanti e se le conclusioni sono supportate dai dati presentati.`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sul Ragionamento e Valutazione',
          content: `⚖️ Domandati:
- "Il mio prompt è formulato in modo logico e inequivocabile?"
- "Sto accettando passivamente la risposta dell'AI o la sto analizzando criticamente?"
- "Ci sono presupposti nascosti nel mio prompt o nella risposta dell'AI che dovrei esaminare?"`
        },
        {
          type: 'text',
          title: '6. Riconoscimento di Pattern: L\'Intuito Guidato dall\'Esperienza',
          content: `Il **riconoscimento di pattern** è la capacità di identificare regolarità, tendenze o schemi ricorrenti nei dati o nelle informazioni.

**Nel Prompting:**
- Notare come l'AI risponde a certi tipi di istruzioni o formati.
- Identificare quando l'AI sta entrando in un loop ripetitivo o sta "allucinando".
- Riconoscere lo "stile" dell'AI e adattare i prompt per ottenere output più vicini al desiderato.

**Esempio:** Noti che l'AI fornisce risposte più creative quando le dai un ruolo specifico (es. "Agisci come un esperto storico"). Sfrutti questo pattern per compiti futuri.`
        },
        {
          type: 'tip',
          title: 'Check Metacognitivo sul Riconoscimento di Pattern',
          content: `🔍 Domandati:
- "Sto notando schemi ricorrenti nel modo in cui l'AI interpreta le mie richieste?"
- "Posso prevedere, basandomi sull'esperienza passata, come l'AI potrebbe reagire a un certo tipo di prompt?"
- "Sto usando attivamente i pattern che ho riconosciuto per migliorare l'efficacia dei miei prompt?"`
        },
        {
          type: 'warning',
          title: 'Integrare la Consapevolezza Cognitiva',
          content: `Sviluppare consapevolezza di queste abilità cognitive non è un esercizio teorico, ma una pratica continua. Più diventi cosciente di *come* pensi mentre interagisci con l'AI, più sarai in grado di dirigere questi processi per ottenere risultati straordinari. Considera queste abilità come una "squadra interna" da allenare e coordinare.`
        }
      ],
      exercises: [
        {
          id: 'cog-reflect-1',
          type: 'text', 
          question: 'Pensa a una tua recente interazione significativa con un\'AI. Descrivi brevemente il contesto. Poi, rifletti su quali delle abilità cognitive discusse in questo modulo (Attenzione, Memoria di Lavoro, Pianificazione, Flessibilità Cognitiva, Ragionamento, Riconoscimento di Pattern) hai utilizzato maggiormente. Ci sono state abilità che avresti potuto impiegare in modo più efficace? Se sì, come?',
          explanation: 'Questo esercizio è puramente per la tua auto-riflessione. Non c\'è una risposta "giusta" o "sbagliata". L\'obiettivo è aumentare la tua consapevolezza metacognitiva sulle tue abilità cognitive nel contesto del prompting.'
        }
      ]
    }
  ]
}
