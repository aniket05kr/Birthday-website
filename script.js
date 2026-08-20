const particles = document.getElementById("particles");

for (let i = 0; i < 70; i++) {

    const dot = document.createElement("span");

    dot.className = "particle";

    const side = Math.random();

    if (side < 0.35) {
        dot.style.left = Math.random() * 25 + "%";
    }
    else if (side < 0.70) {
        dot.style.left = 75 + Math.random() * 25 + "%";
    }
    else {
        dot.style.left = 25 + Math.random() * 50 + "%";
    }

    dot.style.top = Math.random() * 100 + "%";

    dot.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    dot.style.animationDelay =
        (Math.random() * 4) + "s";
        
    const size = Math.random();

if (size < 0.85) {
    dot.style.width = "2px";
    dot.style.height = "2px";
}
else if (size < 0.97) {
    dot.style.width = "3px";
    dot.style.height = "3px";
}
else {
    dot.style.width = "5px";
    dot.style.height = "5px";
}

    particles.appendChild(dot);
}

const stars = document.getElementById("stars");

const starSVG = `
<svg viewBox="0 0 24 24" width="100%" height="100%">
    <path
        d="M12 1 L13.5 10.5 L23 12 L13.5 13.5 L12 23 L10.5 13.5 L1 12 L10.5 10.5 Z"
        fill="#FFD77A"/>
</svg>
`;

for (let i = 0; i < 8; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = starSVG;

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = 12 + Math.random() * 10;
    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    stars.appendChild(star);
}

/* =================================
   SCREEN 01 → SCREEN 02
================================= */

const letterBtn = document.getElementById("btn__letter");
const screen2 = document.getElementById("screen2");

if (letterBtn && screen2) {

    letterBtn.addEventListener("click", function () {

        screen2.classList.add("active");

    });

}

/* =================================
   SCREEN 02 : PARTICLES
================================= */

const screen2Particles =
    document.getElementById("screen2Particles");

if (screen2Particles) {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "screen2-particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (2.5 + Math.random() * 4) + "s";

        particle.style.animationDelay =
            (Math.random() * 4) + "s";

        const size = Math.random();

        if (size < .88) {

            particle.style.width = "2px";
            particle.style.height = "2px";

        } else if (size < .97) {

            particle.style.width = "3px";
            particle.style.height = "3px";

        } else {

            particle.style.width = "4px";
            particle.style.height = "4px";

        }

        screen2Particles.appendChild(particle);

    }

}


/* =================================
   SCREEN 02 : STARS
================================= */

const screen2Stars =
    document.getElementById("screen2Stars");

if (screen2Stars) {

    for (let i = 0; i < 10; i++) {

        const star =
            document.createElement("span");

        star.className =
            "screen2-star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        const size =
            8 + Math.random() * 10;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        star.style.animationDelay =
            (Math.random() * 3) + "s";

        screen2Stars.appendChild(star);

    }

}

/* =================================
   SCREEN 02 → SCREEN 03
   CONTINUE BUTTON
================================= */

const screen2Continue =
    document.getElementById("screen2Continue");

const screen3 =
    document.getElementById("screen3");

if (screen2Continue && screen2 && screen3) {

    screen2Continue.addEventListener("click", function () {

        /* Screen 3 show */
        screen3.classList.add("active");

        /* Screen 2 hide */
        screen2.classList.remove("active");

    });

}

/* =================================
   SCREEN 03 : SECTION 01
   SIDE PARTICLES
================================= */

const screen3ParticlesLeft =
    document.getElementById("screen3ParticlesLeft");

const screen3ParticlesRight =
    document.getElementById("screen3ParticlesRight");


function createScreen3Particles(container){

    if (!container) return;

    for (let i = 0; i < 24; i++) {

        const particle =
            document.createElement("span");

        particle.className =
            "screen3-particle";


        /* Random horizontal position */

        particle.style.left =
            Math.random() * 100 + "%";


        /* Random vertical position */

        particle.style.top =
            Math.random() * 100 + "%";


        /* Random animation */

        particle.style.animationDuration =
            (2.8 + Math.random() * 4.5) + "s";


        particle.style.animationDelay =
            (Math.random() * 4) + "s";


        /* Particle size */

        const size =
            Math.random();


        if (size < .82) {

            particle.style.width =
                "2px";

            particle.style.height =
                "2px";

        }

        else if (size < .96) {

            particle.style.width =
                "3px";

            particle.style.height =
                "3px";

        }

        else {

            particle.style.width =
                "4px";

            particle.style.height =
                "4px";

        }


        container.appendChild(
            particle
        );

    }

}


/* LEFT */

createScreen3Particles(
    screen3ParticlesLeft
);


/* RIGHT */

createScreen3Particles(
    screen3ParticlesRight
);


/* =================================
   SCREEN 03 : STARS
================================= */

const screen3StarsLeft =
    document.getElementById("screen3StarsLeft");

const screen3StarsRight =
    document.getElementById("screen3StarsRight");


function createScreen3Stars(container){

    if (!container) return;


    for (let i = 0; i < 5; i++) {

        const star =
            document.createElement("span");

        star.className =
            "screen3-star";


        /* Random position */

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        /* Random size */

        const size =
            9 + Math.random() * 10;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";


        /* Random animation */

        star.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        star.style.animationDelay =
            (Math.random() * 4) + "s";


        container.appendChild(
            star
        );

    }

}


/* LEFT STARS */

createScreen3Stars(
    screen3StarsLeft
);


/* RIGHT STARS */

createScreen3Stars(
    screen3StarsRight
);


