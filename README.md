# 🚀 SB Intelligence System - Frontend Prototype (MVP)

Bem-vindo ao repositório do **SB Intelligence System**, um Sistema de Apoio à Decisão (SAD) no modelo SaaS (*Software as a Service*) voltado para a automação e inteligência do ciclo de vendas governamentais (B2G) para Distribuidoras de Saúde.

Este repositório contém o **protótipo navegável (Front-end)** da plataforma. O projeto foi idealizado como proposta de criação de um novo negócio para a disciplina de **Empreendedorismo**. 


---

## 🎯 A Proposta de Valor do Negócio (Business Value)
Diferente das plataformas tradicionais de mercado que funcionam apenas como "buscadores" de Diários Oficiais, a proposta de negócio do SB Intelligence é atuar como um parceiro estratégico de ponta a ponta. O protótipo demonstra a operação de três pilares fundamentais:

1. **Scraper Inteligente:** Captação de editais nativamente via API do PNCP (Portal Nacional de Contratações Públicas).
2. **Algoritmo SAD:** Cálculo de viabilidade estatística (*Win Rate*) e sugestão de preços-teto baseados no histórico do órgão e da concorrência local.
3. **Gestão Eletrônica de Documentos (GED):** Controle automatizado da validade de certidões, bloqueando a participação da empresa em editais caso haja inaptidão fiscal, mitigando riscos de *Compliance*.

---

## 🛠️ Arquitetura e Engenharia do Protótipo
Para demonstrar a viabilidade técnica do negócio com máxima performance, o front-end foi concebido sob o princípio estrito de **Separation of Concerns (Separação de Responsabilidades)**. A escolha de não utilizar frameworks pesados de mercado comprova o domínio sobre tecnologias web nativas e prepara a arquitetura para uma futura integração escalável com um Back-end robusto em **Java/Spring Boot**.

* **HTML5 Semântico:** Estrutura limpa, padronizada e modular.
* **CSS3 (Design System Global):** Todo o layout (Grid/Flexbox) e a identidade visual corporativa estão centralizados em um único arquivo (`style.css`), funcionando como um "mini-framework" próprio que garante alta velocidade de carregamento e consistência visual entre todas as telas.
* **Vanilla JavaScript:** Toda a lógica de interface (modais, simulação de aprovações, validações, filtros cruzados de tabelas e cálculo de *Win Rate*) foi desenvolvida do zero em JavaScript puro, utilizando `DOMContentLoaded` para performance otimizada.

---

## 📂 Estrutura de Diretórios do Sistema

A organização do repositório foi desenhada de forma profissional, separando os *assets* (estilos e scripts) das *views* (telas de cada usuário) conforme mapeado no ambiente de desenvolvimento:

    /sb-intelligence-system
    ├── assets/
    │   ├── css/
    │   │   └── style.css                 # Design System Global (Cores, Tipografia e UI)
    │   └── js/                           # Inteligência de interface isolada por funcionalidade
    │       ├── clientes.js
    │       ├── dashboard-admin.js
    │       ├── dashboard-cliente.js
    │       ├── faturas-comissoes.js
    │       ├── financeiro.js
    │       ├── ged-cliente.js
    │       ├── login.js
    │       ├── meus-editais.js
    │       ├── pipeline.js
    │       ├── radar.js
    │       └── suporte.js
    ├── views/
    │   ├── cliente/                      # [Módulo 2] Visão da Distribuidora (Cliente Final)
    │   │   ├── dashboard-cliente.html    # Feed de atividades da consultoria
    │   │   ├── falar-consultor.html      # Canal de tickets e FAQ
    │   │   ├── faturas-comissoes.html    # Gestão de assinatura SaaS e cobranças de êxito
    │   │   ├── ged-cliente.html          # Cofre de documentos e status de validade
    │   │   └── meus-editais.html         # Autorização de matches (One-Click)
    │   └── gestor/                       # [Módulo 1] Painel Operacional da Consultoria
    │       ├── clientes-ged.html         # Auditoria da carteira de clientes
    │       ├── dashboard-admin.html      # Centro de comando, Funil de Vendas e Urgências
    │       ├── editais-sugeridos.html    # Triagem do Robô e análise SAD
    │       ├── financeiro.html           # Controle de faturamento e inadimplência
    │       └── pipeline-crm.html         # Kanban de acompanhamento de disputas
    ├── index.html                        # Ponto de entrada (Landing Page e Roteamento de Login)
    └── README.md                         # Documentação principal (Este arquivo)

---

## 👥 Módulos do Sistema Demonstrados

Para uma avaliação completa do protótipo, o sistema foi dividido nas duas perspectivas reais do modelo de negócio:

### 1. Módulo Gestor (Operacional & Administrativo)
A visão interna da consultoria, focada em produtividade, auditoria e controle de escala.
* **Radar e Triagem:** Filtra o volume massivo de dados públicos do governo e aplica a predição de sucesso da IA antes do edital seguir para a esteira comercial.
* **Pipeline Kanban:** Transforma editais homologados em "cards" visíveis de CRM, organizando o funil de prospecção e os analistas alocados.
* **BI Financeiro:** Monitora de forma centralizada a adimplência das assinaturas corporativas e calcula o faturamento das comissões de êxito (Gráficos em CSS puro).

### 2. Módulo Cliente (Transparência & B2B)
A vitrine de *Customer Success* fornecida para as distribuidoras de saúde contratantes auditarem o serviço.
* **Feed de Transparência:** Painel cronológico que narra em tempo real as operações e lances que o Robô, o SAD e o Consultor humano estão executando em nome da empresa.
* **Match de Oportunidades:** Permite ao empresário analisar as chances de ganho e autorizar a participação na licitação com um único clique (Sistema *One-Click*).
* **Autogestão SaaS:** Interface financeira completa para simulação de upgrade de planos, liquidação de faturas em aberto e regularização documental preventiva (Alertas de GED).

---

## ⚙️ Como Acessar o Protótipo
Por se tratar de um protótipo de alta fidelidade *Client-side* (HTML/CSS/JS estáticos), o projeto roda fluidamente em qualquer dispositivo sem necessidade de instalação de dependências ou servidores locais de execução.

1. Clone este repositório para sua máquina local:
    ```bash
    git clone [https://github.com/SeuUsuario/sb-intelligence-system.git](https://github.com/SeuUsuario/sb-intelligence-system.git)
    ```
2. Acesse a pasta do projeto.
3. Dê um duplo-clique no arquivo `index.html` para executá-lo diretamente em qualquer navegador moderno (*Chrome, Edge, Safari*).

🌐 **Acesso em Nuvem:** O protótipo também encontra-se hospedado e pode ser navegado ao vivo através do [GitHub Pages](URL_DO_SEU_GITHUB_PAGES_AQUI).