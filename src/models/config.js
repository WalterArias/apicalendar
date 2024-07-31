//importar orm para mongoose

import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
      
        const uri = 'mongodb://localhost:27017/calendario';
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
       // process.exit(1);
    }
};

export default conectarDB;
