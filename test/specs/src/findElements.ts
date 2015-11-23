//

"use strict";

import {assert} from "chai";

describe("findElement", async () => {
    before(async () => {
        await browser.url("/");
    });

    it("should be able to find several elements", async () => {
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
