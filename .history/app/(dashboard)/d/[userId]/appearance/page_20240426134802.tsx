import { getAllColorSchemes, getColorSchemeOfUserPage } from '@/actions/colorscheme/get-colorscheme';
import { getAllFonts, getFontOfUserPage } from '@/actions/font/get-font';
import { getCurrentUser, getUserById } from '@/helpers/get-user';
import { redirect } from 'next/navigation';
import React from 'react'
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import ThemeSelect from '@/app/(dashboard)/_components/appearance/theme-select';
import FontSelect from '@/app/(dashboard)/_components/appearance/font-select';
import LayoutSelect from '@/app/(dashboard)/_components/appearance/layout-select';
import { getAllLayouts, getLayoutOfUserPage } from '@/actions/pagelayout/get-layout';

const AppearancePage = async ({params}:{params:{userId:string}}) => {

  const user = await getUserById(params.userId)
  if(!user) redirect("/login")
  const currentUser = await getCurrentUser()
  if(!currentUser) redirect("/login")

  if(user.id !== currentUser.id){
      redirect("/d/redirect")
  }
  const userPage = await getUserpageByUserId(user.username)
  if(!userPage) {
      redirect("/create")
  }

    const currentColorScheme = await getColorSchemeOfUserPage(userPage.colorSchemeId)
    if(!currentColorScheme) return  <div>Error while fetching data</div>

    const currentFont = await getFontOfUserPage(userPage.fontId)
    if(!currentFont) return  <div>Error while fetching data</div>

    const currentLayout = await getLayoutOfUserPage(userPage.layoutId)
    if(!currentLayout) return  <div>Error while fetching data</div>

    const schemes = await getAllColorSchemes()
    const fonts = await getAllFonts()
    const layouts = await getAllLayouts()

    function reloadIframePreview(){
      document.getElementById('YOUR IFRAME').contentDocument.location.reload(true);
    }

  return (
    <div className=''>
        <div className='flex gap-4'>
          <div className='flex-[2] space-y-5'>
            <div className='flex flex-col space-y-1'>
                <h2 className='text-3xl font-semibold'>Appearance of your page</h2>
                <p className='text-muted-foreground font-medium text-sm'>
                    Customize the appearance and layout of this page to fit your needs.
                </p>
            </div>

            <ThemeSelect schemes={schemes} currentScheme={currentColorScheme} userPageId={userPage.id}/>
            <FontSelect fonts={fonts} currentFont={currentFont} userPageId={userPage.id} fontWeight={userPage.fontWeight} />
            <LayoutSelect layouts={layouts} currentLayout={currentLayout} userPageId={userPage.id}/>

            <p className='text-center font-medium text-lg text-muted-foreground pt-4'>More customizations coming soon!</p>
          </div>

          <div className='flex-[1] border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <iframe id="preview-iframe" src={`https://www.ezfolio.social/${user.username}`} className='border-0 w-full h-full' name="myiFrame" scrolling="no"></iframe>
          </div>
        </div>
    </div>
  )
}

export default AppearancePage