document.getElementById("colorBtn").addEventListener("click", function() {
    const colors = ["#f4f4f4", "#ff9999", "#99ccff", "#99ff99", "#ffff99"];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
