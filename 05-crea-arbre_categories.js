// carreguem les llibreries
const { BaseTest } = require("./BaseTest.js")
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

require('dotenv').config();
console.log(process.env);

// Access the environment variables
const site_url = process.env.URL;
const username = process.env.usuari;
const password = process.env.contrasenya;
const parent_category = process.env.parent_category;
const son_category1 = process.env.son_category1;
const son_category2 = process.env.son_category2;
const son_category3 = process.env.son_category3;
const son_category4 = process.env.son_category4;
const son_category5 = process.env.son_category5;
const son_category6 = process.env.son_category6;
const son_category7 = process.env.son_category7;
const son_category8 = process.env.son_category8;

// heredem una classe amb un sol mètode test()
// emprem this.driver per utilitzar Selenium


class MyTest extends BaseTest {
    async test() {
        // testejem H1 a la home page
        await this.driver.get(site_url + "/admin/login/");

        //  posar usuari i pass
        await this.driver.findElement(By.name("username")).sendKeys(username);
        await this.driver.findElement(By.name("password")).sendKeys(password);

        //  boto send .click()
        await this.driver.findElement(By.xpath("//input[@value='Iniciar sessió']")).click();

        //  Afegeix categoria  
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(parent_category);
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        //  Afegeix fills a la categoria anterior
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category1);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category2);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category3);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category4);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category5);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category6);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category7);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/categoria/add/']")).click();

        await this.driver.findElement(By.name("nom")).sendKeys(son_category8);
        await this.driver.findElement(By.xpath("//select[@name='parent']/option[text()='"+parent_category+"']")).click();
        await this.driver.findElement(By.xpath("//input[@value='Desar']")).click();

        //  cerrar sessió
        await this.driver.sleep(1000);
        await this.driver.findElement(By.xpath("//button[@type='submit']")).click();

        console.log("TEST OK");
    }
}

(async function test_example() {
    const test = new MyTest();
    await test.run();
    console.log("END")
})();