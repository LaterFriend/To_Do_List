window.addEventListener('load', () => {
    const form = document.querySelector(".new-to-do-form");
    const input = document.querySelector("#content");
    const father = document.querySelector(".father");
    const submit_btn = document.querySelector(".submit-button")

    submit_btn.addEventListener("click", () => {
        if (input.value.trim() != "") {
            const new_task = input.value;

            const new_task_ele = document.createElement("li");
            new_task_ele.classList.add("child");



            const new_task_ele_content = document.createElement("article");
            new_task_ele_content.classList.add("in-article");

            const new_task_ele_buttons = document.createElement("div");
            new_task_ele_buttons.classList.add("buttons");



            const new_task_ele_input = document.createElement("input");
            new_task_ele_input.classList.add("text");
            new_task_ele_input.type = "text";
            new_task_ele_input.value = new_task;
            new_task_ele_input.setAttribute("readonly", "readonly");
            new_task_ele_content.appendChild(new_task_ele_input);


            const new_task_ele_button1 = document.createElement("button");
            new_task_ele_button1.innerHTML = "<i class=\"fa fa-check\"></i>"
            new_task_ele_button1.classList.add("done-button");
            new_task_ele_buttons.appendChild(new_task_ele_button1);

            const new_task_ele_button2 = document.createElement("button");
            new_task_ele_button2.innerHTML = "<i class=\"fa-sharp fa-solid fa-gear\"></i>"
            new_task_ele_button2.classList.add("change-button");
            new_task_ele_buttons.appendChild(new_task_ele_button2);

            new_task_ele.appendChild(new_task_ele_content);
            new_task_ele.appendChild(new_task_ele_buttons);
            father.appendChild(new_task_ele);
            input.value = "";

            new_task_ele_button1.addEventListener("click", (e) => {
                father.removeChild(new_task_ele);
            });

            new_task_ele_button2.addEventListener("click", (e) => {
                if (new_task_ele_input.hasAttribute("readonly", "readonly")) {
                    new_task_ele_input.removeAttribute("readonly");
                    new_task_ele_input.style.backgroundColor = "white";
                    new_task_ele_input.focus();
                } else {
                    new_task_ele_input.setAttribute("readonly", "readonly");
                    new_task_ele_input.style.backgroundColor = "gray";
                }
            });
        }
    });
});