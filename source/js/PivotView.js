/**
 * @param {LightPivotTable} controller
 * @param container
 * @constructor
 */
var PivotView = function (controller, container) {

    /*! INCLUDES numeral.js LIBRARY FOR NUMBER FORMATTING
     * numeral.js
     * version : 1.5.3
     * author : Adam Draper
     * license : MIT
     * http://adamwdraper.github.com/Numeral-js/
     */
    (function(){function a(a){this._value=a}function b(a,b,c,d){var e,f,g=Math.pow(10,b);return f=(c(a*g)/g).toFixed(b),d&&(e=new RegExp("0{1,"+d+"}$"),f=f.replace(e,"")),f}function c(a,b,c){var d;return d=b.indexOf("$")>-1?e(a,b,c):b.indexOf("%")>-1?f(a,b,c):b.indexOf(":")>-1?g(a,b):i(a._value,b,c)}function d(a,b){var c,d,e,f,g,i=b,j=["KB","MB","GB","TB","PB","EB","ZB","YB"],k=!1;if(b.indexOf(":")>-1)a._value=h(b);else if(b===q)a._value=0;else{for("."!==o[p].delimiters.decimal&&(b=b.replace(/\./g,"").replace(o[p].delimiters.decimal,".")),c=new RegExp("[^a-zA-Z]"+o[p].abbreviations.thousand+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),d=new RegExp("[^a-zA-Z]"+o[p].abbreviations.million+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),e=new RegExp("[^a-zA-Z]"+o[p].abbreviations.billion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),f=new RegExp("[^a-zA-Z]"+o[p].abbreviations.trillion+"(?:\\)|(\\"+o[p].currency.symbol+")?(?:\\))?)?$"),g=0;g<=j.length&&!(k=b.indexOf(j[g])>-1?Math.pow(1024,g+1):!1);g++);a._value=(k?k:1)*(i.match(c)?Math.pow(10,3):1)*(i.match(d)?Math.pow(10,6):1)*(i.match(e)?Math.pow(10,9):1)*(i.match(f)?Math.pow(10,12):1)*(b.indexOf("%")>-1?.01:1)*((b.split("-").length+Math.min(b.split("(").length-1,b.split(")").length-1))%2?1:-1)*Number(b.replace(/[^0-9\.]+/g,"")),a._value=k?Math.ceil(a._value):a._value}return a._value}function e(a,b,c){var d,e,f=b.indexOf("$"),g=b.indexOf("("),h=b.indexOf("-"),j="";return b.indexOf(" $")>-1?(j=" ",b=b.replace(" $","")):b.indexOf("$ ")>-1?(j=" ",b=b.replace("$ ","")):b=b.replace("$",""),e=i(a._value,b,c),1>=f?e.indexOf("(")>-1||e.indexOf("-")>-1?(e=e.split(""),d=1,(g>f||h>f)&&(d=0),e.splice(d,0,o[p].currency.symbol+j),e=e.join("")):e=o[p].currency.symbol+j+e:e.indexOf(")")>-1?(e=e.split(""),e.splice(-1,0,j+o[p].currency.symbol),e=e.join("")):e=e+j+o[p].currency.symbol,e}function f(a,b,c){var d,e="",f=100*a._value;return b.indexOf(" %")>-1?(e=" ",b=b.replace(" %","")):b=b.replace("%",""),d=i(f,b,c),d.indexOf(")")>-1?(d=d.split(""),d.splice(-1,0,e+"%"),d=d.join("")):d=d+e+"%",d}function g(a){var b=Math.floor(a._value/60/60),c=Math.floor((a._value-60*b*60)/60),d=Math.round(a._value-60*b*60-60*c);return b+":"+(10>c?"0"+c:c)+":"+(10>d?"0"+d:d)}function h(a){var b=a.split(":"),c=0;return 3===b.length?(c+=60*Number(b[0])*60,c+=60*Number(b[1]),c+=Number(b[2])):2===b.length&&(c+=60*Number(b[0]),c+=Number(b[1])),Number(c)}function i(a,c,d){var e,f,g,h,i,j,k=!1,l=!1,m=!1,n="",r=!1,s=!1,t=!1,u=!1,v=!1,w="",x="",y=Math.abs(a),z=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],A="",B=!1;if(0===a&&null!==q)return q;if(c.indexOf("(")>-1?(k=!0,c=c.slice(1,-1)):c.indexOf("+")>-1&&(l=!0,c=c.replace(/\+/g,"")),c.indexOf("a")>-1&&(r=c.indexOf("aK")>=0,s=c.indexOf("aM")>=0,t=c.indexOf("aB")>=0,u=c.indexOf("aT")>=0,v=r||s||t||u,c.indexOf(" a")>-1?(n=" ",c=c.replace(" a","")):c=c.replace("a",""),y>=Math.pow(10,12)&&!v||u?(n+=o[p].abbreviations.trillion,a/=Math.pow(10,12)):y<Math.pow(10,12)&&y>=Math.pow(10,9)&&!v||t?(n+=o[p].abbreviations.billion,a/=Math.pow(10,9)):y<Math.pow(10,9)&&y>=Math.pow(10,6)&&!v||s?(n+=o[p].abbreviations.million,a/=Math.pow(10,6)):(y<Math.pow(10,6)&&y>=Math.pow(10,3)&&!v||r)&&(n+=o[p].abbreviations.thousand,a/=Math.pow(10,3))),c.indexOf("b")>-1)for(c.indexOf(" b")>-1?(w=" ",c=c.replace(" b","")):c=c.replace("b",""),g=0;g<=z.length;g++)if(e=Math.pow(1024,g),f=Math.pow(1024,g+1),a>=e&&f>a){w+=z[g],e>0&&(a/=e);break}return c.indexOf("o")>-1&&(c.indexOf(" o")>-1?(x=" ",c=c.replace(" o","")):c=c.replace("o",""),x+=o[p].ordinal(a)),c.indexOf("[.]")>-1&&(m=!0,c=c.replace("[.]",".")),h=a.toString().split(".")[0],i=c.split(".")[1],j=c.indexOf(","),i?(i.indexOf("[")>-1?(i=i.replace("]",""),i=i.split("["),A=b(a,i[0].length+i[1].length,d,i[1].length)):A=b(a,i.length,d),h=A.split(".")[0],A=A.split(".")[1].length?o[p].delimiters.decimal+A.split(".")[1]:"",m&&0===Number(A.slice(1))&&(A="")):h=b(a,null,d),h.indexOf("-")>-1&&(h=h.slice(1),B=!0),j>-1&&(h=h.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+o[p].delimiters.thousands)),0===c.indexOf(".")&&(h=""),(k&&B?"(":"")+(!k&&B?"-":"")+(!B&&l?"+":"")+h+A+(x?x:"")+(n?n:"")+(w?w:"")+(k&&B?")":"")}function j(a,b){o[a]=b}function k(a){var b=a.toString().split(".");return b.length<2?1:Math.pow(10,b[1].length)}function l(){var a=Array.prototype.slice.call(arguments);return a.reduce(function(a,b){var c=k(a),d=k(b);return c>d?c:d},-1/0)}var m,n="1.5.3",o={},p="en",q=null,r="0,0",s="undefined"!=typeof module&&module.exports;m=function(b){return m.isNumeral(b)?b=b.value():0===b||"undefined"==typeof b?b=0:Number(b)||(b=m.fn.unformat(b)),new a(Number(b))},m.version=n,m.isNumeral=function(b){return b instanceof a},m.language=function(a,b){if(!a)return p;if(a&&!b){if(!o[a])throw new Error("Unknown language : "+a);p=a}return(b||!o[a])&&j(a,b),m},m.languageData=function(a){if(!a)return o[p];if(!o[a])throw new Error("Unknown language : "+a);return o[a]},m.language("en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"},currency:{symbol:"$"}}),m.zeroFormat=function(a){q="string"==typeof a?a:null},m.defaultFormat=function(a){r="string"==typeof a?a:"0.0"},"function"!=typeof Array.prototype.reduce&&(Array.prototype.reduce=function(a,b){"use strict";if(null===this||"undefined"==typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof a)throw new TypeError(a+" is not a function");var c,d,e=this.length>>>0,f=!1;for(1<arguments.length&&(d=b,f=!0),c=0;e>c;++c)this.hasOwnProperty(c)&&(f?d=a(d,this[c],c,this):(d=this[c],f=!0));if(!f)throw new TypeError("Reduce of empty array with no initial value");return d}),m.fn=a.prototype={clone:function(){return m(this)},format:function(a,b){return c(this,a?a:r,void 0!==b?b:Math.round)},unformat:function(a){return"[object Number]"===Object.prototype.toString.call(a)?a:d(this,a?a:r)},value:function(){return this._value},valueOf:function(){return this._value},set:function(a){return this._value=Number(a),this},add:function(a){function b(a,b){return a+c*b}var c=l.call(null,this._value,a);return this._value=[this._value,a].reduce(b,0)/c,this},subtract:function(a){function b(a,b){return a-c*b}var c=l.call(null,this._value,a);return this._value=[a].reduce(b,this._value*c)/c,this},multiply:function(a){function b(a,b){var c=l(a,b);return a*c*b*c/(c*c)}return this._value=[this._value,a].reduce(b,1),this},divide:function(a){function b(a,b){var c=l(a,b);return a*c/(b*c)}return this._value=[this._value,a].reduce(b),this},difference:function(a){return Math.abs(m(this._value).subtract(a).value())}},s&&(module.exports=m),"undefined"==typeof ender&&(this.numeral=m),"function"==typeof define&&define.amd&&define([],function(){return m})}).call(this);

    if (!(container instanceof HTMLElement)) throw new Error("Please, provide HTMLElement " +
        "instance \"container\" into pivot table configuration.");

    this.tablesStack = [];

    this.elements = {
        container: container,
        base: document.createElement("div"),
        tableContainer: undefined,
        controlsContainer: document.createElement("div"),
        messageElement: undefined
    };

    this.controller = controller;

    /**
     * Fixed headers links.
     *
     * @private
     */
    this._headers = {
        "h": { base: undefined, clone: undefined },
        "v": { base: undefined, clone: undefined },
        "c": { base: undefined, clone: undefined }
    };

    this.SCROLLBAR_WIDTH = (function () {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar";

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        outer.style.overflow = "scroll";

        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    })();

    this.init();

};

