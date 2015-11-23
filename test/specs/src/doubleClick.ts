//

"use strict";

import {assert} from "chai";

describe("doubleClick", async () => {
    before(async () => {
        await browser.url("/").refresh();
    });

    it("should double click an element", async () => {
        const button = await browser.findElement("#mydblbutton");
        const counter = await browser.findElement("#dblcounter");

        assert.equal(await counter.getText(), "0");
        await button.click();
        assert.equal(await counter.getText(), "0");

        await button.doubleClick();

        assert.equal(await counter.getText(), "1");
        await button.doubleClick();

        assert.equal(await counter.getText(), "2");
    });
});
