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
  constructor(type, a) {
    this.type = type;
    this.a = a;
  }

  startBuild(resourses) {
    // console.log('Ресурсы в классе: ', resourses);
    this.useResorces(resourses);
  }

  useResorces(resourses) {
    // console.log(`Использовать ${resourses} для постройки ${this.type}`);
  }
}

const garage = new BuildingFunc('гараж');
garage.startBuild('цемент');

const banya = new BuildingClass('баня', '0');
banya.startBuild('брус');

// console.log('BuildingFunc: ', BuildingFunc);
// console.log('BuildingClass: ', BuildingClass);
// console.log('garage: ', garage);
// console.log('banya: ', banya);

for (val in garage) {
  // console.log('1: ', val);
}

for (val in banya) {
  // console.log('2: ', val);
}
