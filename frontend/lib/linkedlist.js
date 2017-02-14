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


module.exports = LinkedList;
