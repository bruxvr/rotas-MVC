import dicaBD from '../infra/dicaBD.js';

class dica {
    constructor(dica) {
        this.id_dica = dicaBD.length + 1;
        this.dica = dica;
    }
}

export default dica;