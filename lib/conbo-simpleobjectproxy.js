(function(window, factory)
{
	if (typeof define === 'function' && define.amd) 
	{
		define('conbo-simpleobjectproxy', ['conbo'], factory);
	}
	else if (typeof module !== 'undefined' && module.exports)
	{
		module.exports = factory(require('conbo'));
	}
	else
	{
		window.SimpleObjectProxy = factory(window.conbo);
	}
}
(this, function(conbo)
{
	var s = {};

	/**
	 * Class used to proxy objects, enabling them to be be used with
	 * ConboJS two-way data binding as an alternative to a Hash
	 * 
	 * @class		SimpleObjectProxy
	 * @author		Neil Rackett
	 */
	var SimpleObjectProxy = conbo.EventDispatcher.extend(
	/** @lends conbo.SimpleObjectProxy.prototype */
	{
		__construct: function(target)
		{
			for (var propName in target) 
			{
				// TODO Add support for Arrays?
				// if (Array.isArray(obj[propName]))
				// {
				// 	this[propName] = target[propName].map(function(item, i)
				// 	{
				// 		return trackPropertyUsage(item);
				// 	});
				// 	continue;
				// }
		  
				if (conbo.isObject(target[propName]))
				{
					this[propName] = SimpleObjectProxy.create(target[propName]);
					continue;
				}

				var getter = function()
				{
					return target[propName];
				};

				var setter = function(newValue) 
				{
					if (newValue !== target[propName])
					{
						target[propName] = newValue;
						this.dispatchChange(propName);
					}
				};

				Object.defineProperty(this, propName, {enumerable:true, configurable:true, get:getter, set:setter});
			}
		}
	},
	/** @lends conbo.SimpleObjectProxy */
	{
		/**
		 * Wrap the specified object using an SimpleObjectProxy
		 * 
		 * @memberof	SimpleObjectProxy
		 * @method		create
		 * @param 		{*}				target - The object to proxy
		 * @returns		{SimpleObjectProxy}
		 */
		create: function(target)
		{
			return new SimpleObjectProxy(target);
		}
	});

	return SimpleObjectProxy;

}));
