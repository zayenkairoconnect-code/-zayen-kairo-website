const header = `
<header class="site-header">
  <a class="brand" href="index.html">ZAYEN KAIRO<small>AUTHOR · TECHNOLOGY</small></a>
  <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
  <nav class="nav" aria-label="Main navigation">
    <a href="index.html">Home</a><a href="books.html">Books</a><a href="about.html">About</a>
    <a href="resources.html">Free resources</a><a href="blog.html">Notes</a><a class="nav-cta" href="contact.html">Contact</a>
  </nav>
</header>`;
const footer = `<footer class="site-footer"><div class="footer-inner"><div class="footer-copy">© ${new Date().getFullYear()} Zayen Kairo. All rights reserved.</div><div class="footer-links"><a href="books.html">Books</a><a href="resources.html">Resources</a><a href="contact.html">Contact</a></div></div></footer>`;
document.getElementById("site-header")?.insertAdjacentHTML("afterbegin",header);
document.getElementById("site-footer")?.insertAdjacentHTML("afterbegin",footer);
const toggle=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
function bookCard(book){return `<article class="book-card"><div class="book-cover"><img src="${book.cover}" alt="Placeholder cover design for ${book.title}"></div><div class="book-meta"><span class="book-category">${book.category}</span><h3>${book.title}</h3><p>${book.description}</p><a class="book-link" href="${book.amazonUrl}" ${book.amazonUrl==="#"?'aria-label="Amazon link to be added for '+book.title+'"':'target="_blank" rel="noopener"'}>VIEW BOOK ↗</a></div></article>`;}
if(typeof books!=="undefined"){
 const featured=document.getElementById("featured-books");
 const all=document.getElementById("all-books");
 if(featured) featured.innerHTML=books.filter(b=>b.featured).map(bookCard).join("");
 if(all) all.innerHTML=books.map(bookCard).join("");
}
const newsletter=document.getElementById("newsletter-form");
if(newsletter) newsletter.innerHTML=`<div class="newsletter-placeholder"><input type="email" placeholder="Your email address" aria-label="Your email address" disabled><button type="button" disabled>COMING SOON</button></div>`;

/* Home page motion: reveal sections as they enter the viewport. */
(() => {
  const loader = document.querySelector(".page-loader");
  window.addEventListener("load", () => {
    window.setTimeout(() => loader?.classList.add("is-hidden"), 350);
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

/* =================================
   ACTIVE NAVIGATION MENU
================================= */

function updateActiveNavigation() {

    const header = document.getElementById("site-header");

    if (!header) return;

    const links = header.querySelectorAll("nav a");

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {

        const linkPage = new URL(
            link.href,
            window.location.href
        ).pathname.split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("is-active");
        } else {
            link.classList.remove("is-active");
        }

    });
}

// Run when page loads
updateActiveNavigation();

// Handle dynamically loaded navigation
new MutationObserver(updateActiveNavigation).observe(
    document.getElementById("site-header"),
    { childList: true, subtree: true }
);

  // Subtle pointer movement on desktop. Disabled for touch and reduced-motion users.
  const hero = document.querySelector(".hero-visual");
  const scene = document.querySelector(".hero-book-scene");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (hero && scene && window.matchMedia("(pointer:fine)").matches && !reduceMotion) {
    hero.addEventListener("pointermove", event => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.transform = `translate(${x * 10}px, ${y * 10}px) rotate(${-4 + x * 2}deg)`;
    });
    hero.addEventListener("pointerleave", () => {
      scene.style.transform = "";
    });
  }
})();
