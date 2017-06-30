window.onload = () => {
  const sidebarToggle = document.getElementById("sidebarToggle");
  if (sidebarToggle) {
    sidebarToggle.onclick = () => {
      var sidebar = $(".sidebar");
      sidebar.toggleClass("hide");
      if (sidebarToggle.textContent === "◀") sidebarToggle.textContent = "▶";
      else sidebarToggle.textContent = "◀";
    };
  }
};
