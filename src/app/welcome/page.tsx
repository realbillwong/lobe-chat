import { isMobileDevice } from '@/utils/responsive';

import DesktopPage from './(desktop)';
import LandingPage from './(landing)';
import MobilePage from './(mobile)';

const Page = () => {
  const mobile = isMobileDevice();

  // const Page = mobile ? MobilePage : DesktopPage;
  const Page = LandingPage;

  return <Page />;
};

export default Page;
