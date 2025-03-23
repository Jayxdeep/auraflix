document.addEventListener("DOMContentLoaded", async () => {
    console.log("Page loaded, initializing Clerk...");

    const loginBtn = document.getElementById("loginBtn");
    const logoutBtn = document.getElementById("logoutBtn");
    const userEmail = document.getElementById("userEmail");
    const reviewForm = document.getElementById("reviewForm");
    const responseMessage = document.getElementById("responseMessage");

    try {
        await window.Clerk.load();
        console.log("Clerk is ready!");
        setupEventListeners();
        updateAuthUI();
    } catch (error) {
        console.error("Error loading Clerk:", error);
    }

    function setupEventListeners() {
        loginBtn.addEventListener("click", async () => {
            try {
                await window.Clerk.openSignIn();
            } catch (error) {
                console.error("Login error:", error);
                alert("Login failed. Try again.");
            }
        });

        logoutBtn.addEventListener("click", async () => {
            try {
                await window.Clerk.signOut();
                updateAuthUI();
            } catch (error) {
                console.error("Logout error:", error);
                alert("Logout failed. Try again.");
            }
        });

        window.Clerk.addListener(updateAuthUI);

        reviewForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            if (!window.Clerk.user) {
                alert("You must be logged in to submit a review.");
                return;
            }

            try {
                const session = await window.Clerk.session;
                if (!session) {
                    console.error("No active session found.");
                    alert("Authentication failed. Please log in again.");
                    return;
                }

                const token = await session.getToken();
                if (!token) {
                    console.error("Failed to retrieve token.");
                    alert("Authentication failed. Please log in again.");
                    return;
                }

                console.log("Clerk token:", token);

                const reviewData = {
                    influencerId: document.getElementById("influencerId").value.trim(),
                    credibilityRating: parseFloat(document.getElementById("credibilityRating").value),
                    longevityRating: parseFloat(document.getElementById("longevityRating").value),
                    engagementRating: parseFloat(document.getElementById("engagementRating").value),
                    comment: document.getElementById("comment").value.trim(),
                };

                const response = await fetch("http://localhost:3000/api/reviews", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(reviewData)
                });

                const data = await response.json();
                console.log("Server Response:", data);

                if (response.ok) {
                    responseMessage.innerText = data.message || "Review submitted successfully!";
                    responseMessage.style.color = "green";
                } else {
                    throw new Error(data.message || "Submission failed.");
                }

            } catch (error) {
                console.error("Review submission error:", error);
                responseMessage.innerText = "Failed to submit review!";
                responseMessage.style.color = "red";
            }
        });
    }

    function updateAuthUI() {
        if (window.Clerk.user) {
            loginBtn.style.display = "none";
            logoutBtn.style.display = "block";
            userEmail.innerText = `Logged in as: ${window.Clerk.user.primaryEmailAddress?.emailAddress || "Unknown"}`;
        } else {
            loginBtn.style.display = "block";
            logoutBtn.style.display = "none";
            userEmail.innerText = "";
        }
    }
});
