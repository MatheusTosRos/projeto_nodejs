import app from "./app";

const porta = 3000

function main() {
    app.listen(porta, 'localhost', () =>{
        console.log("Servidor rodando ma porta", porta)
    })
}

main()