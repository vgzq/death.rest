fetch("avatars.json")
  .then(response => response.json())
  .then(avatars => {
    const container = document.getElementById("avatar-container");
    avatars.forEach(user => {
      const div = document.createElement("div");
      div.className = "avatar";
      div.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.username}'s avatar">
        <div class="username">${user.username}</div>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Failed to load avatars:", error);
    document.getElementById("avatar-container").textContent = "Error loading avatars.";
  });
