// способы выбора елементов с разметки, в круглых скобках () всегда открываем кавычки "" и в них записываем (""):

// по классу: const elem = document.querySelector('.elem-class'); - через точку впереди;
// по data-: const elem = document.querySelector('tag[data-NAMEDATA="nameOfData-something"]'); - певым пишется сам тег с разметки, открываются квадратные скобки [], в них копиреем data-something='nameOfDataSomething', вставляем. Скобки "" внешние и скобки названия даты - должны быть разными;
// по тегу: const elem = document.querySelector('tag'); - просто название самого тега: ul, li, a, p, span и т. д.;
// по id: const elem = document.querySelector('#nameOdId'); - через решетку впереди.
