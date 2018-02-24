import Axial from 'axial';

const ESC_KEY = 27;
const ENTER_KEY = 13;

let $ = {
  items: [],
  filter: 'all',
  edit: null
};

Axial.token = '$';

class TodoApp extends Axial.Axis {
  init () {
    this.load();

    const router = new Router({
      '/': () => this.set('filter', 'all'),
      '/active': () => this.set('filter', 'active'),
      '/completed': () => this.set('filter', 'completed')
    }).init();

    this.__axial._listen(this.save);
  }

  ui = {
    onHeaderKeyUp (e) {
      const input = e.target;
      if (e.keyCode === 13) {
        // take trimmed value
        const value = input.value.trim();
        if (value.length) {
          // add it if it is not empty, clear input after
          this.newItem(value);
          input.value = '';
        }
      } else if (e.keyCode === 27) {
        // clear input field
        input.value = '';
      }
    },

    onItemKeyUp (e) {
      if (e.keyCode === ESC_KEY) {
        // cancel edit
        this.set('edit', null);
      } else if (e.keyCode === ENTER_KEY) {
        // accept edit
        const item = $.edit;
        this.set($ => {
          item.label = e.target.value.trim();
          $.edit = null;
        });
      }
    },
  
    onItemDoubleClick (e, input, item) {
      this.set($ => {
        // set editing item, clear field
        $.edit = item;
        input.value = item.label;
        // focus on next UI tick
        setTimeout(() => {
          input.focus();
          input.select();
        }, 0);
      });
    },

    onItemBlur (e) {
      const item = $.edit;
      item.label = e.target.value.trim();
      this.set('edit', null);
    }
  }

  load () {
    const data = localStorage['todomvc-axial'];
    if (data) {
      $ = this.$ = JSON.parse(data);
    }
  }

  save (e) {
    localStorage['todomvc-axial'] = JSON.stringify($);
    console.log(e);
  }

  newItem (label = '') {
    const item = {
      id: Date.now(),
      label: label,
      completed: false
    };
    this.set($ => $.items.push(item));
  }

  get filteredItems () {
    if ($.filter === 'all') {
      return $.items;
    } else if ($.filter === 'active') {
      return this.uncompleted;
    } else {
      return this.completed;
    }
  }

  get completed () {
    return $.items.filter(item => item.completed);
  }

  get uncompleted () {
    return $.items.filter(item => !item.completed);
  }

  get hasCompleted () {
    return this.completed.length > 0;
  }

  get isAllCompleted () {
    return this.completed.length === $.items.length;
  }

  complete (item) {
    this.set(() => item.completed = !item.completed);
  }

  destroy (item) {
    const index = $.items.indexOf(item);
    this.set($ => $.items.splice(index, 1));
  }

  clearCompleted () {
    this.set($ => $.items = this.uncompleted);
  }

  filter (type) {
    return $.filter === type ? 'selected' : null;
  }

  toggleAll (bool) {
    this.set($ => $.items.forEach(item => item.completed = bool));
  }
};

TodoApp.$ = $;

export default TodoApp;