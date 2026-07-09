// ===========================
// Cursor Glow
// ===========================

const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});

// ===========================
// Random Quotes
// ===========================

const quotes=[

"Reality called... I declined.",

"Powered by sarcasm and poor decisions.",

"Welcome. Escape is no longer possible.",

"This website contains dangerous levels of nonsense.",

"Professionally unprofessional.",

"If you're looking for logic... wrong place.",

"Achievement Unlocked: You found this website.",

"Error 404: Seriousness not found.",

"Comic Mode Activated.",

"Every click makes the universe slightly weirder."

];

document.getElementById("quote").innerText=
quotes[Math.floor(Math.random()*quotes.length)];


// ===========================
// Floating Particles
// ===========================

const particleContainer=document.getElementById("particles");

for(let i=0;i<60;i++){

const p=document.createElement("div");

p.classList.add("particle");

const size=Math.random()*6+2;

p.style.width=size+"px";
p.style.height=size+"px";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=
(Math.random()*10+8)+"s";

p.style.animationDelay=
Math.random()*5+"s";

particleContainer.appendChild(p);

}

// ===========================
// ENTER Button
// ===========================

const enter=document.getElementById("enterBtn");

enter.addEventListener("click",()=>{

enter.innerHTML="LOADING...";

document.body.style.transition="1s";

document.body.style.opacity="0";

document.body.style.transform="scale(1.15)";

setTimeout(()=>{

window.location.href="menu.html";

},900);

});

// ===========================
// Comic Words Animation
// ===========================

const words=document.querySelectorAll(
".comic-left,.comic-right,.comic-bottom"
);

setInterval(()=>{

words.forEach(word=>{

word.style.transform=
`translateY(${Math.random()*20-10}px)
rotate(${Math.random()*20-10}deg)`;

});

},1500);

// ===========================
// Secret Keyboard Easter Egg
// ===========================

let typed="";

document.addEventListener("keydown",(e)=>{

typed+=e.key.toLowerCase();

typed=typed.slice(-6);

if(typed==="saniya"){

alert("🎉 SECRET UNLOCKED!\n\nWelcome, creator.");

}

});

// ===========================
// Konami Code
// ===========================

const konami=[
"ArrowUp","ArrowUp",
"ArrowDown","ArrowDown",
"ArrowLeft","ArrowRight",
"ArrowLeft","ArrowRight",
"b","a"
];

let position=0;

document.addEventListener("keydown",(e)=>{

if(e.key===konami[position]){

position++;

if(position===konami.length){

position=0;

document.body.style.background=
"linear-gradient(45deg,#ff0080,#7928ca,#00f5ff)";

alert("💥 ULTRA COMIC MODE ACTIVATED!");

}

}else{

position=0;

}

});

// ===========================
// Random Title Changes
// ===========================

const titles=[

"ComicVerse",

"Chaos Mode",

"Sarcasm Loaded",

"POW!",

"BOOM!",

"Certified Nonsense"

];

setInterval(()=>{

document.title=
titles[Math.floor(Math.random()*titles.length)];

},2500);
