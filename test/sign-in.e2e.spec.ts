import { expect,test } from '@playwright/test';

test('sign in successsufully', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: "networkidle"});


  await page.getByLabel('Seu e-mail').fill("jhondoe@example.com");
  await page.getByRole('button', { name: 'Acessar painel' }).click();


  const toast = await page.getByText('Enviamos um link de autentição para seu e-mail.');


   expect(toast).toBeVisible();

   await page.getByRole('button', { name: 'Acessar painel' }).click();

   


  await page.waitForTimeout(2000);


 
 
});


test('sign in wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: "networkidle"});


  await page.getByLabel('Seu e-mail').fill("guilhermepola663@gmail.com");
  await page.getByRole('button', { name: 'Acessar painel' }).click();


  const toast = await page.getByText('Não foi possível realizar o login. Tente novamente.');


   expect(toast).toBeVisible();
 


  await page.waitForTimeout(2000);


 
 
});


test('navigate to page of register restaurant', async ({ page }) => {
  await page.goto('/sign-in', {waitUntil: "networkidle"});


  await page.getByRole('link', { name: 'Novo estabelecimento' }).click();

  expect(page.url()).toContain('/sign-up');
   
})

 