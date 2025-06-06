const botaoGerar = document.getElementById("generate-pdf");

botaoGerar.addEventListener("click", () => {
    //conteudo pdf
    const conteudo = document.querySelector("#content")

    //configuracao do arquivo do pdf
    const options = {
        margin: [10,10,10,10],
        fileName: "relatorio.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    //gerar e baixar PDF
    html2pdf().set(options).from(conteudo).save();
})