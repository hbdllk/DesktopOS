import * as dock from "./scripts/dock.js";
import * as icons from "./scripts/icons.js";
import * as windows from "./scripts/windows.js";
import * as $ from "./scripts/utils.js";

window.addEventListener('DOMContentLoaded', ()=>{
    dock.create();
    dock.center();
});

window.addEventListener('resize', ()=>{
    dock.seek();
});
