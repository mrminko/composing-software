const playlist = {
    name: "top hits",
    books: [
        {
            title: "dacing with your ghost",
            artist: "bruno mars"
        },
        {
            title: "pink venom",
            artist: "black pink"
        }
    ],
    description: {
        year: 2024
    }
}

const new_playlist = Object.assign({}, playlist); //shallow copy
new_playlist.name = "novels collection"
new_playlist.novels = [{
    title: "kafka on the shore",
    author: "haruki murakami"
}]
new_playlist.books = undefined //reassigned doesn't affect the original playlist
new_playlist.description.year = 2023 //property changed
// new_playlist.description = undefined //reassign


console.log("new one\n", new_playlist)
console.log("original one\n", playlist)