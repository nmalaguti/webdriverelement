//

"use strict";

import {assert} from "chai";

describe("click", async () => {
    before(async () => {
        await browser.url("/").refresh();
    });

    it("should click an element", async () => {
        const button = await browser.findElement("#mybutton");
        const counter = await browser.findElement("#counter");

        assert.equal(await counter.getText(), "0");
        await button.click();

        assert.equal(await counter.getText(), "1");
        await button.click();

        assert.equal(await counter.getText(), "2");
    });
});
