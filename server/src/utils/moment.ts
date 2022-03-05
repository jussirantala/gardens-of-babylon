import moment from 'moment';

export const getTimestamp = (unixtimeMs?: number) => moment(unixtimeMs).format('YYYY-MM-DD HH:mm:ss');
