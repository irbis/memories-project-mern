import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// database access: dbuser:2EIEBu6g2FuttPP5
// connection string: mongodb+srv://<username>:<password>@memories-project-cluste.xcwlmmu.mongodb.net/?retryWrites=true&w=majority

const CONNECTION_URL= 'mongodb+srv://dbuser:2EIEBu6g2FuttPP5@memories-project-cluste.xcwlmmu.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// original connection string could be depricated:
//mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// original parameter could be depricated:
// mongoose.set('useFindAndModify', false);