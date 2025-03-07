//Что выведет в консоль, почему? 

const object = { 
  age: 9, 
  getValue() { 
    return this.age; 
  }, 
  getAge: () => { 
    return this.age; 
  }, 
}; 

console.log(object.getValue()); 
//9, тк this ссылается на объект object, в котором age = 9

console.log(object.getAge()); 
//undefined, тк у стрелочных ф нет своего this, и методу приходится
//использовать this из внешнего окружения, в данном случае это this глобального объекта, в котором нет св-ва age