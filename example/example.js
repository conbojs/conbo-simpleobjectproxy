var obj = {a:0};
var proxy = SimpleObjectProxy.create(obj);

proxy.addEventListener('change', (event) =>
{
	console.log(`Property "${event.property}" changed to ${JSON.stringify(event.value)}`);
});

setInterval(() => ++proxy.a, 1000);
