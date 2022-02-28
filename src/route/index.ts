import { error } from '@middleware';
import { Router } from 'express';

import rest from './rest';

const router: Router = Router({ caseSensitive: true });

router.use('/api/rest', rest, [error.restJson]);

export default router;
