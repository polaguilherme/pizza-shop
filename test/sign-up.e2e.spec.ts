import { expect,test } from '@playwright/test';

test("sign-up successfully", async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: "networkidle" });


    await page.getByLabel('Nome do estabelecimento').fill("Pizza Shop")
    await page.getByLabel('Seu nome').fill("jhondoe");
    await page.getByLabel('Seu E-mail').fill("johndoe@example.com");
    await page.getByLabel('Seu celular').fill("48996076775")
    await page.getByRole('button', { name: 'Finalizar Cadastro' }).click();


    const toast = await page.getByText('Restaurante cadastrado com sucesso!');

    expect(toast).toBeVisible();

    await page.getByRole('button', { name: 'Login' }).click();

    expect(page.url()).toContain('/sign-in');

 
})


test("sign-up with wrong credentials", async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: "networkidle" });


    await page.getByLabel('Nome do estabelecimento').fill("Guizin Pizzaria")
    await page.getByLabel('Seu nome').fill("jhondoe");
    await page.getByLabel('Seu E-mail').fill("johndoe@example.com");
    await page.getByLabel('Seu celular').fill("48996076775")
    await page.getByRole('button', { name: 'Finalizar Cadastro' }).click();


    const toast = await page.getByText('Erro ao cadastrar restaurante');

    expect(toast).toBeVisible();

   

 

 
})



test("navigate to section login", async ({ page }) => {
    await page.goto('/sign-up', { waitUntil: "networkidle" });

 

 


    await page.getByRole('link', { name: 'Fazer Login' }).click();

    expect(page.url()).toContain('/sign-in');

 
})