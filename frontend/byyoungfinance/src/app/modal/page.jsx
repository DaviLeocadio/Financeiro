import Link from "next/link";
import Grafico from "@/components/graficoDonut/chart";
import NavUsuario from "@/components/nav-usuario/nav-usuario";

export default function Modal(){
    (function() {
        var staticBackdrop = document.getElementById('staticBackdrop');
        var myModal = new bootstrap.Modal(staticBackdrop);
        myModal.show();
     });
    return(<>
        
        </>)
}