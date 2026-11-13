# Book Manager

Веб-приложение для учёта личной библиотеки. Позволяет добавлять книги,
просматривать список, удалять записи и фильтровать по автору.

## Стек

- Python 3.10+
- Flask 3.0
- Flask-SQLAlchemy 3.1
- SQLite
- HTML, CSS, JavaScript (Fetch API)

## Структура проекта

    book-manager/
    ├── app.py
    ├── models.py
    ├── requirements.txt
    ├── templates/
    │   └── index.html
    └── static/
        ├── style.css
        └── script.js

## Установка и запуск

1. Клонировать репозиторий:

       git clone https://github.com/<ваш-username>/book-manager.git
       cd book-manager

2. Создать виртуальное окружение:

       python -m venv venv
       source venv/bin/activate      # Linux / macOS
       venv\Scripts\activate         # Windows

3. Установить зависимости:

       pip install -r requirements.txt

4. Запустить приложение:

       python app.py

5. Открыть в браузере: http://127.0.0.1:5000

База данных `books.db` создаётся автоматически при первом запуске.

## API

| Метод  | Endpoint           | Описание            |
|--------|--------------------|---------------------|
| GET    | /                  | Главная страница    |
| GET    | /api/books         | Список всех книг    |
| POST   | /api/books         | Добавить книгу      |
| DELETE | /api/books/<id>    | Удалить книгу по ID |

Пример POST-запроса:

    curl -X POST http://127.0.0.1:5000/api/books \
      -H "Content-Type: application/json" \
      -d '{"title": "Clean Code", "author": "Robert C. Martin", "year": 2008}'

## Возможные доработки

- Аутентификация пользователей
- Редактирование книг
- Поиск по названию и году
- Пагинация
- Статус прочтения
- Экспорт в CSV / JSON

## Лицензия

MIT
