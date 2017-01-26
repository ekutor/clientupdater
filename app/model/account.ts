export class Account{
	public system:string;
	
	constructor(
		public id:string,
		public name:string,
		public sic_code:string,
		public date_entered:string,
		public phone_fax:string,
		public phone_office:string,
		public cumpleano_c:string,
		public genero_c:string,
		public ballots:string = null,
	){}
}