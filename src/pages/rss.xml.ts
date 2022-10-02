/* eslint-disable import/prefer-default-export */
import rss from '@astrojs/rss';

import { SITE_DESCRIPTION, SITE_TITLE } from '../config';

interface ImportMeta {
  env: {
    SITE?: string;
  };
}

export const get = async (): Promise<{
  body: string;
}> =>
  await rss({
    description: SITE_DESCRIPTION,
    items: import.meta.glob('./blog/**/*.{md,mdx}'),
    site: (import.meta as ImportMeta).env?.SITE ?? '',
    title: SITE_TITLE,
  });
