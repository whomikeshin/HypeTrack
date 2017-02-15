var LinkedList = function () {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.push = function (object) {
  var node = {
    data: object,
    next: null,
    previous: null
  };

  var head = this.head,
      current = head,
      previous = head;

  if (!head) {
    this.head = node;
    this.length = 1;
  } else {
    while (current && current.next) {
      previous = current;
      current = current.next;
    }
    current.next = node;
    this.length += 1;
  }
};

LinkedList.prototype.remove = function (object) {
  var current = this.head;
  if (current.data === object) {
    this.head = current.next;
  } else {
    var previous = current;
        current = current.next;

    while (current.next) {
      if (current.data === object) {
        previous.next = current.next;
        current.next.previous = previous; //links them together
        break;
      }
      previous = current;
      current = current.next;
    }
    if (current.data === object) {
      previous.next = null;
    }
  }
};

LinkedList.prototype.includes = function (id) {
  var current = this.head;
  while (current) {
    if (current.data.id === id) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.find = function (id) {
  var current = this.head;
  while (current) {
    if (current.data.id === id) {
      return current.data;
    } else {
      current = current.next;
    }
  }
  return null;
};

module.exports = LinkedList;
