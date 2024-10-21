const botonWe = document.getElementById('botonwe');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const retry = document.getElementById('retry')

const sonidoHuman = new Audio('sHuman.mp3');
const sonidoShrimp = new Audio('sShrimp.mp3');

botonwe.addEventListener('click', () => {
	botonwe.style.display = 'none';
	retry.style.display = 'block';
    const resultadoAleatorio = Math.random() < 0.5;
    if (resultadoAleatorio) {
        resultado.textContent = "You are a human yaaay";
        imagen.src = "human.jpg";
		sonidoHuman.play();
    } else {
        resultado.textContent = "YOU ARE A FUCKING SHRIMP";
        imagen.src = "shrimp.jpg";
		sonidoShrimp.play();
    }
    imagen.style.display = 'block';
});