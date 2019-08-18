import { declareChildApplication, start } from 'single-spa';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('react', () => import('./react/react.app.js'), pathPrefix('/', ['/vue']));
declareChildApplication('vue', () => import('.//vue/vue.app.js'), pathPrefix('/vue'));

start();

function pathPrefix(prefix, notAllowed = []) {
    return function (location) {
        return !notAllowed.map(p => pathPrefix(p)(location)).find(a => a) && location.pathname.indexOf(`${prefix}`) === 0;
    }
}
