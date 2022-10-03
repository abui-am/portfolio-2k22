/* eslint-disable import/prefer-default-export */
import rss from '@astrojs/rss';

import { SITE_DESCRIPTION, SITE_TITLE } from '../config';

export const get = async (): Promise<{
  body: string;
}> =>
  await rss({
    description: SITE_DESCRIPTION,
    items: import.meta.glob('./blog/**/*.{md,mdx}'),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    site: import.meta.env?.SITE,
    title: SITE_TITLE,
  });
