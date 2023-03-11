import axios from "axios";

export default {
    podcasts: {
        getAll: () =>
            axios
                .get(
                    `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
                )
                .then(res => {
                    let podcasts = [];
                    res.data.feed.entry.forEach(p => {
                        let podcast = {
                            id: p.id.attributes["im:id"],
                            img: p["im:image"][2].label,
                            name: p["im:name"].label,
                            author: p["im:artist"].label,
                            summary: p.summary ? p.summary.label : "No description"
                        };
                        podcasts.push(podcast);
                    });
                    return podcasts;
                })
                .catch(
                    error => console.log(`Error at fetching podcasts: ${error}`)
                ),

        getPodcast: (podcastId) =>
            axios
                .get(`http://0.0.0.0:8080/https://itunes.apple.com/lookup?id=${podcastId}`)
                .then(res => {
                    const p = res.data.results[0];
                    let podcast = {
                        id: p.trackId,
                        artwork: p.artworkUrl600,
                        name: p.trackName,
                        feedUrl: p.feedUrl,
                        artistName: p.artistName
                    };
                    return podcast;
                })
                .catch(
                    error => console.log(`Error at fetching podcast: ${error}`)
                ),

        getEpisodes: async (podcast) => {
            try {
              const response = await fetch(`http://0.0.0.0:8080/${podcast}`);
              const str = await response.text();
              const data = new window.DOMParser().parseFromString(str, "text/xml");
              const items = data.querySelectorAll("item");
              const episodes = [];
              items.forEach(episode => {
                let chapter = { id:'', title:'', date:'', duration:'', content:'', url:''}
                for (let item of episode.children) {
                    if(item.localName === 'guid') { chapter.id = item.textContent};
                    if(item.localName === 'title') { chapter.title = item.textContent};
                    if(item.localName === 'pubDate') { chapter.date = item.textContent};
                    if(item.localName === 'duration') { chapter.duration = item.textContent};
                    if(item.localName === 'description') { chapter.content = item.textContent};
                    if(item.localName === 'link') { chapter.url = item.textContent};
                }
                episodes.push(chapter);
              });
              return episodes;
            } catch (error) {
              console.error(error);
            }
        }
                           
    }
};
