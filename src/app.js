import page from "page";
import { showHome } from "./views/home.js";
import { showAbout } from "./views/about.js";

page("/", showHome);
page("/about", showAbout);

page.start();