
/** 
 * @param {string} cliente
 * @param {class} artigo
 */

class Factura {

    constructor(cliente, artigo) {
        this.id = new Date().getTime();
        this.cliente = cliente;
        this.artigo = [artigo];
    }


    addMenu(artigo) {
        this.artigo.push(artigo);
    }

}

/** 
 * @param {string} menu
 * @param {string} extra
 */

class Artigo {

    constructor(menu, extra) {
        this.menu = menu;
        this.extra = extra;
    }

}


