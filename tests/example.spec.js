// @ts-check
import { test, expect } from '@playwright/test';
const LOCALHOST_URL = 'http://localhost:5173/src/App'

test('has title', async ({ page }) => {
await page.goto(LOCALHOST_URL);
const hola = await page.getByRole('heading')
const holaContext = await hola.textContent()
await expect(holaContext?.startsWith('Arxiu'));
});
