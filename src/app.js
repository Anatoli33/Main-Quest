import page from "page";
import { showHome } from "./views/home.js";

page("/", showHome);

page.start();