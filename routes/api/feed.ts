import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET() {
    const feed = await Deno.readTextFile("./feed-data/feed.xml");
    return new Response(feed, {
      headers: { "Content-Type": "application/xml" },
    });
  }
});
