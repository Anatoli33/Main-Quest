import page from "page";
import { showHome } from "./views/home.js";
import { showAbout } from "./views/about.js";
import { showContact } from "./views/contact.js";
import { startEntryTest } from "./views/entryTest.js";

page("/", showHome);
page("/about", showAbout);
page("/contact", showContact);
page("/test", startEntryTest);

page.start({ click: true });
