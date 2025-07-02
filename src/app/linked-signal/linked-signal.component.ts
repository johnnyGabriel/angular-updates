import { Component, linkedSignal, signal } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  list = signal([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  selectedItemLinked = linkedSignal<Item[], Item>({
    source: this.list, 
    computation: (source, previous) => 
      source[(previous?.value?.id || 1) -1]
  });

  selectedItem = signal(this.list()[0]);

  selectItem(index: number) {
    this.selectedItemLinked.set(this.list()[index]);
    this.selectedItem.set(this.list()[index]);
  }

  update() {
    this.list.update(items => {
      return items.map((item, i) => ({ ...item, name: `${item.name}${i++}` }));
    });
  }

}
