# Що таке компонент Box?

Представте ситуація коли необхідно зробити багато однотипних компонентів, тобто у нас є контейнери(нам треба зробити flex контейнер, секцію, у якомісь віджеті div з базовими стилями поставити) і щоб не робити таку рутинну роботу 100- 500 разів підряд ми створюємо компонент box - це стандартний компонент в дизайн системах який дозволяє нам спростити цю роботу.

## Ласкаво просимо в таку штуку як [styled-system.com/](https://styled-system.com/)

Воно працює з emotion/styled з коробки
Ми створюємо компонент Box із <div>
const Box = styled('div')(
typography,
space,
color
)

і з styled-system
ми беремо typography, space, color
import { typography, space, color } from 'styled-system'

А потім коли використовуємо цей компонент Box
ми просто ПРОПСАМИ передаємо значення

<Box
fontSize={4}
fontWeight='bold'
p={3}
mb={[ 4, 5 ]}
color='white'
bg='primary'>
Hello
</Box>
