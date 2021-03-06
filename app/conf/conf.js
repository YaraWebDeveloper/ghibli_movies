/* Using enviroment */
global.enviroment = 'prod';

/* Using to export constants */
const conf = {
  dev: {},
  prod: {},
  test: {},
}

/* Enviroment on development */
conf['dev']['base_url'] = 'http://10.41.6.41';
conf['dev']['port'] = '3500';
conf['dev']['apiServer'] = 'https://ghibliapi.herokuapp.com/';
conf['dev']['apiImg'] = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
// conf['dev']['apiServer'] = 'https://pengibotback-stg.keos.co/';
conf['dev']['fileName'] = 'all_dist';
conf['dev']['minify'] = true;
conf['dev']['mediaSrc'] = 'http://10.41.6.41';
conf['dev']['mediaApi'] = 'http://10.41.6.41:3500/dist/';
conf['dev']['keyCrypto'] = 'K30s2018G4@';

/* Enviroment on development */
conf['prod']['base_url'] = 'https://ghibli-movies.herokuapp.com';
conf['prod']['port'] = '';
conf['prod']['apiServer'] = 'https://ghibliapi.herokuapp.com/';
conf['prod']['apiImg'] = 'https://api.cognitive.microsoft.com/bing/v7.0/images/search';
// conf['dev']['apiServer'] = 'https://pengibotback-stg.keos.co/';
conf['prod']['fileName'] = 'all_dist';
conf['prod']['minify'] = true;
conf['prod']['mediaSrc'] = 'http://10.41.6.41';
conf['prod']['mediaApi'] = 'https://ghibli-movies.herokuapp.com/dist/';
conf['prod']['keyCrypto'] = 'K30s2018G4@';


/* Export constants */
module.exports = conf[global.enviroment];
