import React from 'react';

const sectionStyle: React.CSSProperties = {
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  marginBottom: '40px',
  minHeight: '250px', 
  backgroundColor: '#fff',
  // scrollMarginTop assicura che ci sia spazio sopra l'inizio della sezione quando si naviga ad essa
  scrollMarginTop: '20px', 
};

const subSectionStyle: React.CSSProperties = {
  padding: '15px',
  border: '1px dashed #ddd',
  borderRadius: '6px',
  marginTop: '20px',
  marginBottom: '20px',
  minHeight: '150px', 
  backgroundColor: '#fdfdfd',
  // Anche le sotto-sezioni beneficiano di scrollMarginTop
  scrollMarginTop: '20px', 
};

const h3Style: React.CSSProperties = {
  marginTop: '0',
  borderBottom: '1px solid #eee',
  paddingBottom: '10px',
  color: '#333',
};

const h4Style: React.CSSProperties = { 
  marginTop: '0',
  color: '#555',
  borderBottom: '1px dotted #eee',
  paddingBottom: '8px',
};


const ModuleForm: React.FC<{}> = () => {
  return (
    <form>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Modulo Dettagliato</h2>

      {/* Sezione 1: Informazioni Personali */}
      <section id="info-personali" style={sectionStyle}>
        <h3 style={h3Style}>Informazioni Personali</h3>
        <p>Contenuto generale della sezione Informazioni Personali...</p>

        {/* Sotto-sezione 1.1: Dati Anagrafici */}
        <div id="dati-anagrafici" style={subSectionStyle}> {/* ID: dati-anagrafici */}
          <h4 style={h4Style}>Dati Anagrafici</h4>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" style={{ marginLeft: '5px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
          <br /><br />
          <label htmlFor="cognome">Cognome:</label>
          <input type="text" id="cognome" name="cognome" style={{ marginLeft: '5px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}/>
          <p>Ulteriori dettagli anagrafici qui... Questa sotto-sezione dovrebbe essere raggiungibile.</p>
        </div>

        {/* Sotto-sezione 1.2: Indirizzo */}
        <div id="indirizzo-residenza" style={subSectionStyle}> {/* ID: indirizzo-residenza */}
          <h4 style={h4Style}>Indirizzo di Residenza</h4>
          <label htmlFor="via">Via:</label>
          <input type="text" id="via" name="via" style={{ marginLeft: '5px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }} />
          <p>Altri campi per l'indirizzo... Questa sotto-sezione dovrebbe essere raggiungibile.</p>
        </div>
      </section>

      {/* Sezione 2: Dettagli Contatto */}
      <section id="dettagli-contatto" style={sectionStyle}>
        <h3 style={h3Style}>Dettagli Contatto</h3>
        <p>Contenuto della sezione Dettagli Contatto...</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" style={{ marginLeft: '5px', padding: '8px', border: '1px solid #ddd', borderRadius: '4px' }}/>
      </section>

      {/* Sezione 3: Approfondimenti AI */}
      <section id="approfondimenti-ai" style={sectionStyle}>
        <h3 style={h3Style}>Approfondimenti AI</h3>
        <p>Questa sezione esplora vari concetti relativi all'Intelligenza Artificiale.</p>

        {/* Sotto-sezione 3.1: Come "Pensa" l'AI */}
        <div id="come-pensa-ai" style={subSectionStyle}> {/* ID: come-pensa-ai */}
          <h4 style={h4Style}>Come "Pensa" l'AI</h4>
          <p>L'Intelligenza Artificiale non "pensa" nel senso umano del termine. Questa sotto-sezione dovrebbe essere raggiungibile.</p>
          <p>Tecniche comuni includono: Machine Learning, Deep Learning (con reti neurali), Natural Language Processing, etc.</p>
        </div>

        {/* Sotto-sezione 3.2: Tipi di AI */}
        <div id="tipi-di-ai" style={subSectionStyle}> {/* ID: tipi-di-ai */}
          <h4 style={h4Style}>Tipi di AI</h4>
          <p>Esistono diverse classificazioni. Questa sotto-sezione dovrebbe essere raggiungibile.</p>
        </div>
      </section>

      {/* Sezione 4: Esperienza Lavorativa */}
      <section id="esperienza-lavorativa" style={sectionStyle}>
        <h3 style={h3Style}>Esperienza Lavorativa</h3>
        <p>Contenuto della sezione Esperienza Lavorativa...</p>
      </section>

      {/* Sezione 5: Istruzione */}
      <section id="istruzione" style={sectionStyle}>
        <h3 style={h3Style}>Istruzione</h3>
        <p>Contenuto della sezione Istruzione...</p>
      </section>
    </form>
  );
};

export default ModuleForm;
