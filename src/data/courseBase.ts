import { Course } from '@/types/course'

export const courseBase: Course = {
  id: 'corso-base',
  title: 'Corso Base - Metacognizione nel Prompt',
  description: 'Fondamenti del prompt engineering attraverso tecniche di metacognizione avanzata',
  level: 'BASE',
  totalDuration: '5 ore 30 min', // Updated to reflect new module
  learningObjectives: [
    'Comprendere i principi della metacognizione applicata al prompt engineering',
    'Sviluppare consapevolezza del proprio processo di pensiero',
    'Padroneggiare le tecniche base di prompting efficace',
    'Imparare a calibrare e ottimizzare i propri prompt',
    'Creare un rapporto simbiotico con l\'AI',
    'Valutare la propria comprensione dei concetti chiave del corso'
  ],
  modules: [
    {
      id: 'modulo-1',
      title: 'Introduzione alla Metacognizione nel Prompt',
      description: 'Scopri cos\'è la metacognizione dal punto di vista psicologico e come applicarla al prompt engineering',
      duration: '60 min',
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
      // Exercises removed from Modulo 1
    },
    {
      id: 'modulo-2', 
      title: 'Autoanalisi del Pensiero',
      description: 'Sviluppa la consapevolezza metacognitiva del tuo processo di prompting attraverso l\'analisi del tuo stile cognitivo',
      duration: '75 min',
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
      // Exercises removed from Modulo 2
    },
    {
      id: 'modulo-3',
      title: 'Pattern Recognition nell\'AI',
      description: 'Impara a riconoscere come l\'AI elabora le informazioni per migliorare i tuoi prompt',
      duration: '75 min', 
      content: [
        {
          type: 'text',
          title: 'Come "Pensa" l\'AI',
          content: `Per creare prompt efficaci, devi capire come l'AI elabora le informazioni. Non "pensa" come noi, ma segue pattern specifici che puoi sfruttare a tuo vantaggio.`
        },
        {
          type: 'text',
          title: 'I 5 Pattern Fondamentali dell\'AI',
          content: `**1. Pattern Completion:** L'AI cerca di completare pattern riconosciuti
**2. Context Dependency:** La risposta dipende fortemente dal contesto fornito
**3. Priming Effect:** Le prime informazioni influenzano tutto il resto
**4. Structural Preference:** Preferisce strutture chiare e organizzate
**5. Semantic Clustering:** Raggruppa concetti semanticamente correlati`
        },
        {
          type: 'example',
          title: 'Sfruttare il Pattern Completion',
          content: `**Invece di:** "Dimmi qualcosa sul marketing"

**Prova:** "Il marketing digitale del 2024 si distingue per tre caratteristiche innovative: 1) _____, 2) _____, 3) _____. Completa questo pattern e spiega perché questi elementi sono cruciali."

L'AI riconoscerà il pattern "lista numerata + spiegazione" e fornirà una risposta più strutturata e utile.`
        },
        {
          type: 'text',
          title: 'Prompt con Gestione del Peso',
          content: `Una tecnica avanzata è comunicare le priorità attraverso il **contesto e la struttura** del prompt, piuttosto che usando etichette esplicite.

L'AI è abile nel dedurre l'importanza relativa degli elementi dalla loro posizione, ripetizione e formulazione nel prompt.

**Principi chiave:**
- **Posizione:** Gli elementi più importanti vanno all'inizio
- **Ripetizione:** I concetti cruciali vengono naturalmente ribaditi
- **Specificità:** Maggiori dettagli indicano maggiore rilevanza
- **Contesto emotivo:** Il tono trasmette l'urgenza o l'importanza`
        },
        {
          type: 'example',
          title: 'Esempio: Prompt Breve e Passivo (Evitare)',
          content: `"Crea presentazione Q3"

❌ **Problemi di questo approccio:**
- Troppo generico e vago
- Nessun contesto sul target audience
- Manca completamente l'urgenza e l'importanza
- Non specifica il formato o l'obiettivo
- L'AI deve "indovinare" tutto`
        },
        {
          type: 'example',
          title: 'Esempio: Prompt Naturale con Gestione del Peso (Preferire)',
          content: `Devo creare una presentazione per il board aziendale sui risultati del Q3. È fondamentale che sia altamente professionale perché voglio fare un'ottima impressione. Il board sarà composto da executives senior che si aspettano contenuti di alta qualità, dati precisi e una narrativa coinvolgente.

I risultati Q3 mostrano una crescita del 23% rispetto al Q2, con particolare successo nel segmento enterprise. Vorrei strutturare la presentazione in modo da evidenziare questi successi ma anche affrontare proattivamente le sfide del Q4.

La presentazione deve assolutamente riflettere professionalità e competenza - è un momento cruciale per la mia credibilità con il leadership team.

✅ **Vantaggi di questo approccio:**
- Suona naturale come una conversazione autentica
- L'AI deduce le priorità da posizione, ripetizione e contesto
- Trasmette l'urgenza emotiva senza artifici
- Fornisce contesto ricco per una risposta mirata`
        },
        {
          type: 'tip',
          title: 'Come l\'AI Interpreta il Peso',
          content: `🎯 **L'AI capisce immediatamente che:**
- La professionalità è la priorità assoluta (ripetuta 3 volte)
- Il target è senior executives (dettaglio specifico)
- C'è una componente emotiva importante (impression management)
- I dati Q3 sono il contenuto principale
- Il contesto è ad alto stake (credibilità, momento cruciale)

💡 **Risultato:** Una risposta che bilancia perfettamente professionalità, dati concreti e storytelling coinvolgente, senza bisogno di etichette artificiali.`
        }
      ]
      // Exercises removed from Modulo 3
    },
    {
      id: 'modulo-4',
      title: 'Calibrazione Continua',
      description: 'Tecniche per ottimizzare iterativamente i tuoi prompt',
      duration: '90 min',
      content: [
        {
          type: 'text',
          title: 'Il Ciclo di Calibrazione ARIA',
          content: `**A**nalyze - Analizza la risposta ricevuta
**R**eflect - Rifletti su cosa funziona e cosa no  
**I**terate - Modifica il prompt basandoti sull'analisi
**A**dopt - Adotta la versione migliorata

Questo ciclo trasforma ogni interazione in un'opportunità di apprendimento.`
        },
        {
          type: 'example',
          title: 'Calibrazione in Azione',
          content: `**Prompt v1:** "Scrivi una strategia di marketing"
**Risultato:** Generico, poco actionable

**Analisi:** Troppo vago, manca contesto specifico

**Prompt v2:** "Scrivi una strategia di marketing per un e-commerce di abbigliamento sostenibile, target 25-40 anni, budget 10k€/mese, obiettivo: +50% vendite in 6 mesi"
**Risultato:** Specifico, actionable, personalizzato

**Riflessione:** La specificità del contesto ha migliorato drasticamente la qualità.`
        },
        {
          type: 'tip',
          title: 'Metriche di Qualità',
          content: `Valuta sempre le risposte su:
- **Relevanza:** Risponde alla domanda?
- **Specificità:** È abbastanza dettagliato?
- **Actionability:** Posso agire su queste informazioni?
- **Originalità:** Offre insight non ovvi?
- **Completezza:** Copre tutti gli aspetti rilevanti?`
        }
      ]
      // Exercises removed from Modulo 4
    },
    {
      id: 'modulo-5',
      title: 'Simbiosi Cognitiva con l\'AI',
      description: 'Crea un rapporto di crescita reciproca con l\'intelligenza artificiale',
      duration: '60 min',
      content: [
        {
          type: 'text',
          title: 'Oltre lo Strumento: L\'AI come Partner Cognitivo',
          content: `Il livello più alto del prompt engineering non è usare l'AI come strumento, ma sviluppare una **simbiosi cognitiva** - una relazione in cui tu e l'AI vi potenziate a vicenda.`
        },
        {
          type: 'text',
          title: 'I 3 Livelli di Interazione',
          content: `**Livello 1 - Strumento:** "Fammi questo"
**Livello 2 - Assistente:** "Aiutami a fare questo"  
**Livello 3 - Partner:** "Pensiamo insieme a questo"

Nel livello 3, tu e l'AI create valore che nessuno dei due potrebbe generare da solo.`
        },
        {
          type: 'example',
          title: 'Prompt Simbiotico',
          content: `"Voglio sviluppare una strategia innovativa per X. Tu cosa noti di unico o controintuitivo in questo settore che io potrei non vedere? Poi, basandoci sui tuoi insight e sulla mia esperienza in Y, co-creiamo un approccio che combini la tua capacità analitica con la mia intuizione di settore."

Questo prompt:
- Riconosce i punti di forza dell'AI
- Valorizza la tua esperienza umana
- Crea uno spazio di co-creazione`
        }
      ]
      // Exercises removed from Modulo 5
    },
    {
      id: 'modulo-6',
      title: 'Modulo 6 - Quiz Finale di Autovalutazione',
      description: 'Valuta la tua comprensione dei concetti chiave del corso attraverso questo quiz finale. È richiesto un punteggio minimo per considerare il corso completato con successo.',
      duration: '30 min',
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
            'Semantic Clustering'
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
    }
  ]
}
