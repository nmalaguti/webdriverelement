// Type definitions for webdriverio 3.2.6
// Project: http://www.webdriver.io/
// Definitions by: Nick Malaguti <https://github.com/nmalaguti/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

declare namespace WebdriverIO {
    // EventEmitter
    export interface IClient<T> {
        addListener(event: string, listener: Function): IClient<T>;
        on(event: string, listener: Function): IClient<T>;
        once(event: string, listener: Function): IClient<T>;
        removeListener(event: string, listener: Function): IClient<T>;
        removeAllListeners(event?: string): IClient<T>;
        setMaxListeners(n: number): IClient<T>;
        listeners(event: string): IClient<T>;
        emit(event: string, ...args: any[]): IClient<T>;
    }

    // Promise
    export interface IClient<T> {
        call(callback: () => any): IClient<void>;
        finally(callback: () => any): IClient<T>;
        then<P>(onFulfilled?: (value: T) => P | IClient<P>, onRejected?: (err: any) => P | IClient<P>): IClient<P>;
        catch<P>(onRejected?: (err: any) => P | IClient<P>): IClient<P>;
        inspect(): Q.PromiseState<T>;
    }

    // Action
    export interface IClient<T> {
        addValue(selector: string, value: string | number): IClient<void>;
        addValue<P>(
            selector: string,
            value: string | number,
            callback: (err: any) => P
        ): IClient<P>;

        clearElement(selector: string): IClient<void>;
        clearElement<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        click(selector: string): IClient<void>;
        click<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        doubleClick(selector: string): IClient<void>;
        doubleClick<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        dragAndDrop(sourceElem: string, destinationElem: string): IClient<void>;
        dragAndDrop<P>(
            sourceElem: string,
            destinationElem: string, callback: (err: any) => P
        ): IClient<P>;

        leftClick(selector: string): IClient<void>;
        leftClick<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        middleClick(selector: string): IClient<void>;
        middleClick<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        moveToObject(selector: string): IClient<void>;
        moveToObject(selector: string, xoffset: number, yoffset: number): IClient<void>;
        moveToObject<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;
        moveToObject<P>(
            selector: string,
            xoffset: number,
            yoffset: number,
            callback: (err: any) => P
        ): IClient<P>;

        rightClick(selector: string): IClient<void>;
        rightClick<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;

        selectByIndex(selectElem: string, index: number): IClient<any>;
        selectByIndex<P>(
            selectElem: string,
            index: number,
            callback: (err: any, elem: any) => P
        ): IClient<P>;

        selectByValue(selectElem: string, value: string): IClient<any>;
        selectByValue<P>(
            selectElem: string,
            value: string,
            callback: (err: any, elem: any) => P
        ): IClient<P>;

        selectByVisibleText(selectElem: string, text: string): IClient<any>;
        selectByVisibleText<P>(
            selectElem: string,
            text: string,
            callback: (err: any, elem: any) => P
        ): IClient<P>;

        selectorExecute<P>(
            selectors: string | string[],
            script: (elements: any[], ...args: any[]) => P,
            ...args: any[]
        ): IClient<P>;

        selectorExecuteAsync<P>(
            selectors: string | string[],
            script: (elements: any[], ...args: any[]) => P,
            ...args: any[]
        ): IClient<P>;

        setValue(selector: string, values: number | string | Array<string>): IClient<void>;
        setValue<P>(
            selector: string,
            values: number | string | Array<string>,
            callback: (err: any) => P
        ): IClient<void>;

        submitForm(selector: string): IClient<void>;
        submitForm<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<void>;
    }

    // Appium
    export interface IClient<T> {
        // backgroundApp
        // closeApp
        // context
        // contexts
        // deviceKeyEvent
        // getAppStrings
        // getCurrentDeviceActivity
        // getNetworkConnection
        // hideDeviceKeyboard
        // installAppOnDevice
        // isAppInstalledOnDevice
        // launchApp
        // lock
        // openNotifications
        // performMultiAction
        // performTouchAction
        // pullFileFromDevice
        // pushFileToDevice
        // removeAppFromDevice
        // resetApp
        // rotate
        // setImmediateValueInApp
        // setNetworkConnection
        // shake
        // toggleAirplaneModeOnDevice
        // toggleDataOnDevice
        // toggleLocationServicesOnDevice
        // toggleWiFiOnDevice
    }

