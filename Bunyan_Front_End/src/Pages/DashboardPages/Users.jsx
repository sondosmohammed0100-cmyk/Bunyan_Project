import { Outlet } from "react-router-dom";
function Users(){
    return(
        <section className="py-4">
        
        <Outlet/>
        
        </section>
    )
};
export default Users;