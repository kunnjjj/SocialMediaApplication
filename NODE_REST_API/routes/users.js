const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
// const { findById } = require("../models/User");
//update user

router.put("/:id", async (req, res) => {
  //   console.log(req.params.id);
  if (req.body.userId === req.params.id || req.body.isAdmin != null) {
    // console.log("hello");
    if (req.body.password != null) {
      // console.log("hello again");
      try {
        const salt = await bcrypt.genSalt(10);
        console.log("salt", salt);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);

        req.body.password = await bcrypt.hash(req.body.password, salt);
        // console.log("req.body.password", hashedPassword);
      } catch (e) {
        res.status(400).json(e);
      }
    }

    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });

      res.status(200).json("Account has been updated");
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    return res.status(403).json("you can only update your accound");
  }
});

//delete
router.delete("/:id", async (req, res) => {
  // console.log(req.params.id);
  if (req.body.userId === req.params.id || req.body.isAdmin != null) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("Account has been deleted");
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    return res.status(403).json("you can only delete your accound");
  }
});

//get a user
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.findById(req.params.id);
    // console.log("user is",user);
    const { password, createdAt, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (e) {
    console.log("err: ");
    res.status(500).json(e);
  }
});

// follow

router.put("/:id/follow", async (req, res) => {
//   console.log("called");
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { following: req.params.id } });
        
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you already follow this user");
      }
    } catch (e) {
      res.status(500).json(e);
    }
  } else {
    res.status(403).json("you cant follow/ unfollow yourself");
  }
});

// unfollow


router.put("/:id/unfollow", async (req, res) => {
    // console.log("called");
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({ $pull: { followers: req.body.userId } });
          await currentUser.updateOne({ $pull: { following: req.params.id } });
          res.status(200).json("user has been unfollowed");
        } else {
          res.status(403).json("you don't follow this user");
        }
      } catch (e) {
        res.status(500).json(e);
      }
    } else {
      res.status(403).json("you can't follow/ unfollow yourself");
    }
  });

router.p;

router.get("/", (req, res) => {
  res.send("user route");
});

module.exports = router;

// {
// 620f21f8a3418dbf41afdbe9
//     "username": "abcde",
//     "email": "abcde@egmail.com",
//     "password": "abcde12345"
// }

// {
// 620f2222a06eb326dd7d918d
//     "username": "pqrst",
//     "email": "pqrst@egmail.com",
//     "password": "pqrst12345"
// }