    export interface ICookie {
        name: string;
        value: string;
    }

    // Cookie
    export interface IClient<T> {
        deleteCookie(name?: string): IClient<void>;
        deleteCookie<P>(
            callback: (err: any) => P
        ): IClient<P>;
        deleteCookie<P>(
            name: string,
            callback: (err: any) => P
        ): IClient<P>;

        getCookie(): IClient<ICookie[]>;
        getCookie(name: string): IClient<ICookie>;
        getCookie<P>(
            callback: (err: any, cookies: ICookie[]) => P
        ): IClient<P>;
        getCookie<P>(
            name: string,
            callback: (err: any, cookie: ICookie) => P
        ): IClient<P>;

        setCookie(cookie: ICookie): IClient<void>;
        setCookie<P>(
            cookie: ICookie,
            callback: (err: any) => P
        ): IClient<P>;
    }

    // Mobile
    export interface IClient<T> {
        // flick
        // flickDown
        // flickLeft
        // flickRight
        // flickUp
        // getGeoLocation
        // getOrientation
        // hold
        // release
        // setGeoLocation
        // setOrientation
        // touch
    }

    export interface ICssProperty {
        property: string;
        value: string;
        parsed: IParsedCssProperty;
    }

    export interface IParsedCssProperty {
        type: string;
        string: string;
        quote: string;
        unit: string;
        value: string | number | string[] | number[];
    }

    export interface ISize {
        width: number;
        height: number;
    }

    export interface ILocation {
        x: number;
        y: number;
    }

    // Property
    export interface IClient<T> {
        getAttribute(selector: string, attributeName: string): IClient<string | string[]>;
        getAttribute<P>(
            selector: string,
            attributeName: string,
            callback: (err: any, attribute: string | string[]) => P
        ): IClient<P>;

        getCssProperty(selector: string, cssProperty: string): IClient<ICssProperty | ICssProperty[]>;
        getCssProperty<P>(
            selector: string,
            cssProperty: string,
            callback: (err: any, cssProperty: ICssProperty | ICssProperty[]) => P
        ): IClient<P>;

        getElementSize(selector: string): IClient<ISize | ISize[]>;
        getElementSize(selector: string, dimension: string): IClient<number | number[]>;
        getElementSize<P>(
            selector: string,
            callback: (err: any, size: ISize | ISize[]) => P
        ): IClient<P>;
        getElementSize<P>(
            selector: string,
            dimension: string,
            callback: (err: any, elementSize: number | number[]) => P
        ): IClient<P>;

        getHTML(selector: string, includeSelectorTag?: boolean): IClient<string | string[]>;
        getHTML<P>(
            selector: string,
            callback: (err: any, html: string | string[]) => P
        ): IClient<P>;
        getHTML<P>(
            selector: string,
            includeSelectorTag: boolean,
            callback: (err: any, html: string | string[]) => P
        ): IClient<P>;

        getLocation(selector: string): IClient<ISize>;
        getLocation(selector: string, axis: string): IClient<number>;
        getLocation<P>(
            selector: string,
            callback: (err: any, size: ISize) => P
        ): IClient<P>;
        getLocation<P>(
            selector: string,
            axis: string,
            callback: (err: any, location: number) => P
        ): IClient<P>;

        getLocationInView(selector: string): IClient<ISize | ISize[]>;
        getLocationInView(selector: string, axis: string): IClient<number | number[]>;
        getLocationInView<P>(
            selector: string,
            callback: (err: any, size: ISize | ISize[]) => P
        ): IClient<P>;
        getLocationInView<P>(
            selector: string,
            axis: string,
            callback: (err: any, location: number | number[]) => P
        ): IClient<P>;

        getSource(): IClient<string>;
        getSource<P>(callback: (err: any, source: string) => P): IClient<P>;

        getTagName(selector: string): IClient<string | string[]>;
        getTagName<P>(
            selector: string,
            callback: (err: any, tagName: string | string[]) => P
        ): IClient<P>;

