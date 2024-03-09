    let pontuacaoJogador = 0;
    let pontuacaoComputador = 0;
    let pontuacaoEmpate = 0;

    function escolherOpcao(escolhaUsuario) {
        const opcoes = [0, 1, 2];
        const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

        exibirEscolhaComputador(escolhaComputador);

        const resultado = calcularResultado(escolhaUsuario, escolhaComputador);

        document.getElementById('resultado').innerText = resultado;

            atualizarPontuacao(resultado);
    }

    function calcularResultado(usuario, computador) {
        if (usuario === computador) {
            pontuacaoEmpate++;
            return 'Empate!';
        } else if (
            (usuario === 1 && computador === 0) ||
            (usuario === 0 && computador === 2) ||
            (usuario === 2 && computador === 1)
            ) 
              {
                pontuacaoJogador++;
                return 'Você venceu!';
            } else {
                pontuacaoComputador++;
                return 'Você perdeu!';
            }
        }

    function exibirEscolhaComputador(escolhaComputador) {
        const opcoesTexto = ['Pedra', 'Papel', 'Tesoura'];
        document.getElementById('escolhaComputador').innerText = opcoesTexto[escolhaComputador];
    }

    function atualizarPontuacao(resultado) {
        document.getElementById('pontuacaoJogador').innerText = pontuacaoJogador;
        document.getElementById('pontuacaoComputador').innerText = pontuacaoComputador;
        document.getElementById('pontuacaoEmpate').innerText = pontuacaoEmpate;
    }