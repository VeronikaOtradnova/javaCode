//Как затипизировать класс Store?

interface User {
  id: string,
  name: string,
}

class Store { 
  private objects: Map<string, User> = new Map();

  addObject(object:User): void {
    const id = object.id;
    this.objects.set(id, object)
  };

  removableObject(id:string): void {
    this.objects.delete(id)
  };

  getObject(id: string): User | undefined {
    return this.objects.get(id)
  };
}

const userStore = new Store();

const a:User = { id: '1', name: 'Vasya', }

userStore.addObject(a);

const x = userStore.getObject('1')