        getText(selector: string): IClient<string | string[]>;
        getText<P>(
            selector: string,
            callback: (err: any, text: string | string[]) => P
        ): IClient<P>;

        getTitle(): IClient<string>;
        getTitle<P>(callback: (err: any, title: string) => P): IClient<P>;

        getValue(selector: string): IClient<string | string[]>;
        getValue<P>(
            selector: string,
            callback: (err: any, value: string | string[]) => P
        ): IClient<P>;
    }

    export interface ILogEntry {
        timestamp: number;
        level: string;
        message: string;
    }

    export enum ApplicationCacheStatus {
        UNCACHED = 0,
        IDLE = 1,
        CHECKING = 2,
        DOWNLOADING = 3,
        UPDATE_READY = 4,
        OBSOLETE = 5
    }

    export enum Button {
        left = 0,
        middle = 1,
        right = 2
    }

    export interface IStorageItem {
        key: string;
        value: any;
    }

    export interface ILocation {
        latitude: number;
        longitude: number;
        altitude: number;
    }

    export interface ISession {
        id: string;
        capabilities: any;
    }

    export interface IRawResult<T> {
        value: T;
    }

    // Navigation
    export interface IClient<T> {
        back(): IClient<void>;
        back<P>(
            callback: (err: any) => P
        ): IClient<P>;

        forward(): IClient<void>;
        forward<P>(
            callback: (err: any) => P
        ): IClient<P>;

        refresh(): IClient<void>;
        refresh<P>(
            callback: (err: any) => P
        ): IClient<P>;

        url(): IClient<IRawResult<string>>;
        url(url: string): IClient<void>;
        url<P>(
            callback: (err: any, result: IRawResult<string>) => P
        ): IClient<P>;
        url<P>(
            url: string,
            callback: (err: any) => P
        ): IClient<P>;
    }

    // Advanced input
    export interface IClient<T> {
        // you probably want to use the click and drag and drop commands instead
        buttonDown(button: string | Button): IClient<void>;
        buttonDown<P>(
            button: string | Button,
            callback: (err: any) => P
        ): IClient<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonPress(button: string | Button): IClient<void>;
        buttonPress<P>(
            button: string | Button,
            callback: (err: any) => P
        ): IClient<P>;

        // you probably want to use the click and drag and drop commands instead
        buttonUp(button: string | Button): IClient<void>;
        buttonUp<P>(
            button: string | Button,
            callback: (err: any) => P
        ): IClient<P>;

        // you probably want to use the click and drag and drop commands instead
        doDoubleClick(): IClient<void>;
        doDoubleClick<P>(
            callback: (err: any) => P
        ): IClient<P>;

        // you probably want to use addValue and setValue instead
        keys(value: string | string[]): IClient<void>;
        keys<P>(
            value: string | string[],
            callback: (err: any) => P
        ): IClient<P>;

        // you probably want to use the moveToObject command instead
        moveTo(selector: string, xoffset?: number, yoffset?: number): IClient<void>;
        moveTo<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;
        moveTo<P>(
            selector: string,
            xoffset: number,
            callback: (err: any) => P
        ): IClient<P>;
        moveTo<P>(
            selector: string,
            xoffset: number,
            yoffset: number,
            callback: (err: any) => P
        ): IClient<P>;

        // touchClick
        // touchDoubleClick
        // touchDown
        // touchFlick
        // touchLongClick
        // touchMove
        // touchScroll
        // touchUp
    }

    // Useful Protocol
    export interface IClient<T> {
        alertAccept(): IClient<void>;
        alertAccept<P>(
            callback: (err: any) => P
        ): IClient<P>;

        alertDismiss(): IClient<void>;
        alertDismiss<P>(
            callback: (err: any) => P
        ): IClient<P>;

        alertText(text?: string): IClient<string>;
        alertText<P>(
            callback: (err: any, text: string) => P
        ): IClient<P>;
        alertText<P>(
            text: string,
            callback: (err: any, text: string) => P
        ): IClient<P>;

        frame(id: any): IClient<void>;
        frame<P>(
            id: any,
            callback: (err: any) => P
        ): IClient<P>;

