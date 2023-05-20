import axios from "axios";

const getData = async function getData(user_id) {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

    // console.log(users, posts);
    let userInfo = {User: users, Posts: posts}
    console.log(userInfo);
};

export default getData;