//

"use strict";

// http://stackoverflow.com/a/2631931

/* tslint:disable:no-var-keyword */
export default function getPathWrapper(elementToFind: any): string {
    function getPathTo(element: any): string {
        // if the element has an id, use the id
        if (element.id !== "") {
            return `*[@id='${element.id}']`;
        }

        // if the element is the body of the doc, return the tag name
        if (element === document.body) {
            return element.tagName.toLowerCase();
        }

        var ix = 0;
        var siblings = element.parentNode.childNodes;

        // look at all siblings and determine what number of the tag we are
        for (var i = 0; i < siblings.length; i++) {
            var sibling = siblings[i];

            // found our node, recurse upwards
            if (sibling === element) {
                return `${getPathTo(element.parentNode)}/${element.tagName.toLowerCase()}[${ix + 1}]`;
            }

            // element node and the tag name matches
            if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
                ix++;
            }
        }
    }

    return `//${getPathTo(elementToFind)}`;
}
/* tslint:enable:no-var-keyword */
