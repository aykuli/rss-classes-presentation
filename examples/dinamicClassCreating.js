function makeClass(type) {
  switch (type) {
    case 'pen':
      return class Pen {
        constructor(articul, color) {
          this.articul = articul;
          this.color = color;
        }
      };
    case 'notebook':
      return class Notebook {
        constructor(articul, pageNumber, print) {
          this.articul = articul;
          this.pageNumber = pageNumber;
          this.print = print;
        }
      };
    case 'album':
      return class Album {
        constructor(articul, pageNumber, size) {
          this.articul = articul;
          this.pageNumber = pageNumber;
          this.size = size;
        }
      };
  }
}

const PenCommon = makeClass('pen');
const NotebookCommon = makeClass('notebook');
const AlbumForDraw = makeClass('album');

// console.log('PenCommon: ', PenCommon);
// console.log('NotebookCommon: ', NotebookCommon);
// console.log('AlbumForDraw: ', AlbumForDraw);

const pen0 = new PenCommon('111111', 'red');
const pen1 = new PenCommon('111112', 'red');
const notebook0 = new NotebookCommon('222222', 24, 'animal');
const notebook1 = new NotebookCommon('222222', 24, 'animal');
const album0 = new AlbumForDraw('3333333', 40, 'a4');

// console.log('pen0: ', pen0);
// console.log('notebook0: ', notebook0);
// console.log('album0: ', album0);
