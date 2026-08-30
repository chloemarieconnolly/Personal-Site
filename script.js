const username = "chloemarieconnolly"; 

fetch(`https://api.github.com/users/${username}/starred`)
  .then(response => response.json())
  .then(repos => {
    const list = document.querySelector("#stargazers-list");
    
    repos.forEach(repo => {
      const item = document.createElement("li");
      
      const description = repo.description || "No description";
      const shortDescription = description.length > 100 
        ? description.slice(0, 100) + "..." 
        : description;

      item.innerHTML = `
        <span class="repo-name">${repo.full_name}</span>
        <span class="repo-desc">${shortDescription}</span>
      `;

      item.addEventListener("click", () => {
        const desc = item.querySelector(".repo-desc");
        const isHidden = window.getComputedStyle(desc).display === "none";
        desc.style.display = isHidden ? "block" : "none";
      });

      list.appendChild(item);
    });
  })
  .catch(error => console.error("Error fetching starred repos:", error));