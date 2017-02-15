var LinkedList = function () {
  this.head = null;
  this.length = 0;
};

LinkedList.prototype.push = function(val) {
  var node = {
    value: val,
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

LinkedList.prototype.remove = function (val) {
  var current = this.head;
  if (current.value === val) {
    this.head = current.next;
  } else {
    var previous = current;
        current = current.next;

    while (current.next) {
      if (current.value === val) {
        previous.next = current.next;
        current.next.previous = previous; //links them together
        break;
      }
      previous = current;
      current = current.next;
    }
    if (current.value === val) {
      previous.next = null;
    }
  }
};

LinkedList.prototype.includes = function (id) {
  var current = this.head;
  while (current) {
    if (current.value.id === id) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.find = function (id) {
  var current = this.head;
  debugger
  while (current) {
    if (current.value.id === id) {
      return current.value;
    } else {
      current = current.next;
    }
  }
  return null;
};

module.exports = LinkedList;
