/* simular el comportamiento de un cajero electrónico con las siguientes funciones: consultar saldo, retirar dinero, consignar dinero, (a cuenta propia), y transferir dinero a cualquier cuenta condiciones: debe de existir validacion de inicio de sesion, solo de podra salir del menu cuando el usuario decida */

let userName = 'admin'; 
let userPassword = 'admin';

let userInput = prompt('Ingrese el usuario');
if(userInput === userName) {
    let passwordInput = prompt('Ingrese contraseña');
    if(passwordInput === userPassword) {
        console.log(`Bienvenido ${userName}`);
        let index = 0;
        while(index === 0) {
            let option = prompt('Ingrese la opción que desea realizar: \n 1)Consultar saldo \n 2)Retirar Dinero \n 3)Consignar Dinero \n 4)Transferir Dinero \n 5) Salir');
            
            switch(option){
                 case '1': 
                    consultarSaldo();
                    break; 
                
                case '2':
                    retirarDinero();
                    break;
                case '3':
                    consignarDinero();
                    break; 
                case '4': 
                transferirDinero(); 
                break; 
                case '5': 
                index = 1;
                break;
                default: 
                console.log('Ingrese una opcion valida');
            }
        }
        
    } else {

        console.warn('Valide credenciales');
    }
} else {
    console.error('usuario no existe');
}

function consultarSaldo() {
    console.log('consulta de saldo');
}

function retirarDinero(){ 
    console.log('retirar dinero');
}

function consignarDinero(){
    console.log('consignar dinero');
}

function transferirDinero(){    
    console.log('transferir dinero');
}