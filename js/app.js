function adjacentElementsProduct(array) {
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
adjacentElementsProduct([0])
adjacentElementsProduct([2, 3, -5, -2, -4])

function alternatingSums(arr) {
    const n = arr.length;
    if (n < 2) {
        console.log("mang phai tu 2 phan tu de co 2 team")
        return;
    }
    let arr1 = [],
        arr2 = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            arr1.push(arr[i]);
        } else {
            arr2.push(arr[i]);
        }
    }
    const sum1 = arr1.reduce((acc, curr) => acc += curr)
    const sum2 = arr2.reduce((acc, curr) => acc += curr)
    console.log(sum1, sum2)
}
alternatingSums([50])

alternatingSums([60, 40, 55, 75, 64])
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
    if (input) {
        fetch(`https://api.shrtco.de/v2/shorten?url=${input}`).then((response) => response.json()).then(results => renderLink(results));
    } else {
        alert("Please enter a url!")
    }
}

button.addEventListener('click', (event) => {
    shortLink();
})