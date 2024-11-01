import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: {
  isTextHidden?: boolean;
}) => (
  <div className="flex items-center text-xl font-semibold">
    <svg width="30px" height="30px" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15.8294V15.75V8C4 7.69114 4.16659 7.40629 4.43579 7.25487L4.45131 7.24614L11.6182 3.21475L11.6727 3.18411C11.8759 3.06979 12.1241 3.06979 12.3273 3.18411L19.6105 7.28092C19.8511 7.41625 20 7.67083 20 7.94687V8V15.75V15.8294C20 16.1119 19.8506 16.3733 19.6073 16.5167L12.379 20.7766C12.1451 20.9144 11.8549 20.9144 11.621 20.7766L4.39267 16.5167C4.14935 16.3733 4 16.1119 4 15.8294Z" stroke="#323232" stroke-width="2"/>
      <path d="M12 21V12" stroke="#323232" stroke-width="2"/>
      <path d="M12 12L4 7.5" stroke="#323232" stroke-width="2"/>
      <path d="M20 7.5L12 12" stroke="#323232" stroke-width="2"/>
    </svg>
    {!props.isTextHidden && AppConfig.name}
  </div>
);
