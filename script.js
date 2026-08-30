const username = "chloemarieconnolly"; 

fetch(`https://api.github.com/users/${username}/starred`)
  .then(response => response.json())
  .then(repos => {
    const list = document.querySelector("#stargazers-list");
    repos.forEach(repo => {
      const item = document.createElement("li");
      item.textContent = `${repo.full_name} — ${repo.description || "No description"}`;
      list.appendChild(item);
    });
  })
  .catch(error => console.error("Error fetching starred repos:", error));