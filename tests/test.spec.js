import { test, expect } from '@playwright/test';

test('SauceDemo Side Test:---', async ({ page }) => {
  
  //  Open webside
  await page.goto('https://www.saucedemo.com/');

  //  Login page
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  //  login success
  const titleLocator = page.locator('.title');
  await expect(titleLocator).toHaveText('Products', { timeout: 5000 });

  //  Add product to cart
  const productLocator = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  await expect(productLocator).toBeVisible({ timeout: 5000 });
  await productLocator.click();

  //  Go to Cart
  await page.click('[data-test="shopping-cart-link"]');

  //  Get product name from cart
  const cart_In_Product = page.locator('.inventory_item_name');
  const ProductName = await cart_In_Product.innerText();
  console.log('Product in Cart:', ProductName);

  //  Click product for details
  await cart_In_Product.click();

  //  Get product name
  const productDetail = page.locator('[data-test="inventory-item-name"]');
  await expect(productDetail).toBeVisible({ timeout: 5000 });
  const productDetailName = await productDetail.innerText();
  console.log('Product Detail Page Name:', productDetailName);

  // Validation 
  expect(ProductName).toBe(productDetailName);
  //  Logout
  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
