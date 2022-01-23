# Руководство по внесению изменений

Поддерживайте ваш репозиторий обновлённым. Когда наставник принимает ваш пулреквест, он попадает в репозиторий Академии, но не в ваш форк.

#### 1. Не коммитьте ничего самостоятельно в `master` вашего репозитория

Это помешает вам аккуратно обновлять ваш репозиторий, могут возникнуть конфликты.

#### 2. Прежде чем приступать к новому заданию, обновите `master`

Обновить свой репозиторий из репозитория Академии можно так:

```
# В вашей локальной копии переключитесь в ветку master
git checkout master

# Заберите изменения из репозитория Академии¹
git pull academy master

# Отправьте изменения в ваш форк на Гитхабе
git push
```

¹ В `academy` должна быть ссылка на репозиторий Академии. Если его там нет, добавьте:

```
git remote add academy git@github.com:htmlacademy-adaptive/1487923-pink-20.git
```

Когда вы обновили `master`, создайте ветку для нового задания:

```
git checkout -b module2-task1
```

`module2-task1` — это название ветки. Под описанием каждого задания в интерфейсе интенсива для вас будет указано правильное название ветки.

--

#### Есть вопрос?

Посмотрите [коллекцию часто задаваемых вопросов по Git](http://firstaidgit.ru).


# Личный проект «Пинк» [![Build status][travis-image]][travis-url] [![Dependency status][dependency-image]][dependency-url]

* Студент: [Самир Поладов](https://up.htmlacademy.ru/adaptive/20/user/1487923).
* Наставник: `Неизвестно`.

---

**Обратите внимание, что папка с вашими исходными файлами — `source/`.**

Полезный файл:

- [Contributing.md](Contributing.md) — руководство по внесению изменений.

_Не удаляйте и не обращайте внимание на файлы:_<br>
_`.editorconfig`, `.gitattributes`, `.gitignore`, `.stylelintrc`, `.travis.yml`, `package-lock.json`, `package.json`._

---

### Памятка

#### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

#### 2. Создайте форк

[Откройте мастер-репозиторий](https://github.com/htmlacademy-adaptive/1487923-pink-20) и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии будет скопирован в ваш аккаунт.

<img width="800" alt="" src="https://user-images.githubusercontent.com/10909/60808088-259e3a80-a190-11e9-98f7-3c0edd9740f5.jpg">

Получится вот так:

<img width="800" alt="" src="https://user-images.githubusercontent.com/10909/60808087-2505a400-a190-11e9-8caa-2e7584c702cc.jpg">

#### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Также обратите внимание, что клонировать репозиторий нужно через SSH, а не через HTTPS. Нажмите зелёную кнопку в правой части экрана, чтобы скопировать SSH-адрес вашего репозитория:

<img width="800" alt="" src="https://user-images.githubusercontent.com/10909/60808090-259e3a80-a190-11e9-8a64-c58d94803b73.jpg">

Клонировать репозиторий можно так:

```
git clone SSH-адрес_вашего_форка
```

Команда клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

#### 4. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/adaptive/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS. Адаптивная вёрстка и автоматизация](https://htmlacademy.ru/intensive/adaptive)» от [HTML Academy](https://htmlacademy.ru).

[travis-image]: https://travis-ci.com/htmlacademy-adaptive/1487923-pink-20.svg?branch=master
[travis-url]: https://travis-ci.com/htmlacademy-adaptive/1487923-pink-20
[dependency-image]: https://david-dm.org/htmlacademy-adaptive/1487923-pink-20/dev-status.svg?style=flat-square
[dependency-url]: https://david-dm.org/htmlacademy-adaptive/1487923-pink-20?type=dev
