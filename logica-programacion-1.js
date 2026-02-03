let numero1=Number(prompt("Escribe el primer número:"));
let numero2=Number(prompt("Escribe el segundo número:"));
let numero3=Number(prompt("Escribe el tercer número:"));
let mayor;
let medio;
let menor;


if(numero1==numero2 && numero2==numero3){
    console.log(`${numero1}, ${numero2}, ${numero3}`)
    console.log(`El número ${numero1} se repite 3 veces.`);
}else if(numero1==numero2 || numero1==numero3){
    console.log(`El número ${numero1} se repite 2 veces.`);
}else if(numero2==numero3){
    console.log(`El número ${numero2} se repite 2 veces.`);
}else{
    if(numero1>numero2 && numero1>numero3){
        mayor=numero1;
        if(numero2>numero3){
            medio=numero2;
            menor=numero3;
        }else{
            medio=numero3;
            menor=numero2;
        }
    }else if(numero2>numero1 && numero2>numero3){
        mayor=numero2;
        if(numero1>numero3){
            medio=numero1;
            menor=numero3;
        }else{
            medio=numero3;
            menor=numero1;
        }
    }else if(numero3>numero1 && numero3>numero2){
        mayor=numero3;
        if(numero1>numero2){
            medio=numero1;
            menor=numero2;
        }else{
            medio=numero2;
            menor=numero1;
        }
    }
    console.log(`${mayor}, ${medio}, ${menor}`)
    console.log(`El número mayor es ${mayor}, el número de en medio es ${medio} y el número menor es ${menor}.`);
}

