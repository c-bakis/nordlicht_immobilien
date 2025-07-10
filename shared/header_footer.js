document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  let header = document.querySelector(".header-placeholder");
  if (window.location.pathname.includes("index.html")) {
    header.innerHTML += `
        <div class="head">
            <a href="./index.html"><img class="logo" src="./assets/img/logo.png" alt="Nordlicht Immobilien Logo">
            </a>
            
            <nav class="nav_links">
                <a class="link" href="./immobilien/immobilienangebote.html">Immobilienangebote</a>
                <a class="link active" href="./service/services.html">Unser Service</a> 
                <a class="link" href="./unternehmen/ueber_uns.html">Über uns</a>
                <a class="link" href="./contact/contact_form.html">Kontakt</a>
            </nav>
        </div>`;
    console.log("Header loaded for index.html");
  } else {
    header.innerHTML += `
        <div class="head">
            <a href="../index.html"><img class="logo" src="../assets/img/logo.png" alt="Kochwelt Logo">
            </a>
            
            <nav class="nav_links">
                <a class="link" href="../immobilien/immobilienangebote.html">Immobilienangebote</a>
                <a class="link active" href="../service/services.html">Unser Service</a>  
                <a class="link" href="../unternehmen/ueber_uns.html">Über uns</a>
                <a class="link" href="../contact/contact_form.html">Kontakt</a>
            </nav>
        </div>`;
    console.log("Header loaded for other pages");
  }
}

function loadFooter() {
  let footer = document.querySelector(".footer-placeholder");
  if (window.location.pathname.includes("index.html")) {
    footer.innerHTML += `<div class="footer">
    <div class="copy">
        <div>© 2025 Nordlicht Immobilien</div>
            <div class="socials-container">
                <a class"footer-img" href="https://www.facebook.com/?locale=de_DE" class="socials"><img src="./assets/img/facebook.png" alt="Facebook"></a>
                <a class"footer-img" href="https://www.instagram.com/" class="socials"><img src="./assets/img/instagram.png" alt="Instagram"></a>
                <a class"footer-img" href="https://www.youtube.com/" class="socials"><img src="./assets/img/youtube.png" alt="YouTube"></a>
            </div>
        </div>
        <div class="footer-links-container">
        <div class="nav-links-footer">
            <a href="./index.html" class="footer-links">Start</a> 
            <a href="./immobilien/immobilienangebote.html" class="footer-links">Immobilien</a> 
            <a href="./unternehmen/ueber_uns.html" class="footer-links">Über uns</a> 
            <a href="./service/services.html" class="footer-links">Services</a>
        </div>

        <div class="links-container">
            <a href="./contact/contact_form.html" target="_parent" class="footer-links">Kontakt</a> 
            <a href="./privacy_agb/datenschutz.html" target="_parent" class="footer-links">Datenschutz</a> 
            <a href="./privacy_agb/Impressum.html" target="_parent" class="footer-links">Impressum</a> 
            <a href="./privacy_agb/agb.html" target="_parent" class="footer-links">AGB</a>
        </div>

        <div class="address-container">
            <p>Nordlicht Immobilien</p>
            <p>Beispielstraße 123</p>
            <p>12345 Beispielstadt</p>
            <p>Telefon: 01234 567890</p>
            <p>Email: <a href="mailto:info@nordlicht-immobilien.de"></a></p>
        </div>       </div>
    </div>`;
  } else {
    footer.innerHTML += `<div class="footer">
    <div>
        <div class="copy">© 2025 Nordlicht Immobilien</div>
            <div class="socials-container">
                <a class"footer-img" href="https://www.facebook.com/?locale=de_DE" class="socials"><img src="../assets/img/facebook.png" alt="Facebook"></a>
                <a class"footer-img" href="https://www.instagram.com/" class="socials"><img src="../assets/img/instagram.png" alt="Instagram"></a>
                <a class"footer-img" href="https://www.youtube.com/" class="socials"><img src="../assets/img/youtube.png" alt="YouTube"></a>
            </div>
        </div>
        <div>
        <div class="nav-links-footer">
            <a href="../index.html" class="footer-links">Start</a> 
            <a href="../immobilien/immobilienangebote.html" class="footer-links">Immobilien</a> 
            <a href="../unternehmen/ueber_uns.html" class="footer-links">Über uns</a> 
            <a href="../service/services.html" class="footer-links">Services</a>
        </div>

        <div class="links-container">
            <a href="../contact/contact_form.html" target="_parent" class="footer-links">Kontakt</a> 
            <a href="../privacy_agb/datenschutz.html" target="_parent" class="footer-links">Datenschutz</a> 
            <a href="../privacy_agb/Impressum.html" target="_parent" class="footer-links">Impressum</a> 
            <a href="../privacy_agb/agb.html" target="_parent" class="footer-links">AGB</a>
        </div>

        <div class="address-container">
            <p>Nordlicht Immobilien</p>
            <p>Beispielstraße 123</p>
            <p>12345 Beispielstadt</p>
            <p>Telefon: 01234 567890</p>
            <p>Email: <a href="mailto:info@nordlicht-immobilien.de"></a></p>
        </div>       </div>
    </div>`;
  }
}
