function renderNavBar(){
    document.getElementById("navBar").innerHTML += /* html */`
    <nav>   
        <div class="logo">
            <a href="https://yodono-unip.github.io/aps-i/">
                <h4>ToMAN</h4>
            </a>
        </div>
        <ul class="nav_links">
            <li>
                <a href="https://yodono-unip.github.io/aps-i/sobre.html">Sobre</a>
            </li>
            <li class="dropdown">
                <p>
                    <a>Problemas</a>
                    <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul class="dropdown-content">
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/amazonia.html">Amazônia</a>
                    </li>
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/hidreletricas.html">Hidrelétricas</a>
                    </li>
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/pecuaria.html">Pecuária</a>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <p>
                    <a>Alternativas</a>
                    <i class="fa-solid fa-caret-down"></i>
                </p>
                <ul class="dropdown-content">
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/eolica.html">Energia Eólica</a>
                    </li>
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/solar.html">Energia Solar</a>
                    </li>
                    <li>
                        <a href="https://yodono-unip.github.io/aps-i/maremotriz.html">Energia Maremotriz</a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    </nav>
    <div class="progress-container">
        <div class="progress-bar" id="myBar"></div>
    </div>
    `
};

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

renderNavBar();