        frameParent(): IClient<void>;
        frameParent<P>(
            callback: (err: any) => P
        ): IClient<P>;

        init(capabilities?: IDesiredCapabilities): IClient<void>;
        init<P>(
            callback: (err: any) => P
        ): IClient<P>;
        init<P>(
            capabilities: IDesiredCapabilities,
            callback: (err: any) => P
        ): IClient<P>;

        log(type: string): IClient<IRawResult<ILogEntry[]>>;
        log<P>(
            type: string,
            callback: (err: any, result: IRawResult<ILogEntry[]>) => P
        ): IClient<P>;

        logTypes(): IClient<IRawResult<string[]>>;
        logTypes<P>(
            callback: (err: any, result: IRawResult<string[]>) => P
        ): IClient<P>;

        session(action?: string, sessionId?: string): IClient<IRawResult<any>>;
        session<P>(
            callback: (err: any, result: IRawResult<any>) => P
        ): IClient<P>;
        session<P>(
            action: string,
            callback: (err: any, result: IRawResult<any>) => P
        ): IClient<P>;
        session<P>(
            action: string,
            sessionId: string,
            callback: (err: any, result: IRawResult<any>) => P
        ): IClient<P>;

        sessions(): IClient<IRawResult<ISession[]>>;
        sessions<P>(
            callback: (err: any, sessions: IRawResult<ISession[]>) => P
        ): IClient<P>;

        // timeouts
        // timeoutsAsyncScript
        // timeoutsImplicitWait

        // window
        // windowHandle
        // windowHandleMaximize
        // windowHandlePosition
        // windowHandleSize
        // windowHandles
    }

    // Element
    export interface IClient<T> {
        element(selector: string): IClient<IRawResult<any>>;
        element<P>(
            selector: string,
            callback: (err: any, result: IRawResult<any>) => P
        ): IClient<P>;

        // elementActive(): IClient<IRawResult<any>>;
        // elementActive<P>(
        //     callback: (err: any, element: any) => P
        // ): IClient<P>;
        //
        // elementIdAttribute(id: string, attributeName: string): IClient<IRawResult<string>>;
        // elementIdAttribute<P>(
        //     id: string,
        //     attributeName: string,
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;

        // elementIdClear
        // elementIdClick
        // elementIdCssProperty
        // elementIdDisplayed
        // elementIdElement
        // elementIdElements
        // elementIdEnabled
        // elementIdLocation
        // elementIdLocationInView
        // elementIdName
        // elementIdSelected
        // elementIdSize
        // elementIdText
        // elementIdValue

        elements(selector: string): IClient<IRawResult<any[]>>;
        elements<P>(
            selector: string,
            callback: (err: any, result: IRawResult<any[]>) => P
        ): IClient<P>;
    }

    // Unuseful Protocol
    export interface IClient<T> {
        // applicationCacheStatus(): IClient<IRawResult<ApplicationCacheStatus>>;
        // applicationCacheStatus<P>(
        //     callback: (err: any, result: IRawResult<ApplicationCacheStatus>) => P
        // ): IClient<P>;

        // use getCookie, setCookie, or deleteCookie instead
        // cookie(): IClient<ICookie[]>;
        // cookie(method: string, cookie: string): IClient<ICookie>;
        // cookie(method: string, cookie: ICookie): IClient<void>;
        // cookie<P>(
        //     callback: (err: any, cookies: ICookie[]) => P
        // ): IClient<P>;
        // cookie<P>(
        //     method: string,
        //     cookie: string,
        //     callback: (err: any, cookie: ICookie) => P
        // ): IClient<P>;
        // cookie<P>(
        //     method: string,
        //     cookie: ICookie,
        //     callback: (err: any) => P
        // ): IClient<P>;

        // use selectorExecute instead
        // execute(script: string | Function, ...args: any[]): IClient<IRawResult<any>>;

        // use selectorExecuteAsync instead
        // executeAsync(script: string | Function, ...args: any[]): IClient<IRawResult<any>>;

        // use uploadFile instead
        // file(base64data: string): IClient<void>;
        // file<P>(
        //     base64data: string,
        //     callback: (err: any) => P
        // ): IClient<P>;

