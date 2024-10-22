$(function () {
  // Функция для инициализации поискового поля
  function initSearchBox() {
    // Создание нового экземпляра Bloodhound для поиска
    var pages = new Bloodhound({
      // Токенизатор, который разбивает объекты по пробелам на основе поля 'description'
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      // Токенизатор для разбивки поискового запроса по пробелам
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // Предзагрузка данных из файла search.json
      prefetch: baseurl + '/search.json'
    });

    // Инициализация typeahead для поля поиска
    $('#search-box').typeahead({
      // Минимальная длина запроса для активации поиска
      minLength: 0,
      // Подсветка совпадений в результатах поиска
      highlight: true
    }, {
      // Имя источника данных для typeahead
      name: 'pages',
      // Поле, которое будет отображаться в выпадающем списке
      display: 'title',
      // Источник данных для автозаполнения
      source: pages
    });

    // Обработчик события выбора элемента из выпадающего списка
    $('#search-box').bind('typeahead:select', function (ev, suggestion) {
      // Перенаправление пользователя на URL выбранного элемента
      window.location.href = suggestion.url;
    });
  }

  // Функция для стилизации содержимого в формате Markdown
  function styleContentToMD() {
    // Добавление класса 'table' к таблицам в контейнере с Markdown-содержимым
    $('#markdown-content-container table').addClass('table');
    // Добавление класса 'img-responsive' к изображениям в контейнере с Markdown-содержимым
    $('#markdown-content-container img').addClass('img-responsive');
  }

  // Вызов функции инициализации поискового поля
  initSearchBox();
  // Вызов функции стилизации содержимого
  styleContentToMD();
});
