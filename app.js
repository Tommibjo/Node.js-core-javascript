const x = 1
let y = 5

console.log("'let' määrittelee normaalin muuttujan")
console.log("'const' on 'final', eli sitä ei voi muuttaa")
console.log(x, y)
console.log(x + y)
y += 10
console.log("olen 'let y': " + y)
y = "nyt olen teksti"
console.log("olen 'let y' uudella arvolla: " + y)
console.log("---")
console.log("Seuraavaksi tulostetaan taulukko taulukoita")
console.log("Vaikka taulukko on const, niin siihen voi silti lisätä uusia arvoja")
console.log("Tämä siksi, että taulukko on olio ja const viittaa jatkuvasti samaan olioon")
const t = [1, -1, 3]
t.forEach(value => {
    console.log(value)
})
t.push(5)
t.push(10)
t.push(20)
console.log("t.push():lla lisätty uusia arvoja taulukkoon.")
console.log("Loopetaan homma uudestaan läpi:")
t.forEach(value => {
    console.log(value)
})

console.log("Harjoituksen vuoksi edelliset uusiksi")
const z = 10;
let b = 3;
console.log("toisto: " + b)
b += 20
console.log("toisto: " + b)
const taulukko = [2, 3, 2, 5, 5]
taulukko.forEach(value => {
    console.log("Toistoa: " + (value + z))
})

console.log("Reactia käyttäessä pyritään toteuttamaan funktionaalista ohjelmointia, jonka eräs piirre on käyttää muuttumattomia 'immutable' tietorakenteita")
console.log("Tästä syystä taulukkoon ei kannata 'push()' metodilla lisätä mitään, vaan 'concat()'")
console.log("Tämän avulla vanhan taulukon arvot kopioituvat uuteen, lisätyn luvun lisäksi.")
console.log("Kokeillaan tätä:")
const taulukko2 = [2, 4, 4]
const taulukko3 = taulukko2.concat(5);
taulukko3.forEach(value => {
    console.log(value);
})

console.log("--")
console.log("Taulukoilla on muitakin käteviä metodeja, kuten 'map'")
const taulukko4 = [2, 3, 22, 100]
const taulukko5 = taulukko4.map(s => s * 3)
taulukko5.forEach(value => {
    console.log(value)
})
console.log("map(s => tee S:lle jotain) metodilla voi myös lisätä HTML:ää taulukkoon!")
const taulukko6 = taulukko4.map(s => '<li>' + s + '</li>')
console.log(taulukko6)
console.log("taulukoita voi myös muokata destruktoivien sijoituslauseiden avulla")
const [first, second, ...last] = taulukko4
console.log("destruktoivan sijoituslausekkeen ekat: " + first + " " + second)
console.log("destruktoivan sijoituslausekkeen vikat ovat taulukossa: " + last)
console.log("Loopetaan ne!")
last.forEach(value => {
    console.log(value)
})

const henkiloOlio = {
    name: 'Linda Sillman',
    age: '29',
    arvosanat: [2, 4, 2, 5],
    kirjoitukset: {
        aikka: "L",
        matikka: "L",
        filosfia: "H"
    }
}

console.log("Nimi: " + henkiloOlio.name + " Ikä: " + henkiloOlio.age)
henkiloOlio.arvosanat.forEach(value => {
    console.log(value)
})
console.log(henkiloOlio.kirjoitukset.aikka + " " + henkiloOlio.kirjoitukset.filosfia + " " + henkiloOlio.kirjoitukset.matikka)

const opiskelija = {
    nimi: "Tommi",
    ika: 31,
    kurssit:{
        arvosanat: [3,3,3,2]
    }
}
opiskelija.kurssit.arvosanat.forEach(value => {
    console.log("Tommin arvosana: " + value)
})