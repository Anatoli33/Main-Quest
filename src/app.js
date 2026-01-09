import page from "page";
import { showHome } from "./views/home.js";
import { showAbout } from "./views/about.js";
import { showContact } from "./views/contact.js";
import { startEntryTest } from "./views/entryTest.js";
import { showMid } from './views/mid.js';
import { startEntryTestMath } from "./views/entryMath.js";

page("/", showHome);
page("/about", showAbout);
page("/contact", showContact);
page("/test", startEntryTest);
page("/testMath", startEntryTestMath);
page("/mid", showMid);

page.start({ click: true });
