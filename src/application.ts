import { json, urlencoded } from 'body-parser';
import express, { Express } from 'express';
import routes from '@route';
import helmet from 'helmet';
import morgan from 'morgan';

const application: Express = express();

// Server access log
application.use(
  morgan(
    ':remote-addr - :remote-user [:date[iso]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'
  )
);

// Set security & utilities
application.use(helmet());
application.use(json({ limit: '50mb' }));
application.use(urlencoded({ extended: true, limit: '50mb' }));

// Route handlers
application.use(routes);

export default application;
