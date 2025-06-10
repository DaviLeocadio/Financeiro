import "@/components/cardInfoUser/infoUser.css";

export default function CardInfoUser({
    conteudoCard = "",
    valor = "valor",
    icon = "bi bi-patch-minus-fill pe-3",
    tamanhoCard = "14rem",
    classe = "div-contas p-3 ",
    totalConta = ""
}) 

{
    return (<>
        <div className={classe} style={{ width: { tamanhoCard } }}>
            <div className="d-flex flex-row"><i className={icon}></i>{totalConta}</div>
            <h3>{conteudoCard}</h3>
            <p className="m-0">R${valor}</p>
        </div>
    </>)
}