import page from "page";
import { showHome } from "./views/home.js";
import { showAbout } from "./views/about.js";
import { showContact } from "./views/contact.js";
import { startEntryTest } from "./views/entryTest.js";
import { showMid } from './views/mid.js';
import { startEntryTestMath } from "./views/entryMath.js";
import { startEntryTestEN } from './views/entryTestEN.js';

page("/", showHome);
page("/about", showAbout);
page("/contact", showContact);
page("/test", startEntryTest);
page("/testMath", startEntryTestMath);
page("/testEN", startEntryTestEN);
page("/mid", showMid);

page.start({ click: true });
