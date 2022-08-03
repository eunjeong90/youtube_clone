export default class YoutubeApi {
  getRequestOptions: { method: string; redirect: RequestRedirect };
  key: string | undefined;
  constructor(key: string | undefined) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&type=video&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await res.json();
    return result.items;
  }

  async search(query: string) {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await res.json();
    return result.items.map((item: { id: { videoId: string } }) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}
