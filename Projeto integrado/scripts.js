// Manutenção

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
        
        console.log('Usuário cadastrado:', usuario);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Cadastro de Residência
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-cadastro-residencia').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const residencia = {
            dono_residencia: document.getElementById('dono_residencia').value,
            endereco: document.getElementById('endereco').value,
            numero: document.getElementById('numero').value,
            ponto_referencia: document.getElementById('ponto_referencia').value,
        };
        
        console.log('Residência cadastrada:', residencia);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Gestão de Inventário
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-inventario').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const inventario = {
            paines_solares: document.getElementById('paines_solares').value,
            inversores: document.getElementById('inversores').value,
            cabos: document.getElementById('cabos').value,
            inventario_equipamento: document.getElementById('inventario_equipamento').value,
        };
        
        console.log('Inventário cadastrado:', inventario);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});


// Gestão de Contratos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-contratos').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const contrato = {
            contrato_venda: document.getElementById('contrato_venda').value,
            energia_produzida: document.getElementById('energia_produzida').value,
            faturamento: document.getElementById('faturamento').value,
        };
        
        console.log('Contrato cadastrado:', contrato);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Manutenção Preventiva Remota
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-manutencao').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const manutencao = {
            dado_desempenho: document.getElementById('dado_desempenho').value,
            agendamento: document.getElementById('agendamento').value,
            diagnostico_problema: document.getElementById('diagnostico_problema').value,
            manutencao_correta: document.getElementById('manutencao_correta').value,
        };
        
        console.log('Manutenção agendada:', manutencao);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Acessos e Permissões
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-acessos').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const acessos = {
            info_usuarios: document.getElementById('info_usuarios').value,
        };
        
        console.log('Acessos gerenciados:', acessos);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
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
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Segurança e Backup de Dados
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-backup-dados').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const backup = {
            backup_dos_dados: document.getElementById('backup-dos-dados').value,
        };
        
        console.log('Backup realizado:', backup);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Integração com Sistemas Externos
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-integracao').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const integracao = {
            redes_eletricas: document.getElementById('redes-eletricas').value,
            centro_controle: document.getElementById('centro-controle').value,
            sistema_gerenciamento: document.getElementById('sistema-gerenciamento').value,
        };
        
        console.log('Sistema integrado:', integracao);
        // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou armazená-los localmente
    });
});

// Monitoramento

// Análise de Desempenho
document.addEventListener('DOMContentLoaded', () => {
    const desempenhoContainer = document.getElementById('desempenho-container');
    desempenhoContainer.innerHTML = `
        <p>Desempenho: Alta</p>
        <p>Capacidade de Escalonamento: Grande</p>
        <p>Visibilidade Econômica: Boa</p>
    `;

    const ctx = document.getElementById('grafico-desempenho').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [], // Etiquetas das datas serão atualizadas dinamicamente
            datasets: [{
                label: 'Desempenho',
                data: [], // Dados de desempenho serão atualizados dinamicamente
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
        
        // Simulação de dados para a data selecionada
        const desempenhoData = generateDesempenhoData(selectedDate);
        
        updateChart(chart, desempenhoData);
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

    // Inicialização com uma data padrão
    const initialDate = new Date().toISOString().split('T')[0];
    document.getElementById('data-analise').value = initialDate;
    const initialData = generateDesempenhoData(initialDate);
    updateChart(chart, initialData);
});



// Monitoramento de Painéis
document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo
    const monitoramentoPaineis = {
        nome_painel: 'Painel 1',
        consumo_geral: 5000,
        controle_producao: 'Automático',
        integridade: 'Boa',
        monitoramento_ambiental: 'Regular',
        consumo_equipamento: 2000,
        qualidade_energia: 'Alta',
        otimizacao_energia: 'Ótima',
        relatorio: 'Relatório de produção disponível',
        valor_economizado: 300
    };
    
    const painelContainer = document.getElementById('painel-container');
    painelContainer.innerHTML = `
        <p>Nome do Painel: ${monitoramentoPaineis.nome_painel}</p>
        <p>Consumo Geral: ${monitoramentoPaineis.consumo_geral} kWh</p>
        <p>Controle de Produção: ${monitoramentoPaineis.controle_producao}</p>
        <p>Integridade: ${monitoramentoPaineis.integridade}</p>
        <p>Monitoramento Ambiental: ${monitoramentoPaineis.monitoramento_ambiental}</p>
        <p>Consumo por Equipamento: ${monitoramentoPaineis.consumo_equipamento} kWh</p>
        <p>Qualidade da Energia: ${monitoramentoPaineis.qualidade_energia}</p>
        <p>Otimização de Energia: ${monitoramentoPaineis.otimizacao_energia}</p>
        <p>Relatório: ${monitoramentoPaineis.relatorio}</p>
        <p>Valor Mensal Economizado: R$ ${monitoramentoPaineis.valor_economizado}</p>
    `;
});

// Gestão de Falhas
document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo
    const gestaoFalhas = {
        tipo_falha: 'Falha de conexão',
        relatorio_geral: 'Problemas de conexão intermitente',
        emissao_carbono: 'Baixa',
        relatorio_equipamento: 'Equipamento X com falhas frequentes',
        analise_risco: 'Médio risco de falhas'
    };
    
    const falhasContainer = document.getElementById('falhas-container');
    falhasContainer.innerHTML = `
        <p>Tipo de Falha: ${gestaoFalhas.tipo_falha}</p>
        <p>Relatório Geral: ${gestaoFalhas.relatorio_geral}</p>
        <p>Emissão de Carbono: ${gestaoFalhas.emissao_carbono}</p>
        <p>Relatório por Equipamento: ${gestaoFalhas.relatorio_equipamento}</p>
        <p>Análise de Risco e Contingência: ${gestaoFalhas.analise_risco}</p>
    `;
});


// Menu hambuguer 
document.addEventListener('DOMContentLoaded', () => {
    // Código existente ...

    const menuHamburger = document.getElementById('menu-hamburger');
    const navLinks = document.getElementById('nav-links');

    menuHamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuHamburger.classList.toggle('open');
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
