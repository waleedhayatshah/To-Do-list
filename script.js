let inputFeild = document.getElementById('inputFeild');
let texts = document.querySelector('.text');

function add() {
    if (inputFeild.value === "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement('ul');
        newEle.innerHTML = `
            <div class="list-items d-flex justify-content-between border px-5 py-3">
                <li>${inputFeild.value}</li>
                <button class="text-secondary"><i class="fa-solid fa-xmark"></i></button>
            </div>
`;
        texts.appendChild(newEle);
        inputFeild.value = "";
        newEle.querySelector("i").addEventListener("click", remove);

        function remove() {
            newEle.remove();
        }
    }
}
