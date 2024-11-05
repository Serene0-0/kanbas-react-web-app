import { useSelector } from "react-redux";

export default function RoleProtected(
    { allowedRole, children } : {allowedRole : string, children : any}
    ) {
    const { currentUser } = useSelector((state : any) => state.accountReducer);
  
    if (currentUser && currentUser.role === allowedRole) {
      return <>{children}</>;
    }
  
    return null;
  }