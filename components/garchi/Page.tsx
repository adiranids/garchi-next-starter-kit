// server component

import { garchi } from "@/utils/garchi"
import GarchiComponent from "./GarchiComponent"

type Props = {
    slug: string
}

export default async function Page({slug}: Props) {


  const page = await garchi.headless.getPage({
    slug,
    space_uid: "your space uid",
    mode: "draft",
  })
   
  return (
    <>
      {page.sections?.map((section, index) => (
        <GarchiComponent key={index} section={section} />
      ))}
    </>
  )
}
