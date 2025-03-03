// Как создать тип, соответствующий следующему массиву?
// const names = [‘Masha’, ‘Vasya’, ‘Petya’];
	
type TName = 'Masha' | 'Vasya' | 'Petya';
type TNames = TName[];

const namesArr:TNames = ['Masha', 'Vasya', 'Petya']