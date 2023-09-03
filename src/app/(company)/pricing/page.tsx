import NavBar, { NavBarType } from "@/components/navbar";

export default function Pricing() {
    return (
        <NavBar dashboard={false} aboutus={false} contactus={false} pricing={true} services={false}/>
    )
}