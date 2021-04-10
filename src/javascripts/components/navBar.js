const navBar = () => {
  document.querySelector('#bio-title').innerHTML = `
    <div class="d-flex flex-wrap flex-column justify-content-center">
      <h1>Sean Rossettie</h1>
      <h2 id="bio-description">Full Stack Web Developer</h2>
    </div>
  `;
  document.querySelector('#navigation').innerHTML = `
    <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </li>
  </ul>
  `;
};

export default navBar;
