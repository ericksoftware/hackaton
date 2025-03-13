document.addEventListener("DOMContentLoaded", function() {
        const inputs = document.querySelectorAll("input");

        inputs.forEach(input => {
            input.addEventListener("focus", function() {
                setTimeout(() => {
                    input.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 300);
            });
        });
    });
