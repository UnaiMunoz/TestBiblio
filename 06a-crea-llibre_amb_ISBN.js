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
const book_isbn = process.env.book_isbn;

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

        //  Afegeix llibre
        await this.driver.findElement(By.xpath("//a[@href='/admin/biblio/llibre/add/']")).click();

        await this.driver.findElement(By.xpath("//a[text()=\"Introdueix manualment l'ISBN\"]")).click();

        await this.driver.sleep(1000);
        let alert = await this.driver.switchTo().alert();


        // Send text to the prompt
        await alert.sendKeys(book_isbn);
        // Accept (click OK)
        await alert.accept();
        await this.driver.sleep(8000);
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