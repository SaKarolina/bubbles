function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Apskritimukai TASK

//Reikalavimui JS kodui:
//turi būti sukurtas masyvas balls.
//Reikalavimui HTML:
//turi būti sukurti du laukeliai duomenims įvesti- spalvai ir numeriui; 
//vieta, kurioje bus atvaizduojami sukurti apskritimukai;
//du mygtukai- “sukurti naują” ir “ištrinti seniausią”.
//Klases ar kitus elementų atributus galite pridėti jeigu manote, kad jie jums yra reikalingi. Galite naudoti CSS tiek atskirame faile, tiek <style> viduje ar inline be jokių ribojimų.

//1. Kiekvienas apskritimukas yra objektas, turintis dvi savybes: color ir number. Kiekvienas sukurtas naujas objektas turi būti pridedamas į masyvą balls, o pats masyvas patalpinamas localStorage. 

//2. Mygtukas “sukurti naują” turi inicijuoti kodą, kuris perskaitytų duomenis iš laukelių ir pagal juos sukurtų naują objektą. 

//3. Masyvas turi būti atvaizduojamas vizualiai HTML’e. Jame esantys objektai turi būti atvaizduojami kaip atitinkamos spalvos apskritimai su numeriu viduryje.

//4. Mygtukas “ištrinti seniausią” turi inicijuoti kodą, kuris iš masyvo pašaliną seniausią apskritimuką (seniausias yra masyvo pradžioje)

//5. Pasikeitus masyvo elementams (pridėjus, ištrynus) vizualinis masyvo atvaizdas HTML’e turi keistis dinamiškai. Perkrovus puslapį, turi išlikti prieš tai įrašyti apskritimukai (informacija paimama iš localStorage)

const rutuliukai = document.querySelector(`#apskritimai`);
const sukurti = document.querySelector(`#naujas`);
const trinti = document.querySelector(`#trinam`);
const numeris = document.querySelector(`#numeris`);
const spalva = document.querySelector(`#spalva`);
const stop = document.querySelector(`#stop`);
stop.style.color = `#750000`;
stop.style.fontSize = `15px`;


let savedGame = JSON.parse(localStorage.getItem(`Kamuoliukai`));
if (savedGame !== null) {
        savedGame.forEach( n => {
        const newBall = document.createElement('div');
        newBall.style.backgroundColor = n.color;
        const nr = document.createTextNode(n.number);
        newBall.appendChild(nr);
        rutuliukai.appendChild(newBall);
        console.log(n);
    });
};

let balls = [];
sukurti.addEventListener(`click`, () => {
    if (numeris.value >= 1 && numeris.value <= 100 && numeris.value % 1 === 0) {
        stop.innerHTML = ``;
        let ball = {};
        ball.color = spalva.value;
        ball.number = numeris.value;
        balls.push(ball);
        console.log(balls);
        
        const newBall = document.createElement('div');
        newBall.style.backgroundColor = ball.color;
        const nr = document.createTextNode(ball.number);
        newBall.appendChild(nr);
        rutuliukai.appendChild(newBall);
    
    } else {
        stop.innerHTML = `Klaida! Laukelyje turi būti įrašytas skaitmuo nuo 1 iki 100.`;
    };

    localStorage.setItem(`Kamuoliukai`, JSON.stringify(balls));
});

trinti.addEventListener(`click`, () => {
    balls.splice(0, 1);
    rutuliukai.firstChild.remove();
    localStorage.setItem(`Kamuoliukai`, JSON.stringify(balls));
});
console.log(balls);