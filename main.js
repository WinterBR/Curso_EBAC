document.addEventListener('DOMContentLoaded', async function () {
    const endpoint = 'https://api.github.com/users/winterBR';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Falha ao carregar os dados do GitHub');
        }

        const url = await response.json();

        document.getElementById('profile-name').textContent = url.name;
        document.getElementById('profile-username').textContent = '@' + url.login;
        document.getElementById('repos').textContent = url.public_repos;
        document.getElementById('followers').textContent = url.followers;
        document.getElementById('following').textContent = url.following;
        document.getElementById('github-link').setAttribute('href', url.html_url);
        document.querySelector('.profile-avatar').setAttribute('src', url.avatar_url);

    } catch (error) {
        alert(error.message);
    }
});
