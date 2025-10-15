document.addEventListener("DOMContentLoaded", () => {
    console.log("typing script loaded");
  
    const el = document.querySelector(".typing");
    if (!el) {
      console.error("No element with class .typing found.");
      return;
    }
  
    // Words to cycle through (edit as you like)
    const words = ["Front-End Developer", "Web Developer", "Mobile App Developer"];
    const maxCycles = Infinity; // set a number (e.g. 3) to stop after N full cycles
  
    // Prepare initial state based on what's already inside the span
    const initialText = el.textContent || "";
    let deleting = initialText.length > 0;          // start by erasing existing text
    let currentDisplay = initialText;               // text currently shown (used when deleting)
    // If the existing text matches a word in words[], start typing the next word.
    const found = words.indexOf(initialText.trim());
    let wordIndex = found === -1 ? 0 : (found + 1) % words.length;
  
    console.log("initialText:", JSON.stringify(initialText), "starting at wordIndex:", wordIndex, "deleting:", deleting);
  
    let charIndex = currentDisplay.length;
    let cycleCount = 0;
  
    function tick() {
      // If we're deleting the initial content, operate on currentDisplay.
      if (deleting) {
        charIndex = Math.max(0, charIndex - 1);
        el.textContent = currentDisplay.substring(0, charIndex);
  
        if (charIndex === 0) {
          // finished erasing initial text -> switch to typing the next target word
          deleting = false;
          currentDisplay = "";         // cleared
          charIndex = 0;
          setTimeout(tick, 50);       // small pause then start typing
          return;
        }
        setTimeout(tick, 50);         // delete speed
        return;
      }
  
      // Typing the target word
      const target = words[wordIndex];
      charIndex = Math.min(target.length, charIndex + 1);
      el.textContent = target.substring(0, charIndex);
  
      if (charIndex === target.length) {
        // finished typing this word -> pause then delete it
        // prepare next word index for after deletion
        wordIndex = (wordIndex + 1) % words.length;
        if (wordIndex === 0) {
          cycleCount++;
          if (cycleCount >= maxCycles) {
            console.log("Reached max cycles. Stopping on:", target);
            return; // stop the loop here (last typed word remains)
          }
        }
        // start deleting after pause
        setTimeout(() => {
          deleting = true;
          // set currentDisplay to the word we just typed so deletion targets the correct string
          currentDisplay = target;
          charIndex = currentDisplay.length;
          tick();
        }, 1000); // pause on full word
        return;
      }
  
      // continue typing
      setTimeout(tick, 100);
    }
  
    // kick it off
    tick();
  });

const navLinks = document.querySelectorAll('.nav a');
const homeSection = document.querySelector('.home');
const aboutSection = document.querySelector('.about');
const serviceSection = document.querySelector('.services');
const contactSection = document.querySelector('.contact');
const portfolioSection = document.querySelector('.portfolio');
const emoSection = document.querySelector('.emotionally');
const ihireSection = document.querySelector('.ihire');
const webSection = document.querySelector('.portweb');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.dataset.target;

        if (target === 'home') {
            homeSection.classList.remove('hidden');
            aboutSection.classList.add('hidden');
            serviceSection.classList.add('hidden');
            contactSection.classList.add('hidden');
            portfolioSection.classList.add('hidden');
            emoSection.classList.add('hidden');
            ihireSection.classList.add('hidden');
            webSection.classList.add('hidden');
        } else if (target === 'about') {
            homeSection.classList.add('hidden');
            aboutSection.classList.remove('hidden');
            serviceSection.classList.add('hidden');
            contactSection.classList.add('hidden');
            portfolioSection.classList.add('hidden');
            emoSection.classList.add('hidden');
            ihireSection.classList.add('hidden');
            webSection.classList.add('hidden');
        } else if (target === 'services') {
            homeSection.classList.add('hidden');
            aboutSection.classList.add('hidden');
            serviceSection.classList.remove('hidden');
            contactSection.classList.add('hidden');
            portfolioSection.classList.add('hidden');
            emoSection.classList.add('hidden');
            ihireSection.classList.add('hidden');
            webSection.classList.add('hidden');
        } else if (target == 'contact'){
          homeSection.classList.add('hidden');
          aboutSection.classList.add('hidden');
          serviceSection.classList.add('hidden');
          contactSection.classList.remove('hidden');
          emoSection.classList.add('hidden');
          portfolioSection.classList.add('hidden');
          ihireSection.classList.add('hidden');
          webSection.classList.add('hidden');
        } else if (target == 'portfolio'){
          portfolioSection.classList.remove('hidden');
          aboutSection.classList.add('hidden');
          homeSection.classList.add('hidden');
          serviceSection.classList.add('hidden');
          contactSection.classList.add('hidden');
          ihireSection.classList.add('hidden');
          webSection.classList.add('hidden');
          emoSection.classList.add('hidden');
        }

        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

const emotionally = document.getElementById('emotionally');
emotionally.onclick = function(){
  
  portfolioSection.classList.add('hidden');
  emoSection.classList.remove('hidden');
}

