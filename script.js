function generateData() {
            let c = Math.floor(Math.random() * 20) + 1;
            let b = Math.floor(Math.random() * 20) + 1;
            let s = Math.floor(Math.random() * 20) + 1;

            let subjects = { "Chickenjoy": c, "Burgersteak": b, "Jolly Spaghetti": s };
            let item = Object.keys(subjects).reduce((a, b) => subjects[a] > subjects[b] ? a : b);

            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
            let letter = alphabet[c - 1];

            let totalMins = (b + s) * 3; 
            let hours = Math.floor(totalMins / 60);
            let mins = totalMins % 60;

            document.getElementById("chicken").innerText = c;
            document.getElementById("steak").innerText = b;
            document.getElementById("spag").innerText = s;
            document.getElementById("item").innerText = item;
            document.getElementById("letter").innerText = letter;
            document.getElementById("time").innerText = `${totalMins} minutes (${hours} hours and ${mins} minutes).`;
        }

generateData();