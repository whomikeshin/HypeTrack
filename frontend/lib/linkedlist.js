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

LinkedList.prototype.includes = function (key) {
  var current = this.head;
  while (current) {
    if (current.value.id === key) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

module.exports = LinkedList;
