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
      description: 'Scopri cos\'è la metacognizione e come applicarla al prompt engineering',
      duration: '45 min',
      content: [
        {
          type: 'text',
          title: 'Benvenuto nel futuro del Prompt Engineering',
          content: `Il prompt engineering non è solo scrivere istruzioni per l'AI. È l'arte di **pensare insieme all'intelligenza artificiale**, creando una simbiosi cognitiva che amplifica le tue capacità mentali.

In questo corso imparerai la **Metacognizione del Prompt**: la capacità di riflettere e ottimizzare non solo quello che chiedi all'AI, ma *come* pensi mentre lo fai.`
        },
        {
          type: 'tip',
          title: 'Concetto Chiave',
          content: '🧠 **Metacognizione** = "Pensare sul pensare". Nel prompt engineering significa essere consapevoli di come strutturi le tue richieste e perché.'
        },
        {
          type: 'text',
          title: 'I 4 Pilastri della Metodologia CORE',
          content: `**C** - Context Mastery: Gestione avanzata del contesto
**O** - Optimization Thinking: Pensiero ottimizzante
**R** - Reflexive Prompting: Prompting riflessivo  
**E** - Enhancement Symbiosis: Simbiosi di potenziamento

Ogni pilastro rappresenta una dimensione cognitiva che svilupperai durante il corso.`
        },
        {
          type: 'example',
          title: 'Prompt Normale vs Prompt Metacognitivo',
          content: `**Prompt normale:**
"Scrivi un articolo sul marketing digitale"

**Prompt metacognitivo:**
"Voglio scrivere un articolo sul marketing digitale. Prima dimmi: quali sono gli aspetti più innovativi e meno ovvi che dovrei considerare? Poi, strutturiamo insieme l'articolo partendo da una prospettiva originale che emerga da questa analisi."

La differenza? Il secondo prompt **attiva il pensiero critico** sia tuo che dell'AI.`
        }
      ],
      exercises: [
        {
          id: 'ex-1-1',
          question: 'Qual è la differenza principale tra prompt engineering tradizionale e metacognizione del prompt?',
          type: 'multiple-choice',
          options: [
            'Non c\'è differenza, sono la stessa cosa',
            'La metacognizione si concentra sulla consapevolezza del processo di pensiero',
            'Il prompt engineering tradizionale è più efficace',
            'La metacognizione è solo teoria, il prompt engineering è pratica'
          ],
          correctAnswer: 1,
          explanation: 'La metacognizione del prompt aggiunge la dimensione della consapevolezza: non solo *cosa* chiedere, ma *come* e *perché* lo stai chiedendo.'
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
