let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)
let count = 0 

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
let countText = count + " - "
saveEl.textContent += countText
console.log(count)
count = 0
countEl.textContent = count
}
