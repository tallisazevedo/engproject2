// Cadastro de Usuario
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-cadastro-usuario').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usuario = {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            cpf: document.getElementById('cpf').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
        };
        
        console.log('UsuÃ¡rio cadastrado:', usuario);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// Cadastro de ResidÃªncia
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-cadastro-residencia').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const residencia = {
            dono_residencia: document.getElementById('dono_residencia').value,
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            ponto_referencia: document.getElementById('ponto_referencia').value,
        };
        
        console.log('ResidÃªncia cadastrada:', residencia);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// GestÃ£o de InventÃ¡rio
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-inventario').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const inventario = {
            paines_solares: document.getElementById('paines_solares').value,
            inversores: document.getElementById('inversores').value,
            cabos: document.getElementById('cabos').value,
            inventario_equipamento: document.getElementById('inventario_equipamento').value,
        };
        
        console.log('InventÃ¡rio cadastrado:', inventario);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});


// GestÃ£o de Contratos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-contratos').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const contrato = {
            contrato_venda: document.getElementById('contrato_venda').value,
            energia_produzida: document.getElementById('energia_produzida').value,
            faturamento: document.getElementById('faturamento').value,
        };
        
        console.log('Contrato cadastrado:', contrato);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// ManutenÃ§Ã£o Preventiva Remota
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-manutencao').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const manutencao = {
            dado_desempenho: document.getElementById('dado_desempenho').value,
            agendamento: document.getElementById('agendamento').value,
            diagnostico_problema: document.getElementById('diagnostico_problema').value,
            manutencao_correta: document.getElementById('manutencao_correta').value,
        };
        
        console.log('ManutenÃ§Ã£o agendada:', manutencao);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// Acessos e PermissÃµes
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-acessos').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const acessos = {
            info_usuarios: document.getElementById('info_usuarios').value,
        };
        
        console.log('Acessos gerenciados:', acessos);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// Cadastro de Operador
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-cadastro-operador').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const operador = {
            nome: document.getElementById('nome-operador').value,
            idade: document.getElementById('idade-operador').value,
            cpf: document.getElementById('cpf-operador').value,
            email: document.getElementById('email-operador').value,
            celular: document.getElementById('celular-operador').value,
        };
        
        console.log('Operador cadastrado:', operador);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// SeguranÃ§a e Backup de Dados
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-backup-dados').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const backup = {
            backup_dos_dados: document.getElementById('backup-dos-dados').value,
        };
        
        console.log('Backup realizado:', backup);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// IntegraÃ§Ã£o com Sistemas Externos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-integracao').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const integracao = {
            redes_eletricas: document.getElementById('redes-eletricas').value,
            centro_controle: document.getElementById('centro-controle').value,
            sistema_gerenciamento: document.getElementById('sistema-gerenciamento').value,
        };
        
        console.log('Sistema integrado:', integracao);
        // Aqui vocÃª pode adicionar a lÃ³gica para enviar os dados para o servidor ou armazenÃ¡-los localmente
    });
});

// Monitoramento

// AnÃ¡lise de Desempenho
document.addEventListener('DOMContentLoaded', () => {
    const desempenhoContainer = document.getElementById('desempenho-container');
    desempenhoContainer.innerHTML = `
        <p>Desempenho: Alta</p>
        <p>Capacidade de Escalonamento: Grande</p>
        <p>Visibilidade EconÃ´mica: Boa</p>
    `;

    const ctx = document.getElementById('grafico-desempenho').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Etiquetas das datas serÃ£o atualizadas dinamicamente
            datasets: [{
                label: 'Desempenho',
                data: [], // Dados de desempenho serÃ£o atualizados dinamicamente
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    }
                }
            }
        }
    });

    document.getElementById('data-analise').addEventListener('change', function(event) {
        const selectedDate = event.target.value;
        
        // SimulaÃ§Ã£o de dados para a data selecionada
        const desempenhoData = generateDesempenhoData(selectedDate);
        
        updateChart(chart, desempenhoData);
    });

    function generateDesempenhoData(date) {
        // Dados de exemplo estÃ¡ticos para simulaÃ§Ã£o
        const data = [
            { x: new Date(date), y: 65 },
            { x: new Date(new Date(date).getTime() + 1 * 24 * 60 * 60 * 1000), y: 59 },
            { x: new Date(new Date(date).getTime() + 2 * 24 * 60 * 60 * 1000), y: 80 },
            { x: new Date(new Date(date).getTime() + 3 * 24 * 60 * 60 * 1000), y: 81 },
            { x: new Date(new Date(date).getTime() + 4 * 24 * 60 * 60 * 1000), y: 56 },
            { x: new Date(new Date(date).getTime() + 5 * 24 * 60 * 60 * 1000), y: 55 },
            { x: new Date(new Date(date).getTime() + 6 * 24 * 60 * 60 * 1000), y: 40 }
        ];
        return data;
    }

    function updateChart(chart, data) {
        chart.data.labels = data.map(d => d.x);
        chart.data.datasets[0].data = data;
        chart.update();
    }

    // InicializaÃ§Ã£o com uma data padrÃ£o
    const initialDate = new Date().toISOString().split('T')[0];
    document.getElementById('data-analise').value = initialDate;
    const initialData = generateDesempenhoData(initialDate);
    updateChart(chart, initialData);
});



