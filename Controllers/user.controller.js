const service = require("../service/user.service");

async function getUser(req, res){
    service.getUser().then((output) => {
        if(output.flag == 1){
            res.status(200).json({error: false,msg:"Data fetch successully.",data: output});
        }else{
            res.status(404).json({error: true,msg:"Incorect password",data: {}});
        }
    }).catch((err) => {
      res.status(500).json({error: true,msg:"Something went wrong.",data: err});
    });
  };
  
  
async function getData(req, res){
    service.getData().then((output) => {
        if(output.flag == 1){
            res.status(200).json({error: false,msg:"Data fetch successully.",data: output});
        }else{
            res.status(404).json({error: true,msg:"Incorect password",data: {}});
        }
    }).catch((err) => {
      res.status(500).json({error: true,msg:"Something went wrong.",data: err});
    });
  };
module.exports = {
    getUser
};
  