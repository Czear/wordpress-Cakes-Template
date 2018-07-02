!function(e){var n={};function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var l in e)t.d(a,l,function(n){return e[n]}.bind(null,l));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s="./script.js")}({"./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */function(module,exports,__webpack_require__){eval("// Webpack imports\n__webpack_require__(/*! ./style.css */ \"./style.css\");\n\n// Define helper handlerers\ncurrentNewsPage = document.getElementById('newsPaginationStartingPage');\ncurrentGaleryPage = document.getElementById('galeryPaginationStartingPage');\n\n// OnLoad actions\nwindow.onload = function() {\n    document.getElementById('newsArticle').innerHTML = newsMessagesArray[0];\n    currentNewsPage.classList += 'active';\n    currentGaleryPage.classList += 'active'\n  };\n\n// Event handlelers\n\n    document.getElementById('newsPagination').addEventListener(\"click\", (event) => {\n        if (event.target.tagName != \"FOOTER\") {\n            setNewsPage(event.target);\n        }\n    });\n\n    document.getElementById('galeryPagination').addEventListener(\"click\", (event) => {\n        if (event.target.tagName != \"FOOTER\") {\n            setGaleryPage(event.target)\n        }\n    });\n\n    document.getElementById('galeryImages').addEventListener(\"click\", (event) => {\n        if (event.target.tagName === \"IMG\") {\n            openModal(event.target);\n        }\n    });\n\n    document.getElementById(\"upperArrow\").addEventListener(\"click\", () => {\n        document.getElementById('LocalizationsList').scrollTop -= 134;\n    });\n\n    document.getElementById('lowerArrow').addEventListener(\"click\", () => {\n        document.getElementById('LocalizationsList').scrollTop += 134;\n    });\n\n    document.getElementById('modalClose').addEventListener(\"click\", () => {\n        closeModal();\n    });\n\n    document.getElementById('offerContent').addEventListener(\"click\", (event) => {\n        if (event.target.tagName === \"IMG\") {\n            document.getElementById('firstChoiceMenu').style.display = 'none';\n            document.getElementById('secondChoiceMenu').style.display = 'block';\n            document.getElementById('offer').style.backgroundImage = 'none';\n        }\n    });\n\n    document.getElementById('secondOfferContentContainer').addEventListener(\"click\", (event) => {\n        if (event.target.tagName === \"IMG\") {\n            console.log(event.target);\n        }\n    });\n// Funtions\n\n    function setNewsPage(eventTarget) {\n        document.getElementById('newsArticle').innerHTML = newsMessagesArray[eventTarget.textContent-1];\n        currentNewsPage.classList = '';\n        currentNewsPage = eventTarget;\n        eventTarget.classList += 'active';\n    }\n\n    function setGaleryPage(eventTarget) {\n        let galeryElement = document.getElementById('galeryImages');\n        let chosenPart = eventTarget.textContent - 1;\n        galeryElement.scrollLeft = chosenPart * galeryElement.scrollWidth/3;\n\n        currentGaleryPage.classList = '';\n        currentGaleryPage = eventTarget;\n        eventTarget.classList += 'active';\n    }\n\n    function openModal(eventTarget, additonalData = false, ) {\n        let modalElement = document.getElementById('modal')\n        let targetedImage = eventTarget.cloneNode(false);\n\n        document.getElementById('modalContent').appendChild(targetedImage);\n\n        if (additonalData) {\n            let modalContentDiv = document.createElement('DIV');\n            let heading = document.createElement('H4');\n            let cakeDescription = document.createElement('ARTICLE');\n        }\n\n        modalElement.style.display = 'block';\n    }\n\n    function closeModal() {\n        var modalContent = document.getElementById(\"modalContent\");\n        while (modalContent.firstChild) {\n            modalContent.removeChild(modalContent.firstChild);\n        }\n        document.getElementById('modal').style.display = 'none';\n    }\n\n// Fake messages from data base\nnewsMessagesArray = [\n    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n    Sed ut placerat mi, laoreet laoreet justo. Morbi sem augue, \n    fermentum at efficitur commodo, sollicitudin ac augue.Lorem ipsum dolor sit amet, \n    consectetur adipiscing elit. Sed ut placerat mi, laoreet laoreet justo`,\n\n    `Pellentesque rhoncus eu orci a pulvinar. Nullam dictum id lectus eu auctor. Maecenas et\n    tincidunt neque. Nullam quis consectetur libero, commodo ultricies sapien. Donec nec leo at \n    eros luctus laoreet eu in lacus. Curabitur sit amet diam dui. Maecenas vel auctor ipsum. `,\n\n    `Duis tellus mi, interdum id imperdiet vel, consequat eget lorem. Donec sit amet nisl fringilla,\n    aliquet ex in, maximus dui. Aliquam vitae neque erat. In mattis diam vel congue volutpat. Integer \n    velit nisl, semper id mollis in, rhoncus sit amet justo. Quisque et augue velit.`\n]\n\n//# sourceURL=webpack:///./script.js?")},"./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./style.css?")}});