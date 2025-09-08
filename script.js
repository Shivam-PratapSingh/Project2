// 📱 Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
}

// 📊 Dashboard Chart
const ctx = document.getElementById("yieldChart");
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
        label: "Predicted Yield (tons/ha)",
        data: [3.2, 3.5, 4.0, 4.2, 4.4],
        borderColor: "hsl(120, 60%, 35%)",
        backgroundColor: "rgba(34,197,94,0.2)",
        fill: true,
      }]
    }
  });
}
