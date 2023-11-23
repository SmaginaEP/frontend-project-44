### Hexlet tests and linter status:
[![Actions Status](https://github.com/SmaginaEP/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/SmaginaEP/frontend-project-44/actions)
<a href="https://codeclimate.com/github/SmaginaEP/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/24240daabd5389f1f5bd/maintainability" /></a>

# Описание
Это первый учебный проект от Hexlet - «Игры разума». 
Состоит из 5 консольных игр. В каждой игре задаются по 3 вопроса, на которые необходимо дать правильные ответы. Если все 3 ответа верны, игра пройдена. В случае неверного ответа игра завершается и предлагается попробовать еще раз.

# Установка
<ol>
    <li>Склонировать репозиторий</li>
    <li>Перейти в репозиторий</li>
    <li>Выполнить команду npm link</li>
    <li>Выполнить команду make install</li>  
</ol>

```
git clone https://github.com/SmaginaEP/frontend-project-44.git
cd frontend-project-44/
npm link
make install
```
<a href="https://asciinema.org/a/4dNNYflRTYSvSxYQAhMilHRon" target="_blank"><img src="https://asciinema.org/a/4dNNYflRTYSvSxYQAhMilHRon.svg" /></a>


# Игры
После установки игры вызываются следующими командами:
<dl>
    <dt style="font-weight: bold;">brain-even</dt><dd>запускает игру "Проверка на чётность"</dd>
    <dt style="font-weight: bold;">brain-calc</dt><dd>запускает игру "Калькулятор"</dd>
    <dt style="font-weight: bold;">brain-gcd</dt><dd>запускает игру "Наибольший общий делитель"</dd>
    <dt style="font-weight: bold;">brain-progression</dt><dd>запускает игру "Арифметическая прогрессия"</dd>
    <dt style="font-weight: bold;">brain-prime</dt><dd>запускает игру "Простое ли число?"</dd>
</dl>

## Установка и демонстация игр
### Проверка на чётность
Пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное. 
Запуск игры: "brain-even"
<a href="https://asciinema.org/a/4gXLh0k1PDZBvebSkJU4VTT6a" target="_blank"><img src="https://asciinema.org/a/4gXLh0k1PDZBvebSkJU4VTT6a.svg" /></a>

### Калькулятор
Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
Запуск игры: "brain-calc"
<a href="https://asciinema.org/a/xIGh64sW30cKeq7Cm3kvGjkRn" target="_blank"><img src="https://asciinema.org/a/xIGh64sW30cKeq7Cm3kvGjkRn.svg" /></a>

### Наибольший общий делитель
Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
Запуск игры: "brain-gcd"
<a href="https://asciinema.org/a/gW3W38bUNi1YOPoWM6QGdmGKT" target="_blank"><img src="https://asciinema.org/a/gW3W38bUNi1YOPoWM6QGdmGKT.svg" /></a>

### Арифметическая прогрессия
Пользователю показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.
Запуск игры: "brain-progression"
<a href="https://asciinema.org/a/45bvLMJziTHunWJkqunv2BvPR" target="_blank"><img src="https://asciinema.org/a/45bvLMJziTHunWJkqunv2BvPR.svg" /></a>

### Простое ли число?
Пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no — если не простое.
Запуск игры: "brain-prime"
<a href="https://asciinema.org/a/m9jXrN2uksW2JJ8ae3fdojT7c" target="_blank"><img src="https://asciinema.org/a/m9jXrN2uksW2JJ8ae3fdojT7c.svg" /></a>