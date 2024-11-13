async function getUser(){
    try{
        var output = {};
        if(0){
            output = {flag:1, id: 1, firs_name: "John", last_name: "Doe"};
        }else{
            output = {flag:2};
        }
        return output;
    }catch(err){
        throw err;
    }
  };
  
  async function getData(){
    try{
        var output = {};
        if(0){
            output = {flag:1, id: 1, firs_name: "John", last_name: "Doe"};
        }else{
            output = {flag:2};
        }
        return output;
    }catch(err){
        throw err;
    }
  };
  
  

module.exports = {
    getUser,
    getData
};
  