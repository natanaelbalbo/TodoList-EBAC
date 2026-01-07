import { atom } from "recoil";


const userState = atom({
    key: "userState",
    default: {
        isLoggedIn: false,
        userInfo: null,
    },
});

export default userState;