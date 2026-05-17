function randomColor() {

            let r = Math.floor(Math.random() * 256);

            let g = Math.floor(Math.random() * 256);

            let b = Math.floor(Math.random() * 256);

            return `rgb(${r},${g},${b})`;
        }



        function generateColors() {

            let palette = document.getElementById("palette");

            palette.innerHTML = "";



            for (let i = 0; i < 5; i++) {

                let color = randomColor();

                let box = document.createElement("div");

                box.className = "colorBox";

                box.style.backgroundColor = color;

                box.innerHTML = color;



                box.onclick = function () {

                    navigator.clipboard.writeText(color);

                    alert("Copied");
                }



                palette.appendChild(box);
            }
        }
