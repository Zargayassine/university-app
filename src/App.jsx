import React from 'react';
import './App.css';

function App() {
  const etudiant = {
    nomPrenom: "Zarga yassine",
    email: "yzarga25@gmail.com",
    telephone: "+216 95 245 389",
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: "2026-2027", 
    groupe: "GLSI 2",
    ville: "bekalta"
  };

  return (
    <div className="container">
      <div className="card">
        <div className="profile-container">
          <img 
            src="unnamed.jpg" 
            alt="Profil étudiant" 
            className="profile-img" 
          />
        </div>

        <h1 className="title">Fiche étudiant</h1>

        <div className="fiche-details">
          <p><span className="label">Nom & Prénom :</span> {etudiant.nomPrenom}</p>
          <p><span className="label">Email :</span> <span className="email-text">{etudiant.email}</span></p>
          <p><span className="label">Téléphone :</span> {etudiant.telephone}</p>
          <p>
            <span className="label">Filière :</span> 
            <span className="multiline-text">{etudiant.filiere}</span>
          </p>
          <p><span className="label">Année d'étude :</span> {etudiant.anneeEtude}</p>
          <p><span className="label">Groupe :</span> {etudiant.groupe}</p>
          <p><span className="label">Ville :</span> {etudiant.ville}</p>
        </div>
        <button className="contact-btn">Contacter</button>
      </div>
    </div>
  );
} 

export default App;
