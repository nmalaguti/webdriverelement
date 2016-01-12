// Type definitions for webdriverelement 0.1.0
// Project: http://www.webdriver.io/
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="webdriverio.d.ts"/>

declare namespace WebdriverIO {
    export interface Client<T> {
        findElement(selector: string): Promise<Element>;
        findElements(selector: string): Promise<Element[]>;
        findActiveElement(): Promise<Element>;
    }

    export class Element {
        public static client: Client<void>;
        public elementId: ElementId;
        public constructor(elementId: ElementId);
        public clear(): Promise<void>;
        public click(): Promise<void>;
        public doubleClick(): Promise<void>;
        public dragAndDrop(element: Element): Promise<void>;
        public execute(script: (element: HTMLElement, ...args: any[]) => any, ...args: any[]): Promise<any>;
        public executeAsync(script: (...args: any[]) => any, ...args: any[]): Promise<any>;
        public findElement(selector: string): Promise<Element>;
        public findElements(selector: string): Promise<Element[]>;
        public getAttribute(attributeName: string): Promise<string>;
        public getCssProperty(propertyName: string): Promise<string>;
        public getHTML(includeSelectorTag?: boolean): Promise<string>;
        public getLocation(): Promise<Location>;
        public getLocationInView(): Promise<Location>;
        public getParent(): Promise<Element>;
        public getSelector(): Promise<string>;
        public getSize(): Promise<Size>;
        public getTagName(): Promise<string>;
        public getText(): Promise<string>;
        public getValue(): Promise<string>;
        public leftClick(): Promise<void>;
        public middleClick(): Promise<void>;
        public moveTo(xoffset?: number, yoffset?: number): Promise<void>;
        public rightClick(): Promise<void>;
        public scroll(): Promise<void>;
        public selectByIndex(index: number): Promise<void>;
        public selectByValue(value: string): Promise<void>;
        public selectByVisibleText(text: string): Promise<void>;
        public setValue(value: string): Promise<void>;
        public submitForm(): Promise<void>;
    }

}
