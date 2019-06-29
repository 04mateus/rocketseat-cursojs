axios.get('https://api.github.com/users/04mateus')
    .then(function(response) {
        console.log(response)
     })
    .catch(function(error) {
        console.warn(error)
    });