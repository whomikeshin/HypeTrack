var Link = function (key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
};

var LinkedList = function () {
  this.head = new Link();
  this.tail = new Link();
  this._link(this.head, this.tail);
};

LinkedList.prototype._link = function (link1, link2) {
  link1.next = link2;
  link2.prev = link1;
};

LinkedList.prototype.empty = function () {
  return this.head.next === this.tail;
};

LinkedList.prototype.first = function () {
  if (this.empty()) {
    return undefined;
  }

  return this.tail.prev;
};

LinkedList.prototype.push = function (key, value) {
  var link = new Link(key, value);
  var tail = this.tail;
  var prev = this.tail.prev;

  this._link(prev, link);
  this._link(link, tail);

  return link;
};

LinkedList.prototype.shift = function () {
  return this.remove(this.first());
};

LinkedList.prototype.remove = function (link) {
  this._link(link.prev, link.next);

  link.next = null;
  link.prev = null;

  return link;
};

var Cache = function (maxLength) {
  this.list = new LinkedList();
  this.keys = {};
  this.max = maxLength;
  this.length = 0;
};

Cache.prototype.includes = function (key) {
  return !!this.keys[key];
};

Cache.prototype.remove = function (key) {
  link = this.list.remove(this.keys[key]);
  delete this.keys[key];
  this.length --;
  return link;
};

Cache.prototype.add = function (key, value) {
  if (this.includes(key)) {
    this.remove(key);
  }

  var link = this.list.push(key, value);
  this.keys[key] = link;
  this.length ++;

  if (this.length > this.max) {
    this._eject();
    this.length --;
  }

  return link;
};

Cache.prototype._eject = function () {
  var link = this.list.shift();
  delete this.keys[link.key];
};

module.exports = Cache;
