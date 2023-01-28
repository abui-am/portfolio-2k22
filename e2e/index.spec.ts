import { expect, test } from '@playwright/test';

import { promises } from 'fs';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Abuidillah Adjie Muliadi/);
});

test('open github', async ({ page }) => {
  const popupPromise = page.waitForEvent('popup');

  await page.goto('/');

  const btn = page.getByAltText('github');
  btn.click();

  const popup = await popupPromise;
  await popup.waitForLoadState();

  expect(await popup.title()).toBe('abui-am (Abui) · GitHub');
});

test('open linkedin', async ({ page }) => {
  const popupPromise = page.waitForEvent('popup');

  await page.goto('/');

  const btn = page.getByAltText('linkedin');
  btn.click();

  const popup = await popupPromise;
  await popup.waitForLoadState();

  expect(popup.url()).toBe(
    'https://www.linkedin.com/in/abuidillah-adjie-muliadi-bb0816190/'
  );
});

test('open posts', async ({ page }) => {
  const popupPromise = page.waitForEvent('popup');
  const posts = JSON.parse(
    (await promises.readFile('./src/json/posts.json')).toString()
  );
  await page.goto('/');

  console.log(posts);

  const postTitle = page.getByRole('link', {
    name: posts[0]?.title ?? '',
  });
  await postTitle.click();

  const popup = await popupPromise;
  await popup.waitForLoadState();

  expect(popup.url()).toBe(posts[0]?.url);
});

test('table of content', async ({ page }) => {
  await page.goto('/');

  const postTitle = page.getByRole('link', {
    name: "2. My 'Approach' into programming",
  });
  await postTitle.click();

  expect(page.url()).toBe(`http://localhost:3000/#approach`);
});
