function updateFooterDisplay(isChina) {
  const linksElement = document.getElementById("footer-links");
  if (!linksElement) return;

  const text = isChina ? window.siteParams.beian : window.siteParams.github;
  if (!text) return;

  try {
    const decoded = decodeURIComponent(escape(atob(text)));
    linksElement.innerHTML = decoded;
  } catch (e) {
    console.error("Failed to decode footer text:", e);
  }
}

function isInChina() {
  return new Promise((resolve) => {
    // 检查缓存
    const cached = localStorage.getItem("isChina");
    const timestamp = localStorage.getItem("timestamp");
    const now = new Date().getTime();

    // 如果缓存存在且未过期（24小时）
    if (
      cached !== null &&
      timestamp !== null &&
      now - timestamp < 24 * 60 * 60 * 1000
    ) {
      resolve(cached === "true");
      return;
    }

    // 如果缓存不存在或已过期，重新请求
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        const isChina = data.country_name === "China";
        // 更新缓存
        localStorage.setItem("isChina", isChina);
        localStorage.setItem("timestamp", now);
        resolve(isChina);
      })
      .catch(() => {
        resolve(false);
      });
  });
}

isInChina().then((isChina) => {
  updateFooterDisplay(isChina);
});
