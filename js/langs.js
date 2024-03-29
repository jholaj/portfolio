const projects = {
  java: [
      { name: 'Computer Graphics', description: 'Wired 3D model with possible object translation/transformation and moving camera.', image: 'https://i.imgur.com/FftgwY6.png', url: 'https://github.com/jholaj/PGRF-task03' },
      { name: 'Filling the n-square area with colour', description: 'Implementing filling algorhitms (Seed Fill, Scan-Line).', image: 'https://i.imgur.com/XQDt6oR.png', url: 'https://github.com/jholaj/PGRF-task02' },
  ],
  python: [
      { name: 'ASCII Generator', description: 'Convert Image to ASCII art easily.', image: 'https://i.imgur.com/W03scPj.png', url: 'https://github.com/jholaj/ASCIIGenerator' },
      { name: 'Web for fictional bussiness', description: '<b>USED TECHNOLOGIES: Django</b><br>Project for subject: E-technologies in trade and business. Fictional vinyl bussiness - Vinylotopia.', image: 'https://i.imgur.com/aYUxRri.png', url: 'https://github.com/jholaj/ET_ESHOP' },
      { name: 'Image Quality Measurement', description: 'Project for Practical Thesis. Measuring quality of the image with PSNR, SSIM and BRISQUE method.', image: 'https://i.imgur.com/kmfyrlz.png', url: 'https://github.com/jholaj/IQM' },
      { name: 'Music To Phone Downloader', description: 'App for my family. Downloading music from YouTube and transfer to phone via SSH.', image: 'https://i.imgur.com/V5kZTme.png', url: 'https://github.com/jholaj/MusicToPhoneDownloader'},
      { name: 'Mirror Folder', description: 'One-way periodical synchronization, that maintains a full, identical copy of source folder at replica folder. Includes logging of file: creation/removal/copying/modifying', image: 'https://i.imgur.com/GNTjxws.png', url: 'https://github.com/jholaj/MirrorFolder'}
  ],
  web: [
      { name: 'Portfolio', description: 'You are looking at it!', image: 'https://i.imgur.com/VFSXrPx.png', url: 'https://github.com/jholaj/portfolio' },
      { name: 'Web for fictional bussiness', description: '<b>USED TECHNOLOGIES: Django</b><br>Project for subject: E-technologies in trade and business. Fictional vinyl bussiness - Vinylotopia.', image: 'https://i.imgur.com/aYUxRri.png', url: 'https://github.com/jholaj/ET_ESHOP' },
  ],
  others: [
      { name: 'Image Color Frequency Analyzer', description: '<b>USED TECHNOLOGIES: RUST, GTK4</b><br> Showcasing the 100 most prevalent colors in RGBA image.', image: 'https://i.imgur.com/PZvFtBw.png', url: 'https://github.com/jholaj/ColorFrequency' },
      { name: 'Simple JPEG Compress', description: '<b>USED TECHNOLOGIES: C++</b><br> Attempt of recreating JPEG compress algorhitm from scratch. Non-functional for now.', image: 'https://i.imgur.com/oxb5iO3.png', url: 'https://github.com/jholaj/SimpleJPEGCompress'},
      { name: 'Windows App Audio Ripper', description: '<b>USED TECHNOLOGIES: C++</b><br> Rippes audio of an app with given PID and gives output as .wav file. Rewrited sample of windows.h program.', image: 'https://i.imgur.com/9liTkj7.png', url: 'https://github.com/jholaj/WindowsAudioRipper' },
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

          const projectImageLink = document.createElement('a');
          projectImageLink.href = project.url; 
          projectImageLink.target = '_blank'; 

          const projectImage = document.createElement('img');
          projectImage.src = project.image;

          const projectLink = document.createElement('a');
          projectLink.href = project.url;
          projectLink.target = '_blank';
          projectLink.textContent = project.name;
          projectLink.id = 'project-name';
          projectLink.style.textDecorationColor = artsColor[language]; //underline color same as lang
          projectLink.style.textUnderlineOffset = '0.3em'; // moving underline down

          projectLink.style.transition = 'text-decoration-color 0.3s ease-in-out'; // animation
          projectLink.addEventListener('mouseover', () => {
            projectLink.style.textDecorationColor = 'blue'; // hovered => blue
          });
          projectLink.addEventListener('mouseout', () => {
            projectLink.style.textDecorationColor = artsColor[language]; // else back to lang color
          });


          const projectDescription = document.createElement('p');
          projectDescription.innerHTML = project.description;

          projectCard.appendChild(projectImageLink);
          projectCard.appendChild(projectImage);
          projectCard.appendChild(projectLink);
          projectCard.appendChild(projectDescription);
          projectImageLink.appendChild(projectImage); // Append the image to the anchor element

          
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