const username = "chloemarieconnolly"; 

fetch(`https://api.github.com/users/${username}/starred`)
  .then(response => response.json())
  .then(repos => {
    const list = document.querySelector("#stargazers-list");
    
    const filteredRepos = repos.filter(repo => repo.owner.login !== username);

filteredRepos.forEach(repo => {
    const item = document.createElement("li");
    
    const description = repo.description || "No description";
    const shortDescription = description.length > 100 
        ? description.slice(0, 100) + "..." 
        : description;

      item.innerHTML = `
  <a href="${repo.html_url}" target="_blank" class="repo-name">${repo.full_name}</a>
  <span class="repo-desc">${shortDescription}</span>
`;

      list.appendChild(item);
    });
  })
  .catch(error => console.error("Error fetching starred repos:", error));