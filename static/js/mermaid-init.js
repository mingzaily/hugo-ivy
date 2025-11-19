document.addEventListener("DOMContentLoaded", () => {
  if (typeof window.mermaid === "undefined") return;

  const codeBlocks = document.querySelectorAll("pre > code.language-mermaid");
  if (!codeBlocks.length) return;

  window.mermaid.initialize({
    startOnLoad: false,
    securityLevel: "loose",
  });

  codeBlocks.forEach((code) => {
    const pre = code.parentElement;
    if (!pre || !pre.parentElement) return;

    const container = document.createElement("div");
    container.className = "mermaid";
    container.textContent = code.textContent.trim();

    pre.parentElement.replaceChild(container, pre);
  });

  window.mermaid.run({ querySelector: ".mermaid" });
});
