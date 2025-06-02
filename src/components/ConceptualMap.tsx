"use client"; // Direttiva per indicare che è un Client Component

import React from 'react';

// Definiamo i tipi per le props del componente, ora con subItems opzionali
interface MapItem {
  id: string; // Corrisponde all'ID della sezione/sotto-sezione nel modulo
  title: string;
  subItems?: MapItem[]; // Array opzionale per i sotto-elementi
}

interface ConceptualMapProps {
  items: MapItem[];
}

// Componente ricorsivo per renderizzare la lista di items e subItems
const MapLinkList: React.FC<{ items: MapItem[]; isSubItem?: boolean }> = ({ items, isSubItem = false }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: isSubItem ? '20px' : '0' }}>
      {items.map((item) => (
        <li key={item.id} style={{ marginBottom: '8px' }}>
          <a
            href={`#${item.id}`}
            style={{
              textDecoration: 'none',
              color: isSubItem ? '#0056b3' : '#0070f3', // Colore diverso per sub-item
              fontWeight: isSubItem ? 'normal' : 'bold',
              transition: 'color 0.2s ease',
            }}
            // Questi event handler richiedono un Client Component
            onMouseOver={(e) => e.currentTarget.style.color = '#004494'}
            onMouseOut={(e) => e.currentTarget.style.color = isSubItem ? '#0056b3' : '#0070f3'}
          >
            {item.title}
          </a>
          {/* Chiamata ricorsiva per i sotto-elementi */}
          {item.subItems && item.subItems.length > 0 && (
            <MapLinkList items={item.subItems} isSubItem={true} />
          )}
        </li>
      ))}
    </ul>
  );
};

const ConceptualMap: React.FC<ConceptualMapProps> = ({ items }) => {
  return (
    <nav style={{ marginBottom: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ marginTop: '0', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Mappa Concettuale</h2>
      <MapLinkList items={items} />
    </nav>
  );
};

export default ConceptualMap;
