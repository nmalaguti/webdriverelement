//

"use strict";

// import {assert} from "chai";

describe("dragAndDrop", async () => {
    before(async () => {
        await browser.url("/").refresh();
    });

    it("should drag and drop an element");
    // , async () => {
    //     const div = await browser.findElement("#div1");
    //     const img = await browser.findElement("#drag1");
    //
    //     assert.equal(await div.getHTML(false), "");
    //
    //     await img.scroll();
    //
    //     await browser.moveTo(300, 1100);
    //     await browser.buttonDown("left");
    //     await browser.moveTo(300, 1260);
    //     await browser.buttonUp("left");
    //     // await img.moveTo(20, 20);
    //     // await browser.moveTo(0, -100);
    //     // // await div.moveTo();
    //     await browser.pause(5000);
    //
    //     assert.match(await div.getHTML(false), /<img.*?img\/flower\.jpg/);
    // });
});
