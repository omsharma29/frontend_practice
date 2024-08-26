import AddOn from './component/AddOn';

export const Lables = ({ isMonthly }: { isMonthly: Boolean }) => {
  return (
    <div className="max-w-screen-md w-full mx-auto px-4 py-10">
      <div className="text-center font-serif font-bold text-darkgrey text-[2rem] mb-10">
        Super charge your work with add-ons
      </div>
      <div className="space-y-6">
        <AddOn
          title={isMonthly ? 'Accounting & Tax Assistant' : 'Collaborators'}
          Discription={
            isMonthly
              ? 'Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.'
              : 'Invite other users to specific projects for limited access and functionality.'
          }
          value={isMonthly ? '$100/year' : 'Free'}
        />
        <AddOn
          title="Partners"
          Discription="Invite other users for full account access and company management."
          value={isMonthly ? '$90/year' : '$9/month'}
        />
        <AddOn
          title="Bonsai Tax"
          Discription="Track expenses, identify write-offs, and estimate quarterly taxes easily."
          value={isMonthly ? 'Free' : '$10/month'}
        />
      </div>
    </div>
  );
};
