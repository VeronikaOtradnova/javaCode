//Найти ошибки https://static.itconsult-web.ru/file/1160/1710324329545.png

//1. items - Используется хук useState, но не используется setState для обновления стейта, 
// вместо этого в handleAddButtonClick стейт мутируется

//2. Все новые айтемы будут создаваться с id 154, так нельзя, лучше использовать Date.now() для генерации id

//3. есть инпут, но значение в нём изменить не получится. Чтобы это исправить, нужно написать onChange,
//  в котором мы будем вызывать setNameValue (который изначально не был объявлен, его тоже нужно добавить)

//4. В компоненте Item {name} был написан перед тегом span, а span был пустым, видимо по ошибке

//5. <Item key={item.id} {...item} /> - не могу назвать это ошибкой, но лучше передавать пропсы в компонент более явно. 

//Исправленный вариант:
function SomeComponent() {
  const [items, setItems] = useState(getItems);
  const [nameValue, setNameValue] = useState('');

  const handleAddButtonClick = () => setItems([...items, {id: Date.now(), name: nameValue}])

  const handleInputChange = (e) => setNameValue(e.target.value);

  return(
    <>
      <div>
        <button onClick={handleAddButtonClick}>Add item</button>
        <input 
          placeholder='name'
          value={nameValue}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {
          items.map(item => (
            <Item key={item.id} id={item.id} name={item.name} />
          ))
        }
      </div>
    </>
  )
}

function Item({id, name}) {
  return (
    <div>
      <strong>{id}.</strong>
      {' '}
      <span>{name}</span>
    </div>
  )
}