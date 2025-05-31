// Get the current URL path
const pathParts = window.location.pathname.split("/");

// Example: ['', 'giveaways', '1234567890']
const guildId = pathParts[2];

if (guildId) {
  document.getElementById("title").textContent = `Giveaways for Guild ${guildId}`;
  // You could also fetch data from an API here if hosted externally.
} else {
  document.getElementById("title").textContent = "No guild ID provided.";
}
