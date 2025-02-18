//Задача: Какой итоговый состав интерфейса IContainerExt?

interface ICountainerExt {
  something?: any,
}

interface IContainer {
  id: number;
  title: string;
  children: IContainerExt[]
}

interface IContainerExt extends Omit<IContainer, 'children'> {
  active?: boolean;
  children: ICountainerExt[];
}

// interface IContainerExt {
//   id: number;
//   title: string;
//   active?: boolean;
//   children: ICountainerExt[];
// }