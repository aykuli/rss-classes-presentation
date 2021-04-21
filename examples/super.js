class Event {
  constructor(title, description, color, date) {
    this.title = title;
    this.description = description;
    this.color = color;
    this.date = date;
  }

  getRenderBody() {
    return `
    <h4>${this.title}</h4>
    <p>${this.description}</p>
    <p class="date">${this.date}</p>
    `;
  }

  getMarker() {
    return `
    <span class="dot dot-${this.color}"></span>
    `;
  }

  getRenderComponent() {
    return `${this.getMarker()}${this.getRenderBody()}`;
  }

  showThis() {
    console.log('Event this:', this);
    return this;
  }
}

class EventWithAuthor extends Event {
  constructor(title, description, color, date, author) {
    super(title, description, color, date);
    this.author = author;
  }
  getRenderComponent() {
    return `${super.getRenderComponent()}
    <p>Author: ${this.author}</p>
    `;
  }
  showThis() {
    console.log('super.this: ', super.this);
    console.log('this.super: ', this.super);
    console.log('EvAuth: ', super.showThis());
  }
}

const event0 = new Event(
  'Event0',
  " Yeah, and what's great about Dockers, you can use even different programing languages for different sections of your app, so. If you think of, I can run something and go, and expose a APIN point, and deploy with Docker, and my note app doesn't have anything to do with go. So its really great if you have teams that are multi versed in different programing languages.",
  'green',
  '11 April 2021'
);
// event0.showThis();
const eventDiv = document.getElementById('event');
eventDiv.innerHTML = event0.getRenderComponent();

const eventAuthor = new EventWithAuthor(
  'Event0',
  " Yeah, and what's great about Dockers, you can use even different programing languages for different sections of your app, so. If you think of, I can run something and go, and expose a APIN point, and deploy with Docker, and my note app doesn't have anything to do with go. So its really great if you have teams that are multi versed in different programing languages.",
  'red',
  '11 April 2021',
  'Aynur'
);
const eventSuper = document.getElementById('event-super');
eventSuper.innerHTML = eventAuthor.getRenderComponent();
// eventAuthor.showThis();
