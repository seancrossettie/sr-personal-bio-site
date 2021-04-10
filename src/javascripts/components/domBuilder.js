const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="bio-title"></div>
  <div id="navigation"></div>
  <div class="fullPage" id="bio-section"></div>
  <div class="fullPage" id="technologies-section"></div>
  <div class="fullPage" id="projects-section"></div>
  <footer class="page-footer" id="footer-section"></footer>
  `;
};

export default domBuilder;
