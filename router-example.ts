import { AbstractRouter } from "./abstract-router";


/**
 * This is a concrete Router example, it defines methods that will
 * be executed for specific path, depending on what we assigned in the
 * registerRoutes method.
 * The argument of the method will be the request body or params (depending
 * on if it's a post/put or another type of request), and the response of
 * the request will be the return of the method.
 */
export class RouterExample extends AbstractRouter {
    protected registerRoutes() {
        this.requestHandler('get', '/stuff', this.getStuff);
        this.requestHandler('get', '/stuff/:test', this.getStuffWithArgs);
        
    }

    getStuff() {
        return ['ga', 'zo', 'bu', 'meu'];
    }

    getStuffWithArgs(params) {
        return params.test + ' doudidou';
    }
}