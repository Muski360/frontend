//Definição da interface Usuario

interface Usuario {
    id: number;
    nome: string;
    email: string;
    isAdmin: boolean;
}

//Função renderizarPerfil que exiba no console uma mensagem personalizada

function renderizarPerfil (u:Usuario): void{
    console.log(`Nome: ${u.nome}. Email: ${u.email}`);
    console.log(`Função: ${u.isAdmin ? "Administrador" : "Usuário comum"}`);
}

console.log("=== Verificador de usuários ===")

const listaUsuarios: Usuario[] = [
    {
    id: 1,
    nome: "Murilo Dovigo",
    email: "muruilodovigo@gmail",
    isAdmin: true
    },
    {
    id: 2,
    nome: "Murilo 123",
    email: "muruilo123@gmail",
    isAdmin: false
    }
];
listaUsuarios.forEach((usuario)=>{
        renderizarPerfil(usuario);
    }
)