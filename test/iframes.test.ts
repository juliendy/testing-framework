import { Browser, BrowserContext, chromium, Page } from "playwright";

const base_letcode_URL = "https://letcode.in/";
const frames_letcode_URL = base_letcode_URL + "frame";

const locator_not_consent = 'text="Do not consent"';
const first_frame_name = "firstFr";
const firstName_name = "input[name='fname']";
const lastName_name = "input[name='lname']";
const firstName_data = "Hakuna";
const lastName_data = "Matata";
const lastName_data_parent = "Gandalf";
const output_xpath = "xpath=//p[@class='title has-text-info']";
const email_name = "input[name='email']";
const email_data = "hakuna.matata@test.com";

const frames_demoqa_URL = "https://demoqa.com/frames";

describe("Interact with iframes", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 400 });
        context = await browser.newContext();
        page = await context.newPage();
    });

    afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    });

    test("Interact with nested frames on Letcode", async () => {
        // TODO:
        // await and expect page to not be null
        // dismiss consent to use data
        // fill data in frames (toBe did not work, toContain?)

    });

    test("Interact with frames on demoqa", async () => {
        await page.goto(frames_demoqa_URL);
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
        expect(await page.title()).toBe("ToolsQA");

        const frame_one = page.frame({ url: /\/sample/ });
        if (frame_one != null) {
            expect(await frame_one.innerText("h1")).toBe(
                "This is a sample page"
            );
        }
    });
});
