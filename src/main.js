import { ViteSSG } from "vite-ssg/single-page"
import App from "./App.vue"
import "./assets/style.css"

export const createApp = ViteSSG(App)
