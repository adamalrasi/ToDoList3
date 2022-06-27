const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const container = document.querySelector("#container");

btn.addEventListener("click", function () {
  let p = document.createElement("p");
  p.innerText = input.value;
  container.appendChild(p);
  input.value = "";
  p.addEventListener("click", function () {
    if (p.style.textDecoration === "none") {
      p.style.textDecoration = "line-through";
    } else {
      p.style.textDecoration = "none";
    }
  });
  p.addEventListener("dblclick", function () {
    let remove = confirm("Are you sure?");
    if (remove) {
      console.log("hello");
      container.removeChild(p);
    }
  });
});
