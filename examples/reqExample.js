class RequestQueue {
  queue = []; // {url: string, promise, resolve, reject}
  isReqInWork = false;

  addToQueue(request, url) {
    const reqPromise = new Promise((resolve, reject) => {
      const filtered = this.queue.filter(item => item.url === url);
      if (filtered.length) return;

      this.queue.push({ request, resolve, reject, url });
      this.removeFromQueue();
    });
    return reqPromise;
  }

  removeFromQueue() {
    if (this.isReqInWork) return;
    const item = this.queue.shift();
    if (!item) return false;

    try {
      this.isReqInWork = true;
      item
        .request()
        .then(value => {
          item.resolve(value);
        })
        .catch(err => {
          item.reject(err);
        })
        .finally(() => {
          this.isReqInWork = false;
          this.removeFromQueue();
        });
    } catch (err) {
      this.isReqInWork = false;
      item.reject(err);
      this.removeFromQueue();
    }
  }
}
