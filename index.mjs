import scrape from "website-scraper";
import PuppeteerPlugin from "website-scraper-puppeteer";

import fs from "fs"

scrape({
    urls: ["https://bento.me/pankajparashar"],
    directory: "public",
    plugins: [
        new PuppeteerPlugin({
            launchOptions: {
                headless: true,
                args: ["--no-sandbox"],
                defaultViewport: {
                    width: 1920,
                    height: 1080,
                },
            },
            blockNavigation: true,
        }),
    ],
}).then(() => {
    console.log("done");
    fs.rmdirSync("public/js", { recursive: true, force: true });
    fs.copyFileSync('inter.css', 'public/css/inter.css');
});
