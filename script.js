const countNumber = document.querySelector(".box-body h1");
const btns = document.querySelectorAll(".box-footer .btn");
let count = 0;

btns.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index === 0) {
            count--;
        } else if (index === 1) {
            count = 0;
        } else if (index === 2) {
            count++;
        }
        if (count > 0) {
            countNumber.style.color="#006d77";
        } else if (count === 0) {
            countNumber.style.color="#fff";
        }else if (count < 0) {
            countNumber.style.color="#e63946";
        }
        countNumber.innerHTML = count;
    });
});
