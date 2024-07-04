document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    // Function to create 800 squares dynamically
    function createSquares() {
        const numSquares = 800;
        for (let i = 0; i < numSquares; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);

            // Add hover effect with timeout
            square.addEventListener("mouseenter", function() {
                this.style.backgroundColor = "#66bb6a"; // Example hover color

                // Reset background color after 1 second
                setTimeout(() => {
                    this.style.backgroundColor = "#ccc"; // Example default color
                }, 1000); // 1000 milliseconds = 1 second
            });
        }
    }

    // Call function to create squares on page load
    createSquares();
});

