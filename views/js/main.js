/* simular el comportamiento de un cajero electrónico con las siguientes funciones: consultar saldo, retirar dinero, consignar dinero, (a cuenta propia), y transferir dinero a cualquier cuenta condiciones: debe de existir validacion de inicio de sesion, solo de podra salir del menu cuando el usuario decida */

const userName = 'admin';
const userPassword = 'admin';
let balance = 4000000;
let anotherAccount = 0;


function consultarSaldo() {
    console.log(`tu saldo es ${balance}`);
}

function retirarDinero() {
    if (balance <= 0) {
        console.log(`No hay fondos para retirar, tu saldo actual es: ${balance}`);
        return;
    }

    let cashWitdhdrawal = Number(prompt(`Cuánto desea retirar? \n tu saldo es: ${balance}`));
    
    if(cashWitdhdrawal >= balance) {
        console.log('valor a retirar mayor al saldo disponible');
        return;
    }

    if (isNaN(cashWitdhdrawal) || cashWitdhdrawal <= 0) {
        console.log('Ingrese un monto valido');
    } 
        
    balance -= cashWitdhdrawal;
    console.log(`Retiro completado saldo restante ${balance}`);

}

function consignarDinero() {
    let depositMoney = Number(prompt('Ingrese el monto a consignar'));
    balance += depositMoney;
    console.log(`Deposito completado exitosamente, tu saldo actual es ${balance}`);
}

function transferirDinero() {
    if (balance <= 0) {
        console.log('fondos insuficientes');
        return;
    }
    let moneyTransaction = Number(prompt('Ingrese el valor a transferir'));

    if (isNaN(moneyTransaction) || moneyTransaction <= 0) {
        console.log('Ingrese un monto válido');
        return;
    }

    if (moneyTransaction > balance) {
        console.log('el monto supera el saldo disponible');
    } else {
        balance -= moneyTransaction;
        anotherAccount += moneyTransaction;
        console.log(`Transferencia existosa por un monto de: ${moneyTransaction}, su saldo actual es ${balance}`);
        return;
    }


}
let userInput = prompt('Ingrese el usuario');
if (userInput === userName) {
    let passwordInput = prompt('Ingrese contraseña');
    if (passwordInput === userPassword) {
        console.log(`Bienvenido ${userName}`);
        let index = 0;
        while (index === 0) {
            let option = prompt('Ingrese la opción que desea realizar: \n 1)Consultar saldo \n 2)Retirar Dinero \n 3)Consignar Dinero \n 4)Transferir Dinero \n 5) Salir');

            switch (option) {
                case '1':
                    consultarSaldo(balance);
                    break;

                case '2':
                    retirarDinero(balance);
                    break;
                case '3':
                    consignarDinero(balance);
                    break;
                case '4':
                    transferirDinero(anotherAccount, balance);
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

