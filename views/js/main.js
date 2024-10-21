/* simular el comportamiento de un cajero electrónico con las siguientes funciones: consultar saldo, retirar dinero, consignar dinero, (a cuenta propia), y transferir dinero a cualquier cuenta condiciones: debe de existir validacion de inicio de sesion, solo de podra salir del menu cuando el usuario decida */

const userName = 'admin'; 
const userPassword = 'admin';
let balance = 4000000;
let userInput = prompt('Ingrese el usuario');

function consultarSaldo() {
    console.log(`tu saldo es ${balance}`);
}

function retirarDinero(){ 
    if(balance <= 0)  {
        console.log(`No hay fondos para retirar, tu saldo actual es: ${balance}`);
    } else {
        let cashWitdhdrawal = prompt(`Cuánto desea retirar? \n tu saldo es: ${balance}`);
        balance -=  cashWitdhdrawal;
        console.log(`Retiro completado saldo restante ${balance}`);
        typeof(balance);
    }
}

function consignarDinero(){
    let depositMoney = Number(prompt('Ingrese el monto a consignar'));
    balance += depositMoney; 
    console.log(`Deposito completado exitosamente, tu saldo actual es ${balance}`);
}

function transferirDinero(){    
    console.log('transferir dinero');
}
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

