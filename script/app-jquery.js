window.initWebsite = function () {
  var $html = $("html");
  const btn = $("#themeToggle");
  const copy = $(".copy-button");
  var stored = localStorage.getItem("data-theme") || "light";

  $html.attr("data-theme", stored);
  console.log("stored: ", stored);

  setLogo(stored);
  $("#themeToggle").html(
    stored === "dark"
      ? '<i class="bi bi-moon-stars-fill"></i>'
      : '<i class="bi bi-sunrise-fill"></i>',
  );

  $(btn).on("click", function () {
    var isDark = $html.attr("data-theme") === "dark";
    var next = isDark ? "light" : "dark";
    $html.attr("data-theme", next);
    setLogo(next);
    localStorage.setItem("data-theme", next);
    $(this).html(
      next === "dark"
        ? '<i class="bi bi-moon-stars-fill"></i>'
        : '<i class="bi bi-sunrise-fill"></i>',
    );
  });

  $(copy).on("click", function () {
    var $btn = $(this);
    var $block = $btn.closest(".fl-terminal, .fl-code-block");
    var text = $block.hasClass("fl-terminal")
      ? $block.find(".fl-terminal-body").text().trim()
      : $block.find("pre code").text().trim();
    navigator.clipboard.writeText(text).then(function () {
      $btn.text("Copied");
      setTimeout(function () {
        $btn.text("Copy");
      }, 2000);
    });
  });

  function setLogo(mode) {
    var src = mode === "dark" ? "./assets/logo.svg" : "./assets/logo-light.svg";
    $(".fl-logo-mark, .hero-logo").attr("src", src);
  }
};
