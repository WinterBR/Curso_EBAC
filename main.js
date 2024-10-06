$('document').ready(function() {
    const endpoint = 'https://api.github.com/users/winterBR';

    $.ajax(endpoint).done(function(url) {
            $('#profile-name').text(url.name);
            $('#profile-username').text('@' + url.login);
            $('#repos').text(url.public_repos);
            $('#followers').text(url.followers);
            $('#following').text(url.following);
            $('#github-link').attr('href', url.html_url);
            $('.profile-avatar').attr('src', url.avatar_url);
        })
        .fail(function() {
            alert('Falha ao carregar os dados do GitHub.');
        });
});