        // imeActivate(engine: string): IClient<void>;
        // imeActivate<P>(
        //     engine: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        //
        // imeActivated(): IClient<boolean>;
        // imeActivated<P>(
        //     callback: (err: any, imeActivated: boolean) => P
        // ): IClient<P>;
        //
        // imeActiveEngine(): IClient<string>;
        // imeActiveEngine<P>(
        //     callback: (err: any, imeActiveEngine: string) => P
        // ): IClient<P>;
        //
        // imeAvailableEngines(): IClient<string[]>;
        // imeAvailableEngines<P>(
        //     callback: (err: any, imeAvailableEngines: string[]) => P
        // ): IClient<P>;
        //
        // imeDeactivated(): IClient<void>;
        // imeDeactivated<P>(
        //     callback: (err: any) => P
        // ): IClient<P>;

        // // GET all
        // localStorage(): IClient<IRawResult<string[]>>;
        // // DELETE all
        // localStorage(method: string): IClient<void>;
        // localStorage(method: "DELETE", key: string): IClient<void>;
        // localStorage(method: string, key: string): IClient<void>;
        // localStorage(method: "GET", key: string): IClient<IRawResult<string>>;
        // localStorage(method: string, key: string): IClient<IRawResult<string>>;
        // // POST
        // localStorage(method: string, entry: IStorageItem): IClient<void>;
        // // GET all
        // localStorage<P>(
        //     callback: (err: any, result: IRawResult<string[]>) => P
        // ): IClient<P>;
        // // DELETE all
        // localStorage<P>(
        //     method: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // localStorage<P>(
        //     method: "DELETE",
        //     key: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // localStorage<P>(
        //     method: string,
        //     key: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // localStorage<P>(
        //     method: "GET",
        //     key: string,
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;
        // localStorage<P>(
        //     method: string,
        //     key: string,
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;
        // // POST
        // localStorage<P>(
        //     method: string,
        //     entry: IStorageItem,
        //     callback: (err: any) => P
        // ): IClient<P>;
        //
        // localStorageSize(): IClient<IRawResult<number>>;
        // localStorageSize<P>(
        //     callback: (err: any, result: IRawResult<number>) => P
        // ): IClient<P>;

        // use getGeoLocation and setGeoLocation instead
        // location(): IClient<IRawResult<ILocation>>;
        // location(location: ILocation): IClient<void>;
        // location<P>(
        //     callback: (err: any, result: IRawResult<ILocation>) => P
        // ): IClient<P>;
        // location<P>(
        //     location: ILocation,
        //     callback: (err: any) => P
        // ): IClient<P>;

        // use getOrientation and setOrientation instead
        // orientation(): IClient<IRawResult<string>>;
        // orientation(orientation: string): IClient<void>;
        // orientation<P>(
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;
        // orientation<P>(
        //     orientation: string,
        //     callback: (err: any) => P
        // ): IClient<P>;

        // use saveScreenshot instead
        // screenshot(): IClient<IRawResult<string>>;
        // screenshot<P>(
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;

        //
        // // GET all
        // sessionStorage(): IClient<IRawResult<string[]>>;
        // // DELETE all
        // sessionStorage(method: string): IClient<void>;
        // sessionStorage(method: "DELETE", key: string): IClient<void>;
        // sessionStorage(method: string, key: string): IClient<void>;
        // sessionStorage(method: "GET", key: string): IClient<IRawResult<string>>;
        // sessionStorage(method: string, key: string): IClient<IRawResult<string>>;
        // // POST
        // sessionStorage(method: string, entry: IStorageItem): IClient<void>;
        // // GET all
        // sessionStorage<P>(
        //     callback: (err: any, result: IRawResult<string[]>) => P
        // ): IClient<P>;
        // // DELETE all
        // sessionStorage<P>(
        //     method: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // sessionStorage<P>(
        //     method: "DELETE",
        //     key: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // sessionStorage<P>(
        //     method: string,
        //     key: string,
        //     callback: (err: any) => P
        // ): IClient<P>;
        // sessionStorage<P>(
        //     method: "GET",
        //     key: string,
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;
        // sessionStorage<P>(
        //     method: string,
        //     key: string,
        //     callback: (err: any, result: IRawResult<string>) => P
        // ): IClient<P>;
        // // POST
        // sessionStorage<P>(
        //     method: string,
        //     entry: IStorageItem,
        //     callback: (err: any) => P
        // ): IClient<P>;
        //
        // sessionStorageSize(): IClient<number>;
        // sessionStorageSize<P>(
        //     callback: (err: any, size: number) => P
        // ): IClient<P>;
        //

