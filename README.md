TypeScript Lodash Truncate Importing Demo
=========================================

Definition of "lodash.truncate" is:

```
import { truncate } from "lodash";
export = truncate;
```

When we import it in typescript like this:

```
import * as truncate from 'lodash.truncate';
```

It can't be compiled and reported error like:

```
TS2497: Module '"<this-project>/node_modules/@types/lodash.truncate/index"' resolves to a non-module entity and cannot be imported using this construct.
```

We should use another syntax to import it:

```
import truncate = require('lodash.truncate');
```

Everything including typing works well now.

```
npm install
npm run demo
```

