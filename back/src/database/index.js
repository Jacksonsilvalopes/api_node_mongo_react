import mongoose from 'mongoose'

class Database {

    constructor() {
       
        this.mongoDataBase() 
    }

    
    mongoDataBase() {
        mongoose.connect('mongodb://localhost/react', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then(() => {
            console.log(" Conexão realizada com sucesso! ")
        }).catch((erro) => {
            console.log(" Conexão não foi realizada!" + erro)
        });

    }


}

export default new Database()

