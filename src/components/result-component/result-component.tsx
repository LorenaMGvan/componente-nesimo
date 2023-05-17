import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'result-component',
  styleUrl: 'result-component.css',
  shadow: true,
})
export class ResultComponent {
    
    @Prop()resNesimoPrimo: number;
    @Prop()resNesimoMultiplo3: number;

    render() {
        return(
            <div class="wrapper-result">
                <h3>Los resultados</h3>
                <h4>Nésimo Primo:</h4>
                {this.resNesimoPrimo}

                <h4>Nésimo Multiplo de 3:</h4>
                {this.resNesimoMultiplo3}
            </div>
        )
      }
}
