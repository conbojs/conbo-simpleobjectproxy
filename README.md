# SimpleObjectProxy for ConboJS 4

`SimpleObjectProxy` is an experimental class for ConboJS when used with browser that don't currently support the ES2015 `Proxy` class, to wrap plain JavaScript objects to enable them to be be used with ConboJS two-way data binding, as an alternative to using a `Hash` or similar data model.

The `SimpleObjectProxy` class can be imported as an AMD, CommonJS or global module.

## Getting started

The `SimpleObjectProxy` class was inspired by the [Apache Flex class of the same name](https://flex.apache.org/asdoc/mx/utils/ObjectProxy.html) and serves the same purpose.

You can create a new `SimpleObjectProxy` using the static `create` method:

```javascript
var obj = {a: 0};
var proxy = SimpleObjectProxy.create(obj);
```

Please note: `SimpleObjectProxy` can only proxy properties that already exist on the source object.

If you're targeting browsers that support the ES2015 `Proxy` class, use [ObjectProxy](https://github.com/conbojs/conbo-objectproxy).

Make a donation
---------------

If you find this project useful, why not buy us a coffee (or as many as you think it's worth)?

[![Make a donation](https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif)](http://bit.ly/2VmkLdY)
