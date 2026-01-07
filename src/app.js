import page from "page";
import { showHome } from "./views/home.js";
import { showAbout } from "./views/about.js";
import { showContact } from './views/contact';

page("/", showHome);
page("/about", showAbout);
page("/contact", showContact);

page.start();