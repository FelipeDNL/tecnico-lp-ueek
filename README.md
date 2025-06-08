# movefit - React + Laravel
<p align='center'>
  <img src='https://github.com/user-attachments/assets/57979977-e5f7-483b-9721-3cbde77ec7c2'/>
</p>

Projeto feito de acordo com o layout proposto utilizando o [starter kit do Laravel para React](https://laravel.com/docs/12.x/starter-kits#react). Inicialmente havia escolhido Next.js + Laravel mas a partir do Laravel 12.x, 
Laravel Breeze, que seria usado em conjunto com Next.js, já não é mais [oficialmente documentado pelo Laravel](https://laravel.com/docs/12.x/starter-kits) e a fim de não me complicar demais, escolhi React sem framework frontend. 

Ainda sim, tentei meu melhor para seguir o padrão de projeto do starter kit. Assim os componentes principais se encontram em:

### Frontend:
```
resources/js/
├── components/            # Componentes reusáveis
├── hooks/                 # React hooks
├── layouts/               # Layouts do site
└── pages/                 # Paginas
    ├── dashboard.tsx      # Mostrar, editar, apagar e exportar depoimentos
    └── landing-page.tsx   # Página principal
```
### Backend: 
```
app/
├── Http/
    └── Controllers/                   # Controllers de funções
        ├── Auth/                      # Autenticação
        └── DepoimentosController.php  # Depoimentos
├── Models/                            # Modelos para o banco de dados
    ├── Users.php                      # Usuarios
    └── Depoimentos.php                # Depoimentos
database/                  
└── migrations/                        # Migrations p/ controlar mudanças
    ├── create_users_table.php         # Migrations de usuarios
    └── create_depoimentos_table.php   # Migrations de depoimentos
routes/                                # Rotas
├── auth.php                           # Autenticação
├── depoimentos.php                    # Depoimentos 
└── settings.php                       # Configuração da conta
```

## Stack Principal
Usado apenas os componentes empacotados com o starter kit de React do Laravel.

- **Backend:** [Laravel](https://laravel.com/) (PHP)
- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Inertia.js:** Integração entre Laravel e React ([Inertia.js](https://inertiajs.com/))
- **Banco de Dados:** SQLite
- **ORM:** Eloquent (Laravel)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** Shadcn/ui

&emsp;
# Rodar Projeto Localmente
Primeiramente confirme que você tem PHP, Composer, e o instalador do Laravel na sua máquina. Caso não tenha você pode simplesmente rodar essa linha de código no seu terminal

### Abra Windows PowerShell como administrador (botão direito no botão iniciar):
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://php.new/install/windows/8.4'))
```
<sup>Fonte e opções para Linux/MacOS: https://laravel.com/docs/12.x/installation#installing-php </sup>

### Também é necessário Node.js e NPM (Node Package Manager)
Você pode obter esses dois baixando Node.js(LTS) aqui:
https://nodejs.org/pt

## Passo-a-passo
Após instalar o necessário você pode seguir esses passos para rodar esse projeto localmente na sua máquina
### 1. Clone o repositório
```
git clone https://github.com/FelipeDNL/tecnico-lp-ueek/
cd tecnico-lp-ueek
```
Ou simplesmente [clique aqui e extraia o arquivo](https://github.com/FelipeDNL/tecnico-lp-ueek/archive/refs/heads/main.zip) em uma pasta separada e navegue até essa pasta com o seu editor preferido (VSCode por exemplo).

Já na pasta do projeto e com o terminal do seu editor aberto, digite o seguintes comandos:
### 2. Instale as dependências do PHP (Laravel)
```
composer install
```
### 3. Instale as dependências do Node.js
```
npm install
```
### 4. Configure o arquivo .env
```
cp .env.example .env
```
### 5. Gere a chave da aplicação
```
php artisan key:generate
```
### 6. Rode as migrations
```
php artisan migrate
```
### 7. Inicie o servidor de desenvolvimento do Laravel
```
composer run dev
```
### Pronto!
### Espere alguns segundos e o projeto irá rodar no URL http://localhost:8000 no seu navegador.

&emsp; 
## Envio de emails (Opcional)
Este projeto utiliza o Laravel para envio de e-mails como redefinição de senha. Sendo assim é necessário configurar um servidor de e-mail localmente para que os emails sejam enviados.
Isso é completamente opcional, mas caso queira testar essas funcionalidades, você pode seguir esses passos para conseguir enviar e-mails:

## 1. Escolha um serviço de e-mail

Você pode usar serviços como:
- [Mailtrap](https://mailtrap.io/) (para testes)
- [Gmail SMTP](https://support.google.com/mail/answer/7126229?hl=pt-BR) (testei com esse, usando uma [senha de app](https://support.google.com/mail/answer/185833?hl=pt-BR))
- [SendGrid](https://sendgrid.com/)
- [Mailgun](https://www.mailgun.com/)
- [Amazon SES](https://aws.amazon.com/pt/ses/)

## 2. Configure as variáveis de ambiente

Edite o arquivo `.env` na raiz do projeto com as credenciais do seu serviço de e-mail. Exemplo para SMTP:
```
MAIL_MAILER=smtp
MAIL_HOST=smtp.seuprovedor.com
MAIL_PORT=587
MAIL_USERNAME=seu_usuario@dominio.com
MAIL_PASSWORD=sua_senha
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=seu_usuario@dominio.com
MAIL_FROM_NAME="Nome do Remetente"
```
