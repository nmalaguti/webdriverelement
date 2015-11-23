//

"use strict";

import {assert} from "chai";

describe("findElement", async () => {
    before(async () => {
        await browser.url("/");
    });

    it("should be able to find a single element", async () => {
        const element = await browser.findElement("li");
        assert.equal(await element.getText(), "nav ul li a 1");
    });
});
