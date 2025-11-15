import { test, expect } from '@playwright/test';

test('SauceDemo Add to Cart & Validation', async ({ page }) => {
  
  // 1️⃣ Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // 2️⃣ Login
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // 3️⃣ Verify login success
  const titleLocator = page.locator('.title');
  await expect(titleLocator).toHaveText('Products', { timeout: 5000 });

  // 4️⃣ Add product to cart
  const productLocator = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await expect(productLocator).toBeVisible({ timeout: 5000 });
  await productLocator.click();

  // 5️⃣ Go to Cart
  await page.click('[data-test="shopping-cart-link"]');

  // 6️⃣ Get product name from Cart
  const cartProductLocator = page.locator('.inventory_item_name');
  await expect(cartProductLocator).toHaveCount(1, { timeout: 5000 });
  const cartProductName = await cartProductLocator.innerText();
  console.log('Product in Cart:', cartProductName);

  // 7️⃣ Click product to go to details page
  await cartProductLocator.click();

  // 8️⃣ Get product name from details page
  const productDetailLocator = page.locator('[data-test="inventory-item-name"]');
  await expect(productDetailLocator).toBeVisible({ timeout: 5000 });
  const productDetailName = await productDetailLocator.innerText();
  console.log('Product Detail Page Name:', productDetailName);

  // 9️⃣ Validation using expect
  expect(cartProductName).toBe(productDetailName);

  // 10️⃣ Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
