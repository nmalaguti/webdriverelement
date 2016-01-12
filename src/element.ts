//

"use strict";

import {first, flatten} from "lodash";
import getPathWrapper from "./getPathWrapper";

export default class Element {

    public static client: WebdriverIO.Client<void>;

    constructor(public elementId: WebdriverIO.ElementId) {}

    public clear() {
        return Promise.resolve(Element.client.elementIdClear(this.elementId));
    }

    public click() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.click(selector));
        });
    }

    public doubleClick() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.doubleClick(selector));
        });
    }

    public dragAndDrop(element: Element) {
        return Promise.all([this.getSelector(), element.getSelector()]).then(([start, end]) => {
            return Promise.resolve(Element.client.dragAndDrop(start, end));
        });
    }

    public execute(script: (element: HTMLElement, ...args: any[]) => any, ...args: any[]) {
        return this.unpack(Element.client.execute(script, {ELEMENT: this.elementId}, ...args));
    }

    public executeAsync(script: (...args: any[]) => any, ...args: any[]) {
        return this.unpack(Element.client.executeAsync(script, {ELEMENT: this.elementId}, ...args));
    }

    public findElement(selector: string) {
        return this.unpack(Element.client.elementIdElement(this.elementId, selector)).then((element) => {
            return new Element(element.ELEMENT);
        });
    }

    public findElements(selector: string) {
        return this.unpack(Element.client.elementIdElements(this.elementId, selector)).then((elements) => {
            return elements.map((element) => {
                return new Element(element.ELEMENT);
            });
        });
    }

    public getAttribute(attributeName: string) {
        return this.unpack(Element.client.elementIdAttribute(this.elementId, attributeName));
    }

    public getCssProperty(propertyName: string) {
        return this.unpack(Element.client.elementIdCssProperty(this.elementId, propertyName));
    }

    public getHTML(includeSelectorTag?: boolean) {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.getHTML(selector, includeSelectorTag));
        }).then((html) => {
            return first(flatten([html]));
        });
    }

    public getLocation() {
        return this.unpack(Element.client.elementIdLocation(this.elementId));
    }

    public getLocationInView() {
        return this.unpack(Element.client.elementIdLocationInView(this.elementId));
    }

    public getParent() {
        return this.findElement("..");
    }

    public getSelector(): Promise<string> {
        return this.unpack(Element.client.execute(getPathWrapper, {ELEMENT: this.elementId}));
    }

    public getSize() {
        return this.unpack(Element.client.elementIdSize(this.elementId));
    }

    public getTagName() {
        return this.unpack(Element.client.elementIdName(this.elementId));
    }

    public getText() {
        return this.unpack(Element.client.elementIdText(this.elementId));
    }

    public getValue() {
        return this.getAttribute("value");
    }

    public leftClick() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.leftClick(selector));
        });
    }

    public middleClick() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.middleClick(selector));
        });
    }

    public moveTo(xoffset?: number, yoffset?: number) {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.moveToObject(selector, xoffset, yoffset));
        });
    }

    public rightClick() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.rightClick(selector));
        });
    }

    public scroll() {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.scroll(selector));
        });
    }

    public selectByIndex(index: number) {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.selectByIndex(selector, index));
        });
    }

    public selectByValue(value: string) {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.selectByValue(selector, value));
        });
    }

    public selectByVisibleText(text: string) {
        return this.getSelector().then((selector) => {
            return Promise.resolve(Element.client.selectByVisibleText(selector, text));
        });
    }

    public setValue(value: string) {
        return this.unpack(Element.client.elementIdClear(this.elementId).elementIdValue(this.elementId, value));
    }

    public submitForm() {
        return Promise.resolve(Element.client.submit(this.elementId));
    }

    private unpack<T>(promise: WebdriverIO.Client<WebdriverIO.RawResult<T>>) {
        return Promise.resolve(promise).then((result) => {
            return result.value;
        });
    }
}
