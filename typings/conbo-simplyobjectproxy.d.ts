export = SimpleObjectProxy;

import { EventDispatcher } from 'conbo';

/**
 * Pseudo-class to proxy objects, enabling them to be be used with
 * ConboJS two-way data binding as an alternative to a Hash
 * 
 * @author		Neil Rackett
 */
declare class SimpleObjectProxy extends EventDispatcher
{
	/**
	 * Wraps the specified object using a SimpleObjectProxy
	 * @param 		{any}		target - The object to proxy
	 */
	constructor(target:any);

	/**
	 * Wraps the specified object using a SimpleObjectProxy
	 * @param 		{any}		target - The object to proxy
	 */
	public static create(target:any):SimpleObjectProxy;
}
