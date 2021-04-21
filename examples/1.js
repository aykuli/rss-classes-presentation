class Employee {
  constructor(name, data) {
    this.name = name;
    this.prevWork = data.prevWorks[data.prevWorks.length - 1];
  }
}

const vasya = new Employee('Vasya', { prevWorks: ['Yandex', 'Mail.ru'] });
