import { expect,test } from '@playwright/test';

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', {waitUntil: "networkidle"});

 
  expect(page.getByText('200+7% em relação ao mês'))
    

 
 
});


test('display month orders amount metrics', async ({ page }) => {
    await page.goto('/', {waitUntil: "networkidle"});
  
   
      expect(page.getByText('200+17% em relação ao mês')).toBeVisible();
     
      
  
   
   
  });

  test('display total month orders amount metrics', async ({ page }) => {
    await page.goto('/', {waitUntil: "networkidle"});
  
   
      expect(page.getByText('20-5% em relação a ontem')).toBeVisible();
 
      
  
   
   
  });

  test('display canceled month orders amount metrics', async ({ page }) => {
    await page.goto('/', {waitUntil: "networkidle"});
  
   
      expect(page.getByText('40+10% em relação ao mês')).toBeVisible();
 
      
  
   
   
  });