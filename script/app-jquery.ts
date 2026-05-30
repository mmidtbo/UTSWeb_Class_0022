(window as any).initWebsite = function (): void {
  var $html = $("html");
  const btn = $("#themeToggle");
  if (!btn) {
    return;
  }

  const copy = $(".copy-button");
  if (!copy) {
    return;
  }
  var stored = localStorage.getItem("data-theme") || "light";

  $html.attr("data-theme", stored);
  console.log("stored: ", stored);

  setLogo(stored);
  $("#themeToggle").html(
    stored === "dark"
      ? '<i class="bi bi-moon-stars-fill"></i>'
      : '<i class="bi bi-sunrise-fill"></i>',
  );

  $(btn).on("click", function (): void {
    console.log("exc ev cli");
    var isDark = $html.attr("data-theme") === "dark";
    console.log(isDark);
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

  $(copy).on("click", function (): void {
    console.log("exc ev cli");
    var $btn = $(this);
    var $block = $btn.closest(".fl-terminal, .fl-code-block");
    var text = $block.hasClass("fl-terminal")
      ? $block.find(".fl-terminal-body").text().trim()
      : $block.find("pre code").text().trim();
    navigator.clipboard.writeText(text).then(function (): void {
      $btn.text("Copied");
      setTimeout(function (): void {
        $btn.text("Copy");
      }, 2000);
    });
  });

  function setLogo(mode: string): void {
    var src = mode === "dark" ? "./assets/logo.svg" : "./assets/logo-light.svg";
    $(".fl-logo-mark, .hero-logo").attr("src", src);
  }
};
