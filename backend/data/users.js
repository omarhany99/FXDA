import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Omar",
    email: "omar@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "npc",
    email: "npc@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "npc",
    email: "npc22@email.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default users;
