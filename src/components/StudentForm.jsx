import React, { useState } from "react";
import "./StudentForm.css";

function StudentForm({onAjouterEtudiant,etudiantAModifier,onModifierEtudiant,}) {
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(etudiantAModifier?.telephone || "");
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(etudiantAModifier?.anneeEtude || "");
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");
  const viderFormulaire = () => {
    setPrenom("");
    setNom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
  };

  const handleSubmit = (e) => {e.preventDefault();

    const nouvelEtudiant = {
      prenom,
      nom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image,
    };

    if (etudiantAModifier) {
      onModifierEtudiant(nouvelEtudiant);
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      viderFormulaire();
    }
  };

  const handleAnnuler = () => {viderFormulaire();
    if (etudiantAModifier) {
      onModifierEtudiant(null);
    }
  };

  return (
    <form className="student-form" onSubmit={handleSubmit} >
      <h2>
        {etudiantAModifier
          ? "Modifier un étudiant"
          : "Ajouter un étudiant"}
      </h2>
      <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required/>

      <input type="text" placeholder="Nom" value={nom}onChange={(e) =>setNom(e.target.value)}required/>
      <input type="email" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}required/>
      <input type="tel" placeholder="Téléphone" value={telephone} onChange={(e) =>setTelephone(e.target.value)}required/>
      <select value={filiere}onChange={(e) =>setFiliere(e.target.value)}required>
        <option value="">Choisir une filière</option>
        <option value="GLSI">GLSI</option>
        <option value="IOT">IOT</option>
        <option value="BI">BI</option>
      </select>

      <input type="text" placeholder="Année d'étude" value={anneeEtude}onChange={(e) =>setAnneeEtude(e.target.value)}/>

      <input type="text" placeholder="Groupe" value={groupe}onChange={(e) =>setGroupe(e.target.value)}/>

      <input type="text"placeholder="Ville"value={ville}onChange={(e) =>setVille(e.target.value)}/>

      <input type="text"placeholder="Image (ex: sarra.jpg)"value={image}onChange={(e) =>setImage(e.target.value)}/>

      <div className="form-buttons">
        <button type="submit" className="submit-btn">
          {etudiantAModifier
            ? "Enregistrer"
            : "Ajouter"}
        </button>

        <button
          type="button"
          className="cancel-btn"
          onClick={handleAnnuler}
        >
          Annuler
        </button>
      </div>
    </form>
  );
}

export default StudentForm;