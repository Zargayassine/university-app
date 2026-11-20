import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Yassine",
      nom: "Zarga",
      email: "yzarga25@gmail.com",
      telephone: "+21695245389",
      filiere: "GLSI",
      anneeEtude: "2026-2027",
      groupe: "GLSI 2",
      ville: "Bekalta",
      image: "unnamed.jpg",
    },
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: `slim${Math.floor(Math.random() * 10000)}@gmail.com`,
      telephone: "+21699999999",
      filiere: "GLSI",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: "student.jpg",
    },
  ]);

  const [filtre, setFiltre] = useState("");

  const [etudiantAModifier, setEtudiantAModifier] =useState(null);

  const ajouterEtudiant = (nouvelEtudiant) => {setEtudiants([...etudiants,{...nouvelEtudiant,id: Date.now(),},]);};

  const supprimerEtudiant = (email) => {setEtudiants( etudiants.filter((etudiant) =>etudiant.email !== email ) );};

  const selectionnerEtudiant = ( etudiant) => {setEtudiantAModifier(etudiant); };

  const enregistrerModification = (etudiantModifie) => {setEtudiants(etudiants.map((etudiant) =>etudiant.email === etudiantAModifier.email
          ? {
              ...etudiant,...etudiantModifie,
            } : etudiant
      )
    );

    setEtudiantAModifier(null);
  };
  const etudiantsFiltres =
    etudiants.filter((etudiant) =>etudiant.filiere.toLowerCase().includes(filtre.toLowerCase()));

  return (
    <div className="container">
      <Header />

      <Navbar />

      <h1 className="main-title">
        Gestion des étudiants
      </h1>

      <StudentForm
        key={etudiantAModifier?.email ||"nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={(data) => {
          if (data === null) {
            setEtudiantAModifier(null);
          } else {
            enregistrerModification(
              data
            );
          }
        }}
      />

      <div className="actions">
        <input
          type="text"
          placeholder="Filtrer par filière..."
          value={filtre}
          onChange={(e) =>
            setFiltre(e.target.value)
          }
        />
      </div>

      <div className="cards-grid">
        {etudiantsFiltres.map(
          (etudiant) => (
            <StudentCard
              key={etudiant.email}
              {...etudiant}
              supprimerEtudiant={
                supprimerEtudiant
              }
              modifierEtudiant={
                selectionnerEtudiant
              }
            />
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;