const projects = {
  java: [
      { name: 'Computer Graphics', description: 'Wired 3D model with possible object translation/transformation and moving camera', image: 'https://i.imgur.com/FftgwY6.png', url: 'https://github.com/jholaj/PGRF-task03' },
      { name: 'Filling the n-square area with colour', description: 'Implementing filling algorhitms (Seed Fill, Scan-Line)', image: 'https://i.imgur.com/XQDt6oR.png', url: 'https://github.com/jholaj/PGRF-task02' },
  ],
  python: [
      { name: 'ASCII Generator', description: 'Convert Image to ASCII art', image: 'https://i.imgur.com/W03scPj.png' },
      { name: 'Web for fictional bussiness - Django backend', description: 'Project for subject: E-technologies in trade and business. Fictional vinyl bussiness - Vinylotopia', image: 'python_project2.jpg', url: 'https://github.com/jholaj/ET_ESHOP' },
      { name: 'Image Quality Measurement', description: 'Project for Practical Thesis. Measuring quality of the image with PSNR, SSIM and BRISQUE method', image: 'https://i.imgur.com/W03scPj.png', url: 'https://github.com/jholaj/IQM' },
  ],
  web: [
    { name: 'Portfolio', description: 'You are looking at it!', image: 'web_project1.jpg' },
    { name: 'Web for fictional bussiness', description: 'Project for subject: E-technologies in trade and business. Fictional vinyl bussiness - Vinylotopia', image: 'web_project2.jpg', url: 'https://github.com/jholaj/ET_ESHOP' },
  ],
  others: [
    { name: 'Image Color Frequency Analyzer', description: 'Rust and GTK4 project showcasing the 100 most prevalent colors in RGBA image.', image: 'https://i.imgur.com/PZvFtBw.png', url: 'https://github.com/jholaj/ColorFrequency' },
    { name: 'Windows App Audio Ripper', description: 'Rippes audio of an app with given PID and gives output as .wav file. Rewrited sample windows.h program.', image: 'https://i.imgur.com/9liTkj7.png', url: 'https://github.com/jholaj/WindowsAudioRipper' },
  ]
};

const arts = {
  java: [
    "       __       ___   ____    ____  ___      ",
    "      |  |     /   \\  \\\   \\\  /   / /   \\\     ",
    "      |  |    /  ^  \\  \\\   \\\/   / /  ^  \\\    ",
    ".--.  |  |   /  /_\\\  \\\  \\\      / /  /_\\\  \\\   ",
    "|  `--'  |  /  _____  \\\  \\\    / /  _____  \\\  ",
    " \\\______/  /__/     \\\__\\\  \\\__/ /__/     \\\__\\\ "
],
python: [
  ".______   ____    ____ .___________. __    __    ______   .__   __. ",
  "|   _  \\  \\   \\  /   / |           ||  |  |  |  /  __  \\  |  \\ |  | ",
  "|  |_)  |  \\   \\/   /  `---|  |----`|  |__|  | |  |  |  | |   \\|  | ",
  "|   ___/    \\_    _/       |  |     |   __   | |  |  |  | |  . `  | ",
  "|  |          |  |         |  |     |  |  |  | |  `--'  | |  |\\   | ",
  "| _|          |__|         |__|     |__|  |__|  \\______/  |__| \\__| "
],
  web: [
   " __    __  .___________..___  ___.  __          ___ ______     _______.     _______.     ___      __       _______.",
   "|  |  |  | |           ||   \\/   | |  |        /  //      |   /       |    /       |    /  /     |  |     /       |",
   "|  |__|  | `---|  |----`|  \\  /  | |  |       /  /|  ,----'  |   (----`   |   (----`   /  /      |  |    |   (----`",
   "|   __   |     |  |     |  |\\/|  | |  |      /  / |  |        \\   \\        \\   \\      /  / .--.  |  |     \\   \\    ",
   "|  |  |  |     |  |     |  |  |  | |  `----./  /  |  `----.----)   |   .----)   |    /  /  |  `--'  | .----)   |   ",
   "|__|  |__|     |__|     |__|  |__| |_______/__/    \\______|_______/    |_______/    /__/    \\______/  |_______/    "                                                                                                                               
  ],
  others: [
  "  ______   .___________. __    __   _______ .______          _______.",
  " /  __  \\  |           ||  |  |  | |   ____||   _  \\        /       |",
  "|  |  |  | `---|  |----`|  |__|  | |  |__   |  |_)  |      |   (----`",
  "|  |  |  |     |  |     |   __   | |   __|  |      /        \\   \\    ",
  "|  `--'  |     |  |     |  |  |  | |  |____ |  |\\  \\----.----)   |   ",
  " \\______/      |__|     |__|  |__| |_______|| _| `._____|_______/    ",
  ]
}

// getting color of lang-button

const artsColor = {};

const langButtons = document.querySelectorAll('.lang-button');

langButtons.forEach(button => {
  const language = button.dataset.panel;
  const style = window.getComputedStyle(button);
  const color = style.getPropertyValue('color');
  artsColor[language] = color;
});

function showProjects(language) {
  const projectsContainer = document.getElementById('projects-container');
  const asciiArtContainer = document.getElementById('ascii-art-container');

  // clear containers
  projectsContainer.innerHTML = '';
  asciiArtContainer.innerHTML = '';
  
  if (projects[language]) {
      projects[language].forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');

          const projectImage = document.createElement('img');
          projectImage.src = project.image;

          const projectLink = document.createElement('a');
          projectLink.href = project.url;
          projectLink.textContent = project.name;
          projectLink.id = 'project-name';
          projectLink.style.textDecorationColor = artsColor[language]; //underline color same as lang
          projectLink.style.textUnderlineOffset = '0.3em'; // moving underline down

          const projectDescription = document.createElement('p');
          projectDescription.textContent = project.description;

          projectCard.appendChild(projectImage);
          projectCard.appendChild(projectLink);
          projectCard.appendChild(projectDescription);
          
          projectsContainer.appendChild(projectCard);

          function updateArtContainer() {
            projectCard.classList.add('show');
            asciiArtContainer.innerHTML = '';
            if (arts[language]) {
                arts[language].forEach(line => {
                    asciiArtContainer.appendChild(document.createTextNode(line + '\n'));
                });
            }
            // setting art color from artsColor
            asciiArtContainer.style.color = artsColor[language];
            asciiArtContainer.classList.add('show');
        }
        
        var planeExists = document.getElementById("plane-art");
        // if lang button was already clicked => plane out of sight => no need of delay
        if (!planeExists) {
            updateArtContainer();
        } else {
            // trigger the animation with a delay
            setTimeout(updateArtContainer, 650);
        }
    });
  } else {
      const noProjectsMessage = document.createElement('p');
      noProjectsMessage.textContent = 'No projects available in this language.';
      projectsContainer.appendChild(noProjectsMessage);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const langButtons = document.querySelectorAll('.lang-button');

  langButtons.forEach(button => {
      button.addEventListener('click', function () {
          const language = button.dataset.panel;
          showProjects(language);
      });
  });
});