import './style.scss';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btn1');
    if (boton) {
        boton.addEventListener('click', () => {
            Swal.fire({
                title: 'Ups',
                text: 'Esta página aún no se ha realizado, prueba a ver las otras recetas.',
                icon: 'info',
                confirmButtonText: 'Entendido'
            });
            boton.style.backgroundColor = 'red';
        });
    }
});

document.getElementById('btn2').addEventListener('click', () => {
  Swal.fire({
    title: 'Ups',
    text: 'Esta página aún no se ha realizado, prueba a ver las otras recetas.',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
});

document.getElementById('btn3').addEventListener('click', () => {
  Swal.fire({
    title: 'Ups',
    text: 'Esta página aún no se ha realizado, prueba a ver las otras recetas.',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
});

document.getElementById('btn4').addEventListener('click', () => {
  Swal.fire({
    title: 'Ups',
    text: 'Esta página aún no se ha realizado, prueba a ver las otras recetas.',
    icon: 'info',
    confirmButtonText: 'Entendido'
  });
});

