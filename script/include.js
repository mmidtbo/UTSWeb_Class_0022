async function loadComponent(id, file) {
  var elmnt = document.getElementById(id);
  var res = await fetch(file);
  elmnt.innerHTML = await res.text();
}
async function InitPage() {
  await Promise.all([
    loadComponent("navbar", "parts/navbar.html"),
    loadComponent("hero", "parts/hero.html"),
    loadComponent("problem", "parts/problem.html"),
    loadComponent("features", "parts/features.html"),
    loadComponent("docs-preview", "parts/docs-preview.html"),
    loadComponent("installation", "parts/installation.html"),
    loadComponent("community", "parts/community.html"),
    loadComponent("footer", "parts/footer.html"),
  ]);
  if (window.initWebsite) {
    window.initWebsite();
  }
}
InitPage();
