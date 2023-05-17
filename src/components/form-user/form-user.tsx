import { Component, State, Prop, h } from '@stencil/core';
import { Nesimo } from '../../utils/Nesimo';

@Component({
  tag: 'formuser-component',
  styleUrl: 'formuser-component.css',
  shadow: true,
})
export class FormUserComponent {
  @State() value: number;
  @Prop() nesimoPrimo: number;
  @Prop() nesimoMultiplo3: number;


  handleSubmit(e) {
    e.preventDefault()
    this.nesimoPrimo = new Nesimo(this.value).getNesimoPrimo;
    this.nesimoMultiplo3 = new Nesimo(this.value).getNesimoMultiplo;
  }

  handleChange(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Ingresa un número:
            <input type="number"
              name="userNum"
              value={this.value}
              onInput={(event) => this.handleChange(event)} />
          </label>
          <input type="submit" value="Resultado" />
        </form>

        <result-component
          resNesimoPrimo={this.nesimoPrimo}
          resNesimoMultiplo3={this.nesimoMultiplo3}>
        </result-component>
      </div>
    );
  }
}
