import { expect,test } from '@playwright/test';

test("edit profile successfully", async ({ page }) => {
 
    await page.goto("/", { waitUntil: "networkidle" });

 
    await page.getByRole('button', { name: 'Pizza Emporium' }).click();

 
    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

 
    await page.getByLabel('Nome').fill("Rocket Pizza");
     

    await page.getByRole('button', { name: 'Salvar' }).click();

    await page.waitForLoadState("networkidle")
    

    const toast = await page.getByText('Dados atualizados com sucesso!');

    

    expect(toast).toBeVisible()
    
    await page.getByRole('button', { name: 'Close' }).click();

    await page.waitForTimeout(1000)
});



test("edit profile with error", async ({ page }) => {
 
    await page.goto("/", { waitUntil: "networkidle" });

 
    await page.getByRole('button', { name: 'Pizza Emporium' }).click();

 
    await page.getByRole('menuitem', { name: 'Perfil da loja' }).click();

 
    await page.getByLabel('Nome').fill("Guizin Pizzaria");
     

    await page.getByRole('button', { name: 'Salvar' }).click();

    

    const toast = await page.getByText('Não foi possível atualizar seus dados, tente novamente');

 



    expect(toast).toBeVisible()

   await page.getByRole('button', { name: 'Close' }).click();
     

});
