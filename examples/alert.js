class Alert {
  constructor(type, title, msg) {
    this.type = type;
    this.title = title;
    this.msg = msg;
    this._isBtnExists = false;
  }
  addCloseBtn() {
    this._isBtnExists = true;
  }

  getHTML() {
    return `
      <div class="alert ${this.type === 'success' ? 'alert-success' : 'alert-error'}">
      <h4>${this.title}</h4>
      <p>${this.msg}</p>
      ${this._isBtnExists ? '<button>Submit</button>' : ''}
      </div>`;
  }
}

class AlertWitOpener extends Alert {
  getHTML() {
    return `
    <details  class="alert ${this.type === 'success' ? 'alert-success' : 'alert-error'}">
    <summary>${this.title}</summary>
    ${this.msg}
    ${this._isBtnExists ? '<button>Submit</button>' : ''}
  </details>
  `;
  }
}

const alertSuccess = new Alert('success', 'Little title', 'Little msg');
const aLotOfTxt =
  'As those light red bars indicate, Rob has set up some display: grid; columns to align elements in the article to those axes. A classic “editorial layout” indeed. But there really is no good mechanism to place that image onto the grid and maintain the wrapping. By placing both the content and the image into separate grid items, you don’t get the wrapping. You can use float, but that’s not using the grid.';
const alertBigTxt = new AlertWitOpener('error', 'Big title', aLotOfTxt);
alertBigTxt.addCloseBtn();

const alertDiv = document.getElementById('alert');
const alertBigDiv = document.getElementById('alert-big');

alertDiv.innerHTML = alertSuccess.getHTML();
alertBigDiv.innerHTML = alertBigTxt.getHTML();
