# spring-boot-and-angular-2-

Genereate the project..........https://start.spring.io/



split the project into seperate modules

cd myproject
mkdir backend frontend\src\main
move src backend
copy pom.xml backend

edit the pom from parent backend and frontend

cd frontend\src\main
run the cli command: ng new --skip-git --directory frontend ng2boot installing ng2

edit .angular-cli.json

run the maven 
mvn clean install
cd backend
mvn spring-boot-run

Use the angular-cli development server with backend.

development serve runs at localhost:4200
production server runs at localhost:8080

