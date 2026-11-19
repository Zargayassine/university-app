import React, { useState } from "react";
import "./StudentCard.css";

function StudentCard(props) {
  const [
    coordonneesVisibles,
    setCoordonneesVisibles,
  ] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(
      !coordonneesVisibles
    );
  }

  return (
    <div className="card">
      <div className="profile-container">
        <img
          src={props.image}
          alt="Etudiant"
          className="profile-img"
        />
      </div>

      <h2 className="title">
        Fiche étudiant
      </h2>

      <p>
        <span className="label">
          Nom & Prénom :
        </span>
        {" "}
        {props.prenom} {props.nom}
      </p>

      <p>
        <span className="label">
          Filière :
        </span>
        {" "}
        {props.filiere}
      </p>

      <p>
        <span className="label">
          Année :
        </span>
        {" "}
        {props.anneeEtude}
      </p>

      <p>
        <span className="label">
          Groupe :
        </span>
        {" "}
        {props.groupe}
      </p>

      <p>
        <span className="label">
          Ville :
        </span>
        {" "}
        {props.ville}
      </p>

      {coordonneesVisibles && (
        <>
          <p>
            <span className="label">
              Email :
            </span>
            {" "}
            {props.email}
          </p>

          <p>
            <span className="label">
              Téléphone :
            </span>
            {" "}
            {props.telephone}
          </p>
        </>
      )}

      <div className="buttons">
        <button
          className="info-btn"
          onClick={basculerCoordonnees}
        >
          {coordonneesVisibles
            ? "Masquer les coordonnées"
            : "Afficher les coordonnées"}
        </button>

        <button
          className="contact-btn"
          onClick={() =>
            window.open(
              `mailto:${props.email}`
            )
          }
        >
          Contacter
        </button>

        <button
          className="edit-btn"
          onClick={() =>
            props.modifierEtudiant({
              prenom: props.prenom,
              nom: props.nom,
              email: props.email,
              telephone: props.telephone,
              filiere: props.filiere,
              anneeEtude: props.anneeEtude,
              groupe: props.groupe,
              ville: props.ville,
              image: props.image,
            })
          }
        >
          Modifier
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            props.supprimerEtudiant(
              props.email
            )
          }
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default StudentCard;