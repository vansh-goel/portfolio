let enterThis = ""
let audio = new Audio("media/audio.mp3");
audio.loop = true;
let playing = false;
let firstCharacterTyped = false;
let original = document.getElementById('input-line');
let clone = original.cloneNode(true);
let pre = clone.querySelector("pre");

userInput.addEventListener('keydown', function(event) {
  if (!firstCharacterTyped) {
    playSong();
    firstCharacterTyped = true;
  }})

window.addEventListener('DOMContentLoaded', function() {
  // User focus
  var userInput = document.getElementById('userInput');
  userInput.focus();
  document.addEventListener('click', function() {
    userInput.focus();
  });
  let inputText = "";
  let previousInput = "";

  userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let original = document.getElementById('input-line');
      let clone = original.cloneNode(true);
      clone.classList.add("clone");
      clone.id = '';
      inputText = userInput.value;
      previousInput = inputText
      userInput.value = "";
      userInput.scrollTop = userInput.scrollHeight;
      let switchVal = process(inputText); 

      // Create a new <pre> element
      let pre = document.createElement('pre');
      pre.innerHTML = switchVal;
      pre.classList.add('in')
      
      // Replace the textarea with the <pre> element
      let textarea = clone.querySelector('textarea');
      clone.replaceChild(pre, textarea);
      
      original.parentNode.insertBefore(clone, original);
      window.scrollTo(0, document.body.scrollHeight);
      
      setTimeout(function() {
        clone.classList.add("active");
        clone.style.marginRight="0px";
      }, 10);
      

      if (inputText === "whois" || inputText === 'vansh' || inputText === "whoamI") {
        setTimeout(function() {
          pre.classList.add("deets");
        }, 10);
        clone.querySelector('pre').style.marginRight= "0px"
        clone.querySelector('pre').style.width = "80%";
        window.scrollTo(0, document.body.scrollHeight);
      }

      if (inputText === "ls" || inputText === 'man' || inputText === "help") {
        clone.querySelector('pre').style.color = "#FEFF86"
      }

            
      if (switchVal === "Invalid command, Enter 'ls' for the list of commands" || inputText === "projects"){
        clone.querySelector('pre').style.color = '#FEA1A1'
      }

    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      userInput.value = previousInput; // Set the value of the input to the previous input
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      userInput.value = ""
    }

    function process(inputText) {
      inputVal = inputText.toLowerCase()
      switch(inputVal) {
        case 'sudo su' :
          insertText = "Nope, not happening," + "\nUse ls to list the available commands"
          return insertText;
          break;
        case 'clear' :
          let clones = document.querySelectorAll('.clone');
          clones.forEach(clone => {
            clone.classList.add("remove-animation");
            setTimeout(() => clone.remove(), 500); // Delay removal to match the animation duration
          });
          clear();
          return none;
          break;
        case 'man' :
        case 'help' :
        case 'ls' :
          insertText = "whois     Shows details about the owner" + 
                     "\nclear     Clears the terminal" +
                     "\nls        Shows the list of commands" +
                     "\nprojects  Shows the list of owner's projects" +
                     "\nskills    Shows list of owner's skills" +
                     "\nsocials   Displays social links" +
                     "\nwha-      What's this supposed to do?"+
                     "\nmusic     Play/Pause music"
          return insertText
          break;
        case 'vansh' :
        case 'whoamI' :
        case "whois" :
          insertText = "👋 Hey there! I'm Vansh, a tech enthusiast passionate about Linux and the command-line interface.🐧\nI'm a freshman at the University School of Automation and Robotics, these days I'm diving into web development. 💻" +
          
          "\nI love building Bash projects, including web scraping ones, and being an active part of tech communities.\n👨‍💻 Besides coding, I'm an avid reader and enjoy having insightful conversations.\n📚 I also groove to alt/indie rock music 🎸 and love listening to podcasts. 🎧" +
          
          "\nExcited to connect with like-minded folks and explore the ever-evolving world of tech together! Let's chat! 😄"
          return insertText
          break
        case "skills" :
          enterThis = document.getElementById("skills").innerHTML
          insertText = enterThis
          return insertText
          break
        case "socials" :
          enterThis = document.getElementById("socials").innerHTML
          insertText = enterThis
          return insertText
          break
        case "projects" :
          insertText = "FATAL ERROR | WORK IN PROGRESS....." + "\nCOME BACK LATER"
          return insertText
          break
        case "wha-" :
          window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          break
        case "music" :
          playSong()
          return none
          break
        default :
        insertText = "Invalid command, Enter 'ls' for the list of commands";
        return insertText;
      }
    }

  });
});

function playSong() {
  if (!playing) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
    playing = false;
  }
}
