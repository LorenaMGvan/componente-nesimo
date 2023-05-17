// export function format(first: string, middle: string, last: string): string {
//     return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
//   }
  
export class Nesimo {

    constructor (numUser) {
      this.numUser = numUser;
    }

    items='';
    arrItems=[];
  
    get getNesimoMultiplo() {
        return this.calcMultiplos3();
    }

    get getNesimoPrimo() {
        return this.calPrimo();
    }
    
    /* Los números primos solo son divisibles entre ellos mismos y el 1, 
    al dividirlos por cualquier otro número, el resultado no es entero
    */
    calPrimo() {
        let arrItems = []; 
        let counter = 1;
    
        for(let numX = 2;   counter <= 100; numX++) {
            let primo = true;

            for(let numY=2; numY < numX; numY++) {
                if(numX % numY === 0) {
                    primo = !primo;
                    break;
                }   
            }

            if(primo) {
                this.items += ',' + numX;
                counter++;
            }
        }

        this.items = this.items.slice(1);
        arrItems = this.items.split(',').map(Number);

        return arrItems.at(this.numUser - 1);
    }
    

    /*
        Formula del enesimo termino= a1 + (n-1)r
        Ejemplo: Determina el 8º termino de la progresion  1,4,7,10
        a1 = 1  >>> el primer numero de la sucesion
        n= 8    >>> el termino a buscar"
        r= 4 -1=3
       
        Sustituyendo >>> donde el 8 es el tèrmino que se busca
        a8 = 1 + (8-1)3
        a8 = 1 + (7)3
        a8 = 1+21 = 22 
        Res= 22
    */
     calcMultiplos3 () {
        let a1 = 3;
        let r = 0;
        let res = 0;
        
        for( let x = 3; x<=9; x++ ) {
            if (x % 3 == 0) this.items += ',' + x;
        }

        this.items = this.items.slice(1);
        this.arrItems = this.items.split(',');
        r = this.arrItems.at(1)-this.arrItems.at(0);
        res = a1 + ( this.numUser  - 1) * r;
        return res;
    }

  }