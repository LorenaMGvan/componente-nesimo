const {Nesimo} = require('./Nesimo');

xdescribe('Test de Números Primos', () => {

    it('El 0 termino enesimo de los nùmeros Primos es 0', () => {
        const item = new Nesimo(0);
        expect(item.getNesimoPrimo).toBe(0);   
    });
    it('El 1 termino enesimo de los nùmeros Primos es 2', () => {
        const item = new Nesimo(1);
        expect(item.getNesimoPrimo).toBe(2);   
    });

    it('El 2 termino enesimo de los nùmeros Primos es 3', () => {
        const item = new Nesimo(2);
        expect(item.getNesimoPrimo).toBe(3);   
    });

    it('El 3 termino enesimo de los nùmeros Primos es 5', () => {
        const item = new Nesimo(3);
        expect(item.getNesimoPrimo).toBe(5);   
    });

    it('El 4 termino enesimo de los nùmeros Primos es 7', () => {
        const item = new Nesimo(4);
        expect(item.getNesimoPrimo).toBe(7);   
    });

    it('El 5 termino enesimo de los nùmeros Primos es 11', () => {
        const item = new Nesimo(5);
        expect(item.getNesimoPrimo).toBe(11);   
    });

    it('El 6 termino enesimo de los nùmeros Primos es 13', () => {
        const item = new Nesimo(6);
        expect(item.getNesimoPrimo).toBe(13);   
    });

    it('El 7 termino enesimo de los nùmeros Primos es 17', () => {
        const item = new Nesimo(7);
        expect(item.getNesimoPrimo).toBe(17);   
    });

    it('El 8 termino enesimo de los nùmeros Primos es 19', () => {
        const item = new Nesimo(8);
        expect(item.getNesimoPrimo).toBe(19);   
    });

    it('El 9 termino enesimo de los nùmeros Primos es 23', () => {
        const item = new Nesimo(9);
        expect(item.getNesimoPrimo).toBe(23);   
    });

    it('El 10 termino enesimo de los nùmeros Primos es 29', () => {
        const item = new Nesimo(10);
        expect(item.getNesimoPrimo).toBe(29);   
    });
    
});

describe('Test de multiplos del 3', () => {
    it('El 0 termino enesimo del multiplo de 3 Debe ser 0', () => {
        const item = new Nesimo(0);
        expect(item.getNesimoMultiplo).toBe(0);
    });

    it('El 1 termino enesimo del multiplo de 3 Debe ser 3', () => {
        const item = new Nesimo(1);
        expect(item.getNesimoMultiplo).toBe(3);
    });

    it('El 2 termino enesimo del multiplo de 3 Debe ser 6', () => {
        const item = new Nesimo(2);
        expect(item.getNesimoMultiplo).toBe(6);
    });

    it('El 3 termino enesimo del multiplo de 3 Debe ser 9', () => {
        const item = new Nesimo(3);
        expect(item.getNesimoMultiplo).toBe(9);
    });

    it('El 4 termino enesimo del multiplo de 3 Debe ser 12', () => {
        const item = new Nesimo(4);
        expect(item.getNesimoMultiplo).toBe(12);
    });
    it('El 5 termino enesimo del multiplo de 3 Debe ser 15', () => {
        const item = new Nesimo(5);
        expect(item.getNesimoMultiplo).toBe(15);
    });

    it('El 6 termino enesimo del multiplo de 3 Debe ser 18', () => {
        const item = new Nesimo(6);
        expect(item.getNesimoMultiplo).toBe(18);
    });

    it('El 7 termino enesimo del multiplo de 3 Debe ser 21', () => {
        const item = new Nesimo(7);
        expect(item.getNesimoMultiplo).toBe(21);
    });

    it('El 8 termino enesimo del multiplo de 3 Debe ser 24', () => {
        const item = new Nesimo(8);
        expect(item.getNesimoMultiplo).toBe(24);
    });

    it('El 9 termino enesimo del multiplo de 3 Debe ser 27', () => {
        const item = new Nesimo(9);
        expect(item.getNesimoMultiplo).toBe(27);
    });

    it('El 10 termino enesimo del multiplo de 3 Debe ser 30', () => {
        const item = new Nesimo(10);
        expect(item.getNesimoMultiplo).toBe(30);
    });

    it('El 100 termino enesimo del multiplo de 3 Debe ser 300', () => {
        const item = new Nesimo(100);
        expect(item.getNesimoMultiplo).toBe(300);
    });
});

  