        // source
        // status

        // use submitForm instead
        // submit(id: string): IClient<void>;
        // submit<P>(
        //     id: string,
        //     callback: (err: any) => P
        // ): IClient<P>;

        // title
    }

    // State
    export interface IClient<T> {
        isEnabled(selector: string): IClient<boolean>;
        isEnabled<P>(
            selector: string,
            callback: (err: any, isEnabled: boolean) => P
        ): IClient<P>;

        isExisting(selector: string): IClient<boolean>;
        isExisting<P>(
            selector: string,
            callback: (err: any, isExisting: boolean) => P
        ): IClient<P>;

        isSelected(selector: string): IClient<boolean>;
        isSelected<P>(
            selector: string,
            callback: (err: any, isSelected: boolean) => P
        ): IClient<P>;

        isVisible(selector: string): IClient<boolean>;
        isVisible<P>(
            selector: string,
            callback: (err: any, isVisible: boolean) => P
        ): IClient<P>;

        isVisibleWithinViewport(selector: string): IClient<boolean>;
        isVisibleWithinViewport<P>(
            selector: string,
            callback: (err: any, isVisible: boolean) => P
        ): IClient<P>;
    }

    export interface ICommandHistoryEntry {
        command: string;
        args: any[];
    }

    // Utility
    export interface IClient<T> {
        addCommand(commandName: string, customMethod: Function, overwrite?: boolean): IClient<void>;
        addCommand<P>(
            commandName: string,
            customMethod: Function,
            callback: (err: any) => P
        ): IClient<P>;
        addCommand<P>(
            commandName: string,
            customMethod: Function,
            overwrite: boolean,
            callback: (err: any) => P
        ): IClient<P>;

        chooseFile(selector: string, localPath: string): IClient<void>;
        chooseFile<P>(
            selector: string,
            localPath: string,
            callback: (err: any) => P
        ): IClient<P>;

        debug(): IClient<void>;
        debug<P>(
            callback: (err: any) => P
        ): IClient<P>;

        end(): IClient<void>;
        end<P>(
            callback: (err: any) => P
        ): IClient<P>;

        endAll(): IClient<void>;
        endAll<P>(
            callback: (err: any) => P
        ): IClient<P>;

        getCommandHistory(): IClient<ICommandHistoryEntry[]>;
        getCommandHistory<P>(
            callback: (err: any, history: ICommandHistoryEntry[]) => P
        ): IClient<P>;

        pause(milliseconds: number): IClient<void>;
        pause<P>(milliseconds: number, callback: (err: any) => P): IClient<P>;

        saveScreenshot(filename?: string): IClient<Buffer>;
        saveScreenshot<P>(
            callback: (err: any, screenshot: Buffer) => P
        ): IClient<P>;
        saveScreenshot<P>(
            filename: string,
            callback: (err: any, screenshot: Buffer) => P
        ): IClient<P>;

        scroll(selector: string): IClient<void>;
        scroll(selector: string, xoffset: number, yoffset: number): IClient<void>;
        scroll(xoffset: number, yoffset: number): IClient<void>;
        scroll<P>(
            selector: string,
            callback: (err: any) => P
        ): IClient<P>;
        scroll<P>(
            selector: string,
            xoffset: number,
            yoffset: number,
            callback: (err: any) => P
        ): IClient<P>;
        scroll<P>(
            xoffset: number,
            yoffset: number,
            callback: (err: any) => P
        ): IClient<P>;

        uploadFile(localPath: string): IClient<void>;
        uploadFile<P>(
            localPath: string,
            callback: (err: any) => P
        ): IClient<P>;

