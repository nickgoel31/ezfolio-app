import { cookies } from "next/headers";

const auth = () => {
    const authCookie = cookies().get("devlinker_session")

    return {authCookie}
}

export default auth;