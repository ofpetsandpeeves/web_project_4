//import images
import nebulaImage from "../images/RavenSeamusNebulaFixedScaling.jpg";
import nyanSawyer from "../images/NyanSawyerFixed.jpg";
import milkyWay from "../images/HeyThereFinallyAwakeFixed.jpg";
import spaceStation from "../images/SpaceStationSawyerFixedScaling.jpg";
import moon from "../images/ravenmoon.jpg";
import earth from "../images/SeamusOceanDuckeeScalefix.jpg";

//array for places
const initialCards = [
  {
    name: "Nebula",
    link: nebulaImage,
    text: "Nebula"
  },
  {
    name: "Utah",
    link: nyanSawyer,
    text: "Utah"
  },
  {
    name: "Milky Way",
    link: milkyWay,
    text: "Milky way"
  },
  {
    name: "Space Station",
    link: spaceStation,
    text: "Space station"
  },
  {
    name: "Moon",
    link: moon,
    text: "Moon"
  },
  {
    name: "Earth",
    link: earth,
    text: "Earth"
  }
];

const objects = {
  formSelector: ".modal__container",
  inputSelector: ".modal__form-control",
  submitButtonSelector: ".button",
  inactiveButtonClass: "button_disabled",
  inputErrorClass: "modal__form-control_type_error",
  errorClass: "modal__error"
};

const editButton = document.querySelector(".edit-button");
const addButton = document.querySelector(".add-button");

const formName = document.querySelector(".modal__form-control_type_name"); //text content
const formJob = document.querySelector(".modal__form-control_type_about"); //text content



export {initialCards, objects, editButton, addButton, formName, formJob}
