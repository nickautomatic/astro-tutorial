import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: "https://astro-tutorial-34e55f.netlify.app",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-gb</language>`,
  });
