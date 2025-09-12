const input = document.querySelector("input");
const list = document.querySelector(".sub-container2");
const button = document.querySelector("button");

let arr = [];

const addTask = (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Enter some task");
  } else {
    arr.unshift(input.value);

    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="checkBox">
                    <p>${arr[0]}</p>
                    <button class="remove">
                    <i class="fa-solid fa-trash-can delete-icon"></i>
                    </button>`;
    li.classList.add("li");
    document.querySelector("ul").prepend(li);
    input.value = "";

    const remove = document.querySelector(".remove");
    remove.addEventListener("click", () => {
      li.remove();
    });

    const check = document.querySelector(".checkBox");
    check.addEventListener("change", () => {
      li.style.textDecoration = "line-through";
    })
  }
};

button.addEventListener("click", addTask);

const ul = document.querySelector("ul");

// ul.addEventListener("click", (e) => {
//   e.target.closest("li").remove();
// });
