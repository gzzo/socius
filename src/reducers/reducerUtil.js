export const updateArrayItem = (array, itemIndex, newItem) => {
  return array.map((item, index) => {
    if(itemIndex !== index) {
      return item;
    }

    return {
      ...item,
      ...newItem
    };
  });
}
