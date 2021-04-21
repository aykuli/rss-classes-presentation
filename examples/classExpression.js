const Widget = class {
  constructor(type) {
    this.isLoading = false;
    this.type = type;
    this.data = null;
  }

  async fetchData() {
    this.isLoading = true;

    try {
      const url = `https://jsonplaceholder.typicode.com/${this.type}`;
      const response = await fetch(url);
      const json = await response.json();
      this.data = json;
    } catch (e) {
      console.error(e);
    } finally {
      this.isLoading = false;
    }
  }

  getData() {
    return this.isLoading ? `${this.type} is still loading` : this.data;
  }
};

const widgetUsers = new Widget('users');
widgetUsers.fetchData();
setTimeout(() => {
  console.log(widgetUsers.getData());
}, 1000);
