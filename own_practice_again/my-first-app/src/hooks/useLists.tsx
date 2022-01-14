import React, { useState } from "react";

function useLists(init: any) {
  const [lists, setLists] = useState(init);
  return {
    lists,
    remove(item: string) {
      const newfilterList = lists.filter((v: any) => v.name !== item);
      setLists(newfilterList);
    },
    save(index: number, newItem: string) {
      const copyList = [...lists];
      copyList[index].name = newItem;
      setLists(copyList);
    },
  };
}

export default useLists;
