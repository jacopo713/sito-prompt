import { Course } from '@/types/course'

export const courseBase: Course = {
  id: 'corso-base',
  title: 'Corso Base - Metacognizione nel Prompt',
  description: 'Fondamenti del prompt engineering attraverso tecniche di metacognizione avanzata',
  level: 'BASE',
  totalDuration: '5 ore',
  learningObjectives: [
    'Comprendere i principi della metacognizione applicata al prompt engineering',
    'Sviluppare consapevolezza del proprio processo di pensiero',
    'Padroneggiare le tecniche base di prompting efficace',
    'Imparare a calibrare e ottimizzare i propri prompt',
    'Creare un rapporto simbiotico con l\'AI'
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
          title: 'Il Ponte: Dalla Psicologia al Prompt Engineering',
          content: `Ora, **trasferisci questo concetto all'AI**. Quando interagisci con un'intelligenza artificiale, stai essenzialmente "pensando insieme" a un sistema estremamente potente.

La maggior parte delle persone usa l'AI come un motore di ricerca avanzato:
- Fa una domanda
- Riceve una risposta  
- Accetta il risultato senza riflettere

Ma cosa succederebbe se applicassi la **metacognizione** a questo processo?`
        },
        {
          type: 'text',
          title: 'Metacognizione nel Prompt: La Rivoluzione',
          content: `Il **prompt engineering metacognitivo** significa essere consapevoli e riflessivi su:

**🎯 Il tuo obiettivo:** "Cosa sto realmente cercando di ottenere?"
**🧠 Il tuo processo mentale:** "Come sto strutturando questa richiesta?"
**🔄 L'interazione:** "Come sta rispondendo l'AI e perché?"
**⚡ L'ottimizzazione:** "Come posso migliorare questa conversazione?"

Non stai più semplicemente "usando" l'AI - stai **co-pensando** con essa.`
        },
        {
          type: 'example',
          title: 'Approccio Normale vs Approccio Metacognitivo',
          content: `**Approccio normale:**
"Scrivi un piano di marketing per la mia startup"

**Approccio metacognitivo:**
"Voglio sviluppare un piano di marketing, ma prima voglio essere sicuro di strutturare bene questa richiesta. Quali informazioni ha bisogno l'AI per darmi un output davvero utile? Probabilmente dovrei specificare: il settore, il target, il budget, i miei obiettivi specifici... 

Ora provo con: 'Aiutami a creare un piano di marketing per una startup nel settore fintech, target giovani professionisti 25-35 anni, budget mensile 5k€, obiettivo principale acquisire 1000 utenti nei primi 3 mesi. Prima di iniziare, dimmi: ci sono altri dettagli cruciali che dovrei condividere per ottimizzare questo piano?'"

Vedi la differenza? Il secondo approccio **attiva il pensiero critico** sia tuo che dell'AI.`
        },
        {
          type: 'text',
          title: 'I 4 Pilastri della Metodologia CORE',
          content: `In questo corso svilupperai un sistema metacognitivo strutturato attraverso i **4 Pilastri CORE**:

**C** - **Context Mastery**: Gestione consapevole e strategica del contesto
**O** - **Optimization Thinking**: Mentalità di miglioramento continuo  
**R** - **Reflexive Prompting**: Prompting riflessivo e auto-correttivo
**E** - **Enhancement Symbiosis**: Simbiosi di potenziamento reciproco

Ogni pilastro rappresenta una dimensione della tua evoluzione cognitiva nell'interazione con l'AI.`
        },
        {
          type: 'warning',
          title: 'Un Cambiamento di Paradigma',
          content: `⚠️ **Attenzione**: Questo approccio richiede un cambiamento mentale profondo. Non stai imparando "trucchi" o "formule magiche" per i prompt. 

Stai sviluppando una **nuova forma di intelligenza** - la capacità di pensare efficacemente in partnership con l'AI. È più impegnativo, ma i risultati sono trasformativi.`
        }
      ],
      exercises: [
        {
          id: 'ex-1-1',
          question: 'Descrivi un momento recente in cui hai usato la metacognizione nella vita quotidiana (anche senza saperlo). Cosa ti ha fatto "fermare e riflettere" sul tuo processo mentale?',
          type: 'text',
          explanation: 'Questo esercizio ti aiuta a riconoscere che già usi la metacognizione, preparandoti ad applicarla consapevolmente ai prompt.'
        },
        {
          id: 'ex-1-2',
          question: 'Qual è la differenza principale tra usare l\'AI come "strumento" e sviluppare una "simbiosi cognitiva" con essa?',
          type: 'multiple-choice',
          options: [
            'Non c\'è differenza, sono la stessa cosa',
            'La simbiosi significa essere consapevoli e riflessivi sul processo di interazione',
            'Lo strumento è più efficace della simbiosi',
            'La simbiosi è solo teoria, lo strumento è pratica'
          ],
          correctAnswer: 1,
          explanation: 'La simbiosi cognitiva trasforma l\'AI da semplice strumento a partner di pensiero, richiedendo consapevolezza metacognitiva del processo.'
        }
      ]
    },
    {
      id: 'modulo-2', 
      title: 'Autoanalisi del Pensiero',
      description: 'Sviluppa la consapevolezza metacognitiva del tuo processo di prompting',
      duration: '60 min',
      content: [
        {
          type: 'text',
          title: 'Il Tuo Stile di Pensiero',
          content: `Prima di ottimizzare i tuoi prompt, devi capire **come pensi naturalmente**. Ogni persona ha pattern cognitivi unici che influenzano il modo in cui interagisce con l'AI.

Esistono 4 stili principali di thinking prompting:`
        },
        {
          type: 'text',
          title: '🎯 Il Diretto',
          content: `**Caratteristiche:** Va dritto al punto, prompt concisi, orientato ai risultati
**Punti di forza:** Efficienza, chiarezza
**Aree di miglioramento:** Può perdere sfumature, contesto limitato
**Prompt tipico:** "Fammi un riassunto di questo documento"`
        },
        {
          type: 'text', 
          title: '🌊 L\'Esplorativo',
          content: `**Caratteristiche:** Curioso, fa molte domande, esplora possibilità
**Punti di forza:** Creatività, visione ampia
**Aree di miglioramento:** Può divagare, difficoltà a concludere
**Prompt tipico:** "Quali sono tutte le possibili interpretazioni di questo tema e come si collegano tra loro?"`
        },
        {
          type: 'text',
          title: '🏗️ Il Sistematico', 
          content: `**Caratteristiche:** Strutturato, metodico, ama i framework
**Punti di forza:** Organizzazione, completezza
**Aree di miglioramento:** Rigidità, può bloccare la creatività
**Prompt tipico:** "Analizza questo problema seguendo il framework XYZ, fornendo per ogni step..."`
        },
        {
          type: 'text',
          title: '🎨 Il Creativo',
          content: `**Caratteristiche:** Associativo, metaforico, cerca soluzioni innovative
**Punti di forza:** Originalità, pensiero laterale  
**Aree di miglioramento:** Inconsistenza, può essere vago
**Prompt tipico:** "Immagina che questo problema sia un paesaggio. Come lo descriveresti e cosa suggerisce per la soluzione?"`
        },
        {
          type: 'tip',
          title: 'Esercizio di Autoanalisi',
          content: `📝 **Rifletti:** Quale stile riconosci di più nel tuo approccio? Non esiste uno stile "migliore" - l'obiettivo è **amplificare i tuoi punti di forza** e **compensare le aree di miglioramento** attraverso prompt più metacognitivi.`
        }
      ],
      exercises: [
        {
          id: 'ex-2-1',
          question: 'Scrivi un prompt che useresti normalmente per chiedere aiuto nella pianificazione di un progetto. Poi analizza: che stile di pensiero riflette?',
          type: 'text',
          explanation: 'Questo esercizio ti aiuta a prendere consapevolezza del tuo stile naturale di prompting.'
        }
      ]
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
          type: 'warning',
          title: 'Attenzione ai Bias',
          content: '⚠️ L\'AI può amplificare bias presenti nei dati di training. Usa prompt che incoraggiano prospettive multiple e pensiero critico.'
        }
      ]
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
    }
  ]
}
