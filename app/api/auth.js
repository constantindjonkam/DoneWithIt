import client from "./client";

const logging = (email, password) => client.post("/auth", { email, password });

export default { logging };
