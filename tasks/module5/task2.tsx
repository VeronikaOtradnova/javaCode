//Поразмышляй что это может быть за компонент, что он может делать на странице. 
  //Это штука, которая визуализирует прогресс пользователя по шагам во время 
  //какого-то процесса, например во время заполнения длинной фоомы

// Расскажи как бы ты переписал этот код чтобы он стал идельным на твой взгляд.
//1. я бы не выносила генерацию шагов в отдельную функцию и эту логику оставила бы в компоненте Steps для лучшей читаемости
//2. вместо того, чтобы идти сложным путём и создавать массив steps, использовала бы Array.from в jsx
//3. немного иначе типизировала бы компонент Steps, явно указав, что это функциональный компонент
//4. добавила бы возможность передавать другие компоненты в качестве ActiveStep и Step

type StepperProps = {
  length: number,
  activeStep: number,
  StepComponent?: React.FC,
  ActiveStepComponent?: React.FC,
}

const Stepper:React.FC<StepperProps> = ({length, activeStep, StepComponent = Step, ActiveStepComponent = ActiveStep}) => {
  return (
    <StepperContainer>
      {
        Array.from({ length }, (_, i) => (
          i === activeStep ?
          <ActiveStepComponent key={i} /> :
          <StepComponent key={i} />
        ))
      }
    </StepperContainer>
  )
}