        waitForEnabled(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForEnabled<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForEnabled<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitForExist(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForExist<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForExist<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitForSelected(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForSelected<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForSelected<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitForText(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForText<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForText<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitForValue(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForValue<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForValue<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitForVisible(selector: string, milliseconds?: number, reverse?: boolean): IClient<boolean>;
        waitForVisible<P>(
            selector: string,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitForVisible<P>(
            selector: string,
            milliseconds: number,
            reverse: boolean,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;

        waitUntil(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout?: number,
            interval?: number
        ): IClient<boolean>;
        waitUntil<P>(
            condition: () => boolean | Q.IPromise<boolean>,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitUntil<P>(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
        waitUntil<P>(
            condition: () => boolean | Q.IPromise<boolean>,
            timeout: number,
            interval: number,
            callback: (err: any, enabled: boolean) => P
        ): IClient<P>;
    }

    // Window
    export interface IClient<T> {
        close(windowHandle?: string): IClient<void>;
        close<P>(
            callback: (err: any) => P
        ): IClient<P>;
        close<P>(
            windowHandle: string,
            callback: (err: any) => P
        ): IClient<P>;

        getCurrentTabId(): IClient<string>;
        getCurrentTabId<P>(
            callback: (err: any, tabId: string) => P
        ): IClient<P>;

        getTabIds(): IClient<string[]>;
        getTabIds<P>(
            callback: (err: any, tabIds: string[]) => P
        ): IClient<P>;

        getViewportSize(): IClient<ISize>;
        getViewportSize(dimension: string): IClient<number>;
        getViewportSize<P>(
            callback: (err: any, size: ISize) => P
        ): IClient<P>;
        getViewportSize<P>(
            dimension: string,
            callback: (err: any, viewportSize: number) => P
        ): IClient<P>;

        newWindow(url: string, windowName: string, windowFeatures: string): IClient<string>;
        newWindow<P>(
            url: string,
            windowName: string,
            windowFeatures: string,
            callback: (err: any, windowId: string) => P
        ): IClient<P>;

        setViewportSize(size: ISize, type: boolean): IClient<void>;
        setViewportSize<P>(
            size: ISize,
            type: boolean,
            callback: (err: any) => P
        ): IClient<P>;

        switchTab(windowHandle?: string): IClient<void>;
        switchTab<P>(
            callback: (err: any) => P
        ): IClient<P>;
        switchTab<P>(
            windowHandle: string,
            callback: (err: any) => P
        ): IClient<P>;
    }

    export interface IOptions {
        protocol: string;
        waitforTimeout: number;
        coloredLogs: boolean;
        logLevel: string;
        baseUrl: string;
        desiredCapabilities: IDesiredCapabilities;
        screenshotPath: string;
    }

    // Options
    export interface IClient<T> {
        options: IOptions;
    }

    export interface IDesiredCapabilities {
        browserName?: string;
        version?: string;
        javascriptEnabled?: boolean;
        databaseEnabled?: boolean;
        applicationCacheEnabled?: boolean;
        browserConnectionEnabled?: boolean;
        webStorageEnabled?: boolean;
        acceptSslCerts?: boolean;
        rotatable?: boolean;
        nativeEvents?: boolean;
        unexpectedAlertBehaviour?: string;
        elementScrollBehavior?: number;
        proxy?: any;
        locationContextEnabled?: boolean;
        handlesAlerts?: boolean;
        platform?: string;
        loggingPrefs?: {
            browser: string;
            driver: string;
        };
    }

    export interface IRemoteOptions {
        protocol?: string;
        waitforTimeout?: number;
        waitforInterval?: number;
        coloredLogs?: boolean;
        logLevel?: string;
        baseUrl?: string;
        desiredCapabilities?: IDesiredCapabilities;
    }

    export interface IMultiremoteOptions {
        [key: string]: IRemoteOptions;
    }

    export function remote(options?: IRemoteOptions | string): IClient<void>;

    export function multiremote(options?: IMultiremoteOptions): IClient<void>;
}

declare var browser: WebdriverIO.IClient<void>;

declare module "webdriverio" {
    export = WebdriverIO;
}
