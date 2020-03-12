# akeoplotly

> project for plotly chart using url to pars data and view it

[![NPM](https://img.shields.io/npm/v/akeoplotly.svg)](https://www.npmjs.com/package/akeoplotly) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save akeoplotly
```

## Usage

```jsx
import React, { Component } from 'react'

import Akeoplotly from 'akeoplotly'

class Example extends Component {
  render () {
    return (
      <Akeoplotly url ='#your url'/>
    )
  }
}
```

```jsx
API data format 
{
  data[,12,3,1,3,1,5,1,...],
  date['12/02/2020 15:13:15','12/02/2020 15:13:15','12/02/2020 15:13:15','12/02/2020 15:13:15',.....]
}
```
## License

MIT © [zorguiala](https://github.com/zorguiala)
