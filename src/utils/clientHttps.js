const webApi = `https://api.themoviedb.org/3`

export function get(path) {
    return fetch(webApi+path, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWI0MGY0NjZiZWIyN2ExMDEwNTg3OGE2MDIyZTA2OCIsInN1YiI6IjYyNGE1MmE0ZWMwYzU4MDA0ZThkZDhhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6dIAXIrpAeQzfJXzw_LWQbAsy1cb1SptldV_av7yCg",
               'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(response => response.json())
    }