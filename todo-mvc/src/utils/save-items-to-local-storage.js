import { entries, query, ref } from '@dws/muster';

export default function saveItemsToLocalStorage(graph) {
  graph
    .resolve(
      query(
        ref('itemList'),
        entries({
          id: true,
          label: true,
          completed: true,
        }),
      ),
    )
    .subscribe((items) => {
      localStorage.setItem('items', JSON.stringify(items));
    });
  return graph;
}
