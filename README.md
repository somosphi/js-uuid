# @somosphi/uuid

Utility functions for dealing with UUIDs.

## Installation

```
$ npm install @somosphi/uuid
```

## Quick start

Using Node:

```js
const Uuid = require('@somosphi/uuid');
```

Using Typescript:

```ts
import * as Uuid from '@somosphi/uuid';
```

### Generating a random UUID

```js
const id = Uuid.generate();
console.log(id);
// => '28d53a31-8f6f-4939-a51e-d7dc0f81585f'
```

### Converting a UUID in string format to binary

```js
const binaryId = Uuid.stringToBinary(id);
console.log(binaryId);
// => <Buffer 28 d5 3a 31 8f 6f 49 39 a5 1e d7 dc 0f 81 58 5f>
```

### Converting a UUID in binary format to a string

```js
const stringId = Uuid.binaryToString(binaryId);
console.log(stringId);
// => '28d53a31-8f6f-4939-a51e-d7dc0f81585f'
```
