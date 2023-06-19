const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {

    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        let ultimoCaracter ='';
        // pantalla.textContent = eval(pantalla.textContent);
        switch(botonApretado){
            case 'C':
                pantalla.textContent = "0";
                break;
            case '←':
                if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR"){
                    pantalla.textContent = "0";
                }else{
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                }
                break;
            case '=':
                ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                try{
                    if(ultimoCaracter === "+" || ultimoCaracter === "-" || ultimoCaracter === "*" || ultimoCaracter === "/"){
                        break;
                    }else if(eval(pantalla.textContent) === Infinity){
                        pantalla.textContent = "ERROR";
                    }
                    else{
                        pantalla.textContent = eval(pantalla.textContent);
                    }
                }
                catch{
                    pantalla.textContent = "ERROR";
                }
                break;
            case '+':
                ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if(pantalla.textContent === "ERROR"){
                    pantalla.textContent = "0";
                }else if(ultimoCaracter === "+" || ultimoCaracter === "-" || ultimoCaracter === "*" || ultimoCaracter === "/"){
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    pantalla.textContent += botonApretado;
                }else{
                    pantalla.textContent += botonApretado;
                }
                break;
            case '-':
                ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if(pantalla.textContent === "ERROR"){
                    pantalla.textContent = "0";
                }else if(ultimoCaracter === "+" || ultimoCaracter === "-" || ultimoCaracter === "*" || ultimoCaracter === "/"){
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    pantalla.textContent += botonApretado;
                }else{
                    pantalla.textContent += botonApretado;
                }
                break;
            case '*':
                ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if(pantalla.textContent === "ERROR"){
                    pantalla.textContent = "0";
                }else if(ultimoCaracter === "+" || ultimoCaracter === "-" || ultimoCaracter === "*" || ultimoCaracter === "/"){
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    pantalla.textContent += botonApretado;
                }else{
                    pantalla.textContent += botonApretado;
                }
                break;
            case '/':
                ultimoCaracter = pantalla.textContent.charAt(pantalla.textContent.length - 1);
                if(pantalla.textContent === "ERROR"){
                    pantalla.textContent = "0";
                }else if(ultimoCaracter === "+" || ultimoCaracter === "-" || ultimoCaracter === "*" || ultimoCaracter === "/"){
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    pantalla.textContent += botonApretado;
                }else{
                    pantalla.textContent += botonApretado;
                }
                break;
            default:
                if(pantalla.textContent === "0" || pantalla.textContent === "ERROR"){
                    pantalla.textContent = botonApretado;
                }else{
                    pantalla.textContent += botonApretado;
                }
        }
    })
})