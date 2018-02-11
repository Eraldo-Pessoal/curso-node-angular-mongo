
1. Run mongodb:
    "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

2. Run projeto:
    Na pasta do backend executar
    npm run dev

3. Dependencias:
    npm install express body-parser mongoose node-restful mongoose-paginate lodash express-query-int pm2

    npm install nodemon --save-dev

4. ADD billings
    http://localhost:3003/api/billingCycles (POST)
    name:Janeiro/17
    month:1
    year:2017
    credits[0][name]:Salario Empresa
    credits[0][value]:6500
    credits[1][name]:Salario Professor
    credits[1][value]:2700
    debts[0][name]:Telefone
    debts[0][value]:89.56
    debts[0][status]:PAGO


    http://localhost:3003/api/billingCycles (POST)
    name:Janeiro/17
    month:1
    year:2017
    credits[0][name]:Salario Empresa
    credits[0][value]:6500
    credits[1][name]:Salario Professor
    credits[1][value]:2700
    debts[0][name]:Telefone
    debts[0][value]:89.56
    debts[0][status]:PAGO
    debts[1][name]:Condominio
    debts[1][value]:720
    debts[1][status]:AGENDADO



