import React from 'react';
import './StudentCard.css';

function StudentCard(props) {
  return (
    <div className="card">
      <div className="profile-container">
        <img src={props.image} alt="Photo étudiant" className="profile-img" />
      </div>
      <h2 className="title">Fiche étudiant</h2>
      <div className="fiche-details">
        <p><span className="label">Nom & Prénom :</span> {props.prenom} {props.nom}</p>
        <p><span className="label">Email :</span> {props.email}</p>
        <p><span className="label">Téléphone :</span> {props.telephone}</p>
        <p><span className="label">Filière :</span> {props.filiere}</p>
        <p><span className="label">Année d'étude :</span> {props.anneeEtude}</p>
        <p><span className="label">Groupe :</span> {props.groupe}</p>
        <p><span className="label">Ville :</span> {props.ville}</p>
      </div>
      <button 
        className="contact-btn"
        onClick={() => window.location.href = `mailto:${props.email}`}
      >
        Contacter
      </button>
    </div>
  );
}

export default StudentCard;
