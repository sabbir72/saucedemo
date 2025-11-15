import { test, expect } from '@playwright/test';

test('SauceDemo Add to Cart & Validation', async ({ page }) => {
  
  // 1️⃣ Open SauceDemo
  await page.goto('https://www.saucedemo.com/');

  // 2️⃣ Login
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // Verify login success
  await expect(page.locator('.title')).toHaveText('Products');

  // 3️⃣ Add specific product to cart
  const productLocator = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await productLocator.click();

  // 4️⃣ Go to Cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 5️⃣ Get product name from cart for validation
  const cartProductLocator = page.locator('.inventory_item_name');
  const cartProductName = await cartProductLocator.innerText();
  console.log('Product in Cart:', cartProductName);

  // 6️⃣ (Optional) Click product to open details page
  await cartProductLocator.click();

  // 7️⃣ Get product name from product details page
  const productDetailLocator = page.locator('[data-test="inventory-item-name"]');
  const productDetailName = await productDetailLocator.innerText();
  console.log('Product Detail Page Name:', productDetailName);

  // 8️⃣ Validation: Cart name vs Detail page name
  if (cartProductName === productDetailName) {
      console.log('✅ Product validation passed:', cartProductName);
  } else {
      console.log('❌ Product validation failed. Cart:', cartProductName, 'Detail:', productDetailName);
  }

  // 9️⃣ Logout (Optional)
  await page.locator('#react-burger-menu-btn').click();
  await page.locator('#logout_sidebar_link').click();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
