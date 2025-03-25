const API_URL = "http://localhost:5000/api/auth/register"; // Ensure this matches your backend route

fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
})
  .then((res) => res.json()) // If response is not JSON, it will throw an error
  .then((data) => console.log(data))
  .catch((error) => console.error("❌ API Error:", error));
