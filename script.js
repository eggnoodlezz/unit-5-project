let firstquestion = document.querySelector(".firstquestion").value;
let secondquestion = document.querySelector(".secondquestion").value;
let Sumbitbutton = document.querySelector(".Submitbutton");
let optionone = document.querySelector(".optionone");
let optiontwo = document.querySelector(".optiontwo");
let optionthree = document.querySelector(".optionthree");
let optionfour = document.querySelector(".optionfour");
let Gengar = document.querySelector(".Gengar");
let Dragonite = document.querySelector(".Dragonite");
let Machamp = document.querySelector(".Machamp");
let Alakazam = document.querySelector(".Alakazam");

Sumbitbutton.onclick = function() {

  let firstquestion = document.querySelector(".firstquestion").value;
  let secondquestion = document.querySelector(".secondquestion").value;

    if (firstquestion === "Gengar" && secondquestion === "Machamp") {
    optiontwo.style.display = "block"; }
    else if (firstquestion === "Dragonite" && secondquestion === "Alakazam") { optiontwo.style.display = "block"; }

    else if (firstquestion === "Gengar" && secondquestion === "Alakazam") { optionthree.style.display = "block"; }

    else if (firstquestion === "Dragonite" && secondquestion === "Machamp") { optionfour.style.display = "block"; }

};
