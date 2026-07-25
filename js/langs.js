const projects = {
  python: [
      { name: 'DICOM Metadata Explorer', tech: 'Python · PySide6 · pydicom', description: 'Desktop DICOM viewer & editor — tag editing, validation checks, anonymization and study comparison.', image: 'static/projects/dicom-explorer.png', url: 'https://github.com/jholaj/DicomMetadataExplorer' },
      { name: 'Route & Sun Visualizer', tech: 'Python · PySolar · OpenRouteService', description: 'Tells you which side of the car the sun will hit on a route — interactive map with per-window sun exposure stats.', image: 'static/projects/route-sun.png', url: 'https://github.com/jholaj/RouteSunVisualizer' },
      { name: 'ASCII Generator', tech: 'Python', description: 'Converts an image to ASCII art easily.', image: 'static/projects/ascii-generator.png', url: 'https://github.com/jholaj/ASCIIGenerator' },
      { name: 'Web for fictional business', tech: 'Python · Django', description: 'School project - fictional vinyl shop Vinylotopia.', image: 'static/projects/vinylotopia.png', url: 'https://github.com/jholaj/ET_ESHOP' },
      { name: 'Image Quality Measurement', tech: 'Python', description: 'Practical thesis project. Measures image quality using PSNR, SSIM and BRISQUE.', image: 'static/projects/iqm.png', url: 'https://github.com/jholaj/IQM' },
      { name: 'Music To Phone Downloader', tech: 'Python', description: 'App for my family - downloads music from YouTube and transfers it to a phone over SSH.', image: 'static/projects/music-downloader.png', url: 'https://github.com/jholaj/MusicToPhoneDownloader'},
      { name: 'Mirror Folder', tech: 'Python', description: 'One-way periodic sync keeping an identical copy of a source folder in a replica. Logs file creation, removal, copying and modification.', image: 'static/projects/mirror-folder.png', url: 'https://github.com/jholaj/MirrorFolder'}
  ],
  others: [
      { name: 'Simple JPEG Compress', tech: 'C++', description: 'A JPEG-like image codec written from scratch - DCT, chroma subsampling, quantisation and Huffman coding. No third-party dependencies.', image: 'static/projects/jpeg-compress.png', url: 'https://github.com/jholaj/SimpleJPEGCompress'},
      { name: 'Image Color Frequency Analyzer', tech: 'Rust · GTK4', description: 'Showcases the 100 most prevalent colors in an RGBA image.', image: 'static/projects/color-frequency.png', url: 'https://github.com/jholaj/ColorFrequency' },
      { name: 'Windows App Audio Ripper', tech: 'C++', description: 'Rips the audio of an app with a given PID into a .wav file. Rewritten windows.h sample.', image: 'static/projects/audio-ripper.png', url: 'https://github.com/jholaj/WindowsAudioRipper' },
      { name: 'Computer Graphics', tech: 'Java', description: 'Wireframe 3D model with object translation/transformation and a movable camera.', image: 'static/projects/computer-graphics.png', url: 'https://github.com/jholaj/PGRF-task03' },
      { name: 'Portfolio', tech: 'HTML · CSS · JS', description: 'You are looking at it!', image: 'static/projects/portfolio.png', url: 'https://github.com/jholaj/portfolio' },
  ]
};

const arts = {
python: [
  ".______   ____    ____ .___________. __    __    ______   .__   __. ",
  "|   _  \\  \\   \\  /   / |           ||  |  |  |  /  __  \\  |  \\ |  | ",
  "|  |_)  |  \\   \\/   /  `---|  |----`|  |__|  | |  |  |  | |   \\|  | ",
  "|   ___/    \\_    _/       |  |     |   __   | |  |  |  | |  . `  | ",
  "|  |          |  |         |  |     |  |  |  | |  `--'  | |  |\\   | ",
  "| _|          |__|         |__|     |__|  |__|  \\______/  |__| \\__| "
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
      projects[language].forEach((project, idx) => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('project-card');
          projectCard.style.transitionDelay = (0.2 + idx * 0.1) + 's'; // stagger cards one after another

          const projectImageLink = document.createElement('a');
          projectImageLink.href = project.url;
          projectImageLink.target = '_blank';

          const projectImage = document.createElement('img');
          projectImage.src = project.image;
          projectImage.loading = 'lazy';
          projectImage.alt = project.name;

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


          const projectTech = document.createElement('p');
          projectTech.classList.add('project-tech');
          projectTech.textContent = project.tech;

          const projectDescription = document.createElement('p');
          projectDescription.textContent = project.description;

          projectCard.appendChild(projectImageLink);
          projectCard.appendChild(projectImage);
          projectCard.appendChild(projectLink);
          projectCard.appendChild(projectTech);
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
