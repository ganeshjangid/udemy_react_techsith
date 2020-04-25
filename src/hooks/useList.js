import React from 'react';

function useList(initList){
    const [list, setList] = useState(initList);

    return {
        list,
        removeItem(item){
            const id = item;
            // console.log(id);
            const copyList = [...list];
            const lists = copyList.filter((val, i) => {
                return i != id;
            });
            // console.log(lists);
            return setList(lists);
        },
        saveItem(index,newVal){
                const copyInitList=[...initList];
                copyInitList[index].name=newVal;
            
        }
    }
}

export default useList;