PivotView.prototype.init = function () {

    var _ = this,
        els = this.elements;

    els.base.className = "lpt";
    els.container.appendChild(els.base);

    this.pushTable();

    this.displayMessage(navigator.language === "ru" ? "Загрузка..." : "Loading...");

    window.addEventListener("resize", function () {
        _.updateSizes.call(_);
    });

};

PivotView.prototype.updateSizes = function () {

    for (var i in this.tablesStack) {
        this.recalculateSizes(this.tablesStack[i].element);
    }

};

PivotView.prototype._updateTablesPosition = function (seek) {

    for (var i = 0; i < this.tablesStack.length; i++) {
        this.tablesStack[i].element.style.left =
            (1 + (seek || 0) + i - this.tablesStack.length)*100 + "%";
    }

};

PivotView.prototype.pushTable = function () {

    var _ = this,
        tableElement = document.createElement("div");

    tableElement.className = "tableContainer";
    if (this.tablesStack.length) tableElement.style.left = "100%";

    this.tablesStack.push({
        element: tableElement,
        _headers: {
            "h": { base: undefined, clone: undefined },
            "v": { base: undefined, clone: undefined },
            "c": { base: undefined, clone: undefined }
        }
    });

    this.elements.base.appendChild(tableElement);
    this.elements.tableContainer = tableElement;

    setTimeout(function () {
        _._updateTablesPosition();
    }, 1);

};