// Monitoramento de PainÃ©is
document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo
    const monitoramentoPaineis = {
        nome_painel: 'Painel 1',
        consumo_geral: 5000,
        controle_producao: 'AutomÃ¡tico',
        integridade: 'Boa',
        monitoramento_ambiental: 'Regular',
        consumo_equipamento: 2000,
        qualidade_energia: 'Alta',
        otimizacao_energia: 'Ã“tima',
        relatorio: 'RelatÃ³rio de produÃ§Ã£o disponÃ­vel',
        valor_economizado: 300
    };
    
    const painelContainer = document.getElementById('painel-container');
    painelContainer.innerHTML = `
        <p>Nome do Painel: ${monitoramentoPaineis.nome_painel}</p>
        <p>Consumo Geral: ${monitoramentoPaineis.consumo_geral} kWh</p>
        <p>Controle de ProduÃ§Ã£o: ${monitoramentoPaineis.controle_producao}</p>
        <p>Integridade: ${monitoramentoPaineis.integridade}</p>
        <p>Monitoramento Ambiental: ${monitoramentoPaineis.monitoramento_ambiental}</p>
        <p>Consumo por Equipamento: ${monitoramentoPaineis.consumo_equipamento} kWh</p>
        <p>Qualidade da Energia: ${monitoramentoPaineis.qualidade_energia}</p>
        <p>OtimizaÃ§Ã£o de Energia: ${monitoramentoPaineis.otimizacao_energia}</p>
        <p>RelatÃ³rio: ${monitoramentoPaineis.relatorio}</p>
        <p>Valor Mensal Economizado: R$ ${monitoramentoPaineis.valor_economizado}</p>
    `;
});

// GestÃ£o de Falhas
document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo
    const gestaoFalhas = {
        tipo_falha: 'Falha de conexÃ£o',
        relatorio_geral: 'Problemas de conexÃ£o intermitente',
        emissao_carbono: 'Baixa',
        relatorio_equipamento: 'Equipamento X com falhas frequentes',
        analise_risco: 'MÃ©dio risco de falhas'
    };
    
    const falhasContainer = document.getElementById('falhas-container');
    falhasContainer.innerHTML = `
        <p>Tipo de Falha: ${gestaoFalhas.tipo_falha}</p>
        <p>RelatÃ³rio Geral: ${gestaoFalhas.relatorio_geral}</p>
        <p>EmissÃ£o de Carbono: ${gestaoFalhas.emissao_carbono}</p>
        <p>RelatÃ³rio por Equipamento: ${gestaoFalhas.relatorio_equipamento}</p>
        <p>AnÃ¡lise de Risco e ContingÃªncia: ${gestaoFalhas.analise_risco}</p>
    `;
});


// Menu hambuguer 
document.addEventListener('DOMContentLoaded', () => {
    const menuHamburger = document.getElementById('menu-hamburger');
    const navLinks = document.getElementById('nav-links');
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    tabLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetTab = event.target.getAttribute('data-tab');

            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Fechar o menu ao selecionar um link (em dispositivos móveis)
            navLinks.classList.remove('active');
        });
    });

    // Inicialização com uma data padrão
    const initialDate = new Date().toISOString().split('T')[0];
    document.getElementById('data-analise').value = initialDate;
    const initialData = generateDesempenhoData(initialDate);
    updateChart(chart, initialData);
});

function generateDesempenhoData(date) {
    // Dados de exemplo estáticos para simulação
    const data = [
        { x: new Date(date), y: 65 },
        { x: new Date(new Date(date).getTime() + 1 * 24 * 60 * 60 * 1000), y: 59 },
        { x: new Date(new Date(date).getTime() + 2 * 24 * 60 * 60 * 1000), y: 80 },
        { x: new Date(new Date(date).getTime() + 3 * 24 * 60 * 60 * 1000), y: 81 },
        { x: new Date(new Date(date).getTime() + 4 * 24 * 60 * 60 * 1000), y: 56 },
        { x: new Date(new Date(date).getTime() + 5 * 24 * 60 * 60 * 1000), y: 55 },
        { x: new Date(new Date(date).getTime() + 6 * 24 * 60 * 60 * 1000), y: 40 }
    ];
    return data;
}

function updateChart(chart, data) {
    chart.data.labels = data.map(d => d.x);
    chart.data.datasets[0].data = data;
    chart.update();
}

// Inicializar a primeira aba como ativa
document.querySelector('.tab-content').classList.add('active');
