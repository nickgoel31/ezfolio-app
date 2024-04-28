import { getUserById } from "@/helpers/get-user";
import { redirect } from "next/navigation";
import GeneralSettings from "../../_components/general";


const SettingsPage = async ({params}:{params:{userId:string}}) => {
    const {userId} = params;

    const user = await getUserById(userId)
    if(!user) redirect("/s")
  return (
      <>
      <GeneralSettings user={user}/>
      
      </>
  )
}

export default SettingsPage




// 