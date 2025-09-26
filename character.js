const drawingOrder = ["body","head","legs","gloves","boots","hair","hat","necklace","weapon"];
const currentChar = {};
const loadedImages = new Map();

const canvas = document.getElementById("character");
const ctx = canvas.getContext("2d");
let animationFrame = 0;
let ticks = 0;

function setEquipment() {
    drawingOrder.forEach(eq => {
        if (data.vars[eq] === null || data.vars[eq] === undefined) {
            currentChar[eq] = "none";
        } else {
            currentChar[eq] = data.vars[eq]
        }
        loadImage(eq, currentChar[eq], 1);
        loadImage(eq, currentChar[eq], 2);
    })
}

function drawCharacter() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawingOrder.forEach(slot => {
        if(slot === "hair" && currentChar.head !== "none" && currentChar.head !== "dark") {return}
        let img = slot + currentChar[slot] + (animationFrame + 1);
        if(loadedImages.has(img)) {
            ctx.drawImage(loadedImages.get(img), 0, slot === "hat" ? 0 : 8)
        }
    })
    
    ticks++
    if(ticks % 30 === 0) {
        ticks = 0;
        animationFrame = ++animationFrame % 2
    }
    requestAnimationFrame(drawCharacter)
}

async function loadImage(slot, piece, frame) {
	const key = slot + piece + frame;
	if (loadedImages.has(key)) {
		return
	} else {
		return new Promise((resolve, reject) => {
			const img = new Image();
			let src = `https://flatmmo.com/images/animations/stand/${slot}_${piece}${frame}.png`;
			img.onload = () => {
				loadedImages.set(key, img);
				resolve()
			};
			img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
			img.src = src;
		});
	}
}