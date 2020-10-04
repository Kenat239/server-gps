import mongoose, {Schema, Document} from 'mongoose';


const vehiculoSchema: Schema = new Schema ({
    tipo: {type:String, required:[true, 'El tipo de vehiculo es necesario']},
    placas:{type:String, required:[true, 'Las placas son necesarias'] },
    marca:{type:String, requierd:[true, 'La marca del vehiculo es necesaria']},
    siglas:{type:String, required:[true, 'Las siglas del conomico son necesarias']},
    org:{type:Schema.Types.ObjectId, required:[true, 'la organizacion perteneciente es necesaria']},
    modelo: {type:Number, required:[true, 'El modelo de vehiculo es necesario']},
    status: {type:String, default: 'ACTIVO'},
    gps: {type:String, required: [true, 'el GPS es necesario']},
    img: {type:String, required: false}

}, {collection: 'vehiculos'} );

export default mongoose.model('vehiculos', vehiculoSchema)