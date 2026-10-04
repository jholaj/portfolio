const projects = {
  python: [
      { name: 'DICOM Metadata Explorer', tech: 'Python · PySide6 · pydicom', description: 'Desktop DICOM viewer & editor — image viewer with window/level and measurement, tag editing, validation and anonymization.', image: 'static/projects/dicom-explorer.png', url: 'https://github.com/jholaj/DicomMetadataExplorer' },
      { name: 'Route & Sun Visualizer', tech: 'Python · PySolar · OpenRouteService', description: 'Tells you which side of the car the sun will hit on a route — interactive map with per-window sun exposure stats.', image: 'static/projects/route-sun.png', url: 'https://github.com/jholaj/RouteSunVisualizer' },
      { name: 'amoq', tech: 'Python · asyncio · AMQP', description: 'Chaos proxy that speaks AMQP - reads RabbitMQ frames in flight to drop a single ack, delay frames or inject returns.', image: 'static/projects/amoq.png', url: 'https://github.com/jholaj/amoq' },
  ],
  others: [
      { name: 'Simple JPEG Compress', tech: 'C++', description: 'A JPEG-like image codec written from scratch - DCT, chroma subsampling, quantisation and Huffman coding. No third-party dependencies.', image: 'static/projects/jpeg-compress.png', url: 'https://github.com/jholaj/SimpleJPEGCompress'},
      { name: 'Computer Graphics', tech: 'Java', description: 'Wireframe 3D model with object translation/transformation and a movable camera.', image: 'static/projects/computer-graphics.png', url: 'https://github.com/jholaj/PGRF-task03' },
  ]
};

const langButtons = document.querySelectorAll('.lang-button');

function showProjects(language) {
  const projectsContainer = document.getElementById('projects-container');

  // clear container
  projectsContainer.innerHTML = '';

  // underline the shown lang
  langButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.panel === language);
  });

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
    });

    void projectsContainer.offsetHeight; // force reflow so the cards animate in from the hidden state
    projectsContainer.querySelectorAll('.project-card').forEach(card => card.classList.add('show'));
  } else {
      const noProjectsMessage = document.createElement('p');
      noProjectsMessage.textContent = 'No projects available in this language.';
      projectsContainer.appendChild(noProjectsMessage);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  langButtons.forEach(button => {
      button.addEventListener('click', function () {
          showProjects(button.dataset.panel);
      });
  });

  showProjects('python');
});
