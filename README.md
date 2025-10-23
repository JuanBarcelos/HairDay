# 💈 Sistema de Agendamento de Corte de Cabelo

Um projeto desenvolvido passo a passo para aplicar os fundamentos de **HTML**, **CSS** e **JavaScript**, integrando **Webpack** para modularização e automação do build, e **JSON Server** como backend fake para persistência de dados.

Este sistema simula uma **plataforma de agendamento de barbearia**, permitindo criar, visualizar e gerenciar cortes de cabelo com uma interface limpa e responsiva.

---

## 🚀 Objetivo do Projeto

Consolidar os aprendizados de **desenvolvimento web moderno**, aplicando na prática:

* Estrutura de páginas com HTML
* Estilos com CSS
* Lógica e modularização com JavaScript
* Empacotamento com Webpack
* Comunicação com API (JSON Server)

O sistema permitirá:

* Definir **data e horário**
* Confirmar o **agendamento**
* Visualizar e gerenciar os dados persistidos via API fake

---

## 🧠 Conceitos Aplicados

* Estrutura semântica com HTML5
* Layout responsivo e estilização moderna com CSS3
* Modularização de código com ES Modules
* Empacotamento, otimização e automação com **Webpack**
* Manipulação de DOM e eventos com **JavaScript Vanilla**
* Consumo de APIs REST via **Fetch API**
* Persistência de dados com **JSON Server**
* Manipulação de datas e horários com **DayJS**
* Boas práticas de organização e versionamento

---

## 🧩 Tecnologias Utilizadas

| Tecnologia            | Função                             |
| --------------------- | ---------------------------------- |
| **HTML5**             | Estrutura base do projeto          |
| **CSS3**              | Estilo e responsividade            |
| **JavaScript (ES6+)** | Lógica e interatividade            |
| **Webpack**           | Modularização e build automatizado |
| **JSON Server**       | Backend fake com endpoints REST    |
| **Git/GitHub**        | Controle de versão e portfólio     |

---

## 🧭 Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/JuanBarcelos/HairDay.git
cd HairDay
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Execute ambos os servidores (Webpack + JSON Server)

```bash
npm start
```

### 4️⃣ Acesse no navegador

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🧠 Endpoints do JSON Server

| Método   | Endpoint            | Descrição                         |
| -------- | ------------------- | --------------------------------- |
| `GET`    | `/schedules`        | Lista todos os agendamentos       |
| `POST`   | `/schedules`        | Cria um novo agendamento          |
| `PUT`    | `/agendamentos/:id` | Atualiza um agendamento existente |
| `DELETE` | `/agendamentos/:id` | Remove um agendamento             |

---

## 📸 Prévia do Projeto

*(Adicione aqui uma captura de tela ou GIF da interface assim que estiver funcional)*

---

## 👨‍💻 Autor

**Desenvolvido por [Juan Barcelos](https://github.com/juanbarcelos)**
💡 Desenvolvedor de Software focado em unir lógica, design e propósito — criando soluções funcionais e de alto impacto.