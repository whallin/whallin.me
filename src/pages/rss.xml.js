import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'William Hallin',
    description: 'William Hallin is a Swedish freelancer specializing in interface and graphics design.',
    site: import.meta.env.SITE,
    items: import.meta.glob('./posts/*.md'),
    customData: `<language>en-us</language>`,
  });