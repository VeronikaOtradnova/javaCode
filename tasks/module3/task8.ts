//Дан код: 
// @Component(
//   { 
//     selector: 'user', 
//     template: 'Hello, {{(user | async).name}}',
//     {{count}} 
//   }
// )

// export class UserComponent implements OnChanges {
//   @Input() userId: string; 

//   public user: Observable;
  
//   public count = 0;
  
//   constructor(private userService: UserService) {
//     setInterval(() => { count++; }, 500); 
//   }
  
//   ngOnChanges(changes: SimpleChanges): void { 
//     this.user = userService.getUser$(this.userId); 
//   } 
// ) 
//Будет ли изменяться переменная count?

//ОТВЕТ:нет, потому что в setTimeout ипользуется count, а не this.count