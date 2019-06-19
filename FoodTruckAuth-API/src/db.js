import mongoose from 'mongoose';
import config from './config'

export default callback => {
    const db = mongoose.connect(config.mongoUrl,{ useNewUrlParser: true,  useCreateIndex: true, });
    callback(db);
}