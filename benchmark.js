const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`
<!DOCTYPE html>
<div id="cards">
  ${'<div class="card" style="left:0; top:0; width:100px; height:100px;"></div>'.repeat(1000)}
</div>
`);

const { document } = dom.window;

// Check identity
const col1 = document.getElementsByClassName("card");
const col2 = document.getElementsByClassName("card");
console.log("Collection identity check:", col1 === col2); // Should be true if cached

// Current Implementation Logic
function oldHandler(e) {
    // Calling it every time
    const collection = document.getElementsByClassName("card");
    for (let i = 0; i < collection.length; i++) {
        const card = collection[i];
        // Minimal work to measure selector overhead
        const x = 1 + 1;
    }
}

// Optimized Implementation Logic
const cards = document.getElementsByClassName("card");
function newHandler(e) {
    // Using cached collection
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        // Minimal work
        const x = 1 + 1;
    }
}

const iterations = 1000; // More iterations since work is lighter
const eventMock = { clientX: 100, clientY: 100 };

console.log("Starting benchmark with " + iterations + " iterations and 1000 cards...");

// Warmup
for (let i = 0; i < 100; i++) oldHandler(eventMock);
for (let i = 0; i < 100; i++) newHandler(eventMock);

// Measure Old
const startOld = process.hrtime.bigint();
for (let i = 0; i < iterations; i++) {
    oldHandler(eventMock);
}
const endOld = process.hrtime.bigint();
const timeOld = Number(endOld - startOld) / 1e6; // ms

console.log(`Old Implementation: ${timeOld.toFixed(2)} ms`);

// Measure New
const startNew = process.hrtime.bigint();
for (let i = 0; i < iterations; i++) {
    newHandler(eventMock);
}
const endNew = process.hrtime.bigint();
const timeNew = Number(endNew - startNew) / 1e6; // ms

console.log(`New Implementation: ${timeNew.toFixed(2)} ms`);
if (timeNew > 0) {
    console.log(`Improvement: ${(timeOld / timeNew).toFixed(2)}x faster`);
}