PivotView.prototype.popTable = function () {

    if (this.tablesStack.length < 2) return;

    this._updateTablesPosition(1);
    var garbage = this.tablesStack.pop();

    setTimeout(function () {
        garbage.element.parentNode.removeChild(garbage.element);
    }, 500);
    this.elements.tableContainer = this.tablesStack[this.tablesStack.length - 1].element;

};

PivotView.prototype._columnClickHandler = function (columnIndex) {

    this.controller.dataController.sortByColumn(columnIndex);

};

PivotView.prototype._rowClickHandler = function (rowIndex, cellData) {

    this.controller.tryDrillDown(cellData.source.path);

};

PivotView.prototype._backClickHandler = function (event) {

    if (event) {
        event.cancelBubble = true;
        event.stopPropagation();
    }

    this.popTable();
    this.controller.popDataSource();

    if (typeof this.controller.CONFIG.triggers["back"] === "function") {
        this.controller.CONFIG.triggers["back"].call(this.controller, {
            level: this.controller.DRILL_LEVEL
        });
    }

};

PivotView.prototype._drillThroughClickHandler = function (event) {

    this.controller.tryDrillThrough();

    if (event) {
        event.cancelBubble = true;
        event.stopPropagation();
    }

};

/**
 * @param {number} x
 * @param {number} y
 * @param {event} event
 */
