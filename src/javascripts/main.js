import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import printToDom from './helpers/printToDom';

const projects = [
  {
    title: 'Cool Project',
    screenshot: 'http://gotoflashgames.com/files/file/033.jpg',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
];

const createProjecCards = (projectsArr) => {
  let domString = '';

  projectsArr.forEach((element, i) => {
    if (element.available === true) {
      domString += `<div class="project card" style="width: 18rem;" id=${i}>
                  <div class="card-body">
                      <p class="card-text">${element.title}</p>
                      <p class="card-text">${element.screenshot}</p>
                      <p class="card-text">${element.description}</p>
                      <p class="card-text">${element.technologiesUsed}</p>
                      <p class="card-text">${element.available}</p>
                      <p class="card-text">${element.url}</p>
                      <p class="card-text">${element.githubUrl}</p>
                    </div>
                  </div>`;
    } else {
      domString = '';
    }
  });

  printToDom('#projectsPage', domString);
};

const init = () => {
  createProjecCards(projects);
};

init();
