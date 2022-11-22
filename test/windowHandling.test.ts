import { Browser, BrowserContext, chromium, Page } from "playwright";

const baseURL = "https://demoqa.com/";

const base_letcode_URL = "https://letcode.in/";
const windows_letcode_URL = base_letcode_URL + "windows";
const homepage_letcode_URL = base_letcode_URL + "test";
const signin_letcode_URL = base_letcode_URL + "signin";
const alert_letcode_URL = base_letcode_URL + "alert";
const dropdowns_letcode_URL = base_letcode_URL + "dropdowns";


//TODO:

// test 1: single page handling on demoqa
// test 2: single page handling on letcode + dismiss consent to use data
// test 3: multipage handling on Letcode