document.addEventListener("DOMContentLoaded", function() {
    // Data final da contagem regressiva (ano, mês - 1, dia, hora, minuto, segundo)
    const dataFinalContagemRegressiva = new Date("2024-04-19T23:59:59").getTime();

    const intervaloContagemRegressiva = setInterval(function() {
        const dataAtual = new Date().getTime();
        const diferencaDeTempo = dataFinalContagemRegressiva - dataAtual;

        const dias = Math.floor(diferencaDeTempo / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencaDeTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencaDeTempo % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencaDeTempo % (1000 * 60)) / 1000);
        let cor;

    
        
        document.getElementById("dias").innerHTML = `<span style="background: ${cor}; border-radius: 10px; margin-bottom: 10px;">${dias} Dias</span>`;
        document.getElementById("horas").innerHTML = `<span style="background: ${cor}; border-radius: 10px; margin-bottom: 10px;">${horas} Horas</span>`;
        document.getElementById("minutos").innerHTML = `<span style="background: ${cor}; border-radius: 10px; margin-bottom: 10px;">${minutos} Minutos</span>`;
        document.getElementById("segundos").innerHTML = `<span style="background: ${cor}; border-radius: 10px; margin-bottom: 10px;">${segundos} Segundos</span>`;
        
        if (diferencaDeTempo < 0) {
            clearInterval(intervaloContagemRegressiva);
            document.getElementById("dias").innerHTML = "0d";
            document.getElementById("horas").innerHTML = "0h";
            document.getElementById("minutos").innerHTML = "0m";
            document.getElementById("segundos").innerHTML = "0s";
        }
    }, 1000);
});