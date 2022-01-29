import {Address} from './address'; 
export interface User {
	name:string;
	contactNumber:string;
	password:string;
	address: Address;
	role: string;
}