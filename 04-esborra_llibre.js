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
const book_title = process.env.book_title;

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

        //  Entra a la secció de llibres i al llibre que vol esborrar
        await this.driver.findElement(By.xpath("//a[text()='Llibres']")).click();

        await this.driver.findElement(By.xpath("//a[text()='"+book_title+"']")).click();

        //  Esborra llibre
        await this.driver.findElement(By.xpath("//a[contains(@class, 'deletelink')]")).click();
        await this.driver.findElement(By.xpath("//input[@type='submit']")).click();

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