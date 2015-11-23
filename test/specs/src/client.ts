//

"use strict";

import {assert} from "chai";

describe("client", () => {
    before(async () => {
        await browser.url("/");
    });

    describe("findElement", () => {
        it("should find a single element", async () => {
            const element = await browser.findElement("li");
            assert.equal(await element.getText(), "nav ul li a 1");
        });
    });

    describe("findElements", () => {
        it("should find several elements", async () => {
            const elements = await browser.findElements("li");
            assert.lengthOf(elements, 3);

            const results = await Promise.all(elements.map((element) => {
                return element.getText();
            }));

            assert.deepEqual(results, [
                "nav ul li a 1",
                "nav ul li a 2",
                "nav ul li a 3"
            ]);
        });
    });

    describe("findActiveElement", () => {
        it("should find the active element", async () => {
            await browser.refresh();
            const element = await browser.findActiveElement();
            assert.equal(await element.getAttribute("name"), "mytext");
        });
    });
});
