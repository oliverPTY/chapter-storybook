# Chapter Storybook-Angular

prueba de concepto con storybook y angular.

## paso 1

`npm i`

## paso 2

vamos a generar un nuevo componente para subirlo a storbook

`ng g c components/card`

luego en este paso creamos un archivo llamado `card.component.stories.ts` en la carpeta card previamente creada.

## paso 3

agregamos el siguiente codigo al `card.component.html`

```html
<div class="card">
    <div class="card-image">
      <img src="https://via.placeholder.com/300x200" alt="Card image">
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-text">{{ text }}</p>
      <button class="card-button">Learn More</button>
    </div>
  </div>
```

## paso 4

agregamos el siguiente codigo al `card.component.scss`

```scss
.card {
    width: 300px;
    margin: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .card-image {
    height: 200px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .card-button {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .card-button:hover {
    background-color: #3e8e41;
  }
```

## paso 5

agregamos el siguiente codigo al `card.component.ts`

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    /**
   * texto que tendra el boton
   */
  @Input() title = '';
    /**
   * cuerpo del card
   */
  @Input() text = '';
}
```

## paso 6

agregamos el siguiente codigo al `card.component.stories.ts`

```ts
import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';


const meta: Meta<CardComponent> = {
    component: CardComponent,
  };

  export default meta; 
  type Story = StoryObj<CardComponent>;

  export const card: Story = {
    args: {
      title: 'Yappy',
      text: 'esto es un hola desde storybook',
    },
  };
```
## paso 7

para poder ver los componentes creados y su documentacion colocamos el siguiente comando

`npm run storybook`

aqui podremos ver los componentes creados y su documentacion