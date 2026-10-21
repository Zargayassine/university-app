import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

function App() {
  const etudiants = [
    {
      prenom: "Yassine",
      nom: "Zarga",
      email: "yzarga25@gmail.com",
      telephone: "+216 95 245 389",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2026-2027",
      groupe: "GLSI 2",
      ville: "Bekalta",
      image: "unnamed.jpg"
    },
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: "student.jpg"
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: "sarra.jpg"
    }
  ];

  return (
    <div className="container">
      <Header />
      <Navbar />
      <h1 className="main-title">Liste des étudiants</h1>
      <div className="cards-grid">
        {etudiants.map((etudiant) => (
          <StudentCard key={etudiant.email} {...etudiant} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
