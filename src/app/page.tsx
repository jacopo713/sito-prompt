"use client"; // Direttiva per indicare che è un Client Component

import React from 'react';
import ConceptualMap from '../components/ConceptualMap';
import ModuleForm from '../components/ModuleForm';

// Definisci gli item per la mappa concettuale con struttura annidata
// Gli 'id' devono corrispondere esattamente agli 'id' delle sezioni/sotto-sezioni in ModuleForm
const mapItems = [
  {
    id: 'info-personali', // Target: <section id="info-personali">
    title: 'Informazioni Personali',
    subItems: [
      { id: 'dati-anagrafici', title: 'Dati Anagrafici' },      // Target: <div id="dati-anagrafici">
      { id: 'indirizzo-residenza', title: 'Indirizzo Residenza' },// Target: <div id="indirizzo-residenza">
    ],
  },
  {
    id: 'dettagli-contatto', // Target: <section id="dettagli-contatto">
    title: 'Dettagli Contatto',
  },
  {
    id: 'approfondimenti-ai', // Target: <section id="approfondimenti-ai">
    title: 'Approfondimenti AI',
    subItems: [
      { id: 'come-pensa-ai', title: "Come 'Pensa' l'AI" },    // Target: <div id="come-pensa-ai">
      { id: 'tipi-di-ai', title: 'Tipi di AI' },              // Target: <div id="tipi-di-ai">
    ],
  },
  {
    id: 'esperienza-lavorativa', // Target: <section id="esperienza-lavorativa">
    title: 'Esperienza Lavorativa',
  },
  {
    id: 'istruzione', // Target: <section id="istruzione">
    title: 'Istruzione',
  },
];

export default function HomePage() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#f0f2f5' }}>
      <style jsx global>{`
        html {
          scroll-behavior: smooth; /* Abilita lo scrolling fluido */
        }
      `}</style>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#333' }}>Pagina Principale con Navigazione Interna Dettagliata</h1>
      </header>

      <ConceptualMap items={mapItems} />
      <ModuleForm />

      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#777', borderTop: '1px solid #eee', paddingTop: '20px' }}>
        <p>&copy; 2025 Applicazione Demo</p>
      </footer>
    </main>
  );
}
