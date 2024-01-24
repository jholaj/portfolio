const projects = {
  java: [
      { name: 'Java Project 1', description: 'Description of Java Project 1', image: 'java_project1.jpg' },
      { name: 'Java Project 2', description: 'Description of Java Project 2', image: 'java_project2.jpg' },
  ],
  python: [
      { name: 'Python Project 1', description: 'Description of Python Project 1', image: 'python_project1.jpg' },
      { name: 'Python Project 2', description: 'Description of Python Project 2', image: 'python_project2.jpg' },
  ],
};

const arts = {
  java: [
    "       __       ___   ____    ____  ___      ",
    "      |  |     /   \\  \\\   \\\  /   / /   \\\     ",
    "      |  |    /  ^  \\  \\\   \\\/   / /  ^  \\\    ",
    ".--.  |  |   /  /_\\\  \\\  \\\      / /  /_\\\  \\\   ",
    "|  `--'  |  /  _____  \\\  \\\    / /  _____  \\\  ",
    "\\\______/  /__/     \\\__\\\  \\\__/ /__/     \\\__\\\ "
],
python: [
  ".______   ____    ____ .___________. __    __    ______   .__   __. ",
  "|   _  \\  \\   \\  /   / |           ||  |  |  |  /  __  \\  |  \\ |  | ",
  "|  |_)  |  \\   \\/   /  `---|  |----`|  |__|  | |  |  |  | |   \\|  | ",
  "|   ___/    \\_    _/       |  |     |   __   | |  |  |  | |  . `  | ",
  "|  |          |  |         |  |     |  |  |  | |  `--'  | |  |\\   | ",
  "| _|          |__|         |__|     |__|  |__|  \\______/  |__| \\__| "
],
  web: [],
  others: []
}

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
          projectImage.alt = project.name;

          const projectName = document.createElement('h3');
          projectName.textContent = project.name;

          const projectDescription = document.createElement('p');
          projectDescription.textContent = project.description;

          projectCard.appendChild(projectImage);
          projectCard.appendChild(projectName);
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