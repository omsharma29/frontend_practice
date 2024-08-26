import AddOn from './component/AddOn'

export const Lables = () => {
  return (
    <div className=''>

      <div className='relative left-[25rem] font-serif font-bold text-darkgrey text-[2rem] pt-10 '>Super charge your work with add-ons</div>
      <AddOn title={'Collabrators'} Discription={'Invite other users to specific projects for limited access and functionality.'} value={'Free'} />
      <AddOn title={'Partners'} Discription={'Invite other users for full account access and company management.'} value={'$9'} />
      <AddOn title={'Bonsai Tax'} Discription={'Track expenses, identify write-offs, and estimate quarterly taxes easily.'} value={'$10'} />




    </div>
  )
}
