// ==UserScript==
// @name         /r/place forsenE
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  The face of Twitch
// @author       /u/irate_kalypso and /u/fuzzball007
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/fuzzball007/r-place-forsen-overlay/raw/main/r-place-forsen-overlay.user.js
// @downloadURL  https://github.com/fuzzball007/r-place-forsen-overlay/raw/main/r-place-forsen-overlay.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://i.nuuls.com/XnOIj.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);
}
