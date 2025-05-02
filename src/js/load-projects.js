onload = async function () {
	await fetch("../../resources/proyectos.json")
		.then((res) => {
			if (!res.ok) {
				throw new Error("Network response was not ok.");
			}
			return res.json();
		})
		.then((proyectos) => {
			const container = document.getElementById("mi-card-container");
			proyectos.forEach((proyecto, index) => {
				const card = document.createElement("article");
				card.className = "mi-card";
				card.setAttribute(
					"data-aos",
					index % 2 === 0 ? "fade-right" : "fade-left"
				);
				card.setAttribute("data-aos-duration", "2000");

				card.innerHTML = `
          <img src="${proyecto.imagen}" alt="${proyecto.alt}" />
          <div class="mi-card-content">
            <h3>${proyecto.titulo}</h3>
            <span>
              ${proyecto.tecnologias
					.map((tec) => `<i class="devicon-${tec}-plain"></i>&nbsp;`)
					.join("")}
            </span>
            <p>${proyecto.descripcion}</p>
            <div class="mi-card-demo">
              ${
					proyecto.links.github
						? `<a href="${proyecto.links.github}"><i class="fa-brands fa-github"></i></a>`
						: ""
				}
              ${
					proyecto.links.web
						? `<a href="${proyecto.links.web}"><i class="fa-solid fa-globe"></i></a>`
						: ""
				}
              ${
					proyecto.links.telegram
						? `<a href="${proyecto.links.telegram}"><i class="fa-brands fa-telegram"></i></a>`
						: ""
				}
            </div>
          </div>
        `;
				container.appendChild(card);
			});
		});
};
