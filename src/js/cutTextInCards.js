const content = {
  size: 17,
  newsContent: document.getElementsByClassName('products__link'),
  cutText: function () {
    for (let t = 0; t < this.newsContent.length; t++) {
      const e = this.newsContent[t].textContent;
      e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + '...');
    }
  },
};

const blogNews = {
  size: 50,
  newsContent: document.getElementsByClassName('item__title'),
  cutText: function () {
    for (let t = 0; t < this.newsContent.length; t++) {
      const e = this.newsContent[t].textContent;
      e.length > this.size && (this.newsContent[t].innerHTML = e.slice(0, this.size) + '...');
    }
  },
};

content.cutText();
blogNews.cutText();
