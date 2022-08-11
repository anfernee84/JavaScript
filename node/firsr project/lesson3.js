// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } else {
//     return "Access denied, wrong password!";
//   }

//   // return (password === ADMIN_PASSWORD)? "Welcome!":"Access denied, wrong password!"
// }

// console.log(checkPassword("jqueryismyjam"));

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = (oldone, newone) => {
//   console.log((allstr = oldone.join(",") + "," + newone.join(",")).split(","));
// };

// allClients(oldClients, newClients);

// console.log(oldClients.concat(newClients));

const phrase = "sfrgjmdt ukcghnm ghaewrt";

const reverse = (sentence) => {
  let reversed = "";
  for (let i = sentence.length - 1; i >= 0; i--) {
    reversed += sentence.charAt(i);
  }
  return reversed;
};

console.log(reverse(phrase));

/**
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns
 */
function getCommonElements(array1, array2) {
  // Change code below this line
  commonArr = [];
  for (let i of array1) {
    if (array2.includes(i)) commonArr.push(i);
  }
  return commonArr;

  // Change code above this line
}

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// const langs = [
//   "java",
//   "python",
//   "delphi",
//   "c",
//   "asm",
//   "cobol",
//   "perl",
//   "fortran",
//   "lisp",
// ];
// let iter = 1;
// do {
//   console.log(`============= iterarion ${iter}=================`);
//   isSorted = true;

//   for (i = 0; i < langs.length - 1; i++) {
//     console.log(langs);
//     const current = langs[i];
//     const next = langs[i + 1];
//     console.log(`Comparing current ${current} and next ${next}`);

//     if (current > next) {
//       console.log("swapping");
//       iter += 1;
//       const temp = current;
//       langs[i] = next;
//       langs[i + 1] = temp;
//       isSorted = false;
//     }
//   }
// } while (!isSorted);
// console.log(langs);

const playlist = {
  name: "My playlist",
  rating: 5,
  tracks: ["track1", "track2", "track3"],
  //   trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length;
  },

  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

playlist.svoystvo = 5;
// console.log(Object.keys(playlist));
// console.log(playlist);

const username = "Mango";
const email = "mango@ukr.net";

const signupData = {
  username,
  email,
  [email]: 1,
};

console.log(signupData);
// playlist.getName();

playlist.changeName("2352342355");
console.log(playlist);
playlist.addTrack("Ay nane");
console.log(playlist);
playlist.updateRating(100);
console.log(playlist);
console.log(playlist.getTrackCount());

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;
let keys = Object.keys(feedback);
// console.log(keys);
for (let key of keys) {
  totalFeedback += feedback[key];
}

console.log("total feedback:", totalFeedback);

const friends = [
  { name: "Polly", online: false },
  { name: "Vasya", online: true },
  { name: "Onufriy", online: false },
  { name: "Dodik", online: true },
];
console.table(friends);

for (let friend of friends) {
  friend.newprop = 48;
  console.log(friend.online);
}

console.log(friends);
console.table(friends);

const findFriendByName = (allFriends, name) => {
  for (const friend of allFriends) {
    // console.log(friend);
    if (friend.name === name) {
      return `Found!!! ${name}`;
    }
  }
};

console.log(findFriendByName(friends, "Vasya"));
console.log(findFriendByName(friends, "Polly"));

const getAllNames = function (allFriends) {
  const names = [];
  for (let friend of allFriends) {
    names.push(friend.name);
  }
  console.log(names);
};

console.log(getAllNames(friends));

const getOnlineFriends = (allFriends) => {
  const onlineFriends = [];
  for (const friend of friends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = (allFriends) => {
  const offlineFriends = [];
  for (const friend of friends) {
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = (allFriends) => {
  const friendsByStatus = {
    online: [],
    offline: [],
  };
  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

let arr2 = [1, 2, 3, 4, 5];
let arr1 = [6, 7, 8, 9, 10];
let arr3 = ["string", "Mango", "Polly"];

console.log([...arr1, ...arr2, ...arr3]);
console.log(Math.max(...arr2));

let listA = [{ a: 1 }, { b: 2 }, { c: 3 }];

let dict1 = { 1: 10, 2: 20, 3: "Vasya" };
let dict2 = { c: "Onufriy", 1: "Nikifor", xxx: { a: "bbb" } };

// let listB = [...listA];

// console.log("a: ", listA, "b: ", listB);
// console.log(listA === listB);
// console.log(listA[0] === listB[0]);
console.log(Object.assign({}, dict1, dict2, { x: 20 }, { 1: "qwe" }));
console.log({ ...dict1, ...dict2, x: 20, 1: "qwe" });

// const myPlaylist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track1", "track2", "track3"],
//   trackCount: 3,
// };

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfTracks,
//   author = "Nikifor",
// } = myPlaylist;

const profile = {
  name: "Vasya Pupkin",
  tag: "vas",
  location: "Vasylkivska str., 1",
  avatar: "https://vasya.com/1.jpeg",
  stats: {
    followers: 23,
    views: 76,
    likes: 34,
  },
};

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = profile;

// console.log(name, tag, location, avatar, followers, views, likes);

// const autors = {
//   kiwi: 4,
//   chucha: 6,
//   vasya: 2,
//   dodik: 7,
// };

// const ratings = Object.entries(autors);
// for (const [name, rating] of ratings) {
//   // const [name, rating] = entry;
//   console.log(name, rating);
// }

// const { name, tag, location, ...restProps } = profile;

// const restProps = {
//   avatar: profile.avatar,
//   stats: profile.stats,
// };

// console.log(name, tag, location);
// console.log(restProps);

const showProfileinfo = (userProfile) => {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile;
  console.log(name, tag, location, avatar, followers, views, likes);
};

showProfileinfo(profile);

const cart = {
  items: [],
  getItems() {
    return this.items;
  },

  addItem(product) {
    for (const item of this.items) {
      if (product.name === item.name) {
        item.quantity++;
        return this.items;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };

    return this.items.push(newProduct);
  },

  removeItem(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i++) {
      const { name } = items[i];
      if (name === productName) {
        return items.splice(i, 1);
      }
    }
  },
  clear() {
    const { items } = this;
    for (let i = 0; i < items.length; i++) {
      delete items[i];
    }
  },
  countTotalPrice() {
    const { items } = this;
    sum = 0;
    items.forEach(({ price, quantity }) => {
      sum += price * quantity;
    });
    return sum;
  },

  increaseQuantity(productName) {
    const { items } = this;
    items.forEach((elem) => {
      if (elem.name === productName) {
        elem.quantity++;
      }
    });
    return items;
  },

  decreaseQuantity(productName) {
    const { items } = this;
    items.forEach((elem) => {
      if (elem.name === productName) {
        elem.quantity--;
      }
    });
    return items;
  },
};

cart.addItem({ name: "apple", price: 50 });
cart.addItem({ name: "strawberry", price: 100 });
cart.addItem({ name: "lime", price: 80 });
cart.addItem({ name: "pear", price: 45 });
cart.addItem({ name: "grape", price: 120 });

console.table(cart.getItems());
cart.removeItem("pear");
console.table(cart.getItems());
// cart.clear();
// console.table(cart.getItems());

console.table(cart.increaseQuantity("apple"));
console.table(cart.increaseQuantity("grape"));
// console.table(cart.getItems());
console.table(cart.decreaseQuantity("apple"));
// console.table(cart.getItems());
console.table(cart.addItem({ name: "lime", price: 80 }));
cart.addItem({ name: "strawberry", price: 100 });
cart.addItem({ name: "strawberry", price: 100 });
cart.addItem({ name: "strawberry", price: 100 });
console.table(cart.getItems());
console.log(cart.countTotalPrice());
