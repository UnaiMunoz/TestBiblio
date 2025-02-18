const { BaseTest } = require("./BaseTest.js");
const { By, until } = require("selenium-webdriver");
const assert = require('assert');

require('dotenv').config();
console.log(process.env);

class MyTest extends BaseTest {
    async test() {
        // Navegar a la pàgina de login
        var site = process.env.URL;
        await this.driver.get(site + "/admin/login");

        // Esperar fins que els elements siguin accessibles
        await this.driver.wait(until.elementLocated(By.id('id_username')), 5000);  // Esperar que el camp d'usuari sigui visible
        await this.driver.wait(until.elementLocated(By.id('id_password')), 5000);  // Esperar que el camp de contrasenya sigui visible

        // Trobar els elements del formulari de login
        const usernameField = await this.driver.findElement(By.id('id_username'));
        const passwordField = await this.driver.findElement(By.id('id_password'));
        const loginButton = await this.driver.findElement(By.css('input[type="submit"]'));  // Botó d'enviament

        // Introduir l'usuari (aws2test) i la contrasenya (selenium314)
        await usernameField.sendKeys('usuariTest');
        await passwordField.sendKeys('contrasenyaTest');

        // Fer clic al botó de login
        await loginButton.click();

        // Esperar a que la pàgina redirigeixi després del login
        await this.driver.wait(until.urlContains("admin/"), 5000);  // Comprovar si el URL conté "/admin/"

        // Validar que el login ha estat correcte comprovant el títol de la pàgina
        const pageTitle = await this.driver.getTitle();
        assert.strictEqual(pageTitle, "Iniciar sessió | Lloc administratiu de Django");  // Comprovar que el títol de la pàgina sigui el correcte

        console.log("TEST OK");
    }
}

// Executar el test
(async function test_example() {
    const test = new MyTest();
    await test.run();
    console.log("END");
})();
