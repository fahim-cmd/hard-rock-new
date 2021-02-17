// const inputSearchText = () => {
//     const searchText = document.getElementById("search-box").value;
//     const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayData(data.data))
// };


const inputSearchText = async () => {
    const searchText = document.getElementById("search-box").value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data);
}
const displayData = (songs) => {
    
    const showSongs = document.getElementById("displayData");
    showSongs.innerHTML = "";
    document.getElementById("singleLyric").innerText = "";

    songs.forEach(song => {  
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
            <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${song.title}</h3>
                    <p class="author lead">${song.album.title} <span>By ${song.artist.name}</span></p>
                    <audio controls src="${song.preview}">
                    </audio>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onClick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
            </div>
        `;
        showSongs.appendChild(createDiv);
    })
}
    const getLyric = async (artist, title) => {
        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
        const res = await fetch(url);
        const data = await res.json();
        displayLyric(data.lyrics);
    }
    // const getLyric = (artist, title) => {
    //     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayLyric(data.lyrics))
    // }

    const displayLyric = lyric => {
        
        document.getElementById("singleLyric").innerText = lyric;
        
    }