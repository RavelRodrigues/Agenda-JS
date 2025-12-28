import mongoose from 'mongoose';

export const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {
    
}

//export default HomeModel;