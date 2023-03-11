import api from '../api.js';

describe('Responses to http requests must be correct.',()=>{
  test('should fetch podcasts from server', async () => {
    const fechedPodcasts = await api.podcasts.getAll();
    expect(fechedPodcasts.length).toEqual(100);
  });
  
  test('should fetch podcast from server', async () => {
      const spyGetPodcast = jest.spyOn(api.podcasts, 'getPodcast')
      await api.podcasts.getPodcast("1535809341");

      expect(spyGetPodcast).toHaveBeenCalled();
    });
  
  test('should fetch episodes from server', async () => {
      const spyEpisodes = jest.spyOn(api.podcasts, 'getEpisodes')
      await api.podcasts.getEpisodes("https://jbpod.libsyn.com/applepodcast");
      expect(spyEpisodes).toHaveBeenCalled();

    });
})

