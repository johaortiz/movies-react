
const webApi = `https://api.themoviedb.org/3`


export async function get(path) {
    const response = await fetch(webApi + path, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWI0MGY0NjZiZWIyN2ExMDEwNTg3OGE2MDIyZTA2OCIsInN1YiI6IjYyNGE1MmE0ZWMwYzU4MDA0ZThkZDhhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6dIAXIrpAeQzfJXzw_LWQbAsy1cb1SptldV_av7yCg",
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    return await response.json();
}

// export const gett = (path) =>{
//     return axios.get(webApi + path , {
//         headers: {
//             'Authorization': `token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWI0MGY0NjZiZWIyN2ExMDEwNTg3OGE2MDIyZTA2OCIsInN1YiI6IjYyNGE1MmE0ZWMwYzU4MDA0ZThkZDhhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l6dIAXIrpAeQzfJXzw_LWQbAsy1cb1SptldV_av7yCg`
//         }
//     });
// };

export const getImage = ( width, movie ) => {
    const imageUrl = `https://image.tmdb.org/t/p/w${width}${movie.poster_path}`;
    return imageUrl;

}