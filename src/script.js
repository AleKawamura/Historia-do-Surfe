const atletas = [
    {
        nome: "Peterson Rosa",
        foto: "./src/img/rosa.png",
        geracao: "antiga",
        categoria: "Tricampeão brasileiro"
    },
    {
        nome: "Peterson Crisanto",
        foto: "./src/img/crisanto.png",
        geracao: "antiga",
        categoria: "Campeão brasileiro"
    },
    {
        nome: "Thiara Mandelli",
        foto: "./src/img/thiara.png",
        geracao: "antiga",
        categoria: "Vice-campeã south America wsl 2015"
    },
    {
        nome: "Jihad Khodr",
        foto: "./src/img/jihad.png",
        geracao: "antiga",
        categoria: "3 Vitórias no Mundial WQS"
    },
    {
        nome: "Péricles Dimitri",
        foto: "./src/img/pepe.png",
        geracao: "antiga",
        categoria: "Campeão brasileiro Master"
    },
    {
        nome: "Luara Mandelli",
        foto: "./src/img/luara.png",
        geracao: "nova",
        categoria: "Bicampeã brasileira"
    },
    {
        nome: "Anuar Chiah",
        foto: "./src/img/anuar.png",
        geracao: "nova",
        categoria: "Vice-campeão WSL Open Pro Junior 2026"
    },

    {
        nome: "Laura Mandelli",
        foto: "./src/img/laurinha.png",
        geracao: "nova",
        categoria: "Grande promessa do surf brasileiro"
    },
    {
        nome: "Gabriel Jihad",
        foto: "./src/img/gabriel.png",
        geracao: "nova",
        categoria: "Tri campeão paranaense"
    },
    {
        nome: "Kauã Carvalho",
        foto: "./src/img/kaua.png",
        geracao: "nova",
        categoria: "Grande promessa do surf brasileiro"
    }
    

];

const containerAntiga =
    document.getElementById("antiga-geracao");

const containerNova =
    document.getElementById("nova-geracao");

function criarCard(atleta, geracao) {

    const card = document.createElement("article");

    card.className = `
        group
        relative
        aspect-[3/4]
        overflow-hidden
        rounded-xl
        bg-slate-800
        border border-white/10
        cursor-pointer
    `;

    card.innerHTML = `

        <img
            src="${atleta.foto}"
            alt="${atleta.nome}"
            loading="lazy"
            class="
                absolute
                inset-0
                w-full
                h-full
                object-cover

                transition-transform
                duration-500
                ease-out

                group-hover:scale-110
            "
        >

        <div
            class="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950
                via-slate-950/20
                to-transparent

                opacity-40
                group-hover:opacity-90

                transition-opacity
                duration-300
            ">
        </div>

        <div
            class="
                absolute
                bottom-0
                left-0
                right-0
                p-4

                translate-y-3
                group-hover:translate-y-0

                transition-transform
                duration-300
            ">

            <p
                class="
                    text-[10px]
                    uppercase
                    tracking-widest
                    font-bold

                    ${geracao === "antiga"
                        ? "text-amber-400"
                        : "text-blue-300"}

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-300
                ">

                ${atleta.categoria}

            </p>

            <h4
                class="
                    mt-1
                    text-base
                    sm:text-lg
                    font-bold
                    text-white
                ">

                ${atleta.nome}

            </h4>

        </div>
    `;

    return card;
}


atletas.forEach(atleta => {

    const card = criarCard(atleta, atleta.geracao);

    if (atleta.geracao === "antiga") {
        containerAntiga.appendChild(card);
    } else {
        containerNova.appendChild(card);
    }

});


const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        // Fixa no topo
        navbar.classList.remove("absolute");
        navbar.classList.add("fixed");

        // Aparência quando está fixo
        navbar.classList.remove(
            "bg-transparent",
            "border-transparent"
        );

        navbar.classList.add(
            "bg-slate-900",
            "border-slate-800",
            "shadow-lg"
        );

    } else {
        // Volta para o estado original
        navbar.classList.remove("fixed");

        navbar.classList.add("absolute");

        // Aparência original
        navbar.classList.remove(
            "bg-slate-900",
            "border-slate-800",
            "shadow-lg"
        );

        navbar.classList.add(
            "bg-transparent",
            "border-transparent"
        );
    }
});
