# Star Wars API Wrapper

[![Build Status](https://travis-ci.org/chariondm/starwarsapi-wrapper.svg?branch=master)](https://travis-ci.org/chariondm/starwarsapi-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/chariondm/starwarsapi-wrapper/badge.svg?branch=master)](https://coveralls.io/github/chariondm/starwarsapi-wrapper?branch=master)

Um 'wrapper' para trabalhar com [Star Wars API](https://swapi.co/).

## Browser Support

Esta biblioteca depende do [Fetch API](https://fetch.spec.whatwg.org/). E esta API é suportada pelos browers abaixo.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Não ✘ |

## Depêndencias

Esta biblioteca depende do [fetch](https://fetch.spec.whatwg.org/) para realizar requests para [The Star Wars API](https://swapi.co/). Para ambientes que não suporte o fetch, você deverá utilizar o [polyfill](https://github.com/github/fetch) para browser ou o [polyfill](https://github.com/bitinn/node-fetch) para Node.

## Instalação

```sh
$ npm install swapi-wrapper --save
```

## Como usar

### ES6

```js
// para importar um método especifico
import { method } from 'swapi-wrapper';

// to import everything
import * as swApiWrapper from 'swapi-wrapper';
```

### CommonJS

```js
var swApiWrapper = require('swapi-wrapper');
```

### UMD nos Browsers

```html
<!-- to import non-minified version -->
<script src="swapi-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="swapi-wrapper.umd.min.js"></script>
```

Após isso a biblioteca estará disponível para o Global como `swApiWrapper`. Conforme exemplo abaixo:

```js
const planet = swApiWrapper.getPlanetRandom();
```

### Exemplo de utilização

Você pode encontrar um exemplo de utilização em [https://chariondm.github.io/](https://chariondm.github.io/).

## Métodos

> Segue abaixo os métodos disponível na biblioteca.

### getPlanet(id)

> Obtem informações sobre um específico planeta de acordo com o id fornecido. Teste em [The Star Wars API](https://swapi.co/api/planets/1/).

**Parâmetro(s)**

| Parametro | Tipo              | Domínio                                 |
|-----------|-------------------|-----------------------------------------|
|`id`       |*inteiro*          | '>= 1 e <= 61'                          |

**Exemplo**

```js
getPlanet(10)
  .then(data => {
    // faça o que você quiser com o retorno
  })
```

### getPlanets(query)

> Obtém informações sobre todos os planetas. Teste em [The Star Wars API](https://swapi.co/api/planets/1/).

**Parâmetro(s)**

| Parametro | Tipo    | Domínio                                                            |
|-----------|---------|--------------------------------------------------------------------|
|`query`    |*string* | 'Ver em [The Star Wars API](https://swapi.co/documentation#search)'|


**Exemplo**

```js
getPlanets('?page=2')
  .then(data => {
    // faça o que você quiser com o retorno
  })
```

### getPlanetRandom()

> Obtem informações sobre um planeta aleatório. Teste em [The Star Wars API](https://swapi.co/api/planets/1/).

**Parâmetro(s)**

N/A.


**Exemplo**

```js
getPlanetRandom()
  .then(data => {
    // faça o que você quiser com o retorno
  })
```

## Contribuir

Por favor leia [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhe sobre nosso código de conduta, e o processo para nós submeter pull requests.

## Versioning

Nós utilizamos o padrão [SemVer](http://semver.org/) para versionamento. Para as versões disponíveis, consulte o [tags on this repository](https://github.com/chariondm/starwarsapi-wrapper/tags).

## Autor

| ![Marcelo Souza](https://media.licdn.com/dms/image/C4D03AQFtQ-rxqWha6Q/profile-displayphoto-shrink_200_200/0?e=1533772800&v=beta&t=to6GUnROYFUy4Piq9EXCmFlaYuHYQOtoB2ZibHlXKSA)|
|:---------------------:|
|  [Marcelo Souza](https://github.com/chariondm/)   |

Veja a lista de [contribuidores](https://github.com/chariondm/starwarsapi-wrapper/contributors) que participaram deste projeto.

## Licença

Este projeto está licenciado sob the MIT License - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes