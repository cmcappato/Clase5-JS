//window.onload = start;
document.addEventListener('DOMContentLoaded', start);
function cambiarColorLuzSemaforo(id, prender)
{
    var color = 'grey';
    
    if (prender == true) 
    {
        color = id;
    }
    document.getElementById(id).style.backgroundColor = color;          
    /*
    document.querySelector('#' + id).style.backgroundColor = color;
    */
}

var estado = 0;
function onClickBotonCambiar()
{          
    console.log(estado);
    switch(estado)
    {
        case 0:                
            cambiarColorLuzSemaforo('red', true);
            cambiarColorLuzSemaforo('yellow', !true);
            cambiarColorLuzSemaforo('green', !true);
            //estado++;
            break;
        case 1:                
            cambiarColorLuzSemaforo('red', true);
            cambiarColorLuzSemaforo('yellow', true);
            cambiarColorLuzSemaforo('green', !true);
            //estado++;                   
            break;  
        case 2:                
            cambiarColorLuzSemaforo('red', !true);
            cambiarColorLuzSemaforo('yellow', !true);
            cambiarColorLuzSemaforo('green', true);
            //estado++;                    
            break;
        case 3:                
            cambiarColorLuzSemaforo('red', !true);
            cambiarColorLuzSemaforo('yellow', true);
            cambiarColorLuzSemaforo('green', !true);                        //estado = 0; 
            break;
        default:
            cambiarColorLuzSemaforo('red', !true);
            cambiarColorLuzSemaforo('yellow', !true);
            cambiarColorLuzSemaforo('green', !true);                      
            break;
    }
    estado++;
    estado&=3;
//console.log('Evento boton cambiar ' + estado++);
}       

function textoBotonAuto (texto)
{
    document.querySelector('#btn-Automatico').innerHTML = texto;
}


function ocultarBotonManual(ocultar)
{
    document.querySelector('#btn-Cambiar').style.display = ocultar ? 'none' : 'block';
    textoBotonAuto(ocultar ? 'MANUAL' : 'AUTOMATICO');
}

var modoAutomatico = false;
var refIntervalAuto;
function onClickBotonAuto()
{
    modoAutomatico = !modoAutomatico;
    console.log(modoAutomatico);
    if (modoAutomatico == true)
    {
        refIntervalAuto = setInterval(onClickBotonCambiar, 2000);
        ocultarBotonManual(true);
        textoBotonAuto('MANUAL');
        //document.querySelector('#btn-Cambiar').style.display = 'none';
    }
    else
    {
        clearInterval(refIntervalAuto); 
        ocultarBotonManual(false);
        textoBotonAuto('AUTOMATICO');               
        //document.querySelector('#btn-Cambiar').style.display = 'block';
    }
}

function start()
{
    cambiarColorLuzSemaforo('red', !true);
    cambiarColorLuzSemaforo('yellow', !true);
    cambiarColorLuzSemaforo('green', !true);

    textoBotonAuto('AUTOMATICO');
}