let getdata = (req, res) => {
  let copy = {
    name: "Classmate",
    price: 100,
  };
  let pen = {
    name: "Flair",
    price: 10,
  };
  let Anything = {
    name: "Purchase Anything",
    price: "Depends on the product",
  };

  // console.log(req);

  let id = req.params.id;
  if (id == 1) {
    res.status(200).json({
      data: copy,
    });
  } else if (id == 2) {
    res.status(200).json({
      data: pen,
    });
  } else {
    res.status(200).json({
      data: Anything,
    });
  }
};

let data = (req, res) => {
  console.log(req.query);
  console.log(req.query.title);
  res.status(200).json({
    data: "Data Received",
  });
};

let register = (req, res) => {
  console.log(req, "<===Body");
  console.log(req.body.name, "<===Name");
  console.log(req.body.age, "<===Age");
  console.log(req.body.number, "<===Number");
  res.status(200).json({
    data: "Data Received",
  });
};

let registerform = (req, res) => {
  console.log(req, "<===Body");
  const { name, e_mail, password, number } = req.body;
  console.log(name, e_mail, password, number, "<===Record");

  if (!name || !e_mail || !password || !number) {
    res.status(400).json({
      error: "Please fill all the fields",
    });
  }
  res.status(200).json({
    data: "Data Received",
  });
};

let getname = (req, res) => {
  let arr = [
    { id: 1, value: "Ram" },
    { id: 2, value: "Jay" },
    { id: 3, value: "Om" },
    { id: 4, value: "Mayur" },
    { id: 5, value: "Seenu" },
  ];

  let id = req.params.id;
  let i = 0;
  // while (i < arr.length) {
  //     if (arr[i].id == id) {
  //         res.status(200).json({
  //             data : arr[i]
  //         })
  //     }
  //     i++;
  // }

  for (i; i < arr.length; i++) {
    if (arr[i].id == id) {
      res.status(200).json({
        message: "Data Found",
        data: arr[i],
      });
    } else {
      res.status(200).json({
        error: "Data Not Found",
      });
    }
    break;
  }
};

module.exports = {
  getdata,
  data,
  register,
  registerform,
  getname,
};
