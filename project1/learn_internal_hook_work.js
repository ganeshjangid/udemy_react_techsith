

function useState(init){
    let _val=init;

    return [
        _val,
        (newVal)=>{
            _val=newVal;
        }   
    ];
}

const [age,setAge]=useState(21);

console.log(age);
setAge(age);
console.log(age);
