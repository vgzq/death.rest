// Extract guild ID from URL path
const parts = window.location.pathname.split("/"); // e.g. ["", "giveaways", "1234567890"]
const guildId = parts[2];

const heading = document.getElementById("heading");
const details = document.getElementById("details");

if (guildId) {
  heading.textContent = `Giveaways for Guild ${guildId}`;

  // OPTIONAL: fetch giveaway data from your API (if you have one)
  // fetch(`https://your-api.com/guilds/${guildId}/giveaways`)
  //   .then(res => res.json())
  //   .then(data => {
  //     details.textContent = JSON.stringify(data);
  //   })
  //   .catch(err => {
  //     details.textContent = "Failed to load giveaways.";
  //   });

} else {
  heading.textContent = "No Guild ID Found.";
}
