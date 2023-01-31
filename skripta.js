
function provjeri() {

    // Pospremamo odgovore u varijable
    let p1 = document.kviz.pitanje1.value;
    let p2 = document.kviz.pitanje2.value;
    let p3 = document.kviz.pitanje3.value;

    // Postavljamo rezultat na 0
    let rezultat = 0;

    // Provjeravamo odgovore
    if(p1 == "a" || p1 == "A") {
        rezultat++; // povećaj rezultat za 1
    }

    if(p2 == "false") {
        rezultat++;
    }

    if(p3 == "b") {
        rezultat++;
    }

    // Ispisujemo broj točnih
    document.getElementById("bodovi").innerHTML = "Imaš " + rezultat + " / 3 boda.";

    
    // Spremamo poruke i slike u liste
    let poruka = ["Bravo, ti si genije!", "Vidio sam i bolje!", "Nemam komentara"]
    let slika = ["top.gif", "ok.gif", "fail.gif"];

    
    // Raspon bodova odlučuje o poruci i slici koja se prikazuje
    let rasponBodova;

    if (rezultat == 3) {
        rasponBodova = 0;
    } else if (rezultat >= 2) {
        rasponBodova = 1;
    } else {
        rasponBodova = 2;
    }

    // Ispisujemo poruku i sliku na ekran ovisno o rasponu bodova
    document.getElementById("poruka").innerHTML = poruka[rasponBodova];
    document.getElementById("slika").src = slika[rasponBodova];

}