import cookies from "js-cookie"

const auth = () => {
    const authCookie = cookies.get("devlinker_session")

    return {authCookie}
}

export default auth;