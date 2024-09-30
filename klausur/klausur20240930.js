console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

class Wuerfel{
    costructor(){
        this.volumen
        this.Seitenlaenge
    }
}

let wuerfel=new Wuerfel()

wuerfel.Volumen=800
wuerfel.Seitenlaenge=200

console.log("Das Volumen des Würfels beträgt " + wuerfel.Volumen + "cm3. ")

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(wuerfel.Volumen>=1000){
    console.log("Das Volumen beträgt 1000 oder mehr Quadratzentimeter.")
}





// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.



console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 

// 2a)
// Definieren Sie die class

class Zeugniss{
    constructor(){
        this.Deutsch
        this.Mathe
        this.Englisch
        this.Leistungskurs
        this.Religion
        this.Sport
        this.Wirtschaftsinformatik
        this.Fehlstunden
        this.Durchschnittsnote
    }
}



// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

let zeugniss = new Zeugniss()

zeugniss.Deutsch= 1
zeugniss.Mathe=3
zeugniss.Englisch=2
zeugniss.Leistzeugnissungskurs=3
zeugniss.Religion=4
zeugniss.Sport=2
zeugniss.Wirtschaftsinformatik=1
zeugniss.Fehlstunden= 2


// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.

console.log("Das Zeugnis weist 7 Noten und die Fehlstunden auf. Die Note in Deutsch lautet: " + zeugniss.Deutsch+ ", Die Mathenote lautet: " + zeugniss.Mathe+ ", Die Englischnote lautet: "+ zeugniss.Englisch+ " Die Leistungskursnote ist: " + zeugniss.Leistungskurs+ ", Die Note in Religion ist:" + zeugniss.Religion+ ", Die Sportnote lautet:  " + zeugniss.Sport+ " ,Die Wirtschaftsinformatiknote ist: " + zeugniss.Wirtschaftsinformatik+ ". Auf dem Zeugniss sind" +zeugniss.Fehlstunden+ " Fehlstunden abzulesen.")



// 2d) NUR KLAUSURSCHREIBER
// Berechnen Sie die Durchnittsnote Ihres Objekts. Geben Sie die Durchschnittsnote auf der Konsole aus.

class Durchschnittsnote{
    constructor(){
    this.Deutsch= 1
    this.Mathe=3
    this.Englisch=2
    this.Leistzeugnissungskurs=3
    this.Religion=4
    this.Sport=2
    this.Wirtschaftsinformatik=1
    this.Fehlstunden= 2
    }
}
let durchschnittsnote = new Durchschnittsnote()

zeugniss.durchschnittsnote = ((zeugniss.Deutsch*zeugniss.Mathe*zeugniss.Englisch*zeugniss.Leistungskurs*zeugniss.Religion*zeugniss.Sport*zeugniss.Wirtschaftsinformatik)/7)

console.log('Die Durchschnittsnote beträgt: '+zeugniss.durchschnittsnote)

// 2e) NUR KLAUSURSCHREIBER
// Lisa hat die Durchsnittsnote 3, Tom hat die Durschnittsnote 4, Max hat die Durschnittsnote 5
// Vergleichen Sie Ihre Zeugnis-Objekt-Durchschnittsnote aus 2d) mit den Zeugnisdurchschnittsnoten von Lisa, Tom und Max.
// Wenn Ihre Zeugnis-Objekt-Durschnittsnote besser ist als die der anderen, dann soll das auf der Konsole entsprechend
// ausgegeben werden. Wenn die Note schlechter ist als die aller anderen, soll das ebenfalls ausgegeben werden.
// Ergänzen Sie die Eigenschaft "Klassenbeste" in Ihrem Zeugnisobjekt. 
// Setzen Sie die Eigenschaft entsprechend der Zeugnisnote auf true oder false
// Es hilft Ihnen dabei die Funktion Math.min() aus der Math-Bibliothek.
// Beispiel der Anwendung von Math.min():
// let x = Math.min(5, 10); --> Es werden 5 und 10 verglichen. x nimmt jetzt den Wert 5 an, da 5 der niedrigste der kommaseparierten Werte ist.

let Durchschnittsnote= Math.min(3,4,5);






