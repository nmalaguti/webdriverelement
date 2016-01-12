//

"use strict";

import Element from "./element";

export interface IOptions {
}

export function init(client: WebdriverIO.Client<void>, options: IOptions) {
    Element.client = client;

    function findElement(selector: string): Promise<Element> {
        return client.element(selector).then<Element>((result) => {
            return new Element(result.value.ELEMENT);
        });
    };

    function findElements(selector: string): Promise<Element[]> {
        return client.elements(selector).then<Element[]>((result) => {
            return result.value.map((element) => {
                return new Element(element.ELEMENT);
            });
        });
    };

    function findActiveElement(): Promise<Element> {
        return client.elementActive().then<Element>((result) => {
            return new Element(result.value.ELEMENT);
        });
    };

    client.addCommand("findElement", findElement);
    client.addCommand("findElements", findElements);
    client.addCommand("findActiveElement", findActiveElement);
}