const ihire = document.getElementById('ihire');
ihire.onclick = function(){
  portfolioSection.classList.add('hidden');
  emoSection.classList.add('hidden');
  ihireSection.classList.remove('hidden');
}

const next1 = document.getElementById('next1');
next1.onclick = function(){
  portfolioSection.classList.add('hidden');
  emoSection.classList.add('hidden');
  ihireSection.classList.remove('hidden');
  webSection.classList.add('hidden');
}

const next2 = document.getElementById('next2');
next2.onclick = function(){
  portfolioSection.classList.add('hidden');
  emoSection.classList.add('hidden');
  ihireSection.classList.add('hidden');
  webSection.classList.remove('hidden');
}

const web = document.getElementById('portweb');
web.onclick = function(){
  webSection.classList.remove('hidden');
  portfolioSection.classList.add('hidden');
  emoSection.classList.add('hidden');
  ihireSection.classList.add('hidden');
}

const back1 = document.getElementById('back1');
back1.onclick = function(){
  portfolioSection.classList.add('hidden');
  ihireSection.classList.add('hidden');
  emoSection.classList.remove('hidden');
}

const back2 = document.getElementById('back2');
back2.onclick = function(){
  portfolioSection.classList.add('hidden');
  ihireSection.classList.remove('hidden');
  emoSection.classList.add('hidden');
  webSection.classList.add('hidden');
}

const about = document.getElementById('abtn');
about.onclick = function(){
  homeSection.classList.add('hidden');
  aboutSection.classList.remove('hidden');

}


const flap = document.querySelector(".fun-fact-flap");

flap.addEventListener("click", () => {
  flap.classList.toggle("open");
});


function toggleReveal() {
  
  const panel4 = document.querySelector(".side-panel4");
  const panel5 = document.querySelector(".side-panel5");

  panel5.classList.toggle("active");
 
  if (panel5.classList.contains("active")) {
    panel4.style.borderBottom = "none";
    panel4.style.borderBottomLeftRadius = "0";
    panel4.style.borderBottomRightRadius = "0";
    
  } else {
    panel4.style.borderBottom = "4px solid var(--skin-color)";
     panel4.style.borderBottomLeftRadius = "50px";
    panel4.style.borderBottomRightRadius = "50px";
  }


}

function toggleReveal2(){
  const panel1 = document.querySelector(".side-panel");
  const panel2 = document.querySelector(".education3");

  const panel = document.querySelector(".education4");
  const panel6 = document.querySelector(".education5");

  panel2.classList.toggle("active");


  if (panel2.classList.contains("active")) {
    panel1.style.borderBottom = "none";
    panel1.style.borderBottomLeftRadius = "0";
    panel1.style.borderBottomRightRadius = "0";
    
    
  } else {
    panel1.style.borderBottom = "4px solid var(--skin-color)";
    panel1.style.borderBottomLeftRadius = "50px";
    panel1.style.borderBottomRightRadius = "50px";
  }

}

function toggleReveal3(){
  const panel3 = document.querySelector(".side-panel2");
  const panel4 = document.querySelector(".education4");

  panel4.classList.toggle("active");

  if (panel4.classList.contains("active")) {
    panel3.style.borderBottom = "none";
    panel3.style.borderBottomLeftRadius = "0";
    panel3.style.borderBottomRightRadius = "0";
    
  } else {
    panel3.style.borderBottom = "4px solid var(--skin-color)";
    panel3.style.borderBottomLeftRadius = "50px";
    panel3.style.borderBottomRightRadius = "50px";
  }

}

function toggleReveal4(){
  const panel5 = document.querySelector(".side-panel3");
  const panel6 = document.querySelector(".education5");

  panel6.classList.toggle("active");

  if (panel6.classList.contains("active")) {
    panel5.style.borderBottom = "none";
    panel5.style.borderBottomLeftRadius = "0";
    panel5.style.borderBottomRightRadius = "0";
    
  } else {
    panel5.style.borderBottom = "4px solid var(--skin-color)";
    panel5.style.borderBottomLeftRadius = "50px";
    panel5.style.borderBottomRightRadius = "50px";
  }

}

// script.js
document.addEventListener("DOMContentLoaded", () => {
  // Map each panel to its education block
  const mapping = {
    ".side-panel": ".education3",
    ".side-panel2": ".education4",
    ".side-panel3": ".education5",
    // add more if needed
  };

  const panels = Object.keys(mapping);
  const educations = Object.values(mapping);

  panels.forEach(panelSelector => {
    const panel = document.querySelector(panelSelector);
    const eduSelector = mapping[panelSelector];
    const eduBlock = document.querySelector(eduSelector);

    panel.addEventListener("click", () => {
      // Close all education blocks
      educations.forEach(sel => {
        document.querySelector(sel).classList.remove("active");
      });

      // Open the one that matches the clicked panel
      eduBlock.classList.add("active");
    });
  });
});