PivotView.prototype._cellClickHandler = function (x, y, event) {

    var data = this.controller.dataController.getData(),
        f = [], f1, f2, callbackRes;

    try {
        f1 = data.rawData[y][data.info.leftHeaderColumnsNumber - 1].source.path;
        f2 = data.rawData[data.info.topHeaderRowsNumber - 1][x].source.path;
    } catch (e) {
        console.warn("Unable to get filters for cell (%d, %d)", x, y);
    }

    if (f1) f.push(f1);
    if (f2) f.push(f2);

    if (this.controller.CONFIG["drillDownTarget"]) {
        window.location = location.origin + location.pathname + "?DASHBOARD="
        + encodeURIComponent(this.controller.CONFIG["drillDownTarget"]) + "&SETTINGS=FILTER:"
        + encodeURIComponent(f.join("~")) + ";";
    } else {
        if (typeof this.controller.CONFIG.triggers["cellDrillThrough"] === "function") {
            callbackRes = this.controller.CONFIG.triggers["cellDrillThrough"]({
                event: event,
                filters: f
            });
            if (callbackRes !== false) this.controller.tryDrillThrough(f);
        } else {
            this.controller.tryDrillThrough(f);
        }
    }

};

/**
 * Displays text which hovers table. Pass empty string to hide message.
 *
 * @param {string} html
 */
PivotView.prototype.displayMessage = function (html) {

    if (this.elements.messageElement && this.elements.messageElement.parentNode) {
        this.elements.messageElement.parentNode.removeChild(this.elements.messageElement);
        this.elements.messageElement = null;
    }

    if (!html) return;

    var d1 = document.createElement("div"),
        d2 = document.createElement("div"),
        d3 = document.createElement("div");

    d1.className = "central";
    d3.innerHTML = html;
    d2.appendChild(d3);
    d1.appendChild(d2);
    this.elements.messageElement = d1;
    this.elements.base.appendChild(d1);

};

PivotView.prototype.removeMessage = function () {

    if (this.elements.messageElement && this.elements.messageElement.parentNode) {
        this.elements.messageElement.parentNode.removeChild(this.elements.messageElement);
    }

    this.elements.messageElement = null;

};

PivotView.prototype.displayDataWait = function () {

};

PivotView.prototype.removeDataWait = function () {

};

/**
 * @param container
 */
PivotView.prototype.recalculateSizes = function (container) {

    var containerParent = container.parentNode;

    try {

        var header = container.getElementsByClassName("lpt-headerValue")[0],
            headerContainer = container.getElementsByClassName("lpt-header")[0],
            topHeader = container.getElementsByClassName("lpt-topHeader")[0],
            tTableHead = topHeader.getElementsByTagName("thead")[0],
            leftHeader = container.getElementsByClassName("lpt-leftHeader")[0],
            lTableHead = leftHeader.getElementsByTagName("thead")[0],
            tableBlock = container.getElementsByClassName("lpt-tableBlock")[0],
            pTableHead = tableBlock.getElementsByTagName("tbody")[0],
            tableTr = tableBlock.getElementsByTagName("tr")[0];

        if (tTableHead.childNodes[0] && tTableHead.childNodes[0].lastChild["_extraCell"]) {
            tTableHead.childNodes[0].removeChild(tTableHead.childNodes[0].lastChild);
        }
        if (lTableHead.lastChild && lTableHead.lastChild["_extraTr"]) {
            lTableHead.removeChild(lTableHead.lastChild);
        }

        var headerW = leftHeader.offsetWidth,
            headerH = topHeader.offsetHeight,
            containerHeight = container.offsetHeight,
            mainHeaderWidth = headerContainer.offsetWidth,
            hasVerticalScrollBar = tableBlock.scrollHeight > containerHeight - headerH,
            addExtraTopHeaderCell = tTableHead.offsetWidth > topHeader.offsetWidth,
            addExtraLeftHeaderCell = lTableHead.offsetHeight > containerHeight - headerH,
            cell, tr, cellWidths = [], columnHeights = [], i;

        headerContainer.style.width = headerW + "px";
        if (container["_primaryColumns"]) {
            for (i in container["_primaryColumns"]) {
                cellWidths.push(container["_primaryColumns"][i].offsetWidth);
            }
        } else {
            console.warn("No _primaryColumns property in container, cell sizes won't be fixed.");
        }
        if (container["_primaryRows"]) {
            for (i in container["_primaryRows"]) {
                columnHeights.push(container["_primaryRows"][i].offsetHeight);
            }
        } else {
            console.warn("No _primaryRows property in container, cell sizes won't be fixed.");
        }

        container.parentNode.removeChild(container); // detach

        if (hasVerticalScrollBar && cellWidths[cellWidths.length - 1]) {
            cellWidths[cellWidths.length - 1] -= this.SCROLLBAR_WIDTH;
        }

        topHeader.style.marginLeft = headerW + "px";
        tableBlock.style.marginLeft = headerW + "px";
        leftHeader.style.height = containerHeight - headerH + "px";
        leftHeader.style.width = headerW + "px";
        if (mainHeaderWidth > headerW) leftHeader.style.width = mainHeaderWidth + "px";
        tableBlock.style.height = containerHeight - headerH + "px";
        headerContainer.style.height = headerH + "px";

        if (addExtraTopHeaderCell) {
            tTableHead.childNodes[0].appendChild(cell = document.createElement("th"));
            cell.rowSpan = tTableHead.childNodes.length;
            cell.style.paddingLeft = headerW + "px"; // lucky random
            cell["_extraCell"] = true;
        }

        if (addExtraLeftHeaderCell) {
            tr = document.createElement("tr");
            tr.appendChild(cell = document.createElement("th"));
            lTableHead.appendChild(tr);
            tr["_extraTr"] = true;
            leftHeader.className = "lpt-leftHeader bordered";
            cell.colSpan = lTableHead.childNodes.length;
            cell.textContent = "_"; // cheating
            cell.style.lineHeight = headerH + "px"; // lucky random
        }

        for (i in tableTr.childNodes) {
            if (tableTr.childNodes[i].tagName !== "TD") continue;
            tableTr.childNodes[i].style.width = cellWidths[i] + "px";
        }
        for (i in pTableHead.childNodes) {
            if (pTableHead.childNodes[i].tagName !== "TR") continue;
            if (pTableHead.childNodes[i].firstChild) {
                pTableHead.childNodes[i].firstChild.style.height =
                    (columnHeights[i] || 0) + "px";
            }
        }

        containerParent.appendChild(container); // attach

    } catch (e) {
        console.error("Error when fixing sizes. Please, contact the developer.", "ERROR:", e);
    }

};

