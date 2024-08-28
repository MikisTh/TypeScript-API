const formIMC = document.getElementById('formImc') as HTMLFormElement

const calculaIMC = (event: Event) => {
    event.preventDefault();
    const peso: number = parseFloat((document.getElementById('peso') as HTMLInputElement).value)
    const alturaEmCentimetros: number = parseFloat((document.getElementById('altura') as HTMLInputElement).value)
    let alturaEmMetros: number = alturaEmCentimetros / 100;
    let classificacaoTitulo: string = '';
    let classificacaoDescricao: string = ''
    let imc: number = peso / (alturaEmMetros * alturaEmMetros)


    switch (true) {
        case (imc < 18.5):
            classificacaoTitulo = 'Abaixo do peso';
            classificacaoDescricao = 'Seu IMC está abaixo do ideal, você precisa ganhar peso';

            break;

        case (imc >= 18.5 && imc < 24.9):
            classificacaoTitulo = 'Peso normal';
            classificacaoDescricao = 'Seu IMC está ótimo, você está no peso ideal';

            break;

        case (imc >= 25 && imc < 29.9):
            classificacaoTitulo = 'Sobrepeso';
            classificacaoDescricao = 'Seu IMC está acima do ideal, você está com sobrepeso leve';

            break;

        case (imc >= 30 && imc < 34.9):
            classificacaoTitulo = 'Obesidade Grau 1';
            classificacaoDescricao = 'Seu IMC está alto, você está obeso';

            break;

        case (imc >= 35 && imc < 39.9):
            classificacaoTitulo = 'Obesidade Grau 2';
            classificacaoDescricao = 'Seu IMC está muito alto, você está com um nível de obesidade preocupante';

            break;

        default:
            classificacaoTitulo = 'Obesidade Grau 3';
            classificacaoDescricao = 'Seu IMC extremamente alto, você está no mais alto nível de obesidade';

            break;
    }

    (document.getElementById('resultadoImc') as HTMLElement).innerText = `
        ${imc.toFixed(2)}
    `;

    (document.getElementById('classificacao_titulo') as HTMLElement).innerText = `
        Seu indice e massa corporal é: ${classificacaoTitulo}!
    `;

    (document.getElementById('classificacao_descricao') as HTMLElement).innerText = `
        ${classificacaoDescricao}.
    `

}

formIMC.addEventListener('submit', calculaIMC)