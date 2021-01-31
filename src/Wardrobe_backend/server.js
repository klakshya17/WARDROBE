var express = require("express");
var mongoose = require("mongoose");
var Schema = require("./schema.js");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const uri =
  "mongodb+srv://user1:user1@cluster0.tclsn.mongodb.net/Wardrobe?retryWrites=true&w=majority";
mongoose.set("useFindAndModify", false);
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

var app = express();
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("./demo");
  Schema.Profile.find()
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
  Schema.Wishlist.find()
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
  Schema.ShoppingBag.find()
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
  Schema.Item.find()
    .then((docs) => {
      console.log(docs);
    })
    .catch((err) => {
      console.log(err);
    });
});

var create = function (obj) {
  var wish = new Schema.Wishlist(obj);
  wish.save();
  var shop = new Schema.ShoppingBag(obj);
  shop.save();
  var order = new Schema.Order(obj);
  order.save();
};
app.post("/", urlencodedParser, function (req, res) {
  var newUser = new Schema.Profile(req.body);
  Schema.Profile.find({ email: newUser.email }).then((doc) => {
    if (doc.length === 0) {
      newUser
        .save()
        .then((doc) => {
          var obj = {
            user_id: doc._id,
            list: [],
          };
          create(obj);
        })
        .catch((err) => {
          console.error(err);
        });
      res.send(req.body);
    } else {
      res.send("email already exists");
    }
  });
});
app.get("/wishlist", function (req, res) {
  res.render("./wishlist");
});
app.get("/wishlist-del", function (req, res) {
  res.render("./wishlist-del");
});

app.post("/wishlist", urlencodedParser, function (req, res) {
  Schema.Profile.find({ name: req.body.name })
    .then((doc) => {
      if (doc.length === 0) {
        res.send("No Such name");
      } else {
        Schema.Wishlist.find({ user_id: doc[0]._id })
          .then((doc) => {
            console.log(doc[0]);
            console.log(req.body.item);
            var list = doc[0].list;
            list.push(req.body.item);
            console.log(list);
            Schema.Wishlist.update(
              { _id: doc[0]._id },

              { list: list },

              function (err, data) {
                if (err) {
                  console.log(err);
                } else {
                  res.send(data);
                  console.log("Data updated!");
                }
              }
            );
          })
          .then((doc) => {
            console.log(doc);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/wishlist-del", urlencodedParser, function (req, res) {
  console.log(req.body);
  Schema.Profile.find({ name: req.body.name })
    .then((doc) => {
      console.log(doc);
      if (doc.length === 0) {
        res.send("No Such name");
      } else {
        Schema.Wishlist.find({ user_id: doc[0]._id }).then((doc) => {
          console.log(doc);
          list = doc[0].list;
          console.log(doc[0], "YO");
          var newlist = list.filter(function (e) {
            return e !== req.body.item;
          });
          console.log(list, newlist);
          Schema.Wishlist.update(
            { _id: doc[0]._id },
            { list: newlist },

            function (err, data) {
              if (err) {
                console.log(err);
              } else {
                res.send(data);
                console.log("Data updated!");
              }
            }
          )
            .then((doc) => {
              console.log(doc);
            })
            .catch((err) => {
              console.error(err);
            });
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
app.listen(3000);
