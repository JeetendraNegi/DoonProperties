# DoonProperties

1- Create a network first so app and db container will connect with each other 
--> docker network create mongodb-network

2- Run the mongo container using following command 
--> docker run -d --name mongo-db -p 27016:27017 --network mongodb-network -v D:/MongoDBs:/data/db mongo

3- run the doonproperty API project and map that container with the same network 
--> docker network connect mongodb-network <app-container-name/id>
