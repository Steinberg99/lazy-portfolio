import { followers } from "../components/followers/followers.js";
import { search } from "../components/search/search.js";
import { repos } from "../components/repos/repos.js";
import { user } from "../components/user/user.js";
import { getUserData } from "../utils/getUserData.js";

const app = document.querySelector(".app");

const userPage = async (username) => {
  const userData = await getUserData(username);

  const markup = `
    ${
      userData !== null
        ? `
    ${user(userData.user)}

    <div>
      <h2>Repositories</h2>

      ${repos(userData.repos)}
    </div>

    <div>
      <h2>Followers</h2>

      ${followers(userData.followers)}
    </div>

    <div>
      <h2>Following</h2>

      ${followers(userData.following)}
    </div>
    `
        : `<p>User not found!</p>`
    }
    <h2>Search for other users</h2>
  `;

  app.innerHTML = markup;
  app.appendChild(search()); // Add search bar
};

export { userPage };
