function BuildingFunc(type) {
  this.type = type;

  this.startBuild = function (resourses) {
    // console.log('Ресурсы в функции: ', resourses);
    this.useResorces(resourses);
  };

  this.useResorces = function (resourses) {
    // console.log(`Использовать ${resourses} для постройки ${this.type}`);
  };
}

class BuildingClass {
  constructor(type) {
    this.type = type;
  }

  startBuild(resourses) {
    // console.log('Ресурсы в классе: ', resourses);
    this.useResorces(resourses);
  }

  useResorces(resourses) {
    // console.log(`Использовать ${resourses} для постройки ${this.type}`);
  }
}

const fb1 = new BuildingFunc('гараж');
fb1.startBuild('цемент');

const fb2 = new BuildingClass('баня');
fb2.startBuild('брус');

// console.log('BuildingFunc: ', BuildingFunc);
// console.log('BuildingClass: ', BuildingClass);

for (val in fb1) {
  // console.log('1: ', val);
}

for (val in fb2) {
  // console.log('2: ', val);
}