/**
 * Raw data - plain 2-dimensional array of data to render.
 *
 * group - makes able to group cells together. Cells with same group number will be gathered.
 * source - data source object with it's properties.
 * value - value of cell (will be stringified).
 *
 * @param {{ group: number, source: Object, value: *, isCaption: boolean }[][]} data
 */
PivotView.prototype.renderRawData = function (data) {

    if (!data["rawData"] || !data["rawData"][0] || !data["rawData"][0][0]) {
        this.displayMessage("<h1>Unable to render data</h1><p>" + JSON.stringify(data) + "</p>");
        return;
    }

    var _ = this,
        CLICK_EVENT = this.controller.CONFIG["triggerEvent"] || "click",
        renderedGroups = {}, // keys of rendered groups; key = group, value = { x, y, element }
        rawData = data["rawData"],
        info = data["info"],
        columnProps = data["columnProps"],
        container = this.elements.tableContainer,
        pivotTopSection = document.createElement("div"),
        pivotBottomSection = document.createElement("div"),
        pivotHeader = document.createElement("div"),
        topHeader = document.createElement("div"),
        header = document.createElement("div"),
        leftHeader = document.createElement("div"),
        tableBlock = document.createElement("div"),
        THTable = document.createElement("table"),
        THTHead = document.createElement("thead"),
        LHTable = document.createElement("table"),
        LHTHead = document.createElement("thead"),
        mainTable = document.createElement("table"),
        mainTBody = document.createElement("tbody"),
        x, y, tr = null, th, td, primaryColumns = [], primaryRows = [];

    // clean previous content
    this.removeMessage();
    while (container.firstChild) { container.removeChild(container.firstChild); }

    var renderHeader = function (xFrom, xTo, yFrom, yTo, targetElement) {

        var vertical = targetElement === LHTHead,
            rendered, separatelyGrouped;

        for (y = yFrom; y < yTo; y++) {
            for (x = xFrom; x < xTo; x++) {

                separatelyGrouped = true;

                // setup th
                if (rendered = renderedGroups.hasOwnProperty(rawData[y][x].group)) {
                    if (x > 0 && rawData[y][x - 1].group === rawData[y][x].group) {
                        separatelyGrouped = false;
                        renderedGroups[rawData[y][x].group].element.colSpan =
                            x - renderedGroups[rawData[y][x].group].x + 1;
                    }
                    if (y > 0 && rawData[y - 1][x].group === rawData[y][x].group) {
                        separatelyGrouped = false;
                        renderedGroups[rawData[y][x].group].element.rowSpan =
                            y - renderedGroups[rawData[y][x].group].y + 1;
                    }
                    th = renderedGroups[rawData[y][x].group].element;
                }

                if (!rendered || separatelyGrouped) { // create element
                    if (!tr) tr = document.createElement("tr");
                    tr.appendChild(th = document.createElement("th"));
                    th.textContent = rawData[y][x].value;
                    if (rawData[y][x].style) th.setAttribute("style", rawData[y][x].style);
                    if (rawData[y][x].group) renderedGroups[rawData[y][x].group] = {
                        x: x,
                        y: y,
                        element: th
                    };
                }

                // add listeners
                if (vertical && x === xTo - 1) {
                    primaryRows.push(th);
                    th.addEventListener(CLICK_EVENT, (function (index, data) {
                        return function () {
                            _._rowClickHandler.call(_, index, data);
                        };
                    })(y, rawData[y][x]));
                }
                if (!vertical && y === yTo - 1 && !th["_hasSortingListener"]) {
                    th["_hasSortingListener"] = false;
                    primaryColumns.push(th);
                    th.addEventListener(CLICK_EVENT, (function (i) {
                        return function () {
                            _._columnClickHandler.call(_, i);
                        };
                    })(x - info.leftHeaderColumnsNumber));
                }

            }
            if (tr) targetElement.appendChild(tr);
            tr = null;
        }
    };

    console.log("Data to render: ", data);

    // fill header
    header.textContent = info.leftHeaderColumnsNumber ? rawData[0][0].value : "";
    if (rawData[0][0].style) header.setAttribute("style", rawData[0][0].style);
    if (this.tablesStack.length > 1 && !this.controller.CONFIG["hideButtons"]) {
        header.className += "back ";
        header.addEventListener(CLICK_EVENT, function (e) {
            _._backClickHandler.call(_, e);
        });
    }

    // render topHeader
    renderHeader(
        info.leftHeaderColumnsNumber,
        rawData[0].length,
        0,
        info.topHeaderRowsNumber,
        THTHead
    );

    // render leftHeader
    renderHeader(
        0,
        info.leftHeaderColumnsNumber,
        info.topHeaderRowsNumber,
        rawData.length,
        LHTHead
    );

    // render table
    for (y = info.topHeaderRowsNumber; y < rawData.length; y++) {
        tr = document.createElement("tr");
        for (x = info.leftHeaderColumnsNumber; x < rawData[0].length; x++) {

            tr.appendChild(td = document.createElement("td"));
            if (!isFinite(rawData[y][x].value)) {
                td.className += " formatLeft";
                td.textContent = rawData[y][x].value || "";
            } else { // number
                td.textContent = rawData[y][x].value ? this.numeral(rawData[y][x].value).format(
                    columnProps[x - info.leftHeaderColumnsNumber].format || ""
                ) : "";
            }
            if (rawData[y][x].style) td.setAttribute("style", rawData[y][x].style);

            // add handlers
            td.addEventListener("click", (function (x, y) {
                return function (event) {
                    _._cellClickHandler.call(_, x, y, event);
                };
            })(x, y));

        }
        mainTBody.appendChild(tr);
    }

    tableBlock.addEventListener("scroll", function () {
        topHeader.scrollLeft = tableBlock.scrollLeft;
        leftHeader.scrollTop = tableBlock.scrollTop;
    });

    tableBlock.className = "lpt-tableBlock";
    leftHeader.className = "lpt-leftHeader";
    topHeader.className = "lpt-topHeader";
    pivotHeader.className = "lpt-header";
    pivotTopSection.className = "lpt-topSection";
    pivotBottomSection.className = "lpt-bottomSection";
    header.className += "lpt-headerValue";
    mainTable.appendChild(mainTBody);
    tableBlock.appendChild(mainTable);
    LHTable.appendChild(LHTHead);
    leftHeader.appendChild(LHTable);
    THTable.appendChild(THTHead);
    topHeader.appendChild(THTable);
    pivotHeader.appendChild(header);
    pivotTopSection.appendChild(pivotHeader);
    pivotTopSection.appendChild(topHeader);
    pivotBottomSection.appendChild(leftHeader);
    pivotBottomSection.appendChild(tableBlock);
    container.appendChild(pivotTopSection);
    container.appendChild(pivotBottomSection);
    container["_primaryColumns"] = primaryColumns;
    container["_primaryRows"] = primaryRows;

    this.recalculateSizes(container);

};