console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Kosten{
    constructor(){
        this.Rabatt
        this.Listenpreis
        this.Rabattprozentsatz
        this.Nettorechnungsbetrag
        this.MwSt
        this.MwStprozentsatz
        this.Bruttorechnungsbetrag
        this.Skonto
        this.Skontoprozentsatz
        this.Zahlungsbetrag
    }
}

let kosten=new Kosten()
kosten.Nettorechnungsbetrag

class Mehrwertssteuer{
    constructor(){
    this.LebensmittelZeitungBuch
    this.Andere
    }
}

let mehrwertssteuer= new Mehrwertssteuer()
mehrwertssteuer.LebensmittlZeitungBuch= 7 
mehrwertssteuer.Andere=19 



// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.



// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

let MwStAufgabe= new Mehrwertssteuer()
MwStAufgabe= kosten.Nettorechnungsbetrag*mehrwertssteuer.LebensmittlZeitungBuch/100%

console.log('Die Mehrwertssteuer beträgt'+ MwStAufgabe + "Eur , da es sich bei den Produkten um Zeitungen handelt.")



// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

class Bruttorechnungsbetrag{
    constructor(){
    this.Nettorechnungsbetrag
    this.MwSt
    }
}

let bruttorechnungsbetrag=new Bruttorechnungsbetrag()
bruttorechnungsbetrag=kosten.Nettorechnungsbetrag+MwStAufgabe





// 3e) NUR KLAUSURSCHREIBER
// Das Skonto ist gestaffelt abhängig vom Brutto-Rechnungsbetrags.
// Brutto-Rechnungsbetrag kleiner als   |     Skonto
//                                  100 | 1
//                                  200 | 1,1
//                                  300 | 1,4
//                                  400 | 1,5
//                                  500 | 1,6
//                                  500 | 1,7
//                                  500 | 1,8
//                                  500 | 1,9
//                                  500 | 2

// Berechnen Sie das Skonto und geben Sie das Ergebnis auf der Konsole aus.

console.log("Aufgabe 4") // NUR KLAUSURSCHREIBER

// Sie wollen Ihre Auto-Kaufentscheidung mit einem Programm stützen.

// 4a) // NUR KLAUSURSCHREIBER
// Erstellen Sie zwei Auto-Objekte mit den Eigenschaften Name, Leistung, Geschwindigkeit, Preis, Verbrauch
// Initialisieren Sie mit realsitischen Werten.

class Auto{
    constructor(){
        this.Name
        this.Leistung
        this.Geschwindigkeit
        this.Preis
        this.Verbrauch
    }
}

let auto=new Auto()
auto.Name= "Audi 16"
auto.Leistung=300
auto.Geschwindigkeit=120
auto.Preis= 14000
auto.Verbrauch=100

let auto2=new Auto()
auto2.Name= "Mercedes B16"
auto2.Leistung= 780
auto2.Geschwindigkeit= 300
auto2.Preis= 30000
auto2.Verbrauch= 200


// 4b) // NUR KLAUSURSCHREIBER
// Vergleichen Sie die beiden Autos:
// Wenn eines der Autos in Preis und Verbrauch besser ist, dann soll es das Auto werden.
// Wenn Preis und Verbrauch gleich sind, dann entscheidet die Geschwindigkeit.
// Wenn auch die Geschwindigkeit gleich ist, entscheidet die Leistung.
// Geben Sie entsprechende Antworten auf der Kosnole aus.

if(auto.Preis && auto.Verbrauch < auto2.Preis && auto2.Verbrauch){
    let auto
    console.log("Das Auto soll es werden")
}

if(auto.Preis && auto.Verbrauch === auto2.Preis && auto2.Verbrauch){
    console.log("Die Geschwindigkeit entscheidet.")
}

if(auto.Geschwindigkeit>auto2.Geschwindigkeit){
    let auto
    console.log("Das Auto soll es werden.")
}

if(auto.Geschwindigkeit==auto2.Geschwindigkeit){
    console.log("Die Leistung entscheidet.")
}

if(auto.Leistung>auto2.Leistung){
    let auto
    console.log("Das Auto soll es werden.")
}
