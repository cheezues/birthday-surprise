const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const music = document.getElementById("music");
const message = document.getElementById("message");
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

const nextLetterBtn = document.getElementById("nextLetter");
const backToAndrewBtn = document.getElementById("backToAndrew");
const andrewLetter = document.getElementById("andrewLetter");
const brotherLetter = document.getElementById("brotherLetter");

const btn = document.getElementById("celebrate");
const finalMessage = document.getElementById("finalMessage");

const blowBtn = document.getElementById("blowCandles");
const candles = document.getElementById("candles");

const text =
`Happy Birthday, Ate Trisha ❤️

Thank you for everything you've done for us. Honestly, no words can truly express how grateful I am to have a sister like you.

Through every struggle and even during the lowest moments of our fam, you always remained strong and stood up for us your brothers. Your unconditional love, sacrifices, and endless support have given us a better life and opened so many opportunities for our future.

One day, we promise to give you everything you truly deserve because you spent so much of your life putting us before yourself. You deserve all the happiness, success, peace, and love that this world has to offer.

Please don't stress yourself too much because of work. I know how hard you work every single day for our fam, and I hope you also remember to take care of yourself. Rest when you need to. We are always here for you, just as you have always been here for us.

Thank you for being our strength, our inspiration, and our safe place. I will always be proud to call you my sister.

I love you so much, Ate. I hope this birthday brings you as much happiness as you have brought into our lives. I always pray that God continues to bless you with good health, happiness, success, and that every dream you want comes true.

Happy Birthday, Ate. Thank you for being the best sister anyone could ever ask for. ❤️

Love always,

Andrew ❤️`;

let i = 0;
let slideshowStarted = false;
let candlesBlown = false;

/* TYPEWRITER */
function typeWriter(){
    if(i < text.length){
        message.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter,35);
    }
}

/* SLIDESHOW */
const images = [
    "images/dress1.jpg",
    "images/astroalley2.jpg",
    "images/elyu3.jpg",
    "images/amsterdam4.jpg"
];

const captions = [
    "The Best Sister in the World ❤️",
    "Strong, kind, and beautiful 🌸",
    "Ate, thank you for everything 💖",
    "To more oppurtunities to come ✨"
];

let index = 0;

function startSlideshow(){
    if(slideshowStarted) return;
    slideshowStarted = true;

    setInterval(()=>{
        index = (index + 1) % images.length;
        slide.style.opacity = 0;

        setTimeout(()=>{
            slide.src = images[index];
            caption.innerText = captions[index];
            slide.style.opacity = 1;
        },500);

    },3500);
}

/* OPEN LETTER */
envelope.addEventListener("click",()=>{

    burstHearts();

    envelope.classList.add("open");

    setTimeout(()=>{

        envelope.style.display="none";
        letter.style.display="block";

        music.volume=0;
        music.play();

        let volume=0;

        const fade=setInterval(()=>{
            if(volume<1){
                volume+=0.05;
                music.volume=volume;
            }else{
                clearInterval(fade);
            }
        },200);

        typeWriter();
        startSlideshow();

    },800);

});

/* NEXT LETTER */
nextLetterBtn.addEventListener("click",()=>{

    andrewLetter.style.display="none";
    brotherLetter.style.display="block";

    brotherLetter.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

});

/* BACK TO ANDREW LETTER */
backToAndrewBtn.addEventListener("click",()=>{

    brotherLetter.style.display="none";
    andrewLetter.style.display="block";

    andrewLetter.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

});

/* BLOW CANDLES */
blowBtn.addEventListener("click",()=>{

    if(candlesBlown) return;
    candlesBlown = true;

    candles.innerHTML = "💨💨💨";
    candles.classList.add("blown");
    blowBtn.innerText = "Wish Made ✨";
    blowBtn.disabled = true;

    createSmoke();

    confetti({
        particleCount:500,
        spread:250,
        startVelocity:60,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        confetti({
            particleCount:300,
            spread:180,
            origin:{x:0}
        });
    },300);

    setTimeout(()=>{
        confetti({
            particleCount:300,
            spread:180,
            origin:{x:1}
        });
    },300);

    createHearts();

});

/* FINAL SURPRISE */
btn.addEventListener("click",()=>{

    confetti({
        particleCount:600,
        spread:250,
        startVelocity:70,
        origin:{y:0.6}
    });

    setTimeout(()=>{
        confetti({
            particleCount:300,
            spread:200,
            origin:{y:0.4}
        });
    },400);

    createHearts();

    finalMessage.style.display="block";

    finalMessage.scrollIntoView({
        behavior:"smooth",
        block:"center"
    });

});

/* SMOKE EFFECT */
function createSmoke(){

    for(let i=0;i<12;i++){

        const smoke=document.createElement("div");

        smoke.className="smoke";
        smoke.innerHTML="💨";

        smoke.style.left=(45 + Math.random()*10)+"vw";
        smoke.style.top=(45 + Math.random()*10)+"vh";

        document.body.appendChild(smoke);

        setTimeout(()=>{
            smoke.remove();
        },2500);
    }
}

/* FINAL MESSAGE HEARTS */
function createHearts(){

    for(let i=0;i<40;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";
        heart.style.position="fixed";
        heart.style.left=Math.random()*100+"vw";
        heart.style.top="100vh";
        heart.style.fontSize=(20+Math.random()*25)+"px";
        heart.style.pointerEvents="none";
        heart.style.transition="all 4s ease";
        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.style.transform="translateY(-120vh)";
            heart.style.opacity="0";
        },50);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }
}

/* ENVELOPE HEARTS + CONFETTI BURST */
function burstHearts(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";
        heart.className="burst-heart";

        heart.style.left="50%";
        heart.style.top="45%";

        heart.style.setProperty("--x",(Math.random()*900-450)+"px");
        heart.style.setProperty("--y",(-Math.random()*700-150)+"px");

        heart.style.fontSize=(15+Math.random()*30)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);
    }

    confetti({
        particleCount:200,
        spread:140,
        startVelocity:60,
        origin:{x:0.5,y:0.5}
    });

    setTimeout(()=>{
        confetti({
            particleCount:120,
            angle:60,
            spread:90,
            origin:{x:0,y:0.6}
        });
    },150);

    setTimeout(()=>{
        confetti({
            particleCount:120,
            angle:120,
            spread:90,
            origin:{x:1,y:0.6}
        });
    },150);

}