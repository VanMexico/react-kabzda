import { Accordion } from './components/Accordion.tsx'
import { OnOff } from './components/OnOff.tsx'

export const App = () => {
  return (
    <>
      <OnOff isOn={true} />
      <Accordion
        title="Заголовок аккордиона"
        body="Описание первого аккордиона"
      ></Accordion>
      <Accordion
        title="Заголовок аккордиона 2"
        body="Описание второго аккордиона"
        isExpanded={true}
      />
      <Accordion
        title="Заголовок аккордиона 3"
        body="Описание третьего аккордиона"
      />
    </>
  )
}
