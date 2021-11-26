function maxPairArray(array) {
    const n = array.length;
    if (n < 2) {
        console.log("Khong co cap max nao.")
        return;
    }
    let x = array[0],
        y = array[1];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (array[i] * array[j] > x * y) {
                x = array[i], y = array[j];
            }
        }
    }
    console.log(`cặp ${x} và ${y} có tích là ${x*y}`)
}
maxPairArray([0])
maxPairArray([2, 3, -5, -2, -4])
const button = document.querySelector(".btn");
const result = document.querySelector(".result");
const radio1 = document.querySelector("#radio1");
const radio2 = document.querySelector("#radio2");
const radio3 = document.querySelector("#radio3");

function renderLink(results) {
    result.style.Color = "rgba(255, 255, 255)"
    if (radio1.checked) {
        result.href = results.result.full_short_link;
        result.innerHTML = results.result.full_short_link;
    } else if (radio2.checked) {
        result.href = results.result.full_short_link2;
        result.innerHTML = results.result.full_short_link2;
    } else if (radio3.checked) {
        result.href = results.result.full_short_link3;
        result.innerHTML = results.result.full_short_link3;
    }

}

function shortLink() {
    const input = document.querySelector("#link-shortener").value.trim();
    console.log(input)
    if (input) {
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}`).then((response) => response.json()).then(results => renderLink(results));
    } else {
        alert("Please enter a url!")
    }
}

button.addEventListener('click', (event) => {
    shortLink();
})