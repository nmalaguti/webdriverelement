//

"use strict";

import {assert} from "chai";

describe("clear", async () => {
    before(async () => {
        await browser.url("/").refresh();
    });

    it("should clear the contents of an element", async () => {
        const element = await browser.findElement("#myvalue");
        assert.equal(await element.getValue(), "hello world");
        await element.clear();
        assert.equal(await element.getValue(), "");
    });